import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import frenchMenuCover from "@/assets/french-menu-cover.jpg";

const menuData = [
  {
    title: "Les Petits Déjeuners",
    subtitle: "Traditional French Breakfast",
    items: [
      { name: "Croissant au Beurre", description: "Fresh butter croissant, crispy and golden", price: "€3.50" },
      { name: "Pain au Chocolat", description: "Traditional chocolate pastry", price: "€4.20" },
      { name: "Café au Lait & Viennoiserie", description: "Coffee with milk and French pastry", price: "€6.80" },
      { name: "Oeufs à la Coque", description: "Soft-boiled eggs with butter soldiers", price: "€5.50" },
      { name: "Confiture Maison", description: "Homemade preserves with artisan bread", price: "€4.80" },
    ]
  },
  {
    title: "Les Cafés & Boissons",
    subtitle: "Coffee & Beverages",
    items: [
      { name: "Café Noir", description: "Strong black coffee, French roast", price: "€2.50" },
      { name: "Café Crème", description: "Coffee with steamed cream", price: "€3.80" },
      { name: "Chocolat Chaud", description: "Rich hot chocolate with whipped cream", price: "€4.50" },
      { name: "Thé à la Française", description: "French tea selection", price: "€3.20" },
      { name: "Café Glacé", description: "Iced coffee with vanilla", price: "€4.20" },
      { name: "Tisane Maison", description: "House herbal tea blend", price: "€3.50" },
    ]
  },
  {
    title: "Les Plats du Jour",
    subtitle: "Daily Specialties",
    items: [
      { name: "Croque Monsieur", description: "Grilled ham and cheese sandwich", price: "€9.50" },
      { name: "Salade Niçoise", description: "Traditional French riviera salad", price: "€12.80" },
      { name: "Quiche Lorraine", description: "Classic bacon and cheese quiche", price: "€8.90" },
      { name: "Soupe à l'Oignon", description: "French onion soup with gruyère", price: "€7.20" },
      { name: "Ratatouille Provençale", description: "Traditional vegetable stew", price: "€11.50" },
    ]
  },
  {
    title: "Les Desserts",
    subtitle: "Sweet Delights",
    items: [
      { name: "Tarte Tatin", description: "Upside-down apple tart with vanilla", price: "€6.50" },
      { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "€5.80" },
      { name: "Profiteroles", description: "Choux pastry with chocolate sauce", price: "€7.20" },
      { name: "Madeleine de Proust", description: "Traditional shell-shaped sponge cakes", price: "€4.50" },
      { name: "Macaron Parisien", description: "Delicate almond meringue sandwich", price: "€2.80" },
    ]
  }
];

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(-1); // Start with cover (-1)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');

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

  return (
    <div className="min-h-screen bg-gradient-hero" style={{ 
      background: 'linear-gradient(135deg, #f7f3f0 0%, #e8ddd4 100%)',
      fontFamily: '"Crimson Text", serif'
    }}>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-coffee hover:text-italian-gold font-crimson">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>

      {/* French Menu Book */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-coffee mb-4" style={{ fontStyle: 'italic' }}>
            Menu du Café Libretto
          </h1>
          <p className="font-crimson text-xl text-coffee/70 italic">
            Une expérience culinaire française authentique
          </p>
        </div>

        {/* Book Container with 3D Perspective */}
        <div className="max-w-5xl mx-auto relative" style={{ perspective: '1200px' }}>
          <div className="relative mx-auto" style={{ 
            width: '800px', 
            height: '600px',
            transformStyle: 'preserve-3d'
          }}>
            
            {/* Book Base - Always visible for depth */}
            <div className="absolute inset-0 bg-amber-900 rounded-r-xl shadow-2xl transform translate-x-2 translate-y-2" 
                 style={{ zIndex: 1 }}>
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-800 to-amber-700 rounded-l-xl"></div>
            </div>

            {/* Current Page */}
            <div className={`absolute inset-0 bg-cream rounded-r-xl shadow-xl border-l-8 border-amber-800 overflow-hidden transition-all duration-800 ease-in-out ${
              isFlipping 
                ? flipDirection === 'forward' 
                  ? 'animate-page-flip' 
                  : 'animate-page-flip-back'
                : ''
            }`} style={{ 
              zIndex: 10,
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d'
            }}>
              
              {/* Book Binding */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-800"></div>
              
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
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-12">
                    <div className="bg-cream/90 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-amber-200">
                      <h2 className="font-playfair text-5xl font-bold text-amber-900 mb-4" style={{ fontStyle: 'italic' }}>
                        Menu
                      </h2>
                      <div className="w-32 h-1 bg-amber-600 mx-auto mb-4"></div>
                      <h3 className="font-crimson text-2xl text-amber-800 mb-6" style={{ fontStyle: 'italic' }}>
                        Café Libretto
                      </h3>
                      <p className="font-crimson text-lg text-amber-700 italic">
                        Cuisine Française Traditionnelle
                      </p>
                      <div className="mt-8 text-amber-600">
                        <div className="flex justify-center items-center space-x-4">
                          <div className="w-8 h-px bg-amber-600"></div>
                          <span className="font-crimson text-sm">★</span>
                          <div className="w-8 h-px bg-amber-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Menu Pages
                <div className="h-full p-12 flex flex-col">
                  {/* Decorative Header */}
                  <div className="text-center mb-8 border-b-2 border-amber-200 pb-6">
                    <div className="flex justify-center items-center mb-4">
                      <div className="w-16 h-px bg-amber-400"></div>
                      <span className="mx-4 text-amber-600 text-2xl">❦</span>
                      <div className="w-16 h-px bg-amber-400"></div>
                    </div>
                    <h2 className="font-playfair text-4xl font-bold text-amber-900 mb-2" style={{ fontStyle: 'italic' }}>
                      {menuData[currentPage].title}
                    </h2>
                    <p className="font-crimson text-lg text-amber-700 italic">
                      {menuData[currentPage].subtitle}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 space-y-6">
                    {menuData[currentPage].items.map((item, index) => (
                      <div key={index} 
                           className="group hover:bg-amber-50/50 rounded-lg p-3 transition-all duration-300 animate-fade-in"
                           style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="font-playfair text-xl font-semibold text-amber-900 mr-2" style={{ fontStyle: 'italic' }}>
                                {item.name}
                              </h3>
                              <div className="flex-1 border-b border-dotted border-amber-300 mx-2 mb-1"></div>
                            </div>
                            <p className="font-crimson text-amber-700 text-sm leading-relaxed italic">
                              {item.description}
                            </p>
                          </div>
                          <div className="ml-6 font-playfair text-2xl font-bold text-amber-600">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Footer */}
                  <div className="text-center mt-8 pt-6 border-t-2 border-amber-200">
                    <div className="flex justify-center items-center space-x-4 text-amber-500">
                      <span className="text-sm">❦</span>
                      <span className="font-crimson text-sm italic">
                        Page {currentPage + 1} de {menuData.length}
                      </span>
                      <span className="text-sm">❦</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Page Turn Click Areas */}
            {currentPage > -1 && (
              <button
                onClick={prevPage}
                disabled={isFlipping}
                className="absolute left-0 top-0 w-20 h-full z-20 opacity-0 hover:opacity-100 hover:bg-gradient-to-r hover:from-amber-900/20 hover:to-transparent transition-opacity duration-300 rounded-l-xl cursor-pointer"
                title="Page précédente"
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
                className="absolute right-0 top-0 w-20 h-full z-20 opacity-0 hover:opacity-100 hover:bg-gradient-to-l hover:from-amber-900/20 hover:to-transparent transition-opacity duration-300 rounded-r-xl cursor-pointer"
                title="Page suivante"
              >
                <div className="h-full flex items-center justify-end pr-4">
                  <div className="w-8 h-8 bg-amber-800/80 rounded-full flex items-center justify-center text-cream text-sm">
                    ›
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Page Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={() => goToPage(-1)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentPage === -1 
                  ? 'bg-amber-600 scale-125 shadow-lg' 
                  : 'bg-amber-300 hover:bg-amber-500'
              }`}
              title="Couverture"
            />
            {menuData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-amber-600 scale-125 shadow-lg' 
                    : 'bg-amber-300 hover:bg-amber-500'
                }`}
                title={`Page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-crimson text-xl text-coffee/70 mb-6 italic">
            Prêt à découvrir nos saveurs françaises authentiques ?
          </p>
          <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-cream font-crimson text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Réserver une Table
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;