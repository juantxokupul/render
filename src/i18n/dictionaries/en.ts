import type { Dict } from "./index";

// English dictionary — served on villanabo.com.
const en: Dict = {
  meta: {
    title: "Villa Nabo",
    description:
      "Enjoy our finest charcoal-grilled meats in a warm, authentic setting.",
  },

  nav: {
    inicio: "Home",
    menu: "Menu",
    fiestas: "Events",
    arco: "The Arch",
    contacto: "Contact",
    ariaMenu: "Menu",
  },

  banner: {
    title: "GRAND OPENING PARTY",
    date: "Saturday, June 6",
    more: "More info",
  },

  footer: {
    tagline:
      "A rural retreat where the finest charcoal-grilled meats blend with music, cocktails and fun beneath the sunset.",
    pagesTitle: "Pages",
    links: {
      inicio: "Home",
      menu: "Menu",
      fiestas: "Parties & Events",
      arco: "The Branch Arch",
      contacto: "Contact & Reservations",
    },
    findUsTitle: "Find Us",
    addressLine1: "Camino Rural de Villa Nabo, s/n",
    addressLine2: "Arauzo de Torre, Burgos",
    hoursLine1: "Mon–Thu 12–10pm",
    hoursLine2: "Fri–Sat until 3:00am",
    copyright: "© 2026 Villa Nabo · Artisan Charcoal-Grilled Meats",
  },

  home: {
    heroBadge: "Charcoal-grilled meats · Arauzo de Torre",
    heroSubtitle:
      "A rural retreat where the tradition of the grill meets nights of music, cocktails and unforgettable sunsets.",
    ctaReserve: "Book a Table",
    ctaMenu: "View the menu",

    carnesKicker: "The house",
    carnesTitle: "Our Meats",
    carnesText:
      "At Villa Nabo we prepare the finest charcoal-grilled meats with traditional techniques. Every cut is carefully selected to guarantee the highest quality and flavour.",
    carnesItems: [
      "BBQ Ribs",
      "Argentine Asado",
      "Wagyu Beef",
      "Mixed Skewers",
      "Seasonal Meats",
    ],
    carnesImgAlt: "Charcoal-grilled meats",

    atardeceresKicker: "After 7:00pm",
    atardeceresTitle: "Unforgettable Sunsets",
    atardeceresText:
      "When the sun goes down at Villa Nabo, the magic begins. Live music, cocktails and a young crowd ready for a good time.",
    atardeceresCards: [
      { titulo: "Live Music", desc: "Live DJs and bands" },
      { titulo: "Premium Cocktails", desc: "Artisan drinks" },
      { titulo: "Magical Sunset", desc: "Unbeatable views" },
      { titulo: "Young Vibe", desc: "Fun guaranteed" },
    ],

    horariosTitle: "Opening Hours",
    horarios: [
      { titulo: "Daytime Service", horas: "12:00 – 18:00" },
      { titulo: "Evening Service", horas: "19:00 – 02:00" },
      { titulo: "Parties & Events", horas: "Friday to Sunday" },
    ],

    ctaTitle: "Ready to enjoy?",
    ctaText: "Book your table or come celebrate our unforgettable nights",
    ctaContact: "Contact Us",
  },

  menu: {
    heroKicker: "The menu",
    heroTitle: "Our Menu",
    heroSubtitle:
      "Fresh ingredients, artisan techniques and the unique flavour of fire. All prepared with care for you.",
    sections: [
      {
        id: "carnes",
        titulo: "Grilled Meats",
        platos: [
          { nombre: "Beef Entrecôte", desc: "400g dry-aged beef, wood-fired grill", precio: "28€" },
          { nombre: "BBQ Ribs", desc: "Full rack with house sauce", precio: "24€" },
          { nombre: "Wagyu T-Bone", desc: "600g, premium imported cut", precio: "45€" },
          { nombre: "Argentine Asado", desc: "Mixed cuts, pampas style", precio: "32€" },
          { nombre: "Mixed Skewers", desc: "Beef, pork and chicken skewer", precio: "18€" },
        ],
      },
      {
        id: "entrantes",
        titulo: "Starters",
        platos: [
          { nombre: "Charcuterie Board", desc: "Selection of regional Iberian cured meats", precio: "14€" },
          { nombre: "Grilled Bread", desc: "Artisan loaf with herb butter", precio: "5€" },
          { nombre: "Seasonal Salad", desc: "Fresh vegetables from our own garden", precio: "9€" },
          { nombre: "Ham Croquettes", desc: "Homemade, 6 pieces", precio: "8€" },
        ],
      },
      {
        id: "guarniciones",
        titulo: "Sides",
        platos: [
          { nombre: "Patatas Bravas", desc: "With aioli and spicy brava sauce", precio: "6€" },
          { nombre: "Grilled Vegetables", desc: "Courgette, pepper and aubergine", precio: "7€" },
          { nombre: "Mushroom Rice", desc: "Sautéed seasonal mushrooms", precio: "8€" },
          { nombre: "Homemade Fries", desc: "Thick cut, fried in olive oil", precio: "5€" },
        ],
      },
      {
        id: "postres",
        titulo: "Desserts",
        platos: [
          { nombre: "Chocolate Fondant", desc: "With artisan vanilla ice cream", precio: "7€" },
          { nombre: "Cheesecake", desc: "Baked, Basque style", precio: "6€" },
          { nombre: "Seasonal Fruit", desc: "Daily selection with honey", precio: "5€" },
          { nombre: "Artisan Ice Cream", desc: "3 scoops of your choice", precio: "5€" },
        ],
      },
      {
        id: "cocktails",
        titulo: "Cocktails & Drinks",
        platos: [
          { nombre: "House Mojito", desc: "White rum, lime, mint and brown sugar", precio: "9€" },
          { nombre: "Villa Nabo Sangría", desc: "Our own recipe with seasonal fruit", precio: "8€" },
          { nombre: "Premium Gin & Tonic", desc: "Artisan gin with selected botanicals", precio: "10€" },
          { nombre: "Soft Drink / Water", desc: "Variety of soft drinks and mineral water", precio: "3€" },
          { nombre: "House Wine", desc: "Red, white or rosé", precio: "4€/glass" },
        ],
      },
    ],
    ctaTitle: "Ready to book?",
    ctaText: "Book now and secure your experience at Villa Nabo",
    ctaReserve: "Book a Table",
  },

  fiestas: {
    heroKicker: "Every weekend",
    heroTitle: "Parties & Events",
    heroSubtitle:
      "Each week the sunset transforms Villa Nabo into a unique space of music, cocktails and fun.",
    scheduleTitle: "Weekly Programme",
    eventos: [
      {
        dia: "Friday",
        nombre: "Sunset Sessions",
        tipo: "Electronic & Chill",
        desc: "Soft electronic music as the sun sets. Welcome cocktails and tapas.",
      },
      {
        dia: "Saturday",
        nombre: "Fire & Rhythm",
        tipo: "DJ + Open Bar",
        desc: "Villa Nabo's big night. Live DJ, open cocktail bar and the best grilled meat.",
      },
      {
        dia: "Sunday",
        nombre: "Brunch & Grill",
        tipo: "Acoustic Music",
        desc: "Special brunch with select cuts, live acoustic music and the best vibe to close out the weekend.",
      },
    ],
    galleryTitle: "Gallery of Moments",
    galleryAlt: "Moment",
    ctaTitle: "Coming this week?",
    ctaText: "Book your table or get your ticket for the special events",
    ctaReserve: "Book Now",
  },

  contacto: {
    heroKicker: "We're here",
    heroTitle: "Contact & Reservations",
    heroSubtitle:
      "Have questions or want to book your table? We're here to help.",
    infoTitle: "Information",
    infoItems: [
      { titulo: "Address", lineas: ["Camino Rural de Villa Nabo, s/n", "09451 Arauzo de Torre, Burgos"] },
      { titulo: "Phone", lineas: ["+34 666 666 666", "Monday to Sunday 10:00 - 23:00"] },
      { titulo: "Email", lineas: ["hola@villanabo.es", "We reply within 24h"] },
    ],
    hoursTitle: "Opening Hours",
    horarios: [
      { dia: "Monday – Thursday", hora: "12:00 – 22:00" },
      { dia: "Friday", hora: "12:00 – 02:00" },
      { dia: "Saturday", hora: "11:00 – 03:00" },
      { dia: "Sunday", hora: "11:00 – 20:00" },
    ],
    formTitleDefault: "Book Your Table",
    formTitleSent: "Reservation Received!",
    formSentText: "We'll confirm your table by email within 24 hours.",
    labelName: "Name",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelDate: "Date",
    labelPeople: "Guests",
    labelMessage: "Message or special request",
    placeholderName: "Your name",
    placeholderEmail: "email@example.com",
    placeholderMessage: "Any allergies, special event, table preference...?",
    personSingular: "guest",
    personPlural: "guests",
    submit: "Send Reservation",
    submitting: "Sending...",
    errorsForm: {
      nameShort: "Enter your name.",
      nameLink: "The name cannot contain links.",
      email: "Enter a valid email.",
      phone: "Enter a valid phone number.",
      dateEmpty: "Choose a date.",
      datePast: "The date cannot be in the past.",
      messageLong: "The message is too long.",
      messageLink: "The message cannot contain links.",
    },
    sendFail: "Could not send the reservation. Try again or call us.",
    sendNetwork:
      "Could not send the reservation. Check your connection and try again.",
  },

  inauguracion: {
    badge: "Special Event · Free Entry",
    titleLine1: "Grand Opening",
    titleLine2: "Party",
    heroDate: "Saturday, June 6 · Villa Nabo opens its doors",
    heroText:
      "A unique night to celebrate the birth of Villa Nabo. Join us for an evening full of grilled meats, music, cocktails and plenty of fun under the Arauzo de Torre sky.",
    ctaReserve: "Reserve my spot",
    ctaProgram: "View programme",
    facts: [
      { valor: "JUN 6", label: "Event Date" },
      { valor: "19:00h", label: "Doors Open" },
      { valor: "FREE", label: "Entry" },
      { valor: "03:00h", label: "Until" },
    ],
    includeTitle: "What does the night include?",
    includeSubtitle: "Everything that awaits you at Villa Nabo's grand opening",
    incluye: [
      "Welcome cocktail included",
      "Special 20% menu discount",
      "Live DJ all night",
      "Surprise show at midnight",
      "Opening gift for the first 50 guests",
      "Professional photographer at the event",
    ],
    programTitle: "The Night's Programme",
    programSubtitle: "Saturday, June 6 · Arauzo de Torre, Burgos",
    programa: [
      { titulo: "Doors open", desc: "Welcome with an opening cocktail for all guests" },
      { titulo: "Opening Toast", desc: "Welcome words and official toast with house cava" },
      { titulo: "Meat Service", desc: "The grill opens with the best cuts on the menu" },
      { titulo: "Live DJ", desc: "Electronic music and a special set for the opening" },
      { titulo: "Fireworks & Surprises", desc: "Special midnight show with surprises for guests" },
      { titulo: "Closing", desc: "End of the opening party. See you next time!" },
      { titulo: "After", desc: "Those who still have energy can continue the party at pub Cochinillo (Arauzo de Miel)" },
    ],
    storyTitle: "A night you won't forget",
    storyImgAlt: "Opening party",
    storyP1:
      "Villa Nabo is born with the calling to be the region's meeting point: a place where the fire of the grill, great music and good company blend into a unique experience.",
    storyP2:
      "On the night of June 6 we open our doors for the first time and we want to celebrate it in style with you. Free entry, but spots are limited.",
    storyCta: "Reserve my free spot",
    finalCtaTitle: "See you on June 6?",
    finalCtaText:
      "Reserve your spot now — entry is free but capacity is limited.",
    finalCtaButton: "Reserve a spot now!",
  },

  arco: {
    heroKicker: "The 'enramada' tradition",
    heroTitle: "The Arch",
    heroSubtitle:
      "A step-by-step guide to raising the green arch that crowns the streets during the festivities of Arauzo de Torre.",

    introTitle: "An arch that brings the village together",
    introP1:
      "The branch arch, or 'enramada', is one of the most beautiful sights of the festivities: a vault of green leaves spanning the street, welcoming neighbours and visitors alike. It is built as a team, almost always on the morning of the first day of the fiestas.",
    introP2:
      "You don't need to be an expert: with good branches, a couple of solid anchor points and a few hours of teamwork, any group of friends can raise their own. Here is everything you need to know.",

    factsTitle: "At a glance",
    facts: [
      { valor: "2–3 h", label: "Build time" },
      { valor: "3–5", label: "People" },
      { valor: "Poplar", label: "Best branch" },
      { valor: "Same day", label: "Cut the branches" },
    ],

    materialsTitle: "What you'll need",
    materialsSubtitle: "Gather everything before you start; it saves a lot of trips.",
    materials: [
      {
        nombre: "Green, leafy branches",
        desc: "Poplar, willow or birch: long, flexible branches with plenty of leaves. Cut them the same morning you build so they arrive nice and green.",
      },
      {
        nombre: "Two anchor points",
        desc: "A narrow street between two houses is ideal. Use balconies, window grilles or drainpipes, or drive two sturdy posts into each side.",
      },
      {
        nombre: "Rope, wire and zip ties",
        desc: "Strong rope or steel cable for the frame, and zip ties or thin wire to fasten the branches so they don't come loose.",
      },
      {
        nombre: "A curved structure",
        desc: "A long flexible rod, a PVC pipe, or two long branches tied together in the middle to form the round or pointed arch shape.",
      },
      {
        nombre: "Cutting tools",
        desc: "Pruning shears, a pair of two-handed loppers and a handsaw for the thicker branches.",
      },
      {
        nombre: "Ladder and gloves",
        desc: "A stable ladder to reach the top and gloves to handle the branches without scratches.",
      },
    ],

    stepsTitle: "Step by step",
    stepsSubtitle: "Follow the order: from the base up to the top, and from the outside in.",
    steps: [
      {
        titulo: "Choose the spot and measure the gap",
        desc: "Look for a narrow street or a passage between two façades. Measure the distance between the two sides: that will be the width of the arch. Identify firm anchor points on each side.",
      },
      {
        titulo: "Cut the branches the same day",
        desc: "Cut long, leafy branches first thing in the morning. Keep them in the shade, or with the stems in water, until you build so they don't wilt.",
      },
      {
        titulo: "Raise the frame of the arch",
        desc: "Stretch a taut rope or cable from one side to the other, or bend a flexible rod (or two long branches tied in the middle) into the arch shape. Fix it firmly to both anchors: it must hold the weight and the wind.",
      },
      {
        titulo: "Sort the branches",
        desc: "Separate the branches: the longest and straightest for the body of the arch, the leafy medium ones to fill it in, and the small ones for the finishing touches.",
      },
      {
        titulo: "Tie the large branches first",
        desc: "Start at the base on each side and work towards the centre. Tie the large branches to the frame pointing upward, overlapping each one onto the stem of the previous, like roof tiles.",
      },
      {
        titulo: "Fill in and thicken the arch",
        desc: "Keep adding medium and small branches, overlapping them to cover the gaps and any bare stems. The denser it is, the greener and more beautiful it looks from below.",
      },
      {
        titulo: "Close the top",
        desc: "Bring branches from both sides until they meet at the top, forming the point or crown of the arch. Finish the join with several small, well-tied branches.",
      },
      {
        titulo: "Check and secure",
        desc: "Go over all the fastenings and tighten any that are loose. Make sure nothing hangs over the roadway or could fall onto people.",
      },
      {
        titulo: "Decorate as you like",
        desc: "Add bunting, garlands, flowers or ribbons in your group's colours, as in the photo. It's the finishing touch that gives the arch its festive spirit.",
      },
      {
        titulo: "Water it and enjoy",
        desc: "Mist the leaves with water to keep them green throughout the festivities. When they start to dry out, take the arch down and compost the branches.",
      },
    ],

    tipsTitle: "Tips and safety",
    tips: [
      "Always work as a team: someone holds the ladder while another ties up high.",
      "Watch out for power lines! Many streets have cables running across them: keep branches and tools well away from them.",
      "Don't completely block access for emergency vehicles, and don't cover signs or streetlights.",
      "Use zip ties or wire, not just thin rope: branches are heavier than they look and the wind pulls hard.",
      "Ask the town hall or your neighbours for permission if you'll be anchoring to façades or balconies.",
      "Build the arch no more than a day in advance: cut branches dry out within a few days.",
    ],

    ctaTitle: "Shall we build it together?",
    ctaText: "Come and celebrate the festivities at Villa Nabo, under the arch, with the finest grill.",
    ctaButton: "Book a Table",
  },
};

export default en;
