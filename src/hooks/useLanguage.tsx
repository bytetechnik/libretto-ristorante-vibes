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
    footerCopyright: "© 2024 Café Libretto. Alle Rechte vorbehalten. Mit ❤️ in Italien gemacht.",
    
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
    
    // About Page
    aboutUs: "Über uns",
    ourStoryBegins: "Unsere Geschichte beginnt",
    
    // Menu Page
    ourMenu: "Unsere Speisekarte",
    flavorsThatTell: "Geschmäcker, die Geschichten erzählen",
    
    // Home Page
    welcome: "Willkommen",
    cafeLibretto: "Café Libretto",
    whereStoriesMeet: "Wo Geschichten auf Geschmack treffen",
    
    // Gallery Page
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
    passionateTeam: "Leidenschaftliches Team",
    
    // Menu Page
    ourSpecialties: "Unsere Spezialitäten",
    
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
    footerCopyright: "© 2024 Café Libretto. All rights reserved. Made with ❤️ in Italy.",
    
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
    
    // About Page
    aboutUs: "About Us",
    ourStoryBegins: "Our story begins",
    
    // Menu Page
    ourMenu: "Our Menu",
    flavorsThatTell: "Flavors that tell stories",
    
    // Home Page
    welcome: "Welcome",
    cafeLibretto: "Café Libretto",
    whereStoriesMeet: "Where stories meet taste",
    
    // Gallery Page
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
    passionateTeam: "Passionate Team",
    
    // Menu Page
    ourSpecialties: "Our Specialties",
    
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