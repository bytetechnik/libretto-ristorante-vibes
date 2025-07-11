import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import contactHeroImage from "@/assets/contact-hero-french.jpg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cappuccino/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${contactHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/25 to-black/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-italian-gold/15"></div>
        </div>
        
        {/* Artistic geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 right-20 w-6 h-6 bg-italian-gold/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-8 h-8 bg-warm-gold/25 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-1 bg-cream/30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-16 bg-italian-gold/20 animate-bounce"></div>
          
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/20 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-italian-gold/15 to-transparent"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            {t('visitUs')}
          </h1>
          <p className="font-crimson text-xl md:text-2xl text-white/90 italic drop-shadow-lg">
            {t('yourStoryAwaits')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-bold text-coffee mb-6">
                    {t('contactInformation')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">{t('address')}</h3>
                        <p className="font-crimson text-coffee/80">
                          Hasengasse 5-7<br />
                          60311 Frankfurt am Main<br />
                          Germany
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">{t('phone')}</h3>
                        <p className="font-crimson text-coffee/80">+49 69 29 72 91 72</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">{t('email')}</h3>
                        <p className="font-crimson text-coffee/80">info@cafelibretto.de</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">{t('openingHours')}</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p>{t('mondayToSaturday')}: 9:00 - 20:00</p>
                          <p>{t('closedOn')} {t('sundays')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <Card className="bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-bold text-coffee mb-6">
                    {t('howToReachUs')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-italian-gold/20 rounded-full flex items-center justify-center">
                        <Train className="w-6 h-6 text-italian-gold" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee mb-2">{t('publicTransport')}</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p><strong>U-Bahn:</strong> U4, U5 to "Dom/Römer" (2 min walk)</p>
                          <p><strong>S-Bahn:</strong> S1-S6, S8, S9 to "Konstablerwache" (5 min walk)</p>
                          <p><strong>Tram:</strong> Line 11, 12 to "Römerberg" (3 min walk)</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-warm-gold/20 rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-warm-gold" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee mb-2">{t('byCar')}</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p>{t('locatedInFrankfurt')}</p>
                          <p><strong>{t('parking')}</strong> Parkhaus Dom/Römer (50m away)</p>
                          <p><strong>{t('addressForGps')}</strong> Hasengasse 5, Frankfurt</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cappuccino/20 rounded-full flex items-center justify-center">
                        <Bus className="w-6 h-6 text-cappuccino" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee mb-2">{t('fromAirport')}</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p>S8, S9 from Frankfurt Airport to "Hauptwache"</p>
                          <p>Then U4, U5 to "Dom/Römer" (Total: 25 min)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-96 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.087236277168!2d8.681836116!3d50.1133164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea5b1608a9b%3A0x2debb2591f7a58d2!2sCaf%C3%A9%20Libretto!5e0!3m2!1sen!2sde!4v1625659145234!5m2!1sen!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-t-lg"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-coffee mb-2">
                      {t('findUsInOldTown')}
                    </h3>
                    <p className="font-crimson text-coffee/80 mb-4">
                      {t('oldTownDescription')}
                    </p>
                    <Button 
                      className="bg-gradient-gold hover:shadow-gold transition-all duration-300"
                      onClick={() => window.open('https://maps.google.com/maps/dir//Caf%C3%A9+Libretto,+Hasengasse+5-7,+60311+Frankfurt+am+Main,+Germany', '_blank')}
                    >
                      {t('getDirections')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Special Note */}
              <Card className="bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 border-cappuccino/20 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <h3 className="font-playfair text-2xl font-bold text-coffee mb-4">
                    {t('visitNeighborhood')}
                  </h3>
                  <p className="font-crimson text-lg text-coffee/90 mb-4">
                    {t('neighborhoodDescription')}
                  </p>
                  <div className="inline-flex items-center text-italian-gold font-inter font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{t('inHeartOfHistory')}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;