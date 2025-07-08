import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const slidingTexts = [
    "Authentic Italian Experience",
    "Where Coffee Meets Passion", 
    "Traditional Flavors, Modern Style",
    "Your Italian Escape Awaits"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % slidingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-italian-gold/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Coffee Beans */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-italian-gold/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cream/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-italian-gold/50 rounded-full animate-float-fast"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-cream/30 rounded-full animate-float-slow"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-italian-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative Top Element */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-italian-gold"></div>
            <div className="mx-4 w-2 h-2 bg-italian-gold rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-italian-gold"></div>
          </div>
        </div>

        {/* Logo with Enhanced Styling */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-italian-gold/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
            <img 
              src="/lovable-uploads/cdb32fff-8cdf-4c49-9efd-a02207927c65.png" 
              alt="Café Libretto Logo" 
              className="relative h-28 md:h-36 mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Enhanced Sliding Tagline */}
        <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center mb-8">
          <div className="relative">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in-up">
              <span 
                key={currentTextIndex}
                className="inline-block animate-slide-in-fancy bg-gradient-to-r from-white via-cream to-italian-gold bg-clip-text text-transparent drop-shadow-lg"
              >
                {slidingTexts[currentTextIndex]}
              </span>
            </h1>
            {/* Text Shadow Effect */}
            <div className="absolute inset-0 font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-italian-gold/20 blur-sm -z-10">
              <span className="inline-block">
                {slidingTexts[currentTextIndex]}
              </span>
            </div>
          </div>
        </div>
        
        <p className="font-inter text-xl md:text-2xl text-cream/95 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-lg">
          Discover the heart of Italy through our carefully crafted breakfast, brunch, and summer specialties. 
          <br className="hidden md:block" />
          <span className="text-italian-gold font-medium">Every dish tells a story of tradition and passion.</span>
        </p>
        
        {/* Enhanced CTA Button */}
        <div className="animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold hover:shadow-xl transform hover:scale-110 transition-all duration-500 font-inter font-semibold px-12 py-6 text-xl rounded-full border-2 border-italian-gold/30 hover:border-italian-gold relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Our Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-italian-gold via-warm-gold to-italian-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-12 animate-fade-in-up">
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cream/50"></div>
            <div className="mx-3 text-cream/60 text-sm font-inter tracking-widest">EST. 2024</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cream/50"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-cream/60 rounded-full flex justify-center relative">
          <div className="w-1.5 h-4 bg-italian-gold rounded-full mt-2 animate-pulse" />
          <div className="absolute -inset-2 border border-cream/30 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;