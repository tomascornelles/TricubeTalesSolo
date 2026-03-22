let state = { 
  deck: [], 
  drawn: [], 
  currentCard: null,
  stats: { v: 0, l: 0 }, 
  lang: 'en', 
  adventureStarted: false, 
  isGameOver: false,
  epicTwist: false,
  pcs: [],
  currentTab: 'generators-section'
};

function setLang(l) { state.lang = l; translateUI(); save(); }

function translateUI() {
  const d = i18n[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (d[k]) {
    if (el.tagName === 'INPUT') el.placeholder = d[k]; else el.innerText = d[k];
    }
  });
  document.getElementById('lang-dropdown').value = state.lang;
  if(state.drawn.length > 0 && state.currentCard) processLogic(state.currentCard.card, ['♥','♦'].includes(state.currentCard.card.s));
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
      document.getElementById('log-area').classList.remove('hidden');
      document.getElementById('log-content').innerText = state.log || '';
      if (state.currentCard) {
      const card = state.currentCard.card;
      const isRed = ['♥','♦'].includes(card.s);
      processLogic(card, isRed);
      } else {
        document.getElementById('card-content-wrapper').classList.add('hidden');
        document.getElementById('draw-new-card').classList.remove('hidden');
      }
    }
    if(state.isGameOver) showEndScreen();
    translateUI();
  } else { initDeck(); }

  loadQuests();
  renderPCList();
  loadSelectedPC();
  setupPCEventListeners();
  showTab(state.currentTab);
}

setInterval(() => {
  if(JSON.stringify(state) !== localStorage.getItem('tricube_v5_en_default')) {
    load();
  }
}, 1000);

function openModal(id, titleKey = "", body = "") {
  const d = i18n[state.lang];
  if(titleKey) document.getElementById('modal-title').innerText = d[titleKey] || titleKey;
  if(body) document.getElementById('modal-body').innerHTML = body;
  document.getElementById(id).showModal();
}
function closeModal(id) { document.getElementById(id).close(); }

function startAdventure() {
  state.isGameOver = false; 
  state.epicTwist = false; 
  state.currentCard = null; 
  state.log = '';
  state.adventureStarted = true; 
  document.getElementById('init-scene-btn').classList.add('hidden');
  document.getElementById('card-content-wrapper').classList.remove('hidden');
  document.getElementById('reset-button').classList.remove('hidden');
  document.getElementById('challenge-content').classList.remove('hidden');
  document.getElementById('log-area').classList.remove('hidden');
  drawCard();
}

function drawCard() {
  if (state.deck.length === 0 || state.isGameOver) return;
  const el = document.getElementById('card-icon');
  document.getElementById('card-content-wrapper').classList.remove('hidden');
  document.getElementById('draw-new-card').classList.add('hidden');
  el.classList.add('shuffling');
  document.getElementById('action-buttons').classList.add('hidden');
  document.getElementById('special-buttons').classList.add('hidden');
  let counter = 0;
  const anim = setInterval(() => {
    const rs = ['♠', '♣', '♥', '♦'];
    el.innerText = (Math.floor(Math.random() * 9) + 2) + rs[Math.floor(Math.random() * 4)];
    if(++counter > 8) { 
      clearInterval(anim); 
      el.classList.remove('shuffling'); 
      document.getElementById('action-buttons').classList.remove('hidden'); 
      document.getElementById('special-buttons').classList.remove('hidden');
      executeDraw(); 
    }
  }, 50);
}

function executeDraw() {
  const card = state.deck.pop();
  // state.drawn.push({ card, result: null });
  state.currentCard = { card, result: null };
  const isRed = ['♥','♦'].includes(card.s);
  processLogic(card, isRed);
  if (state.epicTwist) document.getElementById('epic-twist-msg').classList.remove('hidden');
  else if (checkFinalCondition()) document.getElementById('last-scene-msg').classList.remove('hidden');
  save();
}

function processLogic(card, isRed) {
  const d = i18n[state.lang];
  const desc = document.getElementById('challenge-desc');
  const bc = document.getElementById('action-buttons');
  const bs = document.getElementById('special-buttons');
  bc.classList.add('hidden'); bs.classList.add('hidden');
  const el = document.getElementById('card-icon');
  el.innerText = `${card.v}${card.s}`;
  el.className = 'card-display ' + (isRed ? 'suit-red' : 'suit-black');

  if (['J', 'Q', 'K'].includes(card.v)) {
    let p = card.v === 'K' ? d.plot_main : (card.v === 'Q' ? d.plot_pri : d.plot_sec);
    desc.innerHTML = `<strong>${p}</strong>.<br>${isRed ? d.eff_pos : d.eff_neg}`;
    bs.classList.remove('hidden');
  } else if (card.v === 'A' || card.v === 'Joker') {
    desc.innerText = `${d.twist_event}\n${manualTables.scene_changes[state.lang][Math.floor(Math.random() * manualTables.scene_changes[state.lang].length)]}`;
    bs.classList.remove('hidden');
  } else {
    bc.classList.remove('hidden');
    const n = parseInt(card.v);
    let trait = n <= 4 ? d.trait_agile : (n <= 7 ? d.trait_brave : d.trait_crafty);
    let diff = [2, 5, 8].includes(n) ? "4+" : ([3, 6, 9].includes(n) ? "5+" : "6+");
    desc.innerHTML = `${d.challenge} <strong>${trait}</strong> (${diff})`;
  }
}

function resolve(win) {
  state.drawn.push({ card: state.currentCard.card, result: win });
  state.currentCard = null;
  if (win) state.stats.v++; else state.stats.l++;
  renderHistory();
  if (checkFinalCondition()) { 
    state.isGameOver = true; 
    showEndScreen(); 
  } else { 
    // drawCard(); 
    document.getElementById('card-content-wrapper').classList.add('hidden');
    document.getElementById('draw-new-card').classList.remove('hidden');
    state.currentCard = null;
  }
  save();
}

function checkFinalCondition() {
  const ch = state.drawn.filter(d => !isNaN(d.card.v));
  if (ch.length >= 8) return true;
  const suits = {};
  if (state.currentCard && !isNaN(state.currentCard.card.v)) suits[state.currentCard.card.s] = 1;
  console.log(ch);
  ch.forEach(d => {
    suits[d.card.s] = (suits[d.card.s] || 0) + 1;
  });
  const counts = Object.values(suits);
  console.log(suits, counts);
  if (counts.some(c => c >= 5)) {
    state.epicTwist = true;
    return true;
  }
  if (counts.some(c => c >= 3) && counts.some(c => c === 2)) return true;
  return false;
}

function showEndScreen() {
  const d = i18n[state.lang];
  document.getElementById('action-buttons').classList.add('hidden');
  document.getElementById('special-buttons').classList.add('hidden');
  document.getElementById('challenge-desc').classList.add('hidden');
  document.getElementById('last-scene-msg').classList.add('hidden');
  document.getElementById('epic-twist-msg').classList.add('hidden');
  document.getElementById('final-screen').classList.remove('hidden');
  document.getElementById('final-stats').innerHTML = `${d.wins}: <strong>${state.stats.v}</strong> | ${d.losses}: <strong>${state.stats.l}</strong>`;
}

function rollManualTable(keys, titleKey) {
  const res = [];
  keys.forEach(key => {
    const list = manualTables[key][state.lang];
    res.push(list[Math.floor(Math.random() * list.length)]);
  });
  if (keys[0] === 'complex') {
    res[0] = `<strong>${res[0]}</strong>`;
  }
  if (keys[1] === 'related') {
    res[1] = `<em>${res[1]}</em>`;
  }
  openModal('modal-info', titleKey, res.join('<br>'));
}

function openSocialDisposition() { openModal('modal-disposition'); }
  
function rollSocialDisposition(h,f) {
  const r1 = Math.floor(Math.random() * 6 + 1);
  const table = (r1 <= h) 
  ? manualTables.social_attitude_negative[state.lang]
  : (r1 >= f)
    ? manualTables.social_attitude_positive[state.lang]
    : manualTables.social_attitude_neutral[state.lang];
  const title = (r1 <= h)
    ? 'social_attitude_negative'
    : (r1 >= f)
      ? 'social_attitude_positive'
      : 'social_attitude_neutral';
  openModal('modal-info', title, table[Math.floor(Math.random() * table.length)]);
}

function rollScaledQuestion() {
  const r1 = Math.floor(Math.random() * 6);
  const d = manualTables.scaled_question[state.lang][r1];
  openModal('modal-info', "scaled_question", `<span class="dice dice-${r1 + 1}"></span><br>${d}`);
}

function rollTwist(genre, labelKey) {
  const d = i18n[state.lang];
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  closeModal('modal-twist-choice');
  openModal('modal-info', labelKey, `<span class="dice dice-${d1}"></span><span class="dice dice-${d2}"></span><br><img src="img/${genre}/${d1}${d2}.svg">`);
}

function openTwistModal() { openModal('modal-twist-choice'); }

function rollFantasyName() { 
  const p = manualTables.names_fictional.prefixes[Math.floor(Math.random()*manualTables.names_fictional.prefixes.length)]; 
  const s = manualTables.names_fictional.suffixes[Math.floor(Math.random()*manualTables.names_fictional.suffixes.length)]; 
  openModal('modal-info', "gen_name", `${p}${s}`); 
}

function rollFantasyTownName() { 
  const p = manualTables.town_name.prefixes[Math.floor(Math.random()*manualTables.town_name.prefixes.length)]; 
  const s = manualTables.town_name.suffixes[Math.floor(Math.random()*manualTables.town_name.suffixes.length)]; 
  openModal('modal-info', "town_name", `${p}${s}`); 
}

function rollOracle() {
  const target = document.getElementById('oracle-select').value;
  const d = i18n[state.lang];
  const r1 = Math.floor(Math.random() * 6) + 1;
  const r2 = Math.floor(Math.random() * 6) + 1;
  let res = r1 >= target ? `<strong>${d.yes}</strong>` : `<strong>${d.no}</strong>`;
  if (r2 <= 2) res += ` ${d.but}`; 
  if (r2 >= 5) res += ` ${d.and}`;
  openModal('modal-info', "oracle_title", res);
}

function rollDice(n) {
  const results = [];
  for (let i = 0; i < n; i++) results.push(Math.floor(Math.random() * 6) + 1);
  results.forEach((r,i) => results[i] = `<span class="dice dice-${r}"></span>`);
  openModal('modal-info', "dice_title", results.join(''));
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
  shuffle(state.deck); 
  save(); 
  location.reload();
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

function loadQuests() {
  const select = document.getElementById('quest');
  for (const table in questTables) {
    const opt = document.createElement('option');
    opt.value = table;
    opt.innerText = questTables[table].title;
    select.appendChild(opt);
  }
}

const rollQuest = () => {
  const table = document.getElementById('quest').value;
  const quests = [];
  questTables[table][state.lang].forEach(quest => {
    quests.push(quest[Math.floor(Math.random() * quest.length)]);
  });
  openModal('modal-info', questTables[table].title, quests.join('<br>'));
};

// 2. Escuchar cambios en TODO el formulario de PC
function setupPCEventListeners() {
    const container = document.getElementById('pc-sheet');
    if (!container) return;

    // Guardar automáticamente al escribir en cualquier campo
    container.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('input', () => {
            savePC();
            updateProgressBars();
        });
    });

  document.getElementById('pc-list').addEventListener('change', (e) => {
    // Aquí actualizamos el estado con el valor seleccionado (new o nombre del pc)
    state.activePcName = e.target.value; 
    loadSelectedPC();
    save();
  });
}

function savePC() {
  const nameInput = document.getElementById('pc-name').value.trim();
  const imagePreview = document.getElementById('avatar-image');
  const imageData = imagePreview.style.backgroundImage.replace('url(','').replace(')','').trim();
  
  // Si estamos en "new" y no hay nombre, no hacemos nada
  if (state.activePcName === 'new' && nameInput === "") return;

  const pcData = {
    name: nameInput,
    image: imageData,
    trait: document.getElementById('pc-trait').value,
    concept: document.getElementById('pc-concept').value,
    perks: document.getElementById('pc-perks').value,
    quirks: document.getElementById('pc-quirks').value,
    karma: parseInt(document.getElementById('pc-karma').value) || 0,
    karmaMax: parseInt(document.getElementById('pc-karma-max').value) || 3,
    resolve: parseInt(document.getElementById('pc-resolve').value) || 0,
    resolveMax: parseInt(document.getElementById('pc-resolve-max').value) || 3,
    afflictions: [
      document.getElementById('pc-affliction-1').value,
      document.getElementById('pc-affliction-2').value,
      document.getElementById('pc-affliction-3').value
    ]
  };

  // Buscar si ya existe el PC que estamos editando
  const index = state.pcs.findIndex(p => p.name === state.activePcName);

  let nameChanged = false;
  if (index !== -1) {
    // Si el nombre ha cambiado respecto al que teníamos guardado
    if (state.pcs[index].name !== nameInput) nameChanged = true;
    state.pcs[index] = pcData;
  } else {
    // Es un PC nuevo
    state.pcs.push(pcData);
    nameChanged = true;
  }

  // Actualizamos el nombre activo ANTES de renderizar
  state.activePcName = nameInput;

  // Solo redibujamos la lista si el nombre es nuevo o ha cambiado
  if (nameChanged) {
    renderPCList();
  }
  
  updateDeleteButtonVisibility();
  updateAfflictionCount();
  save();
}

function loadSelectedPC() {
  const pc = state.pcs.find(p => p.name === state.activePcName);
  const defaultImage = "img/avatar.jpg";
  
  if (state.activePcName !== 'new' && pc) {
    // Rellenar con datos guardados
    document.getElementById('avatar-image').style.backgroundImage = `url(${pc.image})` || `url(${defaultImage})`;
    document.getElementById('pc-name').value = pc.name;
    document.getElementById('pc-trait').value = pc.trait;
    document.getElementById('pc-concept').value = pc.concept;
    document.getElementById('pc-perks').value = pc.perks;
    document.getElementById('pc-quirks').value = pc.quirks;
    document.getElementById('pc-karma').value = pc.karma;
    document.getElementById('pc-karma-max').value = pc.karmaMax;
    document.getElementById('pc-resolve').value = pc.resolve;
    document.getElementById('pc-resolve-max').value = pc.resolveMax;
    document.getElementById('pc-affliction-1').value = pc.afflictions[0] || '';
    document.getElementById('pc-affliction-2').value = pc.afflictions[1] || '';
    document.getElementById('pc-affliction-3').value = pc.afflictions[2] || '';
  } else {
    console.log(state.activePcName, pc, defaultImage);
    // Reset para PC Nuevo (Valores por defecto)
    document.getElementById('avatar-image').style.backgroundImage = `url(${defaultImage})`;
    document.getElementById('pc-name').value = "";
    document.getElementById('pc-trait').value = "";
    document.getElementById('pc-concept').value = "";
    document.getElementById('pc-perks').value = "";
    document.getElementById('pc-quirks').value = "";
    document.getElementById('pc-karma').value = 3;
    document.getElementById('pc-karma-max').value = 3;
    document.getElementById('pc-resolve').value = 3;
    document.getElementById('pc-resolve-max').value = 3;
    document.querySelectorAll('[id^="pc-affliction"]').forEach(el => el.value = "");
  }
  updateProgressBars();
  updateAfflictionCount();
  updateDeleteButtonVisibility();
}

function renderPCList() {
  const select = document.getElementById('pc-list');
  const d = i18n[state.lang];
  
  // Limpiar y añadir opción "Nuevo"
  select.innerHTML = `<option value="new">${d.new || 'New'}</option>`;
  
  state.pcs.forEach(pc => {
    const opt = document.createElement('option');
    opt.value = pc.name;
    opt.innerText = pc.name;
    // Forzamos la selección del pc activo
    if (pc.name === state.activePcName) opt.selected = true;
    select.appendChild(opt);
  });

  // Si no hay ninguno seleccionado en el bucle, es que es "new"
  if (state.activePcName === 'new') select.value = 'new';

  updateDeleteButtonVisibility();
}

// 5. Botones +/- y Barras de progreso
function adjustStat(stat, amount) {
    const input = document.getElementById(`pc-${stat}`);
    const maxInput = document.getElementById(`pc-${stat}-max`);
    let val = (parseInt(input.value) || 0) + amount;
    const max = parseInt(maxInput.value) || 3;

    if (val < 0) val = 0;
    if (val > max) val = max;

    input.value = val;
    updateProgressBars();
    savePC();
}

function updateProgressBars() {
    const stats = ['karma', 'resolve'];
    stats.forEach((stat, index) => {
        const input = document.getElementById(`pc-${stat}`);
        const maxInput = document.getElementById(`pc-${stat}-max`);
        const val = parseInt(input.value) || 0;
        const max = parseInt(maxInput.value) || 1;
        
        // Asignar a la barra de progreso
        const progressBar = document.querySelectorAll('progress')[index];
        if (progressBar) {
            progressBar.value = val;
            progressBar.max = max;
        }

        // Desactivar botones si se llega a los límites
        const group = input.closest('[role="group"]');
        if (group) {
            group.querySelector('button:first-child').disabled = (val <= 0);
            group.querySelector('button:last-child').disabled = (val >= max);
        }
    });
}

function updateAfflictionCount() {
    // Obtenemos los valores de los 3 inputs de aflicciones
    const aff1 = document.getElementById('pc-affliction-1').value.trim();
    const aff2 = document.getElementById('pc-affliction-2').value.trim();
    const aff3 = document.getElementById('pc-affliction-3').value.trim();

    // Filtramos los que no están vacíos y contamos
    const activeAfflictions = [aff1, aff2, aff3].filter(a => a !== "").length;

    // Buscamos el elemento del título.
    // Si en tu HTML es un <label> o <strong>, asegúrate de que tenga el atributo data-i18n="afflictions"
    const label = document.querySelector('[data-i18n="afflictions"]');

    if (label) {
        const baseText = i18n[state.lang]["afflictions"] || "Afflictions";
        // Solo añadir el número si hay más de una
        if (activeAfflictions > 0) {
            label.innerText = `${baseText} (${activeAfflictions})`;
        } else {
            label.innerText = baseText;
        }
    }
}

function deletePC() {
  // No se puede eliminar la opción "new"
  if (state.activePcName === 'new') return;

  const d = i18n[state.lang];
  const confirmMsg = state.lang === 'es' ? 
    `¿Estás seguro de que quieres eliminar a ${state.activePcName}?` : 
    `Are you sure you want to delete ${state.activePcName}?`;

  if (confirm(confirmMsg)) {
    // Filtrar el array para quitar el PC actual
    state.pcs = state.pcs.filter(p => p.name !== state.activePcName);
    
    // Resetear a modo "new"
    state.activePcName = 'new';
    
    // Guardar y refrescar UI
    save();
    renderPCList();
    loadSelectedPC();
  }
}

function updateDeleteButtonVisibility() {
    const btnDelete = document.getElementById('btn-delete-pc');
    if (!btnDelete) return;

    if (state.activePcName === 'new' || typeof state.activePcName === 'undefined') {
        btnDelete.classList.add('hidden');
    } else {
        btnDelete.classList.remove('hidden');
    }
}

function clearAllData() {
  const d = i18n[state.lang];

  // Mensajes de confirmación según el idioma
  const msg1 = state.lang === 'es'
    ? "¿Estás SEGURO? Se borrarán todos los personajes y el progreso de la partida."
    : "Are you SURE? All characters and game progress will be deleted.";

  const msg2 = state.lang === 'es'
    ? "Esta acción no se puede deshacer. ¿Continuar?"
    : "This action cannot be undone. Continue?";

  if (confirm(msg1)) {
    if (confirm(msg2)) {
      // Borrar el objeto del estado en localStorage
      localStorage.removeItem('tricube_v5_en_default');

      // Opcional: Borrar cualquier otra clave que hayas usado
      localStorage.removeItem('pc_list');
      localStorage.removeItem('active_pc_name');
    }
  }
}

function showTab(tabId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(s => s.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach(t => t.classList.remove('contrast'));
  document.getElementById(tabId + '-tab').classList.add('contrast');

  state.currentTab = tabId;
  save();
}

function handleImageUpload(input) {
  const file = input.files[0];
  if (!file) return;

  // Validar que sea una imagen
  if (!file.type.startsWith('image/')) {
    alert('Por favor, selecciona un archivo de imagen válido.');
    return;
  }

  // Validar tamaño (ej: máx 2MB para no saturar localStorage)
  if (file.size > 2 * 1024 * 1024) {
    alert('La imagen es demasiado grande. El tamaño máximo es 2MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Image = e.target.result;

    // Actualizar la previsualización inmediatamente
    // document.getElementById('pc-image-preview').src = base64Image;
    document.getElementById('avatar-image').style.backgroundImage = `url(${base64Image})`;

    // Guardar el cambio en los datos del personaje
    savePC();
  };

  reader.readAsDataURL(file);
}

function updateLog() {
  state.log = document.getElementById('log-content').innerText;
  save();
  document.getElementById('log-content').innerText = state.log;
}

window.onload = load;
