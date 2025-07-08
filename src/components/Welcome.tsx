import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, MapPin } from "lucide-react";
import welcomeBgArt from "@/assets/welcome-bg-art.jpg";

const Welcome = () => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${welcomeBgArt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-hero/90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Welcome Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-4">
                Welcome
              </h2>
              <p className="font-playfair text-xl text-coffee/80 mb-6">
                We're glad you're here.
              </p>
            </div>
            
            <div className="space-y-4 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                Located in the heart of <span className="font-semibold text-coffee">Frankfurt</span>, you'll find our Café Libretto. 
                A café with an Italian flair awaits you here, right next to the Frankfurt Central Library.
              </p>
              
              <p>
                Enjoy our unique atmosphere and indulge in a variety of delicacies. We offer an extensive 
                breakfast menu, a changing weekly specials menu, coffee, and cake.
              </p>
              
              <p>
                In spring and summer, our beautiful, spacious outdoor area with its cozy lounge is a 
                great place to unwind amidst the hustle and bustle of the city.
              </p>
              
              <p className="font-playfair text-xl text-coffee font-semibold mt-6">
                We look forward to seeing you!
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Opening Hours Card */}
            <Card className="bg-cream/80 border-cappuccino/20 shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-italian-gold/10">
                    <Clock className="h-6 w-6 text-italian-gold" />
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
                    <p className="text-2xl font-bold text-italian-gold">
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

            {/* Reservation Card */}
            <Card className="bg-gradient-gold text-white border-0 shadow-gold hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold">
                    Reservation / Order
                  </h3>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:069200190-10" 
                    className="block text-center"
                  >
                    <p className="text-sm opacity-90 mb-1">Phone</p>
                    <p className="text-2xl font-bold tracking-wide">
                      069 200 190 10
                    </p>
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-coffee transition-all duration-300"
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Hint */}
            <div className="flex items-center gap-3 p-4 bg-cappuccino/30 rounded-lg">
              <MapPin className="h-5 w-5 text-italian-gold flex-shrink-0" />
              <p className="font-inter text-sm text-coffee">
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