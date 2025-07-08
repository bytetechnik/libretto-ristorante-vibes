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
            height: 'min(67.5vw, 600px)',
            maxWidth: '800px',
            maxHeight: '600px',
            minHeight: '400px',
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
                <div className="h-full p-4 md:p-12 flex flex-col overflow-y-auto">
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
                  <div className="flex-1 space-y-3 md:space-y-6 overflow-y-auto">
                    {menuData[currentPage].items.map((item, index) => (
                      <div key={index} 
                           className="group hover:bg-amber-50/50 rounded-lg p-2 md:p-3 transition-all duration-300 animate-fade-in"
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