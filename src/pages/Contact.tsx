import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Car, Train, Bus } from "lucide-react";
import contactHeroImage from "@/assets/contact-hero-artistic.jpg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            Visit
            <span className="bg-gradient-to-r from-italian-gold to-warm-gold bg-clip-text text-transparent ml-4">
              Us
            </span>
          </h1>
          <p className="font-crimson text-xl md:text-2xl text-white/90 italic drop-shadow-lg">
            Your story awaits at Café Libretto
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
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">Address</h3>
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
                        <h3 className="font-inter font-semibold text-coffee">Phone</h3>
                        <p className="font-crimson text-coffee/80">+49 69 29 72 91 72</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">Email</h3>
                        <p className="font-crimson text-coffee/80">info@cafelibretto.de</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee">Opening Hours</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p>Monday - Friday: 7:30 AM - 7:00 PM</p>
                          <p>Saturday: 8:00 AM - 7:00 PM</p>
                          <p>Sunday: 9:00 AM - 6:00 PM</p>
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
                    How to Reach Us
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-italian-gold/20 rounded-full flex items-center justify-center">
                        <Train className="w-6 h-6 text-italian-gold" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee mb-2">Public Transport</h3>
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
                        <h3 className="font-inter font-semibold text-coffee mb-2">By Car</h3>
                        <div className="font-crimson text-coffee/80 space-y-1">
                          <p>Located in Frankfurt's historic old town</p>
                          <p><strong>Parking:</strong> Parkhaus Dom/Römer (50m away)</p>
                          <p><strong>Address for GPS:</strong> Hasengasse 5, Frankfurt</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cappuccino/20 rounded-full flex items-center justify-center">
                        <Bus className="w-6 h-6 text-cappuccino" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-coffee mb-2">From Airport</h3>
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
                      Find Us in Frankfurt's Old Town
                    </h3>
                    <p className="font-crimson text-coffee/80 mb-4">
                      We're located in the heart of Frankfurt's historic district, 
                      just steps away from the famous Römerberg square and the 
                      Frankfurt Cathedral.
                    </p>
                    <Button 
                      className="bg-gradient-gold hover:shadow-gold transition-all duration-300"
                      onClick={() => window.open('https://maps.google.com/maps/dir//Caf%C3%A9+Libretto,+Hasengasse+5-7,+60311+Frankfurt+am+Main,+Germany', '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Special Note */}
              <Card className="bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 border-cappuccino/20 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <h3 className="font-playfair text-2xl font-bold text-coffee mb-4">
                    Visit Our Neighborhood
                  </h3>
                  <p className="font-crimson text-lg text-coffee/90 mb-4">
                    While you're here, explore the historic Römerberg, visit the 
                    Frankfurt Cathedral, or browse the nearby museums. Our café 
                    is the perfect starting point for discovering Frankfurt's old town.
                  </p>
                  <div className="inline-flex items-center text-italian-gold font-inter font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>In the heart of history</span>
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