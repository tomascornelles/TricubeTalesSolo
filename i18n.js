const i18n = {
  en: {
    and: "and...",
    btn_continue: "Continue", 
    btn_fail: "Failure",
    btn_twist: "Twist!", 
    btn_win: "Win", 
    but: "but...",
    card: "Card",
    cat_dungeon: "🏰 Dungeon Crawl",
    cat_urban: "🏘 Urban",
    cat_voyages: "🌏 Voyages",
    cat_feat: "✨ Features", 
    cat_loc: "📍 Locations", 
    cat_ppl: "👥 People", 
    cat_twist: "🌀 Twists",
    cat_wilderness: "🏞 Wilderness",
    challenge: "Challenge", 
    complex_answer: "Complex answer",
    deck: "Deck", 
    dungeon_denizens: "Dungeon Denizens",
    dungeon_events: "Dungeon Events",
    dungeon_features: "Dungeon Features",
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
    scaled_question: "Scaled Question",
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
    voyages_conditions: "Conditions",
    voyages_landmarks: "Landmarks",
    voyages_encounters: "Encounters",
    voyages_events: "Events",
    wilderness_regions: "Regions",
    wilderness_features: "Features",
    wilderness_folks: "People",
    wilderness_events: "Events",
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
    scaled_question: "Pregunta Escalada",
    cat_urban: "🏘 Urbano",
    urban_ppl: "Población",
    urban_locations: "Lugares",
    urban_events: "Eventos",
    settlements_large: "Asentamientos grandes",
    settlements_small: "Asentamientos pequeños",
    cat_wilderness: "🏞 Terreno salvaje",
    wilderness_regions: "Regiones",
    wilderness_features: "Características",
    wilderness_folks: "Habitantes",
    wilderness_events: "Eventos",
    cat_dungeon: "🏰 Mazmorras",
    dungeon_denizens: "Habitantes",
    dungeon_events: "Eventos",
    dungeon_features: "Características",
    cat_voyages: "🌏 Viajes",
    voyages_conditions: "Condiciones",
    voyages_landmarks: "Lugares",
    voyages_encounters: "Encuentros",
    voyages_events: "Eventos",
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
  scaled_question: {
    en: ["Terrible", "Very bad", "Bad", "Okay", "Good", "Very good"],
    es: ["Terrible", "Muy mal", "Mal", "Regular", "Bueno", "Muy bueno"],
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
    "<small>This urban settlement is best described as a</small> Semirural village",
    "<small>This urban settlement is best described as a</small> Port town",
    "<small>This urban settlement is best described as a</small> Market town",
    "<small>This urban settlement is best described as a</small> Military town",
    "<small>This urban settlement is best described as a</small> Mining town",
    "<small>This urban settlement is best described as a</small> City/suburb"
  ],
  es: [
    "<small>Este asentamiento urbano es mejor describido como</small> Aldea semirural",
    "<small>Este asentamiento urbano es mejor describido como</small> Pueblo portuario",
    "<small>Este asentamiento urbano es mejor describido como</small> Ciudad comercial",
    "<small>Este asentamiento urbano es mejor describido como</small> Ciudad militar",
    "<small>Este asentamiento urbano es mejor describido como</small> Pueblo minero",
    "<small>Este asentamiento urbano es mejor describido como</small> Ciudad/suburbio"
  ]
},
  settlements_large_ppl: {
  en: [
    "<small>And the populace initially seems to be</small> Cheerful/open",
    "<small>And the populace initially seems to be</small> Distrustful/wary",
    "<small>And the populace initially seems to be</small> Industrious/busy",
    "<small>And the populace initially seems to be</small> Rude/inconsiderate",
    "<small>And the populace initially seems to be</small> Indifferent/aloof",
    "<small>And the populace initially seems to be</small> Nosy/prying"
  ],
  es: [
    "<small>Y la población inicialmente parece ser</small> Alegres/abiertos",
    "<small>Y la población inicialmente parece ser</small> Desconfiados/cautelosos",
    "<small>Y la población inicialmente parece ser</small> Laboriosos/ocupados",
    "<small>Y la población inicialmente parece ser</small> Groseros/considerados",
    "<small>Y la población inicialmente parece ser</small> Indiferentes/distantes",
    "<small>Y la población inicialmente parece ser</small> Entrometidos/curiosos"
  ]
},
  settlements_small_desc: {
  en: [
    "<small>This rural settlement is best described as a</small> Homestead/outpost",
    "<small>This rural settlement is best described as a</small> Small hamlet",
    "<small>This rural settlement is best described as a</small> Nomadic settlement",
    "<small>This rural settlement is best described as a</small> Mining/lumber camp",
    "<small>This rural settlement is best described as a</small> Farming village",
    "<small>This rural settlement is best described as a</small> Fishing village"
  ],
  es: [
    "<small>Este asentamiento rural es mejor describido como</small> Hacienda/puesto de avanzada",
    "<small>Este asentamiento rural es mejor describido como</small> Pequeña aldea",
    "<small>Este asentamiento rural es mejor describido como</small> Asentamiento nómada",
    "<small>Este asentamiento rural es mejor describido como</small> Campamento minero/maderero",
    "<small>Este asentamiento rural es mejor describido como</small> Pueblo agrícola",
    "<small>Este asentamiento rural es mejor describido como</small> Pueblo pesquero"
  ]
},
settlements_small_ppl: {
  en: [
    "<small>And the populace initially seems to be</small> Welcoming/friendly",
    "<small>And the populace initially seems to be</small> Frightened/nervous",
    "<small>And the populace initially seems to be</small> Oppressed/abused",
    "<small>And the populace initially seems to be</small> Weird/creepy",
    "<small>And the populace initially seems to be</small> Indifferent/apathetic",
    "<small>And the populace initially seems to be</small> Xenophobic/hostile"
  ],
  es: [
    "<small>Y la población inicialmente parece ser</small> Acogedores/amigables",
    "<small>Y la población inicialmente parece ser</small> Asustados/nerviosos",
    "<small>Y la población inicialmente parece ser</small> Oprimidos/maltratados",
    "<small>Y la población inicialmente parece ser</small> Extraños/inquietantes",
    "<small>Y la población inicialmente parece ser</small> Indiferentes/apáticos",
    "<small>Y la población inicialmente parece ser</small> Xenófobos/hostiles"
  ]
},
  wilderness_regions_terrain: {
  en: [
    "<small>The terrain in this region is primarily</small> Canyon/valley",
    "<small>The terrain in this region is primarily</small> Forest/jungle/scrub",
    "<small>The terrain in this region is primarily</small> Hills/mountains",
    "<small>The terrain in this region is primarily</small> Marsh/swamp/bog",
    "<small>The terrain in this region is primarily</small> Plains/plateau",
    "<small>The terrain in this region is primarily</small> River/lake/ocean"
  ],
  es: [
    "<small>El terreno en esta región es principalmente</small> Cañón/valle",
    "<small>El terreno en esta región es principalmente</small> Bosque/selva/matorral",
    "<small>El terreno en esta región es principalmente</small> Colinas/montañas",
    "<small>El terreno en esta región es principalmente</small> Pantano/ciénaga/turbera",
    "<small>El terreno en esta región es principalmente</small> Llanuras/meseta",
    "<small>El terreno en esta región es principalmente</small> Río/lago/océano"
  ]
},
  wilderness_regions_climate: {
  en: [
    "<small>While the climate is best described as</small> Arctic/tundra",
    "<small>While the climate is best described as</small> Cold/arid/barren",
    "<small>While the climate is best described as</small> Hot/arid/barren",
    "<small>While the climate is best described as</small> Temperate/moderate",
    "<small>While the climate is best described as</small> Tropical/savanna",
    "<small>While the climate is best described as</small> Warm/humid"
  ],
  es: [
    "<small>Mientras el clima es mejor describido como</small> Ártico/tundra",
    "<small>Mientras el clima es mejor describido como</small> Frío/árido/ermo",
    "<small>Mientras el clima es mejor describido como</small> Caluroso/árido/ermo",
    "<small>Mientras el clima es mejor describido como</small> Templado/moderado",
    "<small>Mientras el clima es mejor describido como</small> Tropical/sabana",
    "<small>Mientras el clima es mejor describido como</small> Cálido/húmedo"
  ]
},
  wilderness_features: {
  en: [
    "Ancient shrine", "Mysterious tower", "Bones/corpses", "Old battlefield",
    "Briar/rocky maze", "Ominous statue", "Bridge/ford", "Overgrown ruins",
    "Broken vehicle", "Pond/spring", "Burial grounds", "Quicksand/crevasse",
    "Cabin/hut", "Raging river", "Camp/firepit", "Road/path/trail",
    "Cave mouth", "Rope/log bridge", "Concealed garden", "Sacred ground",
    "Crumbling ruins", "Sheltered spot", "Edible fruit/plants", "Solitary building",
    "Enchanted zone", "Standing stones", "Enigmatic monolith", "Steep cliff/ridge",
    "Extravagant tent", "Stream/lake", "Fortified building", "Timeworn fountain",
    "Gorge/ravine", "Town/village/farm", "Mine/quarry", "Tranquil oasis"
  ],
  es: [
    "Santuario antiguo", "Torre misteriosa", "Huesos/cadáveres", "Viejo campo de batalla",
    "Laberinto de espinas/rocas", "Estatua ominosa", "Puente/vado", "Ruinas cubiertas de maleza",
    "Vehículo destrozado", "Estanque/manantial", "Túmulos/cementerio", "Arenas movedizas/grieta",
    "Cabaña/choza", "Río embravecido", "Campamento/hoguera", "Camino/sendero/pista",
    "Boca de cueva", "Puente de cuerda/tronco", "Jardín oculto", "Terreno sagrado",
    "Ruinas desmoronadas", "Lugar resguardado", "Frutos/plantas comestibles", "Edificio solitario",
    "Zona encantada", "Menhires/piedras erguidas", "Monolito enigmático", "Acantilado/cresta empinada",
    "Tienda extravagante", "Arroyo/lago", "Edificio fortificado", "Fuente desgastada por el tiempo",
    "Desfiladero/barranco", "Pueblo/aldea/granja", "Mina/cantera", "Oasis tranquilo"
  ]
},
  wilderness_folks: {
  en: [
    "Adventurers", "Malevolent spirit", "Arrogant noble", "Man-eating plant",
    "Bandits/outlaws", "Merchant/tinker", "Bear/wolves/big cat", "Military force",
    "Bounty hunter", "Mischievous fey", "Capricious nymph", "Monster/undead",
    "Caravan/wagon", "Pilgrims/lepers", "Carrion birds", "Runaway/deserter",
    "Curious animal", "Rustler/poacher", "Deer/horses/cattle", "Scavengers/foragers",
    "Elemental guardian", "Scouts/raiders", "Explorers/travelers", "Skilled ranger",
    "Ghostly figure", "Sorcerer/witch", "Honorable knight", "Stalker/predator",
    "Hungry insects", "Territorial beast", "Hunting party", "Traveling artist",
    "Invisible faeries", "Venomous snake", "Loner/hermit", "Wandering minstrel"
  ],
  es: [
    "Aventureros", "Espíritu malévolo", "Noble arrogante", "Planta carnívora",
    "Bandidos/fuera de la ley", "Mercader/buhonero", "Oso/lobos/gran felino", "Fuerza militar",
    "Cazarrecompensas", "Fata traviesa", "Ninfa caprichosa", "Monstruo/no muerto",
    "Caravana/carromato", "Peregrinos/leprosos", "Aves de rapiña", "Fugitivo/desertor",
    "Animal curioso", "Cuatrero/pocher", "Ciervos/caballos/ganado", "Carroñeros/recolectores",
    "Guardián elemental", "Exploradores/asaltantes", "Exploradores/viajeros", "Ranger experto",
    "Figura fantasmal", "Hechicero/bruja", "Caballero honorable", "Acechador/depredador",
    "Insectos hambrientos", "Bestia territorial", "Partida de caza", "Artista itinerante",
    "Hadas invisibles", "Serpiente venenosa", "Solitario/ermitaño", "Juglar errante"
  ]
},
  wilderness_events: {
  en: [
    "Accident/breakage", "Rolling log/boulder", "Ambush/attack", "Running animal",
    "Avalanche/landslide", "Shout/scream", "Circling vultures", "Sickness/injury",
    "Collapsing ground", "Sounds of battle", "Criminal activity", "Spoiled supplies",
    "Curious animal", "Stalked/followed", "Eerie sounds", "Stampede/charge",
    "Falling tree/rocks", "Storm/blizzard", "Heavy rain/snow", "Strong winds",
    "Helicopter/dragon", "Sudden silence", "Hopelessly lost", "Technology/magic",
    "Howling wolf", "Thick fog/mist", "Hunting predator", "Thunder/lightning",
    "Mirage/illusion", "Unusually hot/cold", "Miserable weather", "Warning sign/shot",
    "Monstrous activity", "Weird/supernatural", "Pungent odor", "Wildfire/earthquake"
  ],
  es: [
    "Accidente/rotura", "Tronco/roca rodante", "Emboscada/ataque", "Animal corriendo",
    "Avalancha/desprendimiento", "Grito/alarido", "Buitres en círculos", "Enfermedad/lesión",
    "Suelo colapsando", "Sonidos de batalla", "Actividad criminal", "Suministros estropeados",
    "Animal curioso", "Acechado/seguido", "Sonidos inquietantes", "Estampida/carga",
    "Caída de árbol/rocas", "Tormenta/ventisca", "Lluvia/nieve pesada", "Vientos fuertes",
    "Helicóptero/dragón", "Silencio repentino", "Perdido sin esperanza", "Tecnología/magia",
    "Lobo aullando", "Niebla espesa/bruma", "Depredador cazando", "Trueno/relámpago",
    "Espejismo/ilusión", "Inusualmente frío/caliente", "Clima miserable", "Señal/disparo de advertencia",
    "Actividad monstruosa", "Extraño/sobrenatural", "Olor penetrante", "Incendio/terremoto"
  ]
},
  dungeon_features: {
  en: [
    "Altar/table/desk", "Macabre apparatus", "Arcane/alien device", "Markings/writing",
    "Architectural oddity", "Mold/moss/plants", "Bed/bunk/coffin", "Odd paraphernalia",
    "Books/computers", "Painting/tapestry", "Chasm/fissure", "Pantry/larder/meat",
    "Chest/cupboard", "Pillars/stalagmites", "Cryptic clue/puzzle", "Prisoner/corpse",
    "Defaced/vandalized", "Slick/smooth floor", "Dirt/decay/rot", "Stains/damage",
    "Distinctive smell", "Statue/sculpture", "Drafty/ventilated", "Steps/stairs/ladder",
    "Fireplace/pit", "Sticky/magnetic", "Fountain/pool", "Uneven/rotten floor",
    "Furs/hides/blankets", "Unusual lighting", "Gruesome scene", "Vermin nest/hole",
    "Guard animal/pet", "Vines/roots/wires", "Lavish decorations", "Weaponry/tools"
  ],
  es: [
    "Altar/mesa/escritorio", "Aparato macabro", "Dispositivo arcano/alienígena", "Marcas/escritura",
    "Anomalía arquitectónica", "Moho/musgo/plantas", "Cama/litera/ataúd", "Parafernalia extraña",
    "Libros/ordenadores", "Pintura/tapiz", "Abismo/fisura", "Despensa/almacén de carne",
    "Cofre/armario", "Pilares/estalagmitas", "Pista críptica/acertijo", "Prisionero/cadáver",
    "Desfigurado/vandalizado", "Suelo resbaladizo/liso", "Suciedad/descomposición/podredumbre", "Manchas/daños",
    "Olor distintivo", "Estatua/escultura", "Corriente de aire/ventilado", "Escalones/escalera/escala",
    "Chimenea/foso", "Pegajoso/magnético", "Fuente/estanque", "Suelo irregular/podrido",
    "Pieles/cueros/mantas", "Iluminación inusual", "Escena espeluznante", "Nido de alimañas/agujero",
    "Animal guardián/mascota", "Enredaderas/raíces/cables", "Decoración lujosa", "Armamento/herramientas"
  ]
},
  dungeon_denizens: {
  en: [
    "Animals/vermin", "Hydra/serpent", "Animated plants", "Lich/necromancer",
    "Bandits/outlaws", "Lizardfolk", "Chimera/hybrid", "Minotaurs/centaurs",
    "Cockatrice/wyvern", "Mutants/beastmen", "Constructs/robots", "Ogres/trolls",
    "Demons/imps", "Orcs/hobgoblins", "Dragon/drake", "Otherworldly beasts",
    "Eldritch horrors", "Priests/cultists", "Elemental/nymph", "Scientist/artificer",
    "Fairies/fae/elves", "Skeletons/zombies", "Frogfolk/merfolk", "Terror birds",
    "Ghosts/wraiths", "Titans/giants", "Ghouls/cannibals", "Vampire/mummy",
    "Giant worms/bugs", "Werebeasts/shifters", "Gnomes/dwarves", "Wights/draugar",
    "Goblins/kobolds", "Witch/hag", "Harpies/griffins", "Wizard/sorcerer"
  ],
  es: [
    "Animales/alimañas", "Hidra/serpiente", "Plantas animadas", "Liche/nigromante",
    "Bandidos/proscritos", "Hombres lagarto", "Quimera/híbrido", "Minotauros/centauros",
    "Cocodriz/viverno", "Mutantes/hombres bestia", "Constructos/robots", "Ogros/trolls",
    "Demonios/diablillos", "Orcos/hobgoblins", "Dragón/drake", "Bestias de otro mundo",
    "Horrores primigenios", "Sacerdotes/cultistas", "Elemental/ninfa", "Científico/artífice",
    "Hadas/fae/elfos", "Esqueletos/zombis", "Hombres rana/tritones", "Aves del terror",
    "Fantasmas/espectros", "Titanes/gigantes", "Necrófagos/caníbales", "Vampiro/momia",
    "Gusanos/insectos gigantes", "Licántropos/cambiapieles", "Gnomos/enanos", "Túmulos/draugar",
    "Goblins/kobolds", "Bruja/madrastra", "Arpías/grifos", "Mago/hechicero"
  ]
},
  dungeon_events: {
  en: [
    "Ambush/sniper", "Pungent odor", "Barking/growling", "Raised alarm",
    "Blade trap", "Rear attack", "Crushing trap", "Rockfall/collapse",
    "Deception/illusion", "Shouting/roaring", "Entangled/pinned", "Slippery patch",
    "Explosion/smoke", "Sound of movement", "Fall/trip/stumble", "Spear/dart trap",
    "Frontal attack", "Stalked/shadowed", "Guard patrol", "Sticky floor",
    "Hidden surprise", "Strange sounds", "Hit-and-run attack", "Tilting floor",
    "Murmer of voices", "Tripwire", "Noisy floor", "Unexpected visitor",
    "Pincer attack", "Vermin/beast", "Pit trap", "Wandering monster",
    "Poisonous gas/trap", "Weeping/screaming", "Pressure plate", "Wrong turn"
  ],
  es: [
    "Emboscada/francotirador", "Olor penetrante", "Ladridos/gruñidos", "Alarma activada",
    "Trampa de cuchillas", "Ataque por la retaguardia", "Trampa aplastante", "Derrumbe/colapso",
    "Engaño/ilusión", "Gritos/rugidos", "Enredado/inmovilizado", "Zona resbaladiza",
    "Explosión/humo", "Sonido de movimiento", "Caída/tropiezo", "Trampa de lanzas/dardos",
    "Ataque frontal", "Acechado/seguido", "Patrulla de guardia", "Suelo pegajoso",
    "Sorpresa oculta", "Sonidos extraños", "Ataque de golpear y huir", "Suelo basculante",
    "Murmullo de voces", "Cable de trampa", "Suelo ruidoso", "Visitante inesperado",
    "Ataque de pinza", "Alimaña/bestia", "Trampa de foso", "Monstruo errante",
    "Gas/trampa venenosa", "Llanto/gritos", "Placa de presión", "Giro equivocado"
  ]
},
  voyages_sky: {
  en: [
    "<small>The sky overhead is currently</small> Clear/sunny",
    "<small>The sky overhead is currently</small> Mostly clear/sunny",
    "<small>The sky overhead is currently</small> Mostly cloudy",
    "<small>The sky overhead is currently</small> Overcast",
    "<small>The sky overhead is currently</small> Overcast with drizzle",
    "<small>The sky overhead is currently</small> Overcast with rain"
  ],
  es: [
    "<small>El cielo está actualmente</small> Despejado/soleado",
    "<small>El cielo está actualmente</small> Mayormente despejado",
    "<small>El cielo está actualmente</small> Mayormente nublado",
    "<small>El cielo está actualmente</small> Cubierto",
    "<small>El cielo está actualmente</small> Cubierto con llovizna",
    "<small>El cielo está actualmente</small> Cubierto con lluvia"
  ]
},
  voyages_wind: {
  en: [
    "<small>While the wind is best described as</small> Calm",
    "<small>While the wind is best described as</small> Light breeze",
    "<small>While the wind is best described as</small> Moderate breeze",
    "<small>While the wind is best described as</small> Strong breeze",
    "<small>While the wind is best described as</small> Gale-force winds",
    "<small>While the wind is best described as</small> Storm/hurricane"
  ],
  es: [
    "<small>Mientras que el viento se describe mejor como</small> Calma",
    "<small>Mientras que el viento se describe mejor como</small> Brisa ligera",
    "<small>Mientras que el viento se describe mejor como</small> Brisa moderada",
    "<small>Mientras que el viento se describe mejor como</small> Brisa fuerte",
    "<small>Mientras que el viento se describe mejor como</small> Vientos de temporal",
    "<small>Mientras que el viento se describe mejor como</small> Tormenta/huracán"
  ]
},
voyages_landmarks: {
  en: [
    "Ancient monument", "Plague island", "Archipelago", "Platform/oil rig", 
    "Castle/space station", "Port town/city", "Coastal village", "Reef/asteroid field", 
    "Dangerous passage", "Rocky shore", "Estuary/inlet/strait", "Sandy beach", 
    "Fishing village", "Sea/asteroid cave", "Floating island", "Sea fort/moon base", 
    "Foggy coastline", "Sheltered bay/cove", "Fortified island", "Ship cemetery", 
    "High rocky outcrop", "Shipwreck", "Iceberg/pumice raft", "Submerged island", 
    "Island fortress", "Sunken ruins", "Islet/asteroid", "Tall cliffs", 
    "Leviathan bones", "Tropical island", "Lighthouse/beacon", "Uninhabited island", 
    "Mining island", "Volcanic island", "Penal colony", "Whirlpool/vortex"
  ],
  es: [
    "Monumento antiguo", "Isla de la peste", "Archipiélago", "Plataforma petrolífera", 
    "Castillo/estación espacial", "Puerto/ciudad costera", "Pueblo costero", "Arrecife/campo de asteroides", 
    "Paso peligroso", "Costa rocosa", "Estuario/entrada/estrecho", "Playa de arena", 
    "Pueblo pesquero", "Cueva marina/de asteroide", "Isla flotante", "Fuerte marino/base lunar", 
    "Costa brumosa", "Bahía/cala resguardada", "Isla fortificada", "Cementerio de barcos", 
    "Afloramiento rocoso elevado", "Naufragio", "Iceberg/balsa de pumita", "Isla sumergida", 
    "Fortaleza insular", "Ruinas hundidas", "Islote/asteroide", "Acantilados altos", 
    "Huesos de leviatán", "Isla tropical", "Faro/baliza", "Isla deshabitada", 
    "Isla minera", "Isla volcánica", "Colonia penal", "Remolino/vórtice"
  ]
},
  voyages_encounters: {
  en: [
    "Abandoned ship", "Merchant galleon", "Adrift survivor", "Mermaids/cecaelias",
    "Alluring sirens", "Nymph/elemental", "Cargo ship", "Passenger ship",
    "Colony transporter", "Patrol boat", "Convoy of ships", "Pirate vessel",
    "Disguised vessel", "Pompous noble", "Exploration ship", "Penal transport",
    "Fast sailboat/yacht", "Raiders", "Fishing boat", "Scouting vessel",
    "Flotilla of boats", "Sea/space serpent", "Ghostly/alien ship", "Slave ship",
    "Giant turtle/whale", "Small warship", "Glowing jellyfish", "Smugglers",
    "Hungry shark/alien", "Someone on a raft", "Kelpie/shapeshifter", "Undead/cannibals",
    "Kraken/monster", "War galley", "Large warship", "Whaling vessel"
  ],
  es: [
    "Barco abandonado", "Galeón mercante", "Superviviente a la deriva", "Sirenas/cecaelias",
    "Sirenas seductoras", "Ninfa/elemental", "Carguero", "Barco de pasajeros",
    "Transporte de colonos", "Patrullera", "Convoy de barcos", "Navío pirata",
    "Buque camuflado", "Noble pomposo", "Nave de exploración", "Transporte penal",
    "Velero rápido/yate", "Asaltantes", "Barco de pesca", "Nave de reconocimiento",
    "Flotilla de botes", "Serpiente marina/espacial", "Nave fantasmal/alienígena", "Barco negrero",
    "Tortuga/ballena gigante", "Navío de guerra pequeño", "Medusas brillantes", "Contrabandistas",
    "Tiburón/alien hambriento", "Alguien en una balsa", "Kelpie/cambiaformas", "No muertos/caníbales",
    "Kraken/monstruo", "Galera de guerra", "Gran navío de guerra", "Ballenero"
  ]
},
  voyages_events: {
  en: [
    "Ambush/attack", "Kraken/shark attack", "Betrayal/trickery", "Missing person",
    "Bounty hunter", "Mutiny/treachery", "Brawl/violence", "Land ahoy!",
    "Confrontation/duel", "Pollution/wreckage", "Crash/explosion", "Pursuing pirates",
    "Curse/bad omen", "Raft/escape pod", "Damaged ship", "Saboteur/spy",
    "Dead calm", "Salvage/booty", "Distress signal", "Sea serpent",
    "Dolphins/good luck", "Storm/tsunami", "Dream/vision", "Stowaway/intruder",
    "Drunken crewman", "Strong/stellar wind", "Fishing incident", "Theft/murder",
    "Flaring tempers", "Thick fog", "Floating corpse", "Treasure/bounty",
    "Floating debris", "Unusual fish/alien", "Injury/sickness", "Weird/supernatural"
  ],
  es: [
    "Emboscada/ataque", "Ataque de kraken/tiburón", "Traición/engaño", "Persona desaparecida",
    "Cazarrecompensas", "Motín/traición", "Pelea/violencia", "¡Tierra a la vista!",
    "Confrontación/duelo", "Contaminación/restos", "Choque/explosión", "Piratas persiguiendo",
    "Maldición/mal presagio", "Balsa/cápsula de escape", "Nave dañada", "Saboteador/espía",
    "Calma chicha", "Salvamento/botín", "Señal de socorro", "Serpiente marina",
    "Delfines/buena suerte", "Tormenta/tsunami", "Sueño/visión", "Polizón/intruso",
    "Tripulante borracho", "Viento fuerte/estelar", "Incidente de pesca", "Robo/asesinato",
    "Ánimos caldeados", "Niebla espesa", "Cadáver flotante", "Tesoro/recompensa",
    "Escombros flotantes", "Pez inusual/alienígena", "Lesión/enfermedad", "Extraño/sobrenatural"
  ]
},
};

const twistIdeas = {
  fantasy: ["Magic surge", "Prophecy revealed", "Mystical riddle", "Terrain floating", "Hero confusion", "Relative enemy", "Brief portal", "Gear glowing", "Spirit tribute", "Wild magic"],
  horror: ["Familiar laughter", "Rotten supplies", "Free shadow", "Self-written note", "Looping time", "Sinister ally", "Aura of pain", "Self-closing doors", "Being watched", "Fear mirror"],
  scifi: ["Glitch lockout", "Ancient radio", "Gravity flux", "Silent drone", "DNA anomaly", "Forbidden tech", "Fake leak", "Hologram SOS", "Vehicle rattle", "Android spy"]
};

const names = { pre: ["And", "Barth", "Cyn", "Dar", "Eld", "Gal"], suf: ["aer", "ak", "alis", "ard", "as", "en"] };
