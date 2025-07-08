import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
    { label: "Home", href: "#home", isRoute: false },
    { label: "Cafe Libretto", href: "#about", isRoute: false },
    { label: "Menu", href: "/menu", isRoute: true },
    { label: "Contact", href: "#contact", isRoute: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-elegant border-b border-cappuccino/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Fancy Animations */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              {/* Logo Glow Effect */}
              <div className={`absolute inset-0 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                isScrolled ? 'bg-italian-gold/20' : 'bg-white/30'
              }`}></div>
              
              {/* Main Logo - Switch between white and black based on scroll */}
              <img 
                src={isScrolled 
                  ? "/lovable-uploads/9ecbe739-3bdf-49bc-a9c7-5e48f6b66f6f.png" 
                  : "/lovable-uploads/cdb32fff-8cdf-4c49-9efd-a02207927c65.png"
                }
                alt="Café Libretto" 
                className={`relative transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl ${
                  isScrolled 
                    ? 'h-8 md:h-10 group-hover:scale-110' 
                    : 'h-10 md:h-12 group-hover:scale-105'
                }`}
              />
              
              {/* Decorative Elements */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${
                isScrolled ? 'bg-italian-gold' : 'bg-white'
              }`}></div>
              <div className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 delay-100 ${
                isScrolled ? 'bg-warm-gold' : 'bg-white/80'
              }`}></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const commonProps = {
                key: item.label,
                className: `relative px-4 py-2 mx-1 font-inter transition-all duration-300 font-medium group overflow-hidden rounded-lg ${
                  isScrolled 
                    ? 'text-coffee hover:text-italian-gold' 
                    : 'text-white hover:text-italian-gold'
                }`,
                style: { animationDelay: `${index * 100}ms` }
              };
              
              return item.isRoute ? (
                <Link
                  {...commonProps}
                  to={item.href}
                >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-italian-gold/10 to-warm-gold/10'
                    : 'bg-gradient-to-r from-white/10 to-white/15'
                }`}></div>
                
                {/* Text Content */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Underline Effect */}
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out ${
                  isScrolled ? 'bg-gradient-gold' : 'bg-white'
                }`}></div>
                
                 {/* Decorative Dots */}
                 <div className={`absolute top-1 right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ${
                   isScrolled ? 'bg-italian-gold' : 'bg-white'
                 }`}></div>
                 </Link>
               ) : (
                 <a
                   {...commonProps}
                   href={item.href}
                 >
                 {/* Hover Background Effect */}
                 <div className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg ${
                   isScrolled 
                     ? 'bg-gradient-to-r from-italian-gold/10 to-warm-gold/10'
                     : 'bg-gradient-to-r from-white/10 to-white/15'
                 }`}></div>
                 
                 {/* Text Content */}
                 <span className="relative z-10">{item.label}</span>
                 
                 {/* Underline Effect */}
                 <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out ${
                   isScrolled ? 'bg-gradient-gold' : 'bg-white'
                 }`}></div>
                 
                 {/* Decorative Dots */}
                 <div className={`absolute top-1 right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ${
                   isScrolled ? 'bg-italian-gold' : 'bg-white'
                 }`}></div>
                 </a>
               );
             })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className={`hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-inter font-semibold px-6 py-2 rounded-full border relative overflow-hidden group ${
                isScrolled 
                  ? 'bg-gradient-gold hover:shadow-gold border-italian-gold/30 hover:border-italian-gold text-white'
                  : 'bg-white/10 hover:bg-white/20 border-white/30 hover:border-white text-white backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Reserve Table</span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-warm-gold to-italian-gold'
                  : 'bg-gradient-to-r from-white/20 to-white/30'
              }`}></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-all duration-300 relative group ${
                isScrolled 
                  ? 'text-coffee hover:text-italian-gold hover:bg-italian-gold/10'
                  : 'text-white hover:text-italian-gold hover:bg-white/10'
              }`}
            >
              <div className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-italian-gold/20 to-warm-gold/20'
                  : 'bg-gradient-to-br from-white/20 to-white/30'
              }`}></div>
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
          <div className="md:hidden border-t border-cappuccino/20 bg-white/98 backdrop-blur-xl animate-fade-in-up">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const commonProps = {
                  key: item.label,
                  className: "block px-4 py-3 font-inter text-coffee hover:text-italian-gold hover:bg-gradient-to-r hover:from-italian-gold/10 hover:to-warm-gold/10 transition-all duration-300 rounded-lg font-medium relative group",
                  onClick: () => setIsMenuOpen(false),
                  style: { animationDelay: `${index * 100}ms` }
                };
                
                return item.isRoute ? (
                  <Link
                    {...commonProps}
                    to={item.href}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-italian-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-warm-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                  </Link>
                ) : (
                  <a
                    {...commonProps}
                    href={item.href}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-italian-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-warm-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                  </a>
                );
              })}
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

      {/* Decorative Bottom Line - Only show when scrolled */}
      {isScrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-italian-gold/30 to-transparent"></div>
      )}
    </nav>
  );
};

export default Navigation;