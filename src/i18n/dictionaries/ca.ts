import type { Dict } from "./index";

// Catalan dictionary — served on villanabo.cat.
const ca: Dict = {
  meta: {
    title: "Villa Nabo",
    description:
      "Gaudeix de les nostres millors carns a la brasa en un ambient acollidor i autèntic.",
  },

  nav: {
    inicio: "Inici",
    menu: "Menú",
    fiestas: "Festes",
    contacto: "Contacte",
    ariaMenu: "Menú",
  },

  banner: {
    title: "GRAN FESTA D'INAUGURACIÓ",
    date: "Dissabte 6 de juny",
    more: "Més info",
  },

  footer: {
    tagline:
      "Un refugi rural on les millors carns a la brasa es fusionen amb música, còctels i diversió sota la posta de sol.",
    pagesTitle: "Pàgines",
    links: {
      inicio: "Inici",
      menu: "Menú",
      fiestas: "Festes i Esdeveniments",
      contacto: "Contacte i Reserves",
    },
    findUsTitle: "Troba'ns",
    addressLine1: "Camino Rural de Villa Nabo, s/n",
    addressLine2: "Arauzo de Torre, Burgos",
    hoursLine1: "Dl–Dj 12–22h",
    hoursLine2: "Dv–Ds fins a les 3:00",
    copyright: "© 2026 Villa Nabo · Carns a la Brasa Artesanes",
  },

  home: {
    heroBadge: "Carns a la brasa · Arauzo de Torre",
    heroSubtitle:
      "Un refugi rural on la tradició de la brasa es troba amb nits de música, còctels i postes de sol inoblidables.",
    ctaReserve: "Reservar Taula",
    ctaMenu: "Veure la carta",

    carnesKicker: "La casa",
    carnesTitle: "Les Nostres Carns",
    carnesText:
      "A Villa Nabo preparem les millors carns a la brasa amb tècniques tradicionals. Cada peça se selecciona acuradament per garantir la màxima qualitat i sabor.",
    carnesItems: [
      "Costelles BBQ",
      "Brasa Argentina",
      "Carn Wagyu",
      "Broquetes Mixtes",
      "Carns de Temporada",
    ],
    carnesImgAlt: "Carns a la brasa",

    atardeceresKicker: "Després de les 19:00",
    atardeceresTitle: "Postes de Sol Inoblidables",
    atardeceresText:
      "Quan es pon el sol a Villa Nabo, comença la màgia. Música en directe, còctels i gent jove a punt per passar-s'ho bé.",
    atardeceresCards: [
      { titulo: "Música en Directe", desc: "DJs i bandes en directe" },
      { titulo: "Còctels Premium", desc: "Begudes artesanes" },
      { titulo: "Posta de Sol Màgica", desc: "Vistes incomparables" },
      { titulo: "Ambient Jove", desc: "Diversió garantida" },
    ],

    horariosTitle: "Horaris",
    horarios: [
      { titulo: "Servei de Dia", horas: "12:00 – 18:00" },
      { titulo: "Servei de Nit", horas: "19:00 – 02:00" },
      { titulo: "Festes i Esdeveniments", horas: "De divendres a diumenge" },
    ],

    ctaTitle: "A punt per gaudir?",
    ctaText:
      "Reserva la teva taula o vine a celebrar les nostres nits inoblidables",
    ctaContact: "Contacta'ns",
  },

  menu: {
    heroKicker: "La carta",
    heroTitle: "La Nostra Carta",
    heroSubtitle:
      "Ingredients frescos, tècniques artesanes i el sabor únic del foc. Tot preparat amb cura per a tu.",
    sections: [
      {
        id: "carnes",
        titulo: "Carns a la Brasa",
        platos: [
          { nombre: "Entrecot de Vedella", desc: "400g de carn madurada, brasa de llenya", precio: "28€" },
          { nombre: "Costelles BBQ", desc: "Costellam sencer amb salsa de la casa", precio: "24€" },
          { nombre: "Xuletó Wagyu", desc: "600g, peça premium importada", precio: "45€" },
          { nombre: "Brasa Argentina", desc: "Talls mixtos a l'estil pampeà", precio: "32€" },
          { nombre: "Broquetes Mixtes", desc: "Broqueta de vedella, porc i pollastre", precio: "18€" },
        ],
      },
      {
        id: "entrantes",
        titulo: "Entrants",
        platos: [
          { nombre: "Taula d'Embotits", desc: "Selecció d'ibèrics de la regió", precio: "14€" },
          { nombre: "Pa de Brasa", desc: "Pa artesà amb mantega d'herbes", precio: "5€" },
          { nombre: "Amanida de Temporada", desc: "Verdures fresques de l'hort propi", precio: "9€" },
          { nombre: "Croquetes de Pernil", desc: "Elaboració casolana, 6 unitats", precio: "8€" },
        ],
      },
      {
        id: "guarniciones",
        titulo: "Guarnicions",
        platos: [
          { nombre: "Patates Braves", desc: "Amb allioli i salsa brava", precio: "6€" },
          { nombre: "Verdures a la Brasa", desc: "Carbassó, pebrot i albergínia", precio: "7€" },
          { nombre: "Arròs amb Bolets", desc: "Bolets de temporada saltejats", precio: "8€" },
          { nombre: "Patates Fregides Casolanes", desc: "Tall gruixut, fregides en oli d'oliva", precio: "5€" },
        ],
      },
      {
        id: "postres",
        titulo: "Postres",
        platos: [
          { nombre: "Coulant de Xocolata", desc: "Amb gelat de vainilla artesà", precio: "7€" },
          { nombre: "Pastís de Formatge", desc: "Al forn, estil basc", precio: "6€" },
          { nombre: "Fruita de Temporada", desc: "Selecció del dia amb mel", precio: "5€" },
          { nombre: "Gelats Artesans", desc: "3 boles a triar", precio: "5€" },
        ],
      },
      {
        id: "cocktails",
        titulo: "Còctels i Begudes",
        platos: [
          { nombre: "Mojito de la Casa", desc: "Rom blanc, llima, menta i sucre morè", precio: "9€" },
          { nombre: "Sangria Villa Nabo", desc: "Recepta pròpia amb fruites de temporada", precio: "8€" },
          { nombre: "Gin-Tònic Premium", desc: "Ginebra artesana amb botànics seleccionats", precio: "10€" },
          { nombre: "Refresc / Aigua", desc: "Varietat de refrescos i aigua mineral", precio: "3€" },
          { nombre: "Vi de la Casa", desc: "Negre, blanc o rosat", precio: "4€/copa" },
        ],
      },
    ],
    ctaTitle: "A punt per reservar?",
    ctaText: "Reserva ara i assegura la teva experiència a Villa Nabo",
    ctaReserve: "Reservar Taula",
  },

  fiestas: {
    heroKicker: "Cada cap de setmana",
    heroTitle: "Festes i Esdeveniments",
    heroSubtitle:
      "Cada setmana la posta de sol transforma Villa Nabo en un espai únic de música, còctels i diversió.",
    scheduleTitle: "Programació Setmanal",
    eventos: [
      {
        dia: "Divendres",
        nombre: "Sunset Sessions",
        tipo: "Electrònica i Chill",
        desc: "Música electrònica suau mentre es pon el sol. Còctels de benvinguda i pinxos.",
      },
      {
        dia: "Dissabte",
        nombre: "Foc i Ritme",
        tipo: "DJ + Open Bar",
        desc: "La gran nit de Villa Nabo. DJ en directe, barra lliure de còctels i la millor carn a la brasa.",
      },
      {
        dia: "Diumenge",
        nombre: "Brunch i Brasa",
        tipo: "Música Acústica",
        desc: "Brunch especial amb talls selectes, música acústica en directe i el millor ambient per acomiadar el cap de setmana.",
      },
    ],
    galleryTitle: "Galeria de Moments",
    galleryAlt: "Moment",
    ctaTitle: "Véns aquesta setmana?",
    ctaText:
      "Reserva la teva taula o aconsegueix la teva entrada per als esdeveniments especials",
    ctaReserve: "Reservar Ara",
  },

  contacto: {
    heroKicker: "Som aquí",
    heroTitle: "Contacte i Reserves",
    heroSubtitle:
      "Tens preguntes o vols reservar la teva taula? Som aquí per ajudar-te.",
    infoTitle: "Informació",
    infoItems: [
      { titulo: "Adreça", lineas: ["Camino Rural de Villa Nabo, s/n", "09451 Arauzo de Torre, Burgos"] },
      { titulo: "Telèfon", lineas: ["+34 666 666 666", "De dilluns a diumenge 10:00 - 23:00"] },
      { titulo: "Correu", lineas: ["hola@villanabo.es", "Responem en menys de 24h"] },
    ],
    hoursTitle: "Horaris",
    horarios: [
      { dia: "Dilluns – Dijous", hora: "12:00 – 22:00" },
      { dia: "Divendres", hora: "12:00 – 02:00" },
      { dia: "Dissabte", hora: "11:00 – 03:00" },
      { dia: "Diumenge", hora: "11:00 – 20:00" },
    ],
    formTitleDefault: "Reserva la teva Taula",
    formTitleSent: "Reserva Rebuda!",
    formSentText:
      "Et confirmarem la taula per correu en menys de 24 hores.",
    labelName: "Nom",
    labelPhone: "Telèfon",
    labelEmail: "Correu",
    labelDate: "Data",
    labelPeople: "Persones",
    labelMessage: "Missatge o petició especial",
    placeholderName: "El teu nom",
    placeholderEmail: "correu@exemple.com",
    placeholderMessage: "Alguna al·lèrgia, esdeveniment especial, preferència de taula...?",
    personSingular: "persona",
    personPlural: "persones",
    submit: "Enviar Reserva",
    submitting: "Enviant...",
    errorsForm: {
      nameShort: "Introdueix el teu nom.",
      nameLink: "El nom no pot contenir enllaços.",
      email: "Introdueix un correu vàlid.",
      phone: "Introdueix un telèfon vàlid.",
      dateEmpty: "Tria una data.",
      datePast: "La data no pot ser anterior a avui.",
      messageLong: "El missatge és massa llarg.",
      messageLink: "El missatge no pot contenir enllaços.",
    },
    sendFail:
      "No s'ha pogut enviar la reserva. Torna-ho a provar o truca'ns.",
    sendNetwork:
      "No s'ha pogut enviar la reserva. Comprova la connexió i torna-ho a provar.",
  },

  inauguracion: {
    badge: "Esdeveniment Especial · Entrada Lliure",
    titleLine1: "Gran Festa d'",
    titleLine2: "Inauguració",
    heroDate: "Dissabte 6 de juny · Villa Nabo obre les portes",
    heroText:
      "Una nit única per celebrar el naixement de Villa Nabo. Uneix-te a nosaltres en una vetllada plena de carns a la brasa, música, còctels i molta diversió sota el cel d'Arauzo de Torre",
    ctaReserve: "Reservar la meva plaça",
    ctaProgram: "Veure programa",
    facts: [
      { valor: "6 JUN", label: "Data de l'Esdeveniment" },
      { valor: "19:00h", label: "Obertura de Portes" },
      { valor: "LLIURE", label: "Entrada" },
      { valor: "03:00h", label: "Fins a les" },
    ],
    includeTitle: "Què inclou la nit?",
    includeSubtitle: "Tot el que t'espera a la gran obertura de Villa Nabo",
    incluye: [
      "Còctel de benvinguda inclòs",
      "Descompte especial a la carta (20%)",
      "DJ en directe tota la nit",
      "Espectacle sorpresa a mitjanit",
      "Regal d'inauguració per als primers 50 assistents",
      "Fotògraf professional a l'esdeveniment",
    ],
    programTitle: "Programa de la Nit",
    programSubtitle: "Dissabte 6 de juny · Arauzo de Torre, Burgos",
    programa: [
      { titulo: "Obertura de portes", desc: "Benvinguda amb còctel d'inauguració per a tots els assistents" },
      { titulo: "Brindis Inaugural", desc: "Paraules de benvinguda i brindis oficial amb cava de la casa" },
      { titulo: "Servei de Carns", desc: "Obertura de la graella amb els millors talls de la carta" },
      { titulo: "DJ en Directe", desc: "Música electrònica i sessió especial per a la inauguració" },
      { titulo: "Focs i Sorpreses", desc: "Espectacle especial de mitjanit amb sorpreses per als assistents" },
      { titulo: "Tancament", desc: "Fi de la festa inaugural. Fins a la pròxima!" },
    ],
    storyTitle: "Una nit que no oblidaràs",
    storyImgAlt: "Festa d'inauguració",
    storyP1:
      "Villa Nabo neix amb la vocació de ser el punt de trobada de la comarca: un lloc on el foc de la brasa, la bona música i la companyia es fusionen en una experiència única.",
    storyP2:
      "La nit del 6 de juny obrim les portes per primera vegada i volem celebrar-ho a lo gran amb tu. Entrada lliure, però les places són limitades.",
    storyCta: "Reservar la meva plaça gratis",
    finalCtaTitle: "Ens veiem el 6 de juny?",
    finalCtaText:
      "Reserva la teva plaça ara — l'entrada és lliure però l'aforament és limitat.",
    finalCtaButton: "Reservar plaça ara!",
  },
};

export default ca;
