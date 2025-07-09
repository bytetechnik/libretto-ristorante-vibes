import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import frenchMenuCover from "@/assets/french-menu-cover.jpg";

const menuData = [
  {
    title: "Frühstück & Brunch",
    subtitle: "Tradition trifft Genuss – Der perfekte Start in den Tag",
    items: [
      { name: "Stoltze", description: "1 Brötchen, Butter, Konfitüre, gekochtes Ei", price: "6.90€" },
      { name: "Goethe", description: "1 Brötchen, 1 Vollkornbrötchen, Butter, Konfitüre, Farmerschinken, Salami, Pastrami, Gouda, 2 Eier im Glas mit Schnittlauch", price: "13.50€" },
      { name: "Jules Verne", description: "Baguette, Sauerteigroissant, Butter, Konfitüre, Trauben, französischer Käse, gekochtes Ei", price: "12.90€" },
      { name: "Shakespeare", description: "Toastbrot, Butter, zwei Spiegeleier, knuspriger Bacon, Nürnberger Rostbratwürste, Baked Beans, gegrillte Tomate & Champignons", price: "14.90€" },
      { name: "Shakshuka", description: "Heiße Schmorpfanne aus der orientalischen Küche mit Tomaten, Zwiebeln, Kreuzkümmel, Paprika, zwei pochierten Eiern", price: "13.50€" },
      { name: "Fitness", description: "2 Vollkornbrötchen, Blütenhonig, Frischkäse, Hummus, Gouda, Pastrami, Granola Müsli, gekochtes Ei", price: "15.90€" },
    ]
  },
  {
    title: "Étagère-Frühstück",
    subtitle: "Liebevoll zusammengestellte Etageren für 1-2 Personen",
    items: [
      { name: "Il Dolce Far Niente", description: "Frischkäse, Pesto, Tomate, Burrata, Manchego, Oliven, Parmaschinken, Salami, Pastrami, Grissini, gekochtes Ei", price: "17.50€ / 32.50€" },
      { name: "Royale", description: "Frischkäse, Graved Lachs, Tomaten- & Gurkenscheiben, rote Zwiebeln, Kapern, Olivenöl & Maldonsalz, gegrilltes Brioche-Brötchen", price: "18.50€ / 33.50€" },
      { name: "Signature Libretto", description: "Frischkäse, Hummus, Butter, Konfitüre, Graved Lachs, Farmerschinken, Pastrami, Gouda, Salami, Brotkorb, Rühreier, Granola", price: "19.50€ / 37.50€" },
      { name: "Hausgemachtes Granola", description: "Joghurt, frisches Obst, Blütenhonig, Chiasamen, Kokosflocken, Granola (Knuspermüsli)", price: "11.00€" },
      { name: "Lauwarmes Porridge (Vegan)", description: "Haferflocken, Hafermilch, frische Beeren, Kokosflocken, Kakaonibs, Agavensirup", price: "10.00€" },
      { name: "Bircher-Müsli", description: "Nach Originalrezept mit frischen Beeren, Apfel, Nüsse, Kokosflocken, Chiasamen", price: "10.00€" },
    ]
  },
  {
    title: "Eierspeisen & Extras",
    subtitle: "Alle Eierspeisen werden mit Toast oder Brötchen & Butter serviert",
    items: [
      { name: "2 Eier im Glas", description: "Mit Schnittlauch", price: "6.50€" },
      { name: "Rührei Natur", description: "Aus drei Eiern mit Schnittlauch", price: "7.50€" },
      { name: "Rührei mit Bacon", description: "Aus drei Eiern mit Farmerschinken & Schnittlauch", price: "9.00€" },
      { name: "Spiegelei Natur", description: "Aus drei Eiern mit Schnittlauch", price: "7.50€" },
      { name: "Omelette Bombay", description: "Frisches Gemüse, Ingwer, Koriander, Kurkuma, Zwiebeln, Minzjoghurt", price: "15.00€" },
      { name: "Omelette Bauernart", description: "Kartoffeln, Speck, Farmerschinken, Champignons, Zwiebeln, Bergkäse, Schnittlauch", price: "14.00€" },
      { name: "Omelette Mediterran", description: "Schafskäse, Tomaten, Oliven, Zwiebeln, Peperoni, Petersilie", price: "13.00€" },
      { name: "Avocado Stulle", description: "Weizensauerteigbrot, Guacamole, Tomate, Rührei, Kresse, Maldonsalz", price: "14.90€" },
    ]
  },
  {
    title: "Lunch & Salate",
    subtitle: "Alle Salate werden mit warmem Focaccia Brot serviert",
    items: [
      { name: "Tomatencremesuppe", description: "Aus San Marzano Tomaten, fein abgeschmeckt mit Basilikumöl", price: "8.00€" },
      { name: "Classic Caesar", description: "Blattsalat, Kirschtomaten, Radieschen, Hähnchenbrust im Pankomantel, Bacon-Chips, Croutons, Parmigiano", price: "16.90€" },
      { name: "Ziegenkäse & Freunde", description: "Gratinierter Ziegenkäse auf Blattsalat mit Radieschen, Kirschtomaten, Gurken, karamelisierten Walnüssen", price: "16.90€" },
      { name: "Gartensalat", description: "Bunter Blattsalat mit Schafskäse, Kalamata Oliven, Peperoni, Kirschtomaten, Gurken, Radieschen", price: "15.90€" },
      { name: "Mediterraner Salat (Vegan)", description: "Blattsalat mit hausgemachten Falafeln, Hummus, Kirschtomaten, Gurken, eingelegten Zwiebeln", price: "15.90€" },
      { name: "Bella Nonna", description: "Mediterraner Salat mit Kirschtomaten, Gurken, Radieschen, roten Zwiebeln, feinen Bohnen, Parmaschinken", price: "15.90€" },
    ]
  },
  {
    title: "Pasta & Klassiker",
    subtitle: "Pasta e Basta - Italienische Leidenschaft auf dem Teller",
    items: [
      { name: "Spaghetti all'Amatriciana", description: "Würzige Tomatensosse mit Knoblauch, Peperoncini, Guanciale (ital. Speck) & Parmigiano", price: "14.90€" },
      { name: "Spaghetti Gambas", description: "Gegrillte Black Tiger Garnelen, Zucchini, Tomaten, Knoblauch, Peperoncini & Weißwein", price: "18.90€" },
      { name: "Paccheri Pistacchio e Burrata", description: "Cremiges Pistazienpesto, Parmigiano, frische Pistazien & Burrata", price: "17.90€" },
      { name: "Rigatoni Mezzi con Crema", description: "Cremige Erbsensosse, Parmigiano & knuspriger Guanciale (ital. Speck)", price: "15.90€" },
      { name: "Penne all'Arrabiata", description: "Pikante Tomatensauce mit Knoblauch, Chili & Petersilie", price: "12.00€" },
      { name: "Vegetarisches Gemüsecurry", description: "Frisches Gemüse in Kokos-Curry-Sauce mit Koriander, Ingwer & geröstetem Sesam, dazu Basmatireis", price: "16.50€" },
      { name: "Rote Linsensuppe (Vegan)", description: "Würzig & wärmend, mit Ingwer, Koriander, Kurkuma & Kokosmilch", price: "9.00€" },
    ]
  },
  {
    title: "Süßes & Desserts",
    subtitle: "Süße Verführungen zum Abschluss",
    items: [
      { name: "Hausgemachte Waffel Klassisch", description: "Mit Puderzucker", price: "8.00€" },
      { name: "Waffel mit Obst", description: "Mit saisonalem Obst, Sahne, Bourbon Vanilleeis", price: "13.00€" },
      { name: "Waffel mit Beeren", description: "Mit Beeren, Eierlikör, Krokant & Sahne", price: "14.00€" },
      { name: "Kaiserschmarren Klassisch", description: "Hausgemacht mit Apfel & Rosinen, mit Puderzucker", price: "12.00€" },
      { name: "Kaiserschmarren mit Obst", description: "Mit saisonalem Obst & Bourbon Vanilleeis", price: "15.00€" },
      { name: "Kaiserschmarren mit Apfelkompott", description: "Mit Apfelkompott & Preiselbeermarmelade", price: "14.00€" },
      { name: "Hausgemachter Apfelstrudel", description: "Mit Bourbon Vanilleeis & Sahne", price: "9.50€" },
      { name: "Affogato al Caffé", description: "Espresso mit Bourbon Vanilleeis", price: "5.50€" },
    ]
  },
  {
    title: "Kaffee & Heißgetränke",
    subtitle: "Aromatische Kaffeespezialitäten und warme Getränke",
    items: [
      { name: "Café Creme", description: "Klein / Groß", price: "3.80€ / 4.90€" },
      { name: "Espresso / Doppio", description: "Italienischer Espresso", price: "3.00€ / 4.50€" },
      { name: "Cappuccino", description: "Klein / Groß", price: "3.90€ / 5.50€" },
      { name: "Latte Macchiato", description: "Schichtkaffee mit Milchschaum", price: "5.00€" },
      { name: "Flat White", description: "Australische Kaffeespezialität", price: "4.70€" },
      { name: "Matcha Latte", description: "Grüntee-Pulver mit heißer Milch", price: "5.90€" },
      { name: "Chai Latte", description: "Gewürztee mit aufgeschäumter Milch", price: "5.50€" },
      { name: "Heiße Schokolade", description: "Im Kännchen erhältlich", price: "4.50€ / 6.50€" },
      { name: "Irish Coffee", description: "Café Creme, Whiskey, brauner Zucker, Sahne", price: "9.00€" },
      { name: "Pharisäer Kaffee", description: "Café Creme, brauner Rum, Zucker, Sahne", price: "8.50€" },
    ]
  },
  {
    title: "Erfrischungsgetränke",
    subtitle: "Kühle Erfrischungen und frische Säfte",
    items: [
      { name: "Taunusquelle", description: "Naturelle / Medium", price: "7.80€ / 8.00€" },
      { name: "Detox Wasser", description: "Sprudelwasser, Zitrone, Gurke, Ingwer, Minze in der Karaffe", price: "6.90€" },
      { name: "Hausgemachte Limonade", description: "Ingwer-Zitrone-Minze / Gemischte Beeren", price: "6.90€" },
      { name: "Frisch gepresster Orangensaft", description: "0.2l", price: "6.50€" },
      { name: "Softdrinks", description: "Cola / Cola Zero / Sprite / Fanta", price: "5.20€" },
      { name: "Säfte (Rapps)", description: "Apfel / Orange / Maracuja / Cranberry / Rhabarber / Johannisbeere", price: "5.50€" },
      { name: "Thomas Henry", description: "Tonic Water, Bitter Lemon, Ginger Ale, Ginger Beer, Pink Grapefruit", price: "3.90€" },
      { name: "Kalte Zitrone", description: "Sprudelwasser, frischer Zitronensaft & Minze", price: "5.90€" },
    ]
  },
  {
    title: "Weine & Spirituosen",
    subtitle: "Erlesene Weine und alkoholische Getränke",
    items: [
      { name: "Bitburger Pils (Fass)", description: "Frisch gezapft vom Fass", price: "5.00€" },
      { name: "Benediktiner Hefeweizen", description: "0.5l", price: "5.90€" },
      { name: "Carpe Noctem Prosecco", description: "Brut / Rosé", price: "9.50€" },
      { name: "Sauvignon Blanc", description: "Weingut Steitz - Exotische Frucht, Stachelbeere, vibrierend frisch", price: "8.90€" },
      { name: "Riesling Gutswein", description: "Weingut Friedrich Fendel - Pfirsich, Apfel, Zitrus", price: "8.90€" },
      { name: "Cuvée Rosé", description: "Weingut Göhring - Frisch, beerig & lebendig", price: "8.90€" },
      { name: "Whispering Angel", description: "Château d'Esclans - Rote Früchte, florale Noten", price: "55.00€" },
      { name: "Primitivo 'I Muri'", description: "Vigneti del Salento - Waldbeeren, Pflaume & Gewürze", price: "9.50€" },
      { name: "Perrier-Jouët Grand Brut", description: "Birne, Aprikose, Zitrus, frisch & elegant", price: "17.50€" },
    ]
  },
  {
    title: "Bar Food & Snacks",
    subtitle: "Kleine Köstlichkeiten zum Teilen",
    items: [
      { name: "Italienische Oliven & Kartoffelchips", description: "Perfekt zum Aperitivo", price: "6.00€" },
      { name: "Hummus & Falafel", description: "Cremiger Hummus mit frisch gebackenen Falafel, nussiger Tahinisauce & Piment d'Espelette", price: "12.00€" },
      { name: "Truffle Fries", description: "Gerüffelte Pommes Frites mit Trüffel-Mayonnaise & geriebenem Parmigiano", price: "9.00€" },
      { name: "Sweet Potato Fries", description: "Süßkartoffel-Pommes mit würziger Sriracha-Mayonnaise", price: "8.00€" },
      { name: "Bite & Cheers Etagere", description: "Italienische Aufschnittplatte, Hummus, Falafel, Frischkäse, Olivencreme, Artischockencreme, Oliven", price: "12.50€ p.P." },
      { name: "Tagliere - Das Holzbrett", description: "Italienische Spezialitäten: Aufschnitt, Burrata, Frischkäse, Pesto, Artischockencreme, Oliven & warmes Focaccia", price: "11.50€ p.P." },
    ]
  }
];

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(-1); // Start with cover (-1)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  
  // Touch gesture state
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Minimum swipe distance to trigger page change
  const minSwipeDistance = 50;

  const nextPage = () => {
    if (currentPage < menuData.length - 1) {
      setIsFlipping(true);
      setFlipDirection('forward');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 400);
    }
  };

  const prevPage = () => {
    if (currentPage > -1) {
      setIsFlipping(true);
      setFlipDirection('backward');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 400);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (!isFlipping && pageIndex !== currentPage) {
      setIsFlipping(true);
      setFlipDirection(pageIndex > currentPage ? 'forward' : 'backward');
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 400);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isFlipping) return;
    
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchEnd(null);
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || isFlipping) return;
    
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
    
    const deltaX = Math.abs(touch.clientX - touchStart.x);
    const deltaY = Math.abs(touch.clientY - touchStart.y);
    
    // Only start dragging if horizontal movement is greater than vertical
    if (deltaX > deltaY && deltaX > 10) {
      setIsDragging(true);
      e.preventDefault(); // Prevent scroll when swiping horizontally
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isFlipping) {
      setTouchStart(null);
      setTouchEnd(null);
      setIsDragging(false);
      return;
    }

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = Math.abs(touchStart.y - touchEnd.y);
    
    // Check if it's a horizontal swipe (more horizontal than vertical movement)
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe left - next page
        nextPage();
      } else {
        // Swipe right - previous page
        prevPage();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero" style={{ 
      background: 'linear-gradient(135deg, #f7f3f0 0%, #e8ddd4 100%)',
      fontFamily: '"Crimson Text", serif'
    }}>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-4 md:pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 md:mb-8 text-coffee hover:text-italian-gold font-crimson text-sm md:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Retour à l'accueil</span>
            <span className="sm:hidden">Retour</span>
          </Button>
        </Link>
      </div>

      {/* French Menu Book */}
      <div className="container mx-auto px-4 pb-8 md:pb-16">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-coffee mb-2 md:mb-4" style={{ fontStyle: 'italic' }}>
            <span className="hidden sm:inline">Menu du Café Libretto</span>
            <span className="sm:hidden">Menu Libretto</span>
          </h1>
          <p className="font-crimson text-base md:text-xl text-coffee/70 italic">
            <span className="hidden sm:inline">Une expérience culinaire française authentique</span>
            <span className="sm:hidden">Cuisine française authentique</span>
          </p>
        </div>

        {/* Book Container with 3D Perspective */}
        <div className="max-w-5xl mx-auto relative" style={{ perspective: window.innerWidth < 768 ? '800px' : '1200px' }}>
          <div className="relative mx-auto" style={{ 
            width: 'min(90vw, 800px)', 
            height: 'min(85vh, 700px)', // Increased height for better content display
            maxWidth: '800px',
            maxHeight: '700px',
            minHeight: '550px', // Increased minimum height for mobile
            transformStyle: 'preserve-3d'
          }}>
            
            {/* Book Base - Always visible for depth */}
            <div className="absolute inset-0 bg-amber-900 rounded-r-xl shadow-2xl transform translate-x-1 md:translate-x-2 translate-y-1 md:translate-y-2" 
                 style={{ zIndex: 1 }}>
              <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-amber-800 to-amber-700 rounded-l-xl"></div>
            </div>

            {/* Current Page */}
            <div 
              className={`absolute inset-0 bg-cream rounded-r-xl shadow-xl border-l-4 md:border-l-8 border-amber-800 overflow-hidden transition-all duration-800 ease-in-out ${
                isFlipping 
                  ? flipDirection === 'forward' 
                    ? 'animate-page-flip' 
                    : 'animate-page-flip-back'
                  : ''
              } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
              style={{ 
                zIndex: 10,
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Book Binding */}
              <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-800"></div>
              
              {/* Page Content */}
              {currentPage === -1 ? (
                // Cover Page
                <div className="h-full relative overflow-hidden"
                     style={{ 
                       backgroundImage: `url(${frenchMenuCover})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12">
                    <div className="bg-cream/90 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-2xl border border-amber-200 max-w-sm md:max-w-none">
                      <h2 className="font-playfair text-3xl md:text-5xl font-bold text-amber-900 mb-2 md:mb-4" style={{ fontStyle: 'italic' }}>
                        Menu
                      </h2>
                      <div className="w-20 md:w-32 h-1 bg-amber-600 mx-auto mb-2 md:mb-4"></div>
                      <h3 className="font-crimson text-lg md:text-2xl text-amber-800 mb-3 md:mb-6" style={{ fontStyle: 'italic' }}>
                        Café Libretto
                      </h3>
                      <p className="font-crimson text-sm md:text-lg text-amber-700 italic">
                        Cuisine Française Traditionnelle
                      </p>
                      <div className="mt-4 md:mt-8 text-amber-600">
                        <div className="flex justify-center items-center space-x-2 md:space-x-4">
                          <div className="w-4 md:w-8 h-px bg-amber-600"></div>
                          <span className="font-crimson text-xs md:text-sm">★</span>
                          <div className="w-4 md:w-8 h-px bg-amber-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Menu Pages
                <div className="h-full p-4 md:p-12 flex flex-col overflow-y-auto min-h-0">
                  {/* Decorative Header */}
                  <div className="text-center mb-4 md:mb-8 border-b-2 border-amber-200 pb-3 md:pb-6 flex-shrink-0">
                    <div className="flex justify-center items-center mb-2 md:mb-4">
                      <div className="w-8 md:w-16 h-px bg-amber-400"></div>
                      <span className="mx-2 md:mx-4 text-amber-600 text-lg md:text-2xl">❦</span>
                      <div className="w-8 md:w-16 h-px bg-amber-400"></div>
                    </div>
                    <h2 className="font-playfair text-2xl md:text-4xl font-bold text-amber-900 mb-1 md:mb-2" style={{ fontStyle: 'italic' }}>
                      {menuData[currentPage].title}
                    </h2>
                    <p className="font-crimson text-sm md:text-lg text-amber-700 italic">
                      {menuData[currentPage].subtitle}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 space-y-4 md:space-y-6 overflow-y-auto min-h-0">
                    {menuData[currentPage].items.map((item, index) => (
                      <div key={index} 
                           className="group hover:bg-amber-50/50 rounded-lg p-3 md:p-3 transition-all duration-300 animate-fade-in"
                           style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start md:items-center mb-1 md:mb-2">
                              <h3 className="font-playfair text-base md:text-xl font-semibold text-amber-900 mr-2 leading-tight" style={{ fontStyle: 'italic' }}>
                                {item.name}
                              </h3>
                              <div className="hidden md:block flex-1 border-b border-dotted border-amber-300 mx-2 mb-1"></div>
                            </div>
                            <p className="font-crimson text-amber-700 text-xs md:text-sm leading-relaxed italic pr-2">
                              {item.description}
                            </p>
                          </div>
                          <div className="ml-3 md:ml-6 font-playfair text-lg md:text-2xl font-bold text-amber-600 flex-shrink-0">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Footer */}
                  <div className="text-center mt-4 md:mt-8 pt-3 md:pt-6 border-t-2 border-amber-200 flex-shrink-0">
                    <div className="flex justify-center items-center space-x-2 md:space-x-4 text-amber-500">
                      <span className="text-xs md:text-sm">❦</span>
                      <span className="font-crimson text-xs md:text-sm italic">
                        Page {currentPage + 1} de {menuData.length}
                      </span>
                      <span className="text-xs md:text-sm">❦</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Page Turn Click Areas - Desktop */}
            {currentPage > -1 && (
              <button
                onClick={prevPage}
                disabled={isFlipping}
                className="hidden md:block absolute left-0 top-0 w-20 h-full z-20 opacity-0 hover:opacity-100 hover:bg-gradient-to-r hover:from-amber-900/20 hover:to-transparent transition-opacity duration-300 rounded-l-xl cursor-pointer"
                title="Page précédente"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="h-full flex items-center justify-start pl-4">
                  <div className="w-8 h-8 bg-amber-800/80 rounded-full flex items-center justify-center text-cream text-sm">
                    ‹
                  </div>
                </div>
              </button>
            )}

            {currentPage < menuData.length - 1 && (
              <button
                onClick={nextPage}
                disabled={isFlipping}
                className="hidden md:block absolute right-0 top-0 w-20 h-full z-20 opacity-0 hover:opacity-100 hover:bg-gradient-to-l hover:from-amber-900/20 hover:to-transparent transition-opacity duration-300 rounded-r-xl cursor-pointer"
                title="Page suivante"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="h-full flex items-center justify-end pr-4">
                  <div className="w-8 h-8 bg-amber-800/80 rounded-full flex items-center justify-center text-cream text-sm">
                    ›
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Navigation Buttons and Instructions */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            {/* Swipe Instructions - All Devices */}
            <div className="text-center">
              <p className="text-amber-700 font-crimson text-sm md:text-base italic mb-1">
                <span className="hidden sm:inline">Glissez pour tourner les pages ou utilisez les boutons</span>
                <span className="sm:hidden">Glissez pour tourner les pages</span>
              </p>
              <div className="flex items-center justify-center space-x-3 text-amber-500">
                <span className="text-sm">←</span>
                <span className="font-crimson text-sm">Swipe / Touch</span>
                <span className="text-sm">→</span>
              </div>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <div className="md:hidden flex justify-center items-center space-x-8">
              <button
                onClick={prevPage}
                disabled={isFlipping || currentPage <= -1}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-cream text-lg transition-all duration-300 ${
                  currentPage <= -1 
                    ? 'bg-amber-400/50 cursor-not-allowed' 
                    : 'bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg'
                }`}
                title="Page précédente"
              >
                ‹
              </button>
              <button
                onClick={nextPage}
                disabled={isFlipping || currentPage >= menuData.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-cream text-lg transition-all duration-300 ${
                  currentPage >= menuData.length - 1 
                    ? 'bg-amber-400/50 cursor-not-allowed' 
                    : 'bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg'
                }`}
                title="Page suivante"
              >
                ›
              </button>
            </div>
          </div>

          {/* Page Navigation Dots */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2 md:space-x-3">
            <button
              onClick={() => goToPage(-1)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                currentPage === -1 
                  ? 'bg-amber-600 scale-125 shadow-lg' 
                  : 'bg-amber-300 hover:bg-amber-500 active:scale-90'
              }`}
              title="Couverture"
            />
            {menuData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentPage 
                    ? 'bg-amber-600 scale-125 shadow-lg' 
                    : 'bg-amber-300 hover:bg-amber-500 active:scale-90'
                }`}
                title={`Page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="font-crimson text-lg md:text-xl text-coffee/70 mb-4 md:mb-6 italic px-4">
            <span className="hidden sm:inline">Prêt à découvrir nos saveurs françaises authentiques ?</span>
            <span className="sm:hidden">Découvrez nos saveurs françaises</span>
          </p>
          <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-cream font-crimson text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
            Réserver une Table
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;