import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Welcome = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Welcome Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-4">
                {t('welcomeTitle')}
              </h2>
              <p className="font-playfair text-xl text-coffee/80 mb-6">
                {t('welcomeSubtitle')}
              </p>
            </div>
            
            <div className="space-y-4 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                {t('welcomeDescription1')}
              </p>
              
              <p>
                {t('welcomeDescription2')}
              </p>
              
              <p>
                {t('welcomeDescription3')}
              </p>
              
              <p className="font-playfair text-xl text-coffee font-semibold mt-6">
                {t('welcomeDescription4')}
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
                    {t('openingHours')}
                  </h3>
                </div>
                <div className="space-y-3 font-inter">
                  <div className="border-b border-cappuccino/30 pb-3">
                    <p className="font-semibold text-coffee text-sm uppercase tracking-wide">
                      {t('mondayToSaturday')}
                    </p>
                    <p className="text-2xl font-bold text-italian-gold">
                      9:00 - 20:00
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      {t('closedOn')}
                    </p>
                    <p className="font-semibold text-coffee">
                      {t('sundays')}
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
                    {t('reservationOrder')}
                  </h3>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:069200190-10" 
                    className="block text-center"
                  >
                    <p className="text-sm opacity-90 mb-1">{t('phone')}</p>
                    <p className="text-2xl font-bold tracking-wide">
                      069 200 190 10
                    </p>
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-coffee transition-all duration-300"
                  >
                    {t('callNow')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Hint */}
            <div className="flex items-center gap-3 p-4 bg-cappuccino/30 rounded-lg">
              <MapPin className="h-5 w-5 text-italian-gold flex-shrink-0" />
              <p className="font-inter text-sm text-coffee">
                {t('nextToLibrary')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;