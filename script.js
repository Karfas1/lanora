(function () {
  "use strict";

  /* ---------- Content: edit this block only ---------- */
  var SITE = {
    links: {
      instagram: "https://www.instagram.com/lanora.gelateria",
      whatsapp: "https://wa.me/0665716500",
      map: "https://maps.google.com/?cid=3734480779555110653&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=fr&gl=MA&source=embed",
    },
    intro: {
      en: "From coffee and matcha to gelato, desserts, and signature creations, the LANORA menu is made for every kind of craving. Explore your favorites, discover something new, and make every visit part of a Sweet Memory.",
      fr: "Du café et du matcha au gelato, aux desserts et aux créations signature, le menu LANORA est pensé pour chaque envie. Découvrez vos favoris, laissez-vous surprendre et faites de chaque visite un Sweet Memory.",
    },
    signatures: [
      {
        name: "Fondant du Chef (Pkhaline Argan)",
        price: 100,
        img: "Images/fchefs.png",
      },
      {
        name: "Cake London Lanora",
        price: 60,
        img: "Images/cakelondonlanora.png",
      },
      { name: "Pistachio", price: 25, img: "Images/pistachiogelato.jpg" },
      {
        name: "Fondant Kunafa Pistache Ice Cream Pistache",
        price: 77,
        img: "Images/FondanticecReam.png",
      },
    ],
    faq: {
      en: [
        [
          "What is Lanora ?",
          "LANORA is a gelateria and coffee space built around simple pleasures, good gelato, carefully made coffee, matcha, and desserts, and moments worth remembering.",
        ],
        [
          "What makes Lanora different?",
          "We care as much about the experience as the product. From the space to the presentation, every detail is designed to make an ordinary pause feel a little more special",
        ],
        [
          "What does “Sweet Memories” mean?",
          "It’s the idea behind LANORA: the best moments are often the simplest ones — a coffee with someone, a gelato after a long day, or a place you naturally want to come back to.",
        ],
      ],
      fr: [
        [
          "Qu’est-ce que Lanora ?",
          "LANORA est un espace de café et de glacier pensé autour des plaisirs simples : bon gelato, café soigné, matcha et desserts, dans un cadre fait pour créer de beaux souvenirs.",
        ],
        [
          "Qu’est-ce qui rend Lanora spécial ?",
          "Nous prenons autant soin de l’expérience que du produit. De l’espace à la présentation, chaque détail est pensé pour transformer une pause ordinaire en un instant plus précieux.",
        ],
        [
          "Que signifie “Sweet Memories” ?",
          "C’est l’idée derrière LANORA : les meilleurs moments sont souvent les plus simples — un café avec quelqu’un, un gelato après une longue journée, ou un endroit où l’on a envie de revenir.",
        ],
      ],
    },
    text: {
      en: {
        homeTitle: "Welcome to Lanora",
        homeIntro:
          "Come for the gelato, stay for the moment. From coffee and matcha to desserts and signature creations, every visit is designed to feel a little special. Sweet Memories, made here.",
        exploreMenu: "Explore Menu",
        signaturesTitle: "Signatures of the house",
        faqTitle: "FAQ",
        menuTitle: "Our Menu",
        home: "Home",
        viewAllCategories: "View All Categories",
        coffee: "Coffee",
        english: "English",
        french: "Français",
      },
      fr: {
        homeTitle: "Bienvenue à Lanora",
        homeIntro:
          "Venez pour le gelato et restez pour l’instant. Du café au matcha, en passant par les desserts et les créations signature, chaque visite est pensée pour se sentir un peu spéciale. Sweet Memories, créés ici.",
        exploreMenu: "Découvrir le menu",
        signaturesTitle: "Les signatures de la maison",
        faqTitle: "FAQ",
        menuTitle: "Notre menu",
        home: "Accueil",
        viewAllCategories: "Voir toutes les catégories",
        coffee: "Café",
        english: "English",
        french: "Français",
      },
    },
  };

  function makeItems(list, price) {
    return list.map(function (item) {
      if (typeof item === "string") {
        return { title: item, price: price || 0, img: "" };
      }

      return {
        title: item.title || item.name || "",
        price: typeof item.price !== "undefined" ? item.price : price || 0,
        img: item.img || item.image || "",
      };
    });
  }

  function currentLang() {
    return document.body.getAttribute("data-lang") || "fr";
  }

  var UI_TEXT_TRANSLATIONS = {
    homeTitle: "Bienvenue \u00e0 Lanora",
    homeIntro:
      "Venez pour le gelato et restez pour l\u2019instant. Du caf\u00e9 au matcha, en passant par les desserts et les cr\u00e9ations signature, chaque visite est pens\u00e9e pour \u00eatre un moment sp\u00e9cial. De doux souvenirs, cr\u00e9\u00e9s ici.",
    exploreMenu: "D\u00e9couvrir le menu",
    signaturesTitle: "Les signatures de la maison",
    faqTitle: "Questions fr\u00e9quentes",
    menuTitle: "Notre menu",
    home: "Accueil",
    viewAllCategories: "Voir toutes les cat\u00e9gories",
    coffee: "Caf\u00e9",
    iceCream: "Glace",
    otherMenu: "Autre menu",
    addToCart: "Ajouter au panier",
    addedToCart:
      "L\u2019article a \u00e9t\u00e9 ajout\u00e9 \u00e0 votre panier",
    scroll: "D
