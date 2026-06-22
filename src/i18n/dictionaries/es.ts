// Spanish dictionary — the canonical shape. `en` and `ca` must match this
// structure exactly (enforced by the `Dict` type in ./index.ts).
const es = {
  meta: {
    title: "Villa Nabo",
    description:
      "Disfruta de nuestras mejores carnes en un ambiente acogedor y auténtico.",
  },

  nav: {
    inicio: "Inicio",
    menu: "Menú",
    fiestas: "Fiestas",
    arco: "El Arco",
    contacto: "Contacto",
    ariaMenu: "Menú",
  },

  banner: {
    title: "GRAN FIESTA DE INAUGURACIÓN",
    date: "Sábado 6 de Junio",
    more: "Más info",
  },

  footer: {
    tagline:
      "Un refugio rural donde las mejores carnes a la brasa se fusionan con música, cocktails y diversión bajo el atardecer.",
    pagesTitle: "Páginas",
    links: {
      inicio: "Inicio",
      menu: "Menú",
      fiestas: "Fiestas & Eventos",
      arco: "El Arco",
      contacto: "Contacto & Reservas",
    },
    findUsTitle: "Encuéntranos",
    addressLine1: "Camino Rural de Villa Nabo, s/n",
    addressLine2: "Arauzo de Torre, Burgos",
    hoursLine1: "Lun–Jue 12–22h",
    hoursLine2: "Vie–Sáb hasta las 3:00",
    copyright: "© 2026 Villa Nabo · Carnes a la Brasa Artesanales",
  },

  home: {
    heroBadge: "Carnes a la brasa · Arauzo de Torre",
    heroSubtitle:
      "Un refugio rural donde la tradición de la brasa se encuentra con noches de música, cocktails y atardeceres inolvidables.",
    ctaReserve: "Reservar Mesa",
    ctaMenu: "Ver la carta",

    carnesKicker: "La casa",
    carnesTitle: "Nuestras Carnes",
    carnesText:
      "En Villa Nabo preparamos las mejores carnes a la brasa con técnicas tradicionales. Cada pieza es seleccionada cuidadosamente para garantizar la máxima calidad y sabor.",
    carnesItems: [
      "Costillas BBQ",
      "Asado Argentino",
      "Carne Wagyu",
      "Pinchos Mixtos",
      "Carnes de Temporada",
    ],
    carnesImgAlt: "Carnes a la brasa",

    atardeceresKicker: "Después de las 19:00",
    atardeceresTitle: "Atardeceres Inolvidables",
    atardeceresText:
      "Cuando cae el sol en Villa Nabo, la magia comienza. Música en vivo, cocktails y gente joven lista para pasarlo bien.",
    atardeceresCards: [
      { titulo: "Música en Vivo", desc: "DJ's y bandas en vivo" },
      { titulo: "Cocktails Premium", desc: "Bebidas artesanales" },
      { titulo: "Atardecer Mágico", desc: "Vistas incomparables" },
      { titulo: "Ambiente Joven", desc: "Diversión garantizada" },
    ],

    horariosTitle: "Horarios",
    horarios: [
      { titulo: "Servicio de Día", horas: "12:00 – 18:00" },
      { titulo: "Servicio de Noche", horas: "19:00 – 02:00" },
      { titulo: "Fiestas & Eventos", horas: "Viernes a Domingo" },
    ],

    ctaTitle: "¿Listo para disfrutar?",
    ctaText:
      "Reserva tu mesa o ven a celebrar nuestras noches inolvidables",
    ctaContact: "Contáctanos",
  },

  menu: {
    heroKicker: "La carta",
    heroTitle: "Nuestra Carta",
    heroSubtitle:
      "Ingredientes frescos, técnicas artesanales y el sabor único del fuego. Todo preparado con cariño para ti.",
    sections: [
      {
        id: "carnes",
        titulo: "Carnes a la Brasa",
        platos: [
          { nombre: "Entrecot de Vaca", desc: "400g de carne madurada, brasa de leña", precio: "28€" },
          { nombre: "Costillas BBQ", desc: "Costillar entero con salsa de la casa", precio: "24€" },
          { nombre: "Chuletón Wagyu", desc: "600g, pieza premium importada", precio: "45€" },
          { nombre: "Asado Argentino", desc: "Cortes mixtos al estilo pampeano", precio: "32€" },
          { nombre: "Pinchos Mixtos", desc: "Brocheta de res, cerdo y pollo", precio: "18€" },
        ],
      },
      {
        id: "entrantes",
        titulo: "Entrantes",
        platos: [
          { nombre: "Tabla de Embutidos", desc: "Selección de ibéricos de la región", precio: "14€" },
          { nombre: "Pan de Brasa", desc: "Hogaza artesana con mantequilla de hierbas", precio: "5€" },
          { nombre: "Ensalada de Temporada", desc: "Verduras frescas del huerto propio", precio: "9€" },
          { nombre: "Croquetas de Jamón", desc: "Elaboración casera, 6 unidades", precio: "8€" },
        ],
      },
      {
        id: "guarniciones",
        titulo: "Guarniciones",
        platos: [
          { nombre: "Patatas Bravas", desc: "Con alioli y salsa brava", precio: "6€" },
          { nombre: "Verduras a la Brasa", desc: "Calabacín, pimiento y berenjena", precio: "7€" },
          { nombre: "Arroz con Setas", desc: "Setas de temporada salteadas", precio: "8€" },
          { nombre: "Patatas Fritas Caseras", desc: "Corte grueso, fritas en aceite de oliva", precio: "5€" },
        ],
      },
      {
        id: "postres",
        titulo: "Postres",
        platos: [
          { nombre: "Coulant de Chocolate", desc: "Con helado de vainilla artesano", precio: "7€" },
          { nombre: "Tarta de Queso", desc: "Al horno, estilo vasco", precio: "6€" },
          { nombre: "Fruta de Temporada", desc: "Selección del día con miel", precio: "5€" },
          { nombre: "Helados Artesanos", desc: "3 bolas a elegir", precio: "5€" },
        ],
      },
      {
        id: "cocktails",
        titulo: "Cocktails & Bebidas",
        platos: [
          { nombre: "Mojito de la Casa", desc: "Ron blanco, lima, menta y azúcar moreno", precio: "9€" },
          { nombre: "Sangría Villa Nabo", desc: "Receta propia con frutas de temporada", precio: "8€" },
          { nombre: "Gin Tonic Premium", desc: "Ginebra artesana con botánicas seleccionadas", precio: "10€" },
          { nombre: "Refresco / Agua", desc: "Variedad de refrescos y agua mineral", precio: "3€" },
          { nombre: "Vino de la Casa", desc: "Tinto, blanco o rosado", precio: "4€/copa" },
        ],
      },
    ],
    ctaTitle: "¿Listo para reservar?",
    ctaText: "Reserva ahora y asegura tu experiencia en Villa Nabo",
    ctaReserve: "Reservar Mesa",
  },

  fiestas: {
    heroKicker: "Cada fin de semana",
    heroTitle: "Fiestas & Eventos",
    heroSubtitle:
      "Cada semana el atardecer transforma Villa Nabo en un espacio único de música, cocktails y diversión.",
    scheduleTitle: "Programación Semanal",
    eventos: [
      {
        dia: "Viernes",
        nombre: "Sunset Sessions",
        tipo: "Electrónica & Chill",
        desc: "Música electrónica suave mientras el sol se pone. Cocktails de bienvenida y pinchos.",
      },
      {
        dia: "Sábado",
        nombre: "Fuego & Ritmo",
        tipo: "DJ + Open Bar",
        desc: "La gran noche de Villa Nabo. DJ en vivo, barra libre de cocktails y la mejor carne a la brasa.",
      },
      {
        dia: "Domingo",
        nombre: "Brunch & Brasa",
        tipo: "Música Acústica",
        desc: "Brunch especial con cortes selectos, música en vivo acústica y el mejor ambiente para despedir el fin de semana.",
      },
    ],
    galleryTitle: "Galería de Momentos",
    galleryAlt: "Momento",
    ctaTitle: "¿Vienes esta semana?",
    ctaText:
      "Reserva tu mesa o consigue tu entrada para los eventos especiales",
    ctaReserve: "Reservar Ahora",
  },

  contacto: {
    heroKicker: "Estamos aquí",
    heroTitle: "Contacto & Reservas",
    heroSubtitle:
      "¿Tienes preguntas o quieres reservar tu mesa? Estamos aquí para ayudarte.",
    infoTitle: "Información",
    infoItems: [
      { titulo: "Dirección", lineas: ["Camino Rural de Villa Nabo, s/n", "09451 Arauzo de Torre, Burgos"] },
      { titulo: "Teléfono", lineas: ["+34 666 666 666", "Lunes a Domingo 10:00 - 23:00"] },
      { titulo: "Email", lineas: ["hola@villanabo.es", "Respondemos en menos de 24h"] },
    ],
    hoursTitle: "Horarios",
    horarios: [
      { dia: "Lunes – Jueves", hora: "12:00 – 22:00" },
      { dia: "Viernes", hora: "12:00 – 02:00" },
      { dia: "Sábado", hora: "11:00 – 03:00" },
      { dia: "Domingo", hora: "11:00 – 20:00" },
    ],
    formTitleDefault: "Reserva tu Mesa",
    formTitleSent: "¡Reserva Recibida!",
    formSentText:
      "Te confirmaremos tu mesa por email en menos de 24 horas.",
    labelName: "Nombre",
    labelPhone: "Teléfono",
    labelEmail: "Email",
    labelDate: "Fecha",
    labelPeople: "Personas",
    labelMessage: "Mensaje o petición especial",
    placeholderName: "Tu nombre",
    placeholderEmail: "correo@ejemplo.com",
    placeholderMessage: "¿Alguna alergia, evento especial, preferencia de mesa...?",
    personSingular: "persona",
    personPlural: "personas",
    submit: "Enviar Reserva",
    submitting: "Enviando...",
    errorsForm: {
      nameShort: "Introduce tu nombre.",
      nameLink: "El nombre no puede contener enlaces.",
      email: "Introduce un email válido.",
      phone: "Introduce un teléfono válido.",
      dateEmpty: "Elige una fecha.",
      datePast: "La fecha no puede ser anterior a hoy.",
      messageLong: "El mensaje es demasiado largo.",
      messageLink: "El mensaje no puede contener enlaces.",
    },
    sendFail:
      "No se pudo enviar la reserva. Inténtalo de nuevo o llámanos por teléfono.",
    sendNetwork:
      "No se pudo enviar la reserva. Comprueba tu conexión e inténtalo de nuevo.",
  },

  inauguracion: {
    badge: "Evento Especial · Entrada Libre",
    titleLine1: "Gran Fiesta de",
    titleLine2: "Inauguración",
    heroDate: "Sábado 6 de Junio · Villa Nabo abre sus puertas",
    heroText:
      "Una noche única para celebrar el nacimiento de Villa Nabo. Únete a nosotros en una velada llena de carnes a la brasa, música, cocktails y mucha diversión bajo el cielo de Arauzo de Torre",
    ctaReserve: "Reservar mi plaza",
    ctaProgram: "Ver programa",
    facts: [
      { valor: "6 JUN", label: "Fecha del Evento" },
      { valor: "19:00h", label: "Apertura de Puertas" },
      { valor: "LIBRE", label: "Entrada" },
      { valor: "03:00h", label: "Hasta las" },
    ],
    includeTitle: "¿Qué incluye la noche?",
    includeSubtitle: "Todo lo que te espera en la gran apertura de Villa Nabo",
    incluye: [
      "Cocktail de bienvenida incluido",
      "Descuento especial en carta (20%)",
      "DJ en vivo toda la noche",
      "Espectáculo sorpresa a medianoche",
      "Regalo de inauguración para los primeros 50 asistentes",
      "Fotógrafo profesional en el evento",
    ],
    programTitle: "Programa de la Noche",
    programSubtitle: "Sábado 6 de Junio · Arauzo de Torre, Burgos",
    programa: [
      { titulo: "Apertura de puertas", desc: "Bienvenida con cocktail de inauguración para todos los asistentes" },
      { titulo: "Brindis Inaugural", desc: "Palabras de bienvenida y brindis oficial con cava de la casa" },
      { titulo: "Servicio de Carnes", desc: "Apertura de la parrilla con los mejores cortes de la carta" },
      { titulo: "DJ en Vivo", desc: "Música electrónica y sesión especial para la inauguración" },
      { titulo: "Fuegos & Sorpresas", desc: "Espectáculo especial de medianoche con sorpresas para los asistentes" },
      { titulo: "Cierre", desc: "Fin de la fiesta inaugural. ¡Hasta la próxima!" },
      { titulo: "After", desc: "A los que les queden fuerzas, pueden continuar la fiesta en pub Cochinillo (Arauzo de Miel)" },
    ],
    storyTitle: "Una noche que no olvidarás",
    storyImgAlt: "Fiesta de inauguración",
    storyP1:
      "Villa Nabo nace con la vocación de ser el punto de encuentro de la comarca: un lugar donde el fuego de la brasa, la buena música y la compañía se fusionan en una experiencia única.",
    storyP2:
      "La noche del 6 de Junio abrimos nuestras puertas por primera vez y queremos celebrarlo a lo grande contigo. Entrada libre, pero las plazas son limitadas.",
    storyCta: "Reservar mi plaza gratis",
    finalCtaTitle: "¿Nos vemos el 6 de Junio?",
    finalCtaText:
      "Reserva tu plaza ahora — la entrada es libre pero el aforo es limitado.",
    finalCtaButton: "¡Reservar plaza ahora!",
  },

  arco: {
    heroKicker: "La tradición de la enramada",
    heroTitle: "El Arco",
    heroSubtitle:
      "Guía paso a paso para levantar el arco verde que corona las calles en las fiestas de Arauzo de Torre.",

    introTitle: "Un arco que une al pueblo",
    introP1:
      "El arco de ramas, o enramada, es una de las estampas más bonitas de las fiestas: una bóveda de hojas verdes que cruza la calle y da la bienvenida a vecinos y forasteros. Se monta en cuadrilla, casi siempre la mañana del primer día de fiestas.",
    introP2:
      "No hace falta ser un experto: con buenas ramas, unos puntos firmes donde anclar y un par de horas de trabajo en equipo, cualquier peña puede levantar el suyo. Aquí tienes todo lo que necesitas saber.",

    factsTitle: "De un vistazo",
    facts: [
      { valor: "2–3 h", label: "Tiempo de montaje" },
      { valor: "3–5", label: "Personas" },
      { valor: "Chopo", label: "Rama ideal" },
      { valor: "Mismo día", label: "Cortar las ramas" },
    ],

    materialsTitle: "Lo que vas a necesitar",
    materialsSubtitle: "Reúne todo el material antes de empezar; ahorra muchos viajes.",
    materials: [
      {
        nombre: "Ramas verdes y frondosas",
        desc: "Chopo o álamo, sauce o abedul: ramas largas, flexibles y con mucha hoja. Córtalas la misma mañana del montaje para que lleguen bien verdes.",
      },
      {
        nombre: "Dos puntos de anclaje",
        desc: "Una calle estrecha entre dos casas es ideal. Aprovecha balcones, rejas o bajantes, o clava dos postes resistentes a cada lado.",
      },
      {
        nombre: "Cuerda, alambre y bridas",
        desc: "Cuerda fuerte o cable de acero para el armazón, y bridas o alambre fino para atar las ramas sin que se suelten.",
      },
      {
        nombre: "Una estructura curva",
        desc: "Una varilla larga y flexible, tubo de PVC o dos ramas largas atadas en el centro para dar la forma de arco o de ojiva.",
      },
      {
        nombre: "Herramientas de corte",
        desc: "Tijeras de podar, una podadora de dos manos y un serrucho para las ramas más gruesas.",
      },
      {
        nombre: "Escalera y guantes",
        desc: "Una escalera estable para llegar a lo alto y guantes para manejar las ramas sin arañazos.",
      },
    ],

    stepsTitle: "Paso a paso",
    stepsSubtitle: "Sigue el orden: de la base hacia la cima, y de fuera hacia dentro.",
    steps: [
      {
        titulo: "Elige el lugar y mide el hueco",
        desc: "Busca una calle estrecha o un paso entre dos fachadas. Mide la distancia entre los dos lados: ese será el ancho del arco. Localiza puntos firmes de anclaje a cada lado.",
      },
      {
        titulo: "Corta las ramas el mismo día",
        desc: "Corta ramas largas y bien pobladas de hoja a primera hora. Mantenlas a la sombra, o con los troncos en agua, hasta el montaje para que no se mustien.",
      },
      {
        titulo: "Levanta el armazón del arco",
        desc: "Cruza una cuerda o cable tenso de un lado a otro, o curva una varilla flexible (o dos ramas largas atadas en el centro) hasta formar el arco. Fíjalo bien a los dos anclajes: debe aguantar el peso y el viento.",
      },
      {
        titulo: "Clasifica las ramas",
        desc: "Separa las ramas: las más largas y rectas para el cuerpo del arco, las frondosas medianas para rellenar y las pequeñas para los remates.",
      },
      {
        titulo: "Ata las ramas grandes primero",
        desc: "Empieza por la base de cada lado y sube hacia el centro. Ata las ramas grandes al armazón apuntando hacia arriba, montando cada una sobre el tronco de la anterior, como tejas.",
      },
      {
        titulo: "Rellena y tupe el arco",
        desc: "Ve añadiendo ramas medianas y pequeñas, solapándolas para tapar los huecos y los troncos vistos. Cuanto más tupido, más bonito y verde se ve desde abajo.",
      },
      {
        titulo: "Cierra la cima",
        desc: "Lleva ramas desde los dos lados hasta que se encuentren arriba, formando la punta o corona del arco. Remata la unión con varias ramas pequeñas bien atadas.",
      },
      {
        titulo: "Repasa y asegura",
        desc: "Revisa todos los amarres y aprieta los que estén flojos. Asegúrate de que nada cuelga sobre la calzada ni puede caerse sobre la gente.",
      },
      {
        titulo: "Decora a tu gusto",
        desc: "Añade banderines, guirnaldas, flores o cintas con los colores de la peña, como en la foto. Es el toque final que le da fiesta al arco.",
      },
      {
        titulo: "Riega y disfruta",
        desc: "Rocía las hojas con agua para mantenerlas verdes durante las fiestas. Cuando empiecen a secarse, desmonta el arco y lleva las ramas a compostar.",
      },
    ],

    tipsTitle: "Consejos y seguridad",
    tips: [
      "Trabajad siempre en grupo: alguien sujeta la escalera mientras otro ata en alto.",
      "¡Cuidado con los cables eléctricos! En muchas calles cruzan tendidos: mantén las ramas y las herramientas lejos de ellos.",
      "No bloquees del todo el paso de vehículos de emergencia ni tapes señales o farolas.",
      "Usa bridas o alambre, no solo cuerda fina: las ramas pesan más de lo que parece y el viento tira.",
      "Pide permiso al ayuntamiento o a los vecinos si vas a anclar en fachadas o balcones.",
      "Monta el arco como mucho un día antes: las ramas cortadas se secan en pocos días.",
    ],

    ctaTitle: "¿Lo montamos juntos?",
    ctaText: "Ven a celebrar las fiestas a Villa Nabo, debajo del arco, con la mejor brasa.",
    ctaButton: "Reservar Mesa",
  },
};

export default es;
