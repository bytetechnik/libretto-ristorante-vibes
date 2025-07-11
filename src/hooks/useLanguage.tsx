import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    home: "Startseite",
    about: "Über uns",
    menu: "Speisekarte",
    gallery: "Galerie",
    contact: "Kontakt",
    reserveTable: "Tisch reservieren",
    
    // Footer
    contactUs: "Kontakt",
    openingHours: "Öffnungszeiten",
    mondayToSaturday: "Montag - Samstag",
    closedOn: "Geschlossen am",
    sundays: "Sonntag",
    footerDescription: "Erleben Sie den authentischen Geschmack Italiens in jedem Schluck und Bissen. Unsere Leidenschaft für traditionelle italienische Kaffeekultur trifft auf moderne kulinarische Exzellenz.",
    footerCopyright: "© 2024 Café Libretto. Alle Rechte vorbehalten. Mit ❤️ von ByteTechnik.de.",
    
    // Contact Page
    visitUs: "Besuchen Sie uns",
    yourStoryAwaits: "Ihre Geschichte wartet im Café Libretto",
    contactInformation: "Kontaktinformationen",
    address: "Adresse",
    phone: "Telefon",
    email: "E-Mail",
    howToReachUs: "So erreichen Sie uns",
    publicTransport: "Öffentliche Verkehrsmittel",
    byCar: "Mit dem Auto",
    fromAirport: "Vom Flughafen",
    locatedInFrankfurt: "Im historischen Frankfurter Stadtkern gelegen",
    parking: "Parkplatz:",
    addressForGps: "Adresse für GPS:",
    getDirections: "Route planen",
    findUsInOldTown: "Finden Sie uns in Frankfurts Altstadt",
    oldTownDescription: "Wir befinden uns im Herzen von Frankfurts historischem Viertel, nur wenige Schritte vom berühmten Römerberg und dem Frankfurter Dom entfernt.",
    visitNeighborhood: "Besuchen Sie unsere Nachbarschaft",
    neighborhoodDescription: "Während Sie hier sind, erkunden Sie den historischen Römerberg, besuchen Sie den Frankfurter Dom oder stöbern Sie in den nahegelegenen Museen. Unser Café ist der perfekte Ausgangspunkt für die Entdeckung der Frankfurter Altstadt.",
    inHeartOfHistory: "Im Herzen der Geschichte",
    
    // Gallery Page
    ourGallery: "Unsere Galerie",
    memoriesInEveryCorner: "Erinnerungen in jeder Ecke",
    cafeInterior: "Café Interieur",
    cafeInteriorDesc: "Warme und einladende Atmosphäre mit modernem Design",
    coffeeArtistry: "Kaffee-Kunst",
    coffeeArtistryDesc: "Fachmännisch zubereitete Getränke mit Vintage-Ausrüstung",
    freshPastries: "Frisches Gebäck",
    freshPastriesDesc: "Tägliche Auswahl an handwerklichen Kuchen und Leckereien",
    communityGathering: "Gemeinschaftstreff",
    communityGatheringDesc: "Wo Geschichten bei großartigem Kaffee zum Leben erwachen",
    capturingMoments: "Momente einfangen",
    capturingMomentsDesc: "Jede Ecke des Café Libretto erzählt eine Geschichte. Vom sanften Dampf des frisch gebrühten Espressos bis zu den warmen Gesprächen über hausgemachtes Gebäck schaffen diese Momente das Herz unseres kleinen Buches.",
    librettoPages: "Wie Seiten in einem Libretto fängt jedes Bild eine Szene aus unserer täglichen Oper der Gastfreundschaft und Handwerkskunst ein.",
    
    // About Page
    aboutLibretto: "Über Libretto",
    littleBookWhereStories: "\"Kleines Buch\" - Wo Geschichten zum Leben erwachen",
    theEtymology: "Die Etymologie",
    librettoEuphonious: "Libretto ist das wohlklingende Wort für",
    littleBook: "\"kleines Buch\"",
    inParticularRefers: "Im Besonderen bezieht sich dies auf die Texte oder Geschichten, die von den sogenannten Librettisten für Oper, Ballett oder Pantomime geschrieben werden.",
    sinceSungWord: "Da das gesungene Wort immer länger ist als das geschriebene Wort, sind diese \"Libretti\" gewöhnlich kürzer als ein Roman. So entstand der Begriff \"Libretto\" – eine Verkleinerungsform des italienischen Wortes",
    libro: "\"libro\"",
    book: "(Buch)",
    emergedBeginning: "bereits zu Beginn des 18. Jahrhunderts.",
    ourPhilosophy: "Unsere Philosophie",
    justAsLibrettists: "Genau wie Librettisten es immer verstanden haben, Opern- und Ballettpublikum mit ihren spannenden oder mitreißenden Geschichten zu fesseln, möchten wir Ihre Sinne einladen, mit einer außergewöhnlichen Atmosphäre und kleinen und großen kulinarischen Genüssen in eine andere Welt zu reisen.",
    cafeLibrettoInterior: "Café Libretto Interieur",
    whereStoriesComeLife: "Wo Geschichten durch Kaffee und Gespräche zum Leben erwachen",
    atmosphereLikeNoOther: "Eine Atmosphäre wie keine andere",
    stepIntoOurWorld: "Betreten Sie unsere Welt, wo jede Ecke eine Geschichte erzählt, wo der Duft von frisch gebrühtem Kaffee sich mit den Flüstern der Geschichte vermischt und eine Atmosphäre schafft, die die gewöhnliche Café-Erfahrung übersteigt.",
    placeWhereTime: "\"Ein Ort, an dem die Zeit langsamer vergeht und Geschichten über perfekt zubereitete Tassen entfalten.\"",
    weWishPleasant: "Wir wünschen Ihnen einen angenehmen Aufenthalt in unserem Hotel und würden uns freuen, Sie beim nächsten Spaziergang durch die Stadt wieder im Café Libretto begrüßen zu dürfen.",
    theFountainOfVirtue: "Der Tugendbrunnen",
    legacyOfVirtue: "Ein Vermächtnis der Tugend im Café Libretto",
    virtueFountainPump: "Der Tugendbrunnen ist ein Pumpbrunnen, der auf dem Heilig-Geist-Plätzchen stand, bis die Stadt 1944 zerstört wurde. Ein mittelalterlicher Ziehbrunnen wurde an diesem Standort in der Stadt bereits",
    documented: "dokumentiert.",
    pumpWellBuilt: "Ein Pumpbrunnen wurde hier",
    built: "erbaut.",
    renovatedSeveralTimes: "Dieser wurde mehrmals renoviert, zum Beispiel 1822 oder 1823, dann 1887 und schließlich 1967.",
    theAllegoryOfVirtue: "Die Allegorie der Tugend",
    fountainDepictsAllegory: "Der Tugendbrunnen zeigt die Allegorie der Tugend; eine Figur, die angeblich aus dem ersten Brunnen von 1768 stammt. Die Rokoko-Figur steht, wie mittelalterliche Marienfiguren, auf einem Globus, der das Laster symbolisiert, das sie mit Füßen tritt.",
    carriesMeasuringRod: "Sie trägt einen Messstab, ein Schwert und ein Kugelgewicht; vergleichbar mit der Statuette im Justitia-Brunnen auf dem Römerberg.",
    theFountainOfVirtueTitle: "Der Tugendbrunnen",
    rococoFigure: "Rokoko-Figur von 1768 - Ein Symbol der triumphierenden Tugend",
    standingTestament: "\"Als Zeugnis zeitloser Tugend hat dieser Brunnen Jahrhunderte von Geschichten miterlebt.\"",
    historicalTimeline: "Historische Zeitleiste",
    medievalDrawWell: "Mittelalterlicher Ziehbrunnen dokumentiert",
    pumpWellBuiltVirtue: "Pumpbrunnen mit Tugend-Figur erbaut",
    firstRenovation: "Erste Renovierung",
    secondRenovation: "Zweite Renovierung",
    cityDestruction: "Stadtzerstörung - nur Statue überlebte",
    restorationByKramer: "Restaurierung durch Georg Krämer",
    legacyContinues: "Das Vermächtnis lebt weiter",
    afterSecondWorld: "Nach dem Zweiten Weltkrieg überlebte nur die Brunnenstatue die Zerstörung. Bildhauer Georg Krämer restaurierte den Brunnen in vereinfachter Form bis 1967. Er kam dann unter die Obhut der Stadtsparkasse. Für die Eröffnung der Zentralbibliothek wurde der Tugendbrunnen in das städtische Brunnenrenovierungsprogramm aufgenommen.",
    operaBalletPantomime: "Oper • Ballett • Pantomime",
    
    // Menu Page
    ourMenu: "Unsere Speisekarte",
    flavorsThatTell: "Geschmäcker, die Geschichten erzählen",
    ourSpecialties: "Unsere Spezialitäten",
    menuLibretto: "Menü Café Libretto",
    menuLibrettoShort: "Menü Libretto",
    authenticFrenchExperience: "Eine authentische französische kulinarische Erfahrung",
    authenticFrenchCuisine: "Authentische französische Küche",
    returnToHome: "Zurück zur Startseite",
    returnShort: "Zurück",
    menuCover: "Menü",
    traditionalFrenchCuisine: "Traditionelle französische Küche",
    swipeToTurn: "Wischen Sie, um die Seiten zu drehen oder verwenden Sie die Schaltflächen",
    swipeToTurnMobile: "Wischen Sie, um die Seiten zu drehen",
    swipeTouch: "Wischen / Berühren",
    previousPage: "Vorherige Seite",
    nextPage: "Nächste Seite",
    cover: "Titelblatt",
    page: "Seite",
    of: "von",
    readyToDiscover: "Bereit, unsere authentischen französischen Aromen zu entdecken?",
    discoverOurFlavors: "Entdecken Sie unsere französischen Aromen",
    
    // Menu Categories
    breakfastBrunch: "Frühstück & Brunch",
    breakfastSubtitle: "Tradition trifft Genuss – Der perfekte Start in den Tag",
    etagereBreakfast: "Étagère-Frühstück",
    etagereSubtitle: "Liebevoll zusammengestellte Etageren für 1-2 Personen",
    eggDishesExtras: "Eierspeisen & Extras",
    eggDishesSubtitle: "Alle Eierspeisen werden mit Toast oder Brötchen & Butter serviert",
    lunchSalads: "Lunch & Salate",
    lunchSubtitle: "Alle Salate werden mit warmem Focaccia Brot serviert",
    pastaClassics: "Pasta & Klassiker",
    pastaSubtitle: "Pasta e Basta - Italienische Leidenschaft auf dem Teller",
    sweetsDesserts: "Süßes & Desserts",
    sweetsSubtitle: "Süße Verführungen zum Abschluss",
    coffeeHotDrinks: "Kaffee & Heißgetränke",
    coffeeSubtitle: "Aromatische Kaffeespezialitäten und warme Getränke",
    refreshments: "Erfrischungsgetränke",
    refreshmentsSubtitle: "Kühle Erfrischungen und frische Säfte",
    winesSpirits: "Weine & Spirituosen",
    winesSubtitle: "Erlesene Weine und alkoholische Getränke",
    redWinesRose: "Rotweine & Rosé",
    redWinesSubtitle: "Erlesene Rotweine und Rosé Weine",
    crostiniBarSnacks: "Crostini Bar & Snacks",
    crostiniSubtitle: "Knusprige Brotscheiben und kleine Köstlichkeiten",
    aperitiviSpritz: "Aperitivi & Spritz",
    aperitiviSubtitle: "Italienische Aperitivo-Kultur",
    cocktailsSours: "Cocktails & Sours",
    cocktailsSubtitle: "Klassische Cocktails und frische Sours",
    malfyGinSpirits: "Malfy Gin & Spirituosen",
    malfySubtitle: "Italienische Gin-Spezialitäten und edle Spirituosen",
    nonAlcoholicDrinks: "Alkoholfreie Drinks",
    nonAlcoholicSubtitle: "Erfrischende alkoholfreie Alternativen",
    
    // Home Page
    welcome: "Willkommen",
    cafeLibretto: "Café Libretto",
    whereStoriesMeet: "Wo Geschichten auf Geschmack treffen",
    
    // Welcome Section
    welcomeTitle: "Willkommen",
    welcomeSubtitle: "Wir freuen uns, dass Sie hier sind.",
    welcomeDescription1: "Im Herzen von Frankfurt finden Sie unser Café Libretto. Ein Café mit italienischem Flair erwartet Sie hier, direkt neben der Frankfurter Stadtbibliothek.",
    welcomeDescription2: "Genießen Sie unsere einzigartige Atmosphäre und lassen Sie sich von einer Vielfalt an Köstlichkeiten verwöhnen. Wir bieten ein umfangreiches Frühstücksmenü, ein wechselndes Wochenmenü, Kaffee und Kuchen.",
    welcomeDescription3: "Im Frühling und Sommer ist unsere schöne, geräumige Außenterrasse mit ihrer gemütlichen Lounge ein großartiger Ort, um inmitten des Trubels der Stadt zu entspannen.",
    welcomeDescription4: "Wir freuen uns auf Ihren Besuch!",
    
    // Reservation
    reservationOrder: "Reservierung / Bestellung",
    callNow: "Jetzt anrufen",
    
    // Location
    nextToLibrary: "Neben der Frankfurter Stadtbibliothek",
    
    // Menu Slider
    threeCulinaryExperiences: "Drei authentische kulinarische Erfahrungen",
    breakfastTitle: "Frühstück & Brunch",
    breakfastDescription: "Beginnen Sie den Tag auf italienische Art mit unseren authentischen Frühstücksauswahl. Vom perfekten Espresso bis zu frischen Croissants wird jeder Morgen zu einer Feier der italienischen Küchentradition.",
    summerTitle: "Sommer-Menü",
    summerDescription: "Umarmen Sie die Sommerwärme mit unseren erfrischenden saisonalen Spezialitäten. Leicht, frisch und voller mediterraner Aromen, die Sie in die italienische Landschaft versetzen.",
    cakesTitle: "Süßigkeiten & Gebäck",
    cakesDescription: "Gönnen Sie sich unsere exquisite Sammlung traditioneller italienischer Süßigkeiten. Jede süße Kreation ist ein Meisterwerk, hergestellt mit Liebe und authentischen Rezepten, die von Generation zu Generation weitergegeben werden.",
    discoverMore: "Mehr entdecken",
    authenticItalianTradition: "Authentische italienische Tradition",
    deliciousItalianSpecialties: "Köstliche italienische Spezialitäten",
    preparedFreshDaily: "Täglich frisch zubereitet mit authentischen italienischen Zutaten",
    
    // Facilities
    ourFacilities: "Unsere Einrichtungen",
    comfortConvenience: "Komfort und Bequemlichkeit für eine unvergessliche italienische Erfahrung",
    freshnessGuarantee: "Frischegarantie",
    freshnessDescription: "Immer frische Zutaten und, wo möglich, lokal bezogen.",
    outdoorArea: "Außenbereich",
    outdoorDescription: "Genießen Sie Ihren Kaffee auf unserer sonnigen Terrasse.",
    parking: "Parkplatz",
    parkingDescription: "Sie finden immer Parkplätze in den umliegenden Parkhäusern.",
    freeWifi: "Kostenloses WLAN",
    wifiDescription: "Hochgeschwindigkeits-Internet perfekt für Arbeit, Studium oder um in Verbindung zu bleiben.",
    privateEvents: "Private Veranstaltungen",
    eventsDescription: "Veranstalten Sie Ihre besonderen Anlässe mit authentischer italienischer Bewirtung.",
    takeHomeBeans: "Kaffeebohnen zum Mitnehmen",
    beansDescription: "Premium italienische Kaffeebohnen und gemahlener Kaffee für das Brühen zu Hause.",
    allPaymentMethods: "Alle Zahlungsmethoden",
    paymentDescription: "Bargeld, Karten, mobile Zahlungen - wir akzeptieren alle gängigen Zahlungsmethoden.",
    familyFriendly: "Familienfreundlich",
    familyDescription: "Rollstuhlgerecht mit Wickelraum und Kindermenü.",
    welcomeToLibrettoFamily: "Willkommen in der Libretto-Familie",
    
    // Reviews
    whatOurGuestsSay: "Was unsere Gäste sagen",
    storiesFromLibretto: "Geschichten aus unserem Libretto unvergesslicher Erfahrungen",
    googleReviews: "Google Bewertungen",
    shareYourStory: "Teilen Sie Ihre Geschichte",
    helpUsWritePages: "Helfen Sie uns, neue Seiten in unserem Libretto der Erfahrungen zu schreiben",
    leaveGoogleReview: "Google Bewertung hinterlassen",
    
    // Language Switcher
    language: "Sprache",
    german: "Deutsch",
    english: "English"
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    reserveTable: "Reserve Table",
    
    // Footer
    contactUs: "Contact Us",
    openingHours: "Opening Hours",
    mondayToSaturday: "Monday - Saturday",
    closedOn: "Closed on",
    sundays: "Sundays",
    footerDescription: "Experience the authentic taste of Italy in every sip and bite. Our passion for traditional Italian coffee culture meets modern culinary excellence.",
    footerCopyright: "© 2024 Café Libretto. All rights reserved. Made with ❤️ by ByteTechnik.de.",
    
    // Contact Page
    visitUs: "Visit Us",
    yourStoryAwaits: "Your story awaits at Café Libretto",
    contactInformation: "Contact Information",
    address: "Address",
    phone: "Phone",
    email: "Email",
    howToReachUs: "How to Reach Us",
    publicTransport: "Public Transport",
    byCar: "By Car",
    fromAirport: "From Airport",
    locatedInFrankfurt: "Located in Frankfurt's historic old town",
    parking: "Parking:",
    addressForGps: "Address for GPS:",
    getDirections: "Get Directions",
    findUsInOldTown: "Find Us in Frankfurt's Old Town",
    oldTownDescription: "We're located in the heart of Frankfurt's historic district, just steps away from the famous Römerberg square and the Frankfurt Cathedral.",
    visitNeighborhood: "Visit Our Neighborhood",
    neighborhoodDescription: "While you're here, explore the historic Römerberg, visit the Frankfurt Cathedral, or browse the nearby museums. Our café is the perfect starting point for discovering Frankfurt's old town.",
    inHeartOfHistory: "In the heart of history",
    
    // Gallery Page
    ourGallery: "Our Gallery",
    memoriesInEveryCorner: "Memories in every corner",
    cafeInterior: "Café Interior",
    cafeInteriorDesc: "Warm and inviting atmosphere with modern design",
    coffeeArtistry: "Coffee Artistry",
    coffeeArtistryDesc: "Expertly crafted beverages with vintage equipment",
    freshPastries: "Fresh Pastries",
    freshPastriesDesc: "Daily selection of artisanal cakes and treats",
    communityGathering: "Community Gathering",
    communityGatheringDesc: "Where stories come to life over great coffee",
    capturingMoments: "Capturing Moments",
    capturingMomentsDesc: "Every corner of Café Libretto tells a story. From the gentle steam rising from freshly brewed espresso to the warm conversations shared over homemade pastries, these moments create the heart of our little book.",
    librettoPages: "Like pages in a libretto, each image captures a scene from our daily opera of hospitality and craftsmanship.",
    
    // About Page
    aboutLibretto: "About Libretto",
    littleBookWhereStories: "\"Little Book\" - Where Stories Come to Life",
    theEtymology: "The Etymology",
    librettoEuphonious: "Libretto is the euphonious word for",
    littleBook: "\"little book\"",
    inParticularRefers: "In particular, this refers to the texts or stories that are written by the so-called librettists for opera, ballet or pantomime.",
    sinceSungWord: "Since the sung word is always longer than the written word, these \"librettos\" are usually shorter than a novel. Thus, the term \"libretto\" – a diminutive of the Italian word",
    libro: "\"libro\"",
    book: "(book)",
    emergedBeginning: "emerged as early as the beginning of the 18th century.",
    ourPhilosophy: "Our Philosophy",
    justAsLibrettists: "Just as librettists have always known how to captivate opera and ballet audiences with their exciting or thrilling stories, we would like to invite your senses to travel to another world with an extraordinary atmosphere and small and large culinary delights.",
    cafeLibrettoInterior: "Café Libretto Interior",
    whereStoriesComeLife: "Where stories come to life through coffee and conversation",
    atmosphereLikeNoOther: "An Atmosphere Like No Other",
    stepIntoOurWorld: "Step into our world where every corner tells a story, where the aroma of freshly brewed coffee mingles with the whispers of history, creating an ambiance that transcends the ordinary café experience.",
    placeWhereTime: "\"A place where time slows down and stories unfold over perfectly crafted cups.\"",
    weWishPleasant: "We wish you a pleasant stay in our hotel and would be pleased to welcome you again at Café Libretto on your next stroll through the city.",
    theFountainOfVirtue: "The Fountain of Virtue",
    legacyOfVirtue: "A Legacy of Virtue at Café Libretto",
    virtueFountainPump: "The Virtue Fountain is a pump well that stood on the Heilig-Geist-Plätzchen square until the city was destroyed in 1944. A medieval draw well was documented at this location in the city as early as",
    documented: ".",
    pumpWellBuilt: "A pump well was built here",
    built: ".",
    renovatedSeveralTimes: "This was renovated several times, for example in 1822 or 1823, then in 1887, and finally in 1967.",
    theAllegoryOfVirtue: "The Allegory of Virtue",
    fountainDepictsAllegory: "The Fountain of Virtue depicts the allegory of Virtue; a figure said to have originated from the first fountain in 1768. The Rococo figure stands, like medieval figures of the Virgin Mary, on a globe symbolizing vice, which she tramples underfoot.",
    carriesMeasuringRod: "She carries a measuring rod, a sword, and a ball weight; comparable to the statuette in the Justitia Fountain on the Römerberg.",
    theFountainOfVirtueTitle: "The Fountain of Virtue",
    rococoFigure: "Rococo figure from 1768 - A symbol of virtue triumphant",
    standingTestament: "\"Standing as a testament to timeless virtue, this fountain has witnessed centuries of stories unfold.\"",
    historicalTimeline: "Historical Timeline",
    medievalDrawWell: "Medieval draw well documented",
    pumpWellBuiltVirtue: "Pump well built with Virtue figure",
    firstRenovation: "First renovation",
    secondRenovation: "Second renovation",
    cityDestruction: "City destruction - only statue survived",
    restorationByKramer: "Restoration by Georg Krämer",
    legacyContinues: "Legacy Continues",
    afterSecondWorld: "After the Second World War, only the fountain statue survived the destruction. Sculptor Georg Krämer restored the fountain in a simplified form by 1967. It then came under the care of the Stadtsparkasse (city savings bank). For the opening of the central library, the Tugendbrunnen was included in the city's fountain renovation program.",
    operaBalletPantomime: "Opera • Ballet • Pantomime",
    
    // Menu Page
    ourMenu: "Our Menu",
    flavorsThatTell: "Flavors that tell stories",
    ourSpecialties: "Our Specialties",
    menuLibretto: "Menu Café Libretto",
    menuLibrettoShort: "Menu Libretto",
    authenticFrenchExperience: "An authentic French culinary experience",
    authenticFrenchCuisine: "Authentic French cuisine",
    returnToHome: "Return to home",
    returnShort: "Return",
    menuCover: "Menu",
    traditionalFrenchCuisine: "Traditional French Cuisine",
    swipeToTurn: "Swipe to turn pages or use the buttons",
    swipeToTurnMobile: "Swipe to turn pages",
    swipeTouch: "Swipe / Touch",
    previousPage: "Previous page",
    nextPage: "Next page",
    cover: "Cover",
    page: "Page",
    of: "of",
    readyToDiscover: "Ready to discover our authentic French flavors?",
    discoverOurFlavors: "Discover our French flavors",
    
    // Menu Categories
    breakfastBrunch: "Breakfast & Brunch",
    breakfastSubtitle: "Tradition meets enjoyment – The perfect start to the day",
    etagereBreakfast: "Étagère Breakfast",
    etagereSubtitle: "Lovingly assembled étagères for 1-2 people",
    eggDishesExtras: "Egg Dishes & Extras",
    eggDishesSubtitle: "All egg dishes are served with toast or bread & butter",
    lunchSalads: "Lunch & Salads",
    lunchSubtitle: "All salads are served with warm focaccia bread",
    pastaClassics: "Pasta & Classics",
    pastaSubtitle: "Pasta e Basta - Italian passion on the plate",
    sweetsDesserts: "Sweets & Desserts",
    sweetsSubtitle: "Sweet temptations to finish",
    coffeeHotDrinks: "Coffee & Hot Drinks",
    coffeeSubtitle: "Aromatic coffee specialties and warm drinks",
    refreshments: "Refreshments",
    refreshmentsSubtitle: "Cool refreshments and fresh juices",
    winesSpirits: "Wines & Spirits",
    winesSubtitle: "Fine wines and alcoholic beverages",
    redWinesRose: "Red Wines & Rosé",
    redWinesSubtitle: "Fine red wines and rosé wines",
    crostiniBarSnacks: "Crostini Bar & Snacks",
    crostiniSubtitle: "Crispy bread slices and small delicacies",
    aperitiviSpritz: "Aperitivi & Spritz",
    aperitiviSubtitle: "Italian aperitivo culture",
    cocktailsSours: "Cocktails & Sours",
    cocktailsSubtitle: "Classic cocktails and fresh sours",
    malfyGinSpirits: "Malfy Gin & Spirits",
    malfySubtitle: "Italian gin specialties and noble spirits",
    nonAlcoholicDrinks: "Non-Alcoholic Drinks",
    nonAlcoholicSubtitle: "Refreshing non-alcoholic alternatives",
    
    // Home Page
    welcome: "Welcome",
    cafeLibretto: "Café Libretto",
    whereStoriesMeet: "Where stories meet taste",
    
    // Welcome Section
    welcomeTitle: "Welcome",
    welcomeSubtitle: "We're glad you're here.",
    welcomeDescription1: "Located in the heart of Frankfurt, you'll find our Café Libretto. A café with an Italian flair awaits you here, right next to the Frankfurt Central Library.",
    welcomeDescription2: "Enjoy our unique atmosphere and indulge in a variety of delicacies. We offer an extensive breakfast menu, a changing weekly specials menu, coffee, and cake.",
    welcomeDescription3: "In spring and summer, our beautiful, spacious outdoor area with its cozy lounge is a great place to unwind amidst the hustle and bustle of the city.",
    welcomeDescription4: "We look forward to seeing you!",
    
    // Reservation
    reservationOrder: "Reservation / Order",
    callNow: "Call Now",
    
    // Location
    nextToLibrary: "Next to Frankfurt Central Library",
    
    // Menu Slider
    threeCulinaryExperiences: "Three authentic culinary experiences",
    breakfastTitle: "Breakfast & Brunch",
    breakfastDescription: "Start your day the Italian way with our authentic breakfast selections. From perfect espresso to fresh croissants, every morning becomes a celebration of Italian culinary tradition.",
    summerTitle: "Summer Menu",
    summerDescription: "Embrace the summer warmth with our refreshing seasonal specialties. Light, fresh, and full of Mediterranean flavors that transport you to the Italian countryside.",
    cakesTitle: "Desserts & Pastries",
    cakesDescription: "Indulge in our exquisite collection of traditional Italian desserts. Every sweet creation is a masterpiece, crafted with love and authentic recipes passed down from generation to generation.",
    discoverMore: "Discover More",
    authenticItalianTradition: "Authentic Italian Tradition",
    deliciousItalianSpecialties: "Delicious Italian Specialties",
    preparedFreshDaily: "Prepared fresh daily with authentic Italian ingredients",
    
    // Facilities
    ourFacilities: "Our Facilities",
    comfortConvenience: "Comfort and convenience for an unforgettable Italian experience",
    freshnessGuarantee: "Freshness Guarantee",
    freshnessDescription: "Always fresh ingredients and, where possible, locally sourced.",
    outdoorArea: "Outdoor Area",
    outdoorDescription: "Enjoy your coffee on our sunny terrace.",
    parking: "Parking",
    parkingDescription: "You can always find parking in the surrounding parking garages.",
    freeWifi: "Free WiFi",
    wifiDescription: "High-speed internet perfect for work, study, or staying connected.",
    privateEvents: "Private Events",
    eventsDescription: "Host your special occasions with authentic Italian catering.",
    takeHomeBeans: "Take-Home Beans",
    beansDescription: "Premium Italian coffee beans and ground coffee for home brewing.",
    allPaymentMethods: "All Payment Methods",
    paymentDescription: "Cash, cards, mobile payments - we accept all major payment methods.",
    familyFriendly: "Family Friendly",
    familyDescription: "Wheelchair accessible with baby changing facilities and kids menu.",
    welcomeToLibrettoFamily: "Welcome to the Libretto family",
    
    // Reviews
    whatOurGuestsSay: "What Our Guests Say",
    storiesFromLibretto: "Stories from our libretto of memorable experiences",
    googleReviews: "Google Reviews",
    shareYourStory: "Share Your Story",
    helpUsWritePages: "Help us write new pages in our libretto of experiences",
    leaveGoogleReview: "Leave a Google Review",
    
    // Language Switcher
    language: "Language",
    german: "Deutsch",
    english: "English"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de'); // German as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};