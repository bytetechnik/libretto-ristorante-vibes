import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Sun, Cake, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface MenuSlide {
  id: string;
  title: string;
  description: string;
  icon: "coffee" | "sun" | "cake";
  items: string[];
  bgColor: string;
  accentColor: string;
}

const MenuSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { t } = useLanguage();

  const menuSlides: MenuSlide[] = [
    {
      id: "breakfast",
      title: t('breakfastTitle'),
      description: t('breakfastDescription'),
      icon: "coffee",
      items: [
        "Espresso & Cappuccino",
        "Fresh Croissants",
        "Italian Frittata",
        "Bruschetta Varieties",
        "Yogurt with Honey",
        "Seasonal Fruits"
      ],
      bgColor: "from-cream via-cappuccino/30 to-cream",
      accentColor: "warm-gold"
    },
    {
      id: "summer",
      title: t('summerTitle'),
      description: t('summerDescription'),
      icon: "sun",
      items: [
        "Affogato al Caffè",
        "Sicilian Granita",
        "Prosciutto & Melon",
        "Caprese Salad",
        "Italian Gazpacho",
        "Limoncello Spritz"
      ],
      bgColor: "from-cappuccino/20 via-italian-gold/10 to-cream",
      accentColor: "italian-gold"
    },
    {
      id: "cakes",
      title: t('cakesTitle'),
      description: t('cakesDescription'),
      icon: "cake",
      items: [
        "Classic Tiramisù",
        "Sicilian Cannoli",
        "Panna Cotta",
        "Neapolitan Sfogliatelle",
        "Artisanal Gelato",
        "Grandma's Cookies"
      ],
      bgColor: "from-warm-gold/15 via-cappuccino/25 to-cream",
      accentColor: "coffee"
    }
  ];

  const IconComponent = {
    coffee: Coffee,
    sun: Sun,
    cake: Cake,
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % menuSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, menuSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuSlides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuSlides.length) % menuSlides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentMenu = menuSlides[currentSlide];
  const CurrentIcon = IconComponent[currentMenu.icon];

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-italian-gold/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-italian-gold"></div>
            <div className="mx-4 w-3 h-3 bg-italian-gold rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-italian-gold"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-4">
            {t('ourMenu')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground italic">
            {t('threeCulinaryExperiences')}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuSlides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgColor} p-8 md:p-12 min-h-[650px] flex items-center`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full w-full">
                      {/* Content */}
                      <div className="space-y-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                          <div className="p-4 rounded-full bg-italian-gold/20 backdrop-blur-sm border border-italian-gold/30">
                            <CurrentIcon className="h-10 w-10 text-italian-gold" />
                          </div>
                          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-coffee">
                            {slide.title}
                          </h3>
                        </div>
                        
                        <p className="font-inter text-lg text-coffee/80 leading-relaxed">
                          {slide.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {slide.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex}
                              className="flex items-center gap-3 p-4 rounded-lg bg-cream/60 backdrop-blur-sm hover:bg-cream/80 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 border border-cappuccino/20"
                              style={{ animationDelay: `${itemIndex * 100}ms` }}
                            >
                              <div className="w-2 h-2 rounded-full bg-italian-gold animate-pulse" />
                              <span className="font-inter text-coffee font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          size="lg"
                          className="bg-gradient-gold hover:shadow-gold hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-inter font-semibold px-8 py-3 rounded-full border border-italian-gold/30"
                        >
                          {t('discoverMore')}
                        </Button>
                      </div>
                      
                      {/* Visual Card */}
                      <div className="lg:flex justify-center items-center hidden">
                        <Card className="shadow-gold hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 bg-cream/80 backdrop-blur-sm border border-cappuccino/20 w-80">
                          <CardHeader className="text-center pb-4">
                            <div className="mx-auto w-20 h-20 rounded-full bg-italian-gold/20 flex items-center justify-center mb-6 border border-italian-gold/30">
                              <CurrentIcon className="h-10 w-10 text-italian-gold" />
                            </div>
                            <CardTitle className="font-playfair text-2xl text-coffee">{slide.title}</CardTitle>
                            <CardDescription className="font-inter text-coffee/70 italic">
                              {t('authenticItalianTradition')}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="h-40 bg-gradient-to-br from-italian-gold/10 via-warm-gold/15 to-cappuccino/20 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden border border-italian-gold/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-italian-gold/10 via-transparent to-warm-gold/10 animate-slow-zoom"></div>
                              <span className="font-playfair text-coffee/60 italic text-lg relative z-10">
                                {t('deliciousItalianSpecialties')}
                              </span>
                              {/* Decorative elements */}
                              <div className="absolute top-2 right-2 w-2 h-2 bg-italian-gold/40 rounded-full"></div>
                              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-warm-gold/40 rounded-full"></div>
                            </div>
                            <p className="font-inter text-sm text-coffee/70 italic">
                              {t('preparedFreshDaily')}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-coffee hover:text-italian-gold rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-coffee hover:text-italian-gold rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          {menuSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-italian-gold shadow-gold scale-125'
                  : 'bg-italian-gold/30 hover:bg-italian-gold/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`text-sm font-inter transition-all duration-300 ${
              isAutoPlay 
                ? 'text-italian-gold hover:text-warm-gold' 
                : 'text-coffee/60 hover:text-coffee'
            }`}
          >
            {isAutoPlay ? 'Pause' : 'Play'} Auto-Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSlider;