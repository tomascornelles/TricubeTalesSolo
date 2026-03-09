let state = { deck: [], drawn: [], stats: { v: 0, l: 0 }, lang: 'en', adventureStarted: false, isGameOver: false };

function setLang(l) { state.lang = l; translateUI(); save(); }

function translateUI() {
    const d = i18n[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (d[k]) el.innerText = d[k];
    });
    document.getElementById('lang-dropdown').value = state.lang;
    if(state.drawn.length > 0) processLogic(state.drawn[state.drawn.length-1].card, ['♥','♦'].includes(state.drawn[state.drawn.length-1].card.s));
    renderHistory();
}

function save() { localStorage.setItem('tricube_v5_en_default', JSON.stringify(state)); }
function load() {
    const saved = localStorage.getItem('tricube_v5_en_default');
    if (saved) { 
        state = JSON.parse(saved); 
        if(state.adventureStarted) {
            document.getElementById('init-scene-btn').classList.add('hidden');
            document.getElementById('card-content-wrapper').classList.remove('hidden');
            document.getElementById('reset-button').classList.remove('hidden');
            document.getElementById('challenge-content').classList.remove('hidden');
        }
        if(state.isGameOver) showEndScreen();
        translateUI();
    } else { initDeck(); }
}

function openModal(id, titleKey = "", body = "") {
    const d = i18n[state.lang];
    if(titleKey) document.getElementById('modal-title').innerText = d[titleKey] || titleKey;
    if(body) document.getElementById('modal-body').innerHTML = body;
    document.getElementById(id).showModal();
}
function closeModal(id) { document.getElementById(id).close(); }

function startAdventure() {
    state.adventureStarted = true; state.isGameOver = false;
    document.getElementById('init-scene-btn').classList.add('hidden');
    document.getElementById('card-content-wrapper').classList.remove('hidden');
    document.getElementById('reset-button').classList.remove('hidden');
    document.getElementById('challenge-content').classList.remove('hidden');
    drawCard();
}

function drawCard() {
    if (state.deck.length === 0 || state.isGameOver) return;
    const el = document.getElementById('card-icon');
    el.classList.add('shuffling');
    let counter = 0;
    const anim = setInterval(() => {
        const rs = ['♠', '♣', '♥', '♦'];
        el.innerText = (Math.floor(Math.random() * 9) + 2) + rs[Math.floor(Math.random() * 4)];
        if(++counter > 8) { clearInterval(anim); el.classList.remove('shuffling'); executeDraw(); }
    }, 50);
}

function executeDraw() {
    const card = state.deck.pop();
    state.drawn.push({ card, result: null });
    const isRed = ['♥','♦'].includes(card.s);
    const el = document.getElementById('card-icon');
    el.innerText = `${card.v}${card.s}`;
    el.className = 'card-display ' + (isRed ? 'suit-red' : 'suit-black');
    processLogic(card, isRed);
    if (checkFinalCondition()) document.getElementById('last-scene-msg').classList.remove('hidden');
    save();
}

function processLogic(card, isRed) {
    const d = i18n[state.lang];
    const desc = document.getElementById('challenge-desc');
    const bc = document.getElementById('action-buttons');
    const bs = document.getElementById('special-buttons');
    const tb = document.getElementById('twist-btn');
    bc.classList.add('hidden'); bs.classList.add('hidden'); tb.classList.add('hidden');

    if (['J', 'Q', 'K'].includes(card.v)) {
        let p = card.v === 'K' ? d.plot_main : (card.v === 'Q' ? d.plot_pri : d.plot_sec);
        desc.innerHTML = `<strong>${p}</strong>.<br>${isRed ? d.eff_pos : d.eff_neg}`;
        bs.classList.remove('hidden');
    } else if (card.v === 'A' || card.v === 'Joker') {
        desc.innerText = d.twist_event;
        bs.classList.remove('hidden'); tb.classList.remove('hidden');
    } else {
        bc.classList.remove('hidden');
        const n = parseInt(card.v);
        let trait = n <= 4 ? d.trait_agile : (n <= 7 ? d.trait_strong : d.trait_crafty);
        let diff = [2, 5, 8].includes(n) ? "4+" : ([3, 6, 9].includes(n) ? "5+" : "6+");
        desc.innerHTML = `${d.challenge} <strong>${trait}</strong> (${diff})`;
    }
}

function resolve(win) {
    const lastIdx = state.drawn.length - 1;
    state.drawn[lastIdx].result = win;
    if (win) state.stats.v++; else state.stats.l++;
    renderHistory();
    if (checkFinalCondition()) { state.isGameOver = true; showEndScreen(); } else { drawCard(); }
    save();
}

function checkFinalCondition() {
    const ch = state.drawn.filter(d => !isNaN(d.card.v));
    if (ch.length >= 9) return true;
    const suits = {};
    ch.forEach(d => suits[d.card.s] = (suits[d.card.s] || 0) + 1);
    const counts = Object.values(suits);
    if (counts.some(c => c >= 5)) return true;
    if (counts.filter(c => c >= 3).length >= 1 && counts.filter(c => c >= 2).length >= 3) return true;
    return false;
}

function showEndScreen() {
    const d = i18n[state.lang];
    document.getElementById('action-buttons').classList.add('hidden');
    document.getElementById('special-buttons').classList.add('hidden');
    document.getElementById('challenge-desc').classList.add('hidden');
    document.getElementById('last-scene-msg').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
    document.getElementById('final-stats').innerHTML = `${d.wins}: <strong>${state.stats.v}</strong> | ${d.losses}: <strong>${state.stats.l}</strong>`;
}

function rollManualTable(key, titleKey) {
    const list = manualTables[key];
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const res = list[((d1-1)*6) + (d2-1)];
    openModal('modal-info', titleKey, `<span class="modal-dice">${d1}, ${d2}</span><br><strong>${res}</strong>`);
}

function rollTwist(genre, labelKey) {
    const d = i18n[state.lang];
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const ideas = twistIdeas[genre];
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    closeModal('modal-twist-choice');
    openModal('modal-info', labelKey, `<span class="modal-dice">${d1}, ${d2}</span><br><span class="twist-idea"><strong>${d.idea_label}:</strong> ${idea}</span>`);
}

function openTwistModal() { openModal('modal-twist-choice'); }
function rollFantasyName() { const p = names.pre[Math.floor(Math.random()*6)], s = names.suf[Math.floor(Math.random()*6)]; openModal('modal-info', "gen_name", `<strong>${p}${s}</strong>`); }

function rollOracle(target) {
    const d = i18n[state.lang];
    const r1 = Math.floor(Math.random() * 6) + 1, r2 = Math.floor(Math.random() * 6) + 1;
    let res = r1 >= target ? "<strong>YES</strong>" : "<strong>NO</strong>";
    if (r2 <= 2) res += " But..."; if (r2 >= 5) res += " And...";
    openModal('modal-info', "oracle_title", res);
}

function rollDice(n) {
  const results = [];
  for (let i = 0; i < n; i++) results.push(Math.floor(Math.random() * 6) + 1);
  openModal('modal-info', "dice_title", `<kbd class="result-dice">${results.join('</kbd> <kbd class="result-dice">')}</kbd>`);
}

function drawSingleCard() {
    const s = ['♠', '♣', '♥', '♦'], v = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    deck = []; s.forEach(suit => v.forEach(val => deck.push({v: val, s: suit})));
    deck.push({v: 'Joker', s: ''});
  const res = deck[Math.floor(Math.random() * deck.length)];
  openModal('modal-info', "card", `<kbd class="result-card ${res.s}">${res.v}${res.s}</kbd>`);
}

function showResetConfirm() { openModal('modal-confirm'); }
function initDeck() {
    const s = ['♠', '♣', '♥', '♦'], v = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    state.deck = []; s.forEach(suit => v.forEach(val => state.deck.push({v: val, s: suit})));
    state.deck.push({v: 'Joker', s: ''});
    state.drawn = []; state.stats = { v: 0, l: 0 }; state.adventureStarted = false; state.isGameOver = false;
    shuffle(state.deck); save(); location.reload();
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }
function renderHistory() {
    const h = document.getElementById('card-history'); h.innerHTML = "";
    [...state.drawn].reverse().forEach(item => {
        if (['J', 'Q', 'K', 'A', 'Joker'].includes(item.card.v)) return;
        const span = document.createElement('span');
        const isRed = ['♥','♦'].includes(item.card.s);
        span.className = `hist-item ${isRed ? 'suit-red' : 'suit-black'} ${item.result === false ? 'hist-fail' : ''}`;
        span.innerText = `${item.card.v}${item.card.s}`;
        h.appendChild(span);
    });
}
window.onload = load;
