import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/cdb32fff-8cdf-4c49-9efd-a02207927c65.png" 
            alt="Café Libretto Logo" 
            className="h-24 md:h-32 mx-auto mb-6"
          />
        </div>
        
        {/* Tagline */}
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Authentic Italian Experience
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Discover the heart of Italy through our carefully crafted breakfast, brunch, and summer specialties. 
          Every dish tells a story of tradition and passion.
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-gold hover:shadow-gold transform hover:scale-105 transition-all duration-300 font-inter font-medium px-8 py-4 text-lg animate-fade-in"
        >
          Explore Our Menu
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;