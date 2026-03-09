const i18n = {
  en: {
    and: "and...",
    btn_continue: "Continue", 
    btn_fail: "Failure",
    btn_twist: "Twist!", 
    btn_win: "Win", 
    but: "but...",
    card: "Card",
    cat_urban: "🏘 Urban",
    cat_feat: "✨ Features", 
    cat_loc: "📍 Locations", 
    cat_ppl: "👥 People", 
    cat_twist: "🌀 Twists",
    challenge: "Challenge", 
    complex_answer: "Complex answer",
    deck: "Deck", 
    eff_neg: "Negative Effect", 
    eff_pos: "Positive Effect", 
    feat_urban: "Urban Feature", 
    feat_voyage: "Voyage Marker",
    feat_wild: "Wild Feature", 
    game_over: "SESSION ENDED", 
    gen_name: "Name", 
    gen_title: "Manual Generators",
    history: "Challenge History", 
    idea_label: "Idea",
    last_scene_warn: "⚠️ FINAL SCENE", 
    likely: "Likely (3+)", 
    loc_urban: "Urban", 
    loc_voyage: "Voyage", 
    loc_wild: "Wilderness", 
    losses: "Losses", 
    maybe: "Maybe (4+)", 
    modal_cancel: "Cancel", 
    modal_ok: "Got it", 
    modal_yes: "Yes",
    new_adventure: "New Adventure",
    no: "No",
    oracle_res: "Die", 
    oracle_title: "Oracle",
    plot_main: "Main Plot", 
    plot_pri: "Primary Plot", 
    plot_sec: "Secondary Plot",
    ppl_urban: "Urban People", 
    ppl_wild: "Wild People", 
    reset_deck: "Reset Deck", 
    reset_q: "Reset?", 
    reset_text: "Current progress will be lost.", 
    roll: "Roll",
    select_genre: "Select Genre", 
    settlements_large: "Large settlements",
    settlements_small: "Small settlements",
    start_adventure: "Start Initial Scene", 
    status: "Status", 
    trait_agile: "Agile", 
    trait_crafty: "Crafty", 
    trait_strong: "Strong", 
    twist_event: "Unexpected Twist / Scene Change",
    twist_fantasy: "Fantasy", 
    twist_horror: "Horror", 
    twist_scifi: "Sci-Fi",
    unlikely: "Unlikely (5+)", 
    urban_ppl: "People",
    urban_locations: "Locations",
    urban_events: "Events",
    v_likely: "Very Likely (2+)", 
    v_unlikely: "Very Unlikely (6)",
    wins: "Wins", 
    yes_no: "Yes/No",
    yes: "Yes",
  },
  es: {
    complex_answer: "Respuesta Compleja",
    roll: "Tirar",
    yes_no: "Si/No",
    yes: "Si",
    no: "No",
    but: "pero...",
    and: "y...",
    cat_urban: "🏘 Urbano",
    urban_ppl: "Población",
    urban_locations: "Lugares",
    urban_events: "Eventos",
    settlements_large: "Asentamientos grandes",
    settlements_small: "Asentamientos pequeños",
    status: "Estado", wins: "Éxitos", losses: "Fallos", deck: "Mazo", oracle_title: "Oráculo",
    v_likely: "Muy Probable (2+)", likely: "Probable (3+)", maybe: "Tal vez (4+)", unlikely: "Improbable (5+)", v_unlikely: "Casi imposible (6)",
    start_adventure: "Empezar Escena Inicial", last_scene_warn: "⚠️ ÚLTIMA ESCENA", btn_win: "Victoria", btn_fail: "Fracaso",
    btn_continue: "Continuar", btn_twist: "¡Giro!", game_over: "SESIÓN FINALIZADA", new_adventure: "Nueva Aventura",
    reset_deck: "Reiniciar Mazo", history: "Historial", gen_title: "Generadores",
    cat_loc: "📍 Localizaciones", cat_feat: "✨ Rasgos", cat_ppl: "👥 Gente", cat_twist: "🌀 Giros",
    loc_urban: "Ciudad", loc_wild: "Salvaje", loc_voyage: "Viaje", feat_urban: "Urbano", feat_wild: "Salvaje", feat_voyage: "Viaje",
    ppl_urban: "Gente Ciudad", ppl_wild: "Gente Campo", gen_name: "Nombre", twist_fantasy: "Fantasía", twist_horror: "Terror", twist_scifi: "Sci-Fi",
    modal_ok: "Entendido", reset_q: "¿Reiniciar?", reset_text: "Se perderá el progreso actual.", modal_cancel: "Cancelar", modal_yes: "Sí",
    select_genre: "Selecciona un Género", plot_main: "Trama Principal", plot_pri: "Trama Primaria", plot_sec: "Trama Secundaria",
    eff_pos: "Efecto Positivo", eff_neg: "Efecto Negativo", twist_event: "Giro inesperado / Cambio escena",
    trait_agile: "Ágil", trait_strong: "Fuerte", trait_crafty: "Astuto", challenge: "Desafío de", oracle_res: "Dado", idea_label: "Idea",
    card: "Carta"
  },
};

const manualTables = {
  complex: {
    en: ["Abandonment", "Hate or anger", "Advice", "Illness or injury", "Agreement", "Investigation", "Arrival", "Jealousy", "Assistance", "Mistrust", "Attainment", "Love or desire", "Barrier", "Neglect", "Betrayal", "Prevention", "Communication", "Property", "Concealment", "Punishment", "Conflict", "Pursuit", "Control", "Rejection", "Creation", "Rivalry", "Deception", "Technology", "Delay", "Theft", "Destruction", "Transformation", "Exposure", "Trust", "Failure", "Vengeance"],
    es: ["Abandono", "Odio o ira", "Consejo", "Enfermedad o lesión", "Acuerdo", "Investigación", "Llegada", "Celos", "Asistencia", "Desconfianza", "Logro", "Amor o deseo", "Barrera", "Negligencia", "Traición", "Prevención", "Comunicación", "Propiedad", "Ocultamiento", "Castigo", "Conflicto", "Persecución", "Control", "Rechazo", "Creación", "Rivalidad", "Engaño", "Tecnología", "Retraso", "Robo", "Destrucción", "Transformación", "Exposición", "Confianza", "Fracaso", "Venganza"],
  },
  related: {
    en:["And could be related to main plot", "And could be related to Your character", "And could be related to Primary subplot", "And could be related to Random event (roll)", "And could be related to Secondary subplot", "And could be related to Twist table (roll)"],
    es: ["Y podría estar relacionado con la trama principal", "Y podría estar relacionado con tu personaje", "Y podría estar relacionado con la trama secundaria primaria", "Y podría estar relacionado con un evento aleatorio (tirar)", "Y podría estar relacionado con la trama secundaria", "Y podría estar relacionado con la tabla de giros (tirar)"],
  },
scene_changes: {
    en: ["Positive (for you)", "New location (roll)", "Negative (for you)", "New person (roll)", "Twist table (roll)", "New event (roll)"],
    es: ["Positivo (para ti)", "Nueva ubicación (tirar)", "Negativo (para ti)", "Nueva persona (tirar)", "Tabla de giros (tirar)", "Nuevo evento (tirar)"]
  },
  urban: {
    en: ["Alleyway", "Bank", "Bridge", "Brothel", "Castle", "Cathedral", "Cemetery", "Cistern", "City Hall", "Dock", "Gatehouse", "Embassy", "Factory", "Farmhouse", "Fort", "Guildhall", "Hospital", "Inn", "Jail", "Library", "Mansion", "Market", "Monastery", "Monument", "Museum", "Office", "Orphanage", "Palace", "Park", "Plaza", "Shantytown", "Stables", "Sewers", "Tavern", "Theater", "University"],
    es: ["Callejón", "Banco", "Puente", "Burdel", "Castillo", "Catedral", "Cementerio", "Cisterna", "Ayuntamiento", "Muelle", "Cuerpo de guardia", "Embajada", "Fábrica", "Granja", "Fuerte", "Gremio", "Hospital", "Posada", "Cárcel", "Biblioteca", "Mansión", "Mercado", "Monasterio", "Monumento", "Museo", "Oficina", "Orfanato", "Palacio", "Parque", "Plaza", "Barrio bajo", "Establos", "Alcantarillas", "Taberna", "Teatro", "Universidad"]
  },
  urban_feat: {
    en: ["Abandoned", "Beautiful", "Blocked", "Clean", "Cluttered", "Colorful", "Crowded", "Dangerous", "Dark", "Dirty", "Deteriorated", "Empty", "Exotic", "Famous", "Festive", "Forbidden", "Forgotten", "Fortified", "Heaving", "Luxurious", "Magnificent", "Modernized", "Mysterious", "New", "Decrepit", "Old-fashioned", "Overwhelming", "Toxic", "Prominent", "Burned", "Guarded", "Small", "Spooky", "Unassuming", "Vandalized", "Well-stocked"],
    es: ["Abandonado", "Hermoso", "Bloqueado", "Limpio", "Desordenado", "Colorido", "Atestado", "Peligroso", "Oscuro", "Sucio", "Deteriorado", "Vacío", "Exótico", "Famoso", "Festivo", "Prohibido", "Olvidado", "Fortificado", "Agitado", "Lujoso", "Magnífico", "Modernizado", "Misterioso", "Nuevo", "Decrépito", "Anticuado", "Abrumador", "Tóxico", "Prominente", "Quemado", "Vigilado", "Pequeño", "Escalofriante", "Modesto", "Vandalizado", "Bien abastecido"]
  },
  urban_ppl: {
  en: [
    "Actor/entertainer", "Investigator/tracker", "Bartender/server", "Janitor/cleaner", 
    "Beggar/vagrant", "Laborer/worker", "Biker/outlander", "Lawyer/judge", 
    "Bumpkin/peasant", "Manager/foreman", "Chef/cook/baker", "Mechanic/artisan", 
    "Chemist/alchemist", "Merchant/vendor", "Child/youngster", "Musician/bard", 
    "Consultant/guide", "Police officer/guard", "Contractor/assassin", "Priest/preacher", 
    "Cultist/fanatic", "Reporter/town crier", "Doctor/herbalist", "Scientist/scholar", 
    "Driver/wagoner", "Socialite/noble", "Elder/senior figure", "Soldier/mercenary", 
    "Engineer/architect", "Spy/renegade", "Farmer/smallholder", "Teacher/tutor", 
    "Gangster/outlaw", "Thief/criminal", "Hunter/survivalist", "Watchman/bouncer"
  ],
  es: [
    "Actor/artista", "Investigador/rastreador", "Barman/camarero", "Conserje/limpiador", 
    "Mendigo/vagabundo", "Obrero/trabajador", "Motorista/forastero", "Abogado/juez", 
    "Paleto/campesino", "Gerente/capataz", "Chef/cocinero", "Mecánico/artesano", 
    "Químico/alquimista", "Comerciante/vendedor", "Niño/joven", "Músico/bardo", 
    "Consultor/guía", "Oficial de policía/guardia", "Contratista/asesino", "Sacerdote/predicador", 
    "Cultista/fanático", "Reportero/pregonero", "Doctor/herborista", "Científico/erudito", 
    "Conductor/carretero", "Socialité/noble", "Anciano/figura veterana", "Soldado/mercenario", 
    "Ingeniero/arquitecto", "Espía/renegado", "Granjero/pequeño propietario", "Maestro/tutor", 
    "Gánster/fajón", "Ladrón/criminal", "Cazador/superviviente", "Vigilante/portero"
  ]
},
  urban_locations: {
  en: [
    "Abandoned place", "Mansion/palace", "Airport/wharf/port", "Military building",
    "Bank/moneylender", "Museum/library", "Bridge/crossroads", "Nightclub/brothel",
    "Church/temple", "Office/workhouse", "Depot/warehouse", "Park/garden",
    "Factory/mill", "Pharmacy/herbalist", "Film/art studio", "Police station",
    "Fire station/tower", "Prison/guardhouse", "Garage/workshop", "Recreation area",
    "Graveyard", "Restaurant/tavern", "Guild/corporation", "School/academy",
    "Gun store/armory", "Sewer/subway", "Hospital/physician", "Slum/ruin",
    "Hotel/inn", "Smithy/craft shop", "House/villa", "Theater/cinema",
    "Local landmark", "Town hall/center", "Mall/marketplace", "Zoo/stable"
  ],
  es: [
    "Lugar abandonado", "Mansión/palacio", "Aeropuerto/muelle/puerto", "Edificio militar",
    "Banco/prestamista", "Museo/biblioteca", "Puente/encrucijada", "Club nocturno/burdel",
    "Iglesia/templo", "Oficina/taller", "Depósito/almacén", "Parque/jardín",
    "Fábrica/molino", "Farmacia/herbolario", "Estudio de arte/cine", "Estación de policía",
    "Estación de bomberos/torre", "Prisión/casa de guardia", "Garaje/taller", "Área recreativa",
    "Cementerio", "Restaurante/taberna", "Gremio/corporación", "Escuela/academia",
    "Armería/depósito de armas", "Alcantarilla/metro", "Hospital/médico", "Suburbio/ruina",
    "Hotel/posada", "Herrería/taller artesanal", "Casa/villa", "Teatro/cine",
    "Lugar de interés local", "Ayuntamiento/centro", "Centro comercial/mercado", "Zoo/establo"
  ]
},
urban_events: {
  en: [
    "Accident/breakage", "Lost child/pet", "Airplane/dragon", "Military presence", 
    "Alarm/siren", "Monstrous activity", "Ambush/assault", "Prowling vigilante", 
    "Assassination", "Roadblock/barrier", "Barking dog", "Sabotage/vandalism", 
    "Broken vehicle", "Screaming/shouting", "Crying/arguing", "Serious injury", 
    "Drone/surveillance", "Shocking revelation", "Dying victim", "Speeding vehicle", 
    "Explosion/fire", "Tech/magic terror", "Feral/wild animals", "Terrible weather", 
    "Fighting/brawling", "Theft/mugging", "Fleeing people", "Traffic collision", 
    "Flood/burst pipe", "Trapped people", "Horrific violence", "Troublemakers", 
    "Large gathering", "Urban decay", "Looting/robbery", "Weird/supernatural"
  ],
  es: [
    "Accidente/rotura", "Niño o mascota perdido", "Avión/dragón", "Presencia militar", 
    "Alarma/sirena", "Actividad monstruosa", "Emboscada/asalto", "Vigilante acechando", 
    "Asesinato", "Bloqueo/barrera", "Perro ladrando", "Sabotaje/vandalismo", 
    "Vehículo averiado", "Gritos/vociferaciones", "Llanto/discusión", "Lesión grave", 
    "Dron/vigilancia", "Revelación impactante", "Víctima agonizante", "Vehículo a exceso de velocidad", 
    "Explosión/incendio", "Terror tecnológico/mágico", "Animales salvajes/ferales", "Clima terrible", 
    "Pelea/reyerta", "Robo/asalto", "Gente huyendo", "Colisión de tráfico", 
    "Inundación/tubería rota", "Personas atrapadas", "Violencia horrible", "Alborotadores", 
    "Gran multitud", "Deterioro urbano", "Saqueo/robo", "Extraño/sobrenatural"
  ]
},
  settlements_large_desc: {
  en: [
    "Semirural village",
    "Port town",
    "Market town",
    "Military town",
    "Mining town",
    "City/suburb"
  ],
  es: [
    "Aldea semirural",
    "Pueblo portuario",
    "Ciudad comercial",
    "Ciudad militar",
    "Pueblo minero",
    "Ciudad/suburbio"
  ]
},
  settlements_large_ppl: {
  en: [
    "Cheerful/open",
    "Distrustful/wary",
    "Industrious/busy",
    "Rude/inconsiderate",
    "Indifferent/aloof",
    "Nosy/prying"
  ],
  es: [
    "Alegres/abiertos",
    "Desconfiados/cautelosos",
    "Laboriosos/ocupados",
    "Groseros/considerados",
    "Indiferentes/distantes",
    "Entrometidos/curiosos"
  ]
},
  settlements_small_desc: {
  en: [
    "Homestead/outpost",
    "Small hamlet",
    "Nomadic settlement",
    "Mining/lumber camp",
    "Farming village",
    "Fishing village"
  ],
  es: [
    "Hacienda/puesto de avanzada",
    "Pequeña aldea",
    "Asentamiento nómada",
    "Campamento minero/maderero",
    "Pueblo agrícola",
    "Pueblo pesquero"
  ]
},
settlements_small_ppl: {
  en: [
    "Welcoming/friendly",
    "Frightened/nervous",
    "Oppressed/abused",
    "Weird/creepy",
    "Indifferent/apathetic",
    "Xenophobic/hostile"
  ],
  es: [
    "Acogedores/amigables",
    "Asustados/nerviosos",
    "Oprimidos/maltratados",
    "Extraños/inquietantes",
    "Indiferentes/apáticos",
    "Xenófobos/hostiles"
  ]
},
  wilderness: {
    en: ["Pass", "Bridge", "Cabin", "Cave", "Cemetery", "Cliff", "Coast", "Dam", "Desert", "Ditch", "Forest", "Fortress", "Garden", "Farm", "Gorge", "Grove", "Hill", "Island", "Lake", "Mine", "Monolith", "Monument", "Mountain", "Outpost", "Plain", "Pond", "Quarry", "River", "Ruins", "Settlement", "Statue", "Swamp", "Temple", "Tower", "Valley", "Village"],
    es: ["Paso", "Puente", "Cabaña", "Cueva", "Cementerio", "Acantilado", "Costa", "Presa", "Desierto", "Zanja", "Bosque", "Fortaleza", "Jardín", "Granja", "Desfiladero", "Arboleda", "Colina", "Isla", "Lago", "Mina", "Monolito", "Monumento", "Montaña", "Puesto de avanzada", "Llanura", "Estanque", "Cantera", "Río", "Ruinas", "Asentamiento", "Estatua", "Pantano", "Templo", "Torre", "Valle", "Aldea"]
  },
  wild_feat: {
    en: ["Ancient", "Artificial", "Ashy", "Boggy", "Bones", "Clear", "Dangerous", "Dead", "Dense", "Desolate", "Dry", "Eerie", "Enchanted", "Icy", "Infested", "Misty", "Muddy", "Natural", "Poisonous", "Prickly", "Pristine", "Rocky", "Rough", "Ruined", "Sandy", "Sealed", "Silent", "Snowy", "Strange", "Submerged", "Overgrown", "Vast", "Volcanic", "Peculiar", "Wild", "Windy"],
    es: ["Antiguo", "Artificial", "Ceniciento", "Pantanoso", "Huesos", "Despejado", "Peligroso", "Muerto", "Denso", "Desolado", "Seco", "Inquietante", "Encantado", "Gélido", "Infestado", "Nebuloso", "Fangoso", "Natural", "Venenoso", "Espinoso", "Prístino", "Rocoso", "Rugoso", "Arruinado", "Arenoso", "Sellado", "Silencioso", "Nevado", "Extraño", "Sumergido", "Cubierto de maleza", "Vasto", "Volcánico", "Peculiar", "Salvaje", "Ventoso"]
  },
  wild_ppl: {
    en: ["Bandits", "Hunter", "Gatherer", "Hermit", "Patrol", "Scavenger", "Scout", "Vagabond"],
    es: ["Bandidos", "Cazador", "Recolector", "Ermitaño", "Patrulla", "Carroñero", "Explorador", "Vagabundo"]
  },
  voyage: {
    en: ["Archipelago", "Atoll", "Bay", "Canyon", "Caves", "Channel", "Pass", "Coral", "Grotto", "Waterfall", "Delta", "Dunes", "Floating Isle", "Geyser", "Glacier", "Gorge", "Shallows", "Cloud Forest", "Iceberg", "Jungle", "Lagoon", "Plateau", "Reef", "River", "Rapids", "Sandbank", "Sandbar", "Savanna", "Sea Stack", "Swamp", "Vent", "Valley", "Volcanic Cave", "Volcanic Isle", "Whirlpool", "Wadi"],
    es: ["Archipiélago", "Atolón", "Bahía", "Cañón", "Cuevas", "Canal", "Desfiladero", "Coral", "Gruta", "Cascada", "Delta", "Dunas", "Isla flotante", "Géiser", "Glaciar", "Garganta", "Bajos", "Bosque nuboso", "Iceberg", "Selva", "Laguna", "Meseta", "Arrecife", "Río", "Rápidos", "Banco de arena", "Barra de arena", "Sabana", "Farallón", "Pantano", "Fumarola", "Valle", "Cueva volcánica", "Isla volcánica", "Remolino", "Uadi"]
  },
  voyage_feat: {
    en: ["Anomaly", "Outpost", "Bridge", "Campsite", "Caravan", "Castle", "Cave", "Disaster", "Battlefield", "Statue", "Farm", "Ferry", "Graveyard", "Granary", "Tomb", "Landmark", "Lighthouse", "Mine", "Monastery", "Monolith", "Monument", "Oasis", "Observatory", "Paintings", "Pillars", "Port", "Ruins", "Shrine", "Settlement", "Signal", "Wreckage", "Temple", "Tower", "Town", "Village", "Well"],
    es: ["Anomalía", "Puesto de avanzada", "Puente", "Campamento", "Caravana", "Castillo", "Cueva", "Desastre", "Campo de batalla", "Estatua", "Granja", "Ferry", "Cementerio", "Granero", "Tumba", "Punto de referencia", "Faro", "Mina", "Monasterio", "Monolito", "Monumento", "Oasis", "Observatorio", "Pinturas", "Pilares", "Puerto", "Ruinas", "Santuario", "Asentamiento", "Señal", "Restos", "Templo", "Torre", "Pueblo", "Aldea", "Pozo"]
  }};

const twistIdeas = {
  fantasy: ["Magic surge", "Prophecy revealed", "Mystical riddle", "Terrain floating", "Hero confusion", "Relative enemy", "Brief portal", "Gear glowing", "Spirit tribute", "Wild magic"],
  horror: ["Familiar laughter", "Rotten supplies", "Free shadow", "Self-written note", "Looping time", "Sinister ally", "Aura of pain", "Self-closing doors", "Being watched", "Fear mirror"],
  scifi: ["Glitch lockout", "Ancient radio", "Gravity flux", "Silent drone", "DNA anomaly", "Forbidden tech", "Fake leak", "Hologram SOS", "Vehicle rattle", "Android spy"]
};

const names = { pre: ["And", "Barth", "Cyn", "Dar", "Eld", "Gal"], suf: ["aer", "ak", "alis", "ard", "as", "en"] };
