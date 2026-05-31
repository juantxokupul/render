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
};

export default en;
