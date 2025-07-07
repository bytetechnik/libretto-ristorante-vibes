import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Cafe Libretto", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-cream/95 backdrop-blur-xl shadow-elegant border-b border-cappuccino/30' 
        : 'bg-cream/80 backdrop-blur-sm border-b border-cappuccino/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Fancy Animations */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-italian-gold/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main Logo */}
              <img 
                src="/lovable-uploads/9ecbe739-3bdf-49bc-a9c7-5e48f6b66f6f.png" 
                alt="Café Libretto" 
                className={`relative transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl ${
                  isScrolled 
                    ? 'h-8 md:h-10 group-hover:scale-110' 
                    : 'h-10 md:h-12 group-hover:scale-105'
                }`}
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-italian-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-warm-gold rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 delay-100"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 mx-1 font-inter text-coffee hover:text-italian-gold transition-all duration-300 font-medium group overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg"></div>
                
                {/* Text Content */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Underline Effect */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></div>
                
                {/* Decorative Dots */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-italian-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-gradient-gold hover:shadow-gold hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-inter font-semibold px-6 py-2 rounded-full border border-italian-gold/30 hover:border-italian-gold relative overflow-hidden group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Reserve Table</span>
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold to-italian-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee hover:text-italian-gold hover:bg-italian-gold/10 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-italian-gold/20 to-warm-gold/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X className="h-6 w-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cappuccino/20 bg-cream/98 backdrop-blur-xl animate-fade-in-up">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 font-inter text-coffee hover:text-italian-gold hover:bg-gradient-to-r hover:from-italian-gold/10 hover:to-warm-gold/10 transition-all duration-300 rounded-lg font-medium relative group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-italian-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{item.label}</span>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-warm-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                </a>
              ))}
              <div className="px-4 py-3">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-gold hover:shadow-gold hover:shadow-lg transition-all duration-300 font-inter font-semibold py-3 rounded-full relative overflow-hidden group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Reserve Table</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-gold to-italian-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Bottom Line */}
      <div className={`h-px bg-gradient-to-r from-transparent via-italian-gold/30 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-50'
      }`}></div>
    </nav>
  );
};

export default Navigation;