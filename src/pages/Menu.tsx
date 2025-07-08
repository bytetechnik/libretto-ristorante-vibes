import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const menuData = [
  {
    title: "Breakfast",
    items: [
      { name: "Cornetto Classico", description: "Traditional Italian croissant with butter", price: "€3.50" },
      { name: "Cappuccino e Cornetto", description: "Perfect morning combination", price: "€5.80" },
      { name: "Maritozzo Romano", description: "Sweet bread with whipped cream", price: "€4.20" },
      { name: "Espresso Doppio", description: "Double shot of authentic Italian espresso", price: "€2.80" },
      { name: "Bombolone", description: "Italian donut filled with custard", price: "€3.80" },
    ]
  },
  {
    title: "Coffee & Beverages",
    items: [
      { name: "Espresso", description: "The perfect Italian coffee experience", price: "€2.00" },
      { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "€3.20" },
      { name: "Caffè Latte", description: "Smooth espresso with steamed milk", price: "€3.50" },
      { name: "Macchiato", description: "Espresso 'marked' with milk foam", price: "€2.50" },
      { name: "Americano", description: "Espresso with hot water", price: "€2.80" },
      { name: "Affogato", description: "Espresso poured over vanilla gelato", price: "€4.50" },
    ]
  },
  {
    title: "Lunch Specials",
    items: [
      { name: "Panini Prosciutto", description: "Italian ham with fresh mozzarella", price: "€8.50" },
      { name: "Bruschetta Trio", description: "Three varieties of our signature bruschetta", price: "€7.20" },
      { name: "Insalata Caprese", description: "Fresh tomatoes, mozzarella, and basil", price: "€9.80" },
      { name: "Pasta Carbonara", description: "Traditional Roman pasta dish", price: "€12.50" },
      { name: "Risotto ai Funghi", description: "Creamy mushroom risotto", price: "€11.80" },
    ]
  },
  {
    title: "Dolci & Desserts",
    items: [
      { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "€5.50" },
      { name: "Cannoli Siciliani", description: "Crispy pastry shells filled with ricotta", price: "€4.80" },
      { name: "Panna Cotta", description: "Silky vanilla cream with berry sauce", price: "€4.20" },
      { name: "Gelato Selection", description: "Three scoops of artisanal gelato", price: "€6.00" },
      { name: "Biscotti di Mandorle", description: "Traditional almond cookies", price: "€3.50" },
    ]
  }
];

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < menuData.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-coffee hover:text-italian-gold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Menu Book */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-coffee mb-4">
            Menu Libretto
          </h1>
          <p className="font-inter text-xl text-coffee/70">
            Discover our authentic Italian flavors
          </p>
        </div>

        {/* Book Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-cream border-8 border-coffee/20 rounded-2xl shadow-2xl overflow-hidden"
               style={{ aspectRatio: '3/2', minHeight: '500px' }}>
            
            {/* Book Spine Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-coffee/30 to-transparent z-10"></div>
            
            {/* Page Content */}
            <div className={`h-full transition-all duration-300 ${isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
              <Card className="h-full bg-transparent border-0 shadow-none">
                <CardContent className="h-full p-12 flex flex-col">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="font-playfair text-4xl font-bold text-coffee mb-2">
                      {menuData[currentPage].title}
                    </h2>
                    <div className="w-24 h-1 bg-italian-gold mx-auto"></div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 space-y-6">
                    {menuData[currentPage].items.map((item, index) => (
                      <div key={index} 
                           className="flex justify-between items-start border-b border-cappuccino/30 pb-4 animate-fade-in"
                           style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex-1">
                          <h3 className="font-playfair text-xl font-semibold text-coffee mb-1">
                            {item.name}
                          </h3>
                          <p className="font-inter text-coffee/70 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-4 font-playfair text-xl font-bold text-italian-gold">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Page Number */}
                  <div className="text-center mt-8">
                    <span className="font-inter text-coffee/50 text-sm">
                      Page {currentPage + 1} of {menuData.length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Arrows */}
            {currentPage > 0 && (
              <Button
                onClick={prevPage}
                disabled={isFlipping}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-coffee/10 hover:bg-coffee/20 text-coffee border-coffee/20 rounded-full w-12 h-12 p-0"
                variant="outline"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {currentPage < menuData.length - 1 && (
              <Button
                onClick={nextPage}
                disabled={isFlipping}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-coffee/10 hover:bg-coffee/20 text-coffee border-coffee/20 rounded-full w-12 h-12 p-0"
                variant="outline"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {menuData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-italian-gold scale-125' 
                    : 'bg-coffee/30 hover:bg-coffee/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-inter text-coffee/70 mb-4">
            Ready to taste authentic Italy?
          </p>
          <Button className="bg-gradient-gold text-white hover:shadow-gold transition-all duration-300">
            Make a Reservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;