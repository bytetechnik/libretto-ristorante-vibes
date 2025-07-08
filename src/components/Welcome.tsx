import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, MapPin, Coffee, Heart, Users } from "lucide-react";
import welcomeBgArt from "@/assets/welcome-bg-art.jpg";
import coffeeArt1 from "@/assets/coffee-art-1.jpg";
import coffeeArt2 from "@/assets/coffee-art-2.jpg";

const Welcome = () => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${welcomeBgArt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay with artistic elements */}
      <div className="absolute inset-0 bg-gradient-hero/95"></div>
      
      {/* Floating artistic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-64 h-64 opacity-20 animate-float-slow"
          style={{
            backgroundImage: `url(${coffeeArt1})`,
            backgroundSize: 'cover',
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-16 w-48 h-48 opacity-15 animate-float-medium"
          style={{
            backgroundImage: `url(${coffeeArt2})`,
            backgroundSize: 'cover',
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
        ></div>
        
        {/* Decorative coffee beans */}
        <div className="absolute top-1/4 left-10 w-8 h-8 bg-coffee/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-italian-gold/30 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/4 right-20 w-10 h-10 bg-warm-gold/20 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Welcome Text */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
            {/* Main heading with artistic flair */}
            <div className="space-y-6 relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-italian-gold/10 rounded-full animate-pulse"></div>
              
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee mb-6 relative">
                <span className="inline-block animate-slide-in-fancy">Welcome</span>
                <Coffee className="inline-block ml-4 h-12 w-12 text-italian-gold animate-bounce-slow" />
              </h2>
              
              <p className="font-playfair text-2xl text-coffee/80 mb-8 animate-fade-in">
                We're glad you're here.
              </p>
            </div>
            
            {/* Content with enhanced styling */}
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <div className="bg-cream/40 backdrop-blur-sm p-6 rounded-xl border border-cappuccino/20 shadow-elegant animate-fade-in">
                <p className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-italian-gold mt-1 flex-shrink-0" />
                  Located in the heart of <span className="font-semibold text-coffee">Frankfurt</span>, you'll find our Café Libretto. 
                  A café with an Italian flair awaits you here, right next to the Frankfurt Central Library.
                </p>
              </div>
              
              <div className="bg-cream/30 backdrop-blur-sm p-6 rounded-xl border border-cappuccino/20 shadow-elegant animate-fade-in-up">
                <p className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-italian-gold mt-1 flex-shrink-0" />
                  Enjoy our unique atmosphere and indulge in a variety of delicacies. We offer an extensive 
                  breakfast menu, a changing weekly specials menu, coffee, and cake.
                </p>
              </div>
              
              <div className="bg-cream/40 backdrop-blur-sm p-6 rounded-xl border border-cappuccino/20 shadow-elegant animate-fade-in">
                <p className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-italian-gold mt-1 flex-shrink-0" />
                  In spring and summer, our beautiful, spacious outdoor area with its cozy lounge is a 
                  great place to unwind amidst the hustle and bustle of the city.
                </p>
              </div>
              
              <div className="text-center mt-8 animate-fade-in-up">
                <p className="font-playfair text-2xl text-coffee font-semibold bg-gradient-gold bg-clip-text text-transparent p-4">
                  We look forward to seeing you!
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Info Cards */}
          <div className="space-y-6 animate-slide-in">
            {/* Opening Hours Card */}
            <Card className="bg-cream/90 backdrop-blur-sm border-cappuccino/30 shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-gold shadow-gold">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-coffee">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3 font-inter">
                  <div className="border-b border-cappuccino/30 pb-3">
                    <p className="font-semibold text-coffee text-sm uppercase tracking-wide">
                      Monday to Saturday
                    </p>
                    <p className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      9:00 - 20:00
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Closed on
                    </p>
                    <p className="font-semibold text-coffee">
                      Sundays
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Reservation Card */}
            <Card className="bg-gradient-gold text-white border-0 shadow-gold hover:shadow-elegant transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-white/30 backdrop-blur-sm">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold">
                    Reservation / Order
                  </h3>
                </div>
                <div className="space-y-4">
                  <a 
                    href="tel:069200190-10" 
                    className="block text-center hover:scale-105 transition-transform duration-300"
                  >
                    <p className="text-sm opacity-90 mb-1">Phone</p>
                    <p className="text-2xl font-bold tracking-wide">
                      069 200 190 10
                    </p>
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/20 border-white/50 text-white hover:bg-white hover:text-coffee transition-all duration-300 backdrop-blur-sm font-semibold"
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Location Hint */}
            <div className="flex items-center gap-3 p-6 bg-cream/70 backdrop-blur-sm rounded-xl border border-cappuccino/30 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105">
              <div className="p-2 rounded-full bg-italian-gold/20">
                <MapPin className="h-6 w-6 text-italian-gold flex-shrink-0" />
              </div>
              <p className="font-inter text-coffee font-medium">
                Next to Frankfurt Central Library
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;