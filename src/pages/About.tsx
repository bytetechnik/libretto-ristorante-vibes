import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import aboutHeroImage from "@/assets/about-hero-artistic.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cappuccino/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src={aboutHeroImage}
            alt="Artistic café interior with warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-coffee/85 via-coffee/70 to-espresso/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-transparent to-coffee/50"></div>
        </div>
        
        {/* Artistic floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-12 w-20 h-20 bg-italian-gold/20 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-24 right-20 w-36 h-36 bg-warm-gold/15 transform rotate-45 animate-float-medium"></div>
          <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-white/20 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-italian-gold/10 transform rotate-12 animate-bounce-slow"></div>
          
          {/* Artistic geometric shapes */}
          <div className="absolute top-1/2 left-8 w-8 h-32 bg-gradient-to-b from-italian-gold/30 to-transparent transform -rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-12 w-32 h-8 bg-gradient-to-r from-warm-gold/30 to-transparent transform rotate-12 animate-pulse"></div>
        </div>

        <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-2000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}>
          <div className="relative">
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl leading-tight">
              {t('about')}
              <span className="block md:inline bg-gradient-to-r from-italian-gold via-warm-gold to-italian-gold bg-clip-text text-transparent ml-0 md:ml-6">
                Libretto
              </span>
            </h1>
            
            {/* Decorative flourish */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-italian-gold to-transparent"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent"></div>
          </div>
          
          <p className="font-crimson text-2xl md:text-3xl text-white/95 italic drop-shadow-lg mb-8 leading-relaxed">
            {t('littleBookWhereStories')}
          </p>
          
          {/* Enhanced decorative line */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent w-40"></div>
            <div className="mx-6 relative">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-8 h-8 bg-italian-gold/30 rounded-full animate-ping"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent w-40"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Etymology Section */}
          <Card className="mb-16 bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-6">
                    {t('theEtymology')}
                  </h2>
                  <div className="space-y-4 font-crimson text-lg text-coffee/90 leading-relaxed">
                    <p>
                      <strong className="text-italian-gold">Libretto</strong> {t('librettoEuphonious')} 
                      <em className="text-warm-gold"> {t('littleBook')}</em>.
                    </p>
                    <p>
                      {t('inParticularRefers')}
                    </p>
                    <p>
                      {t('sinceSungWord')} <em className="text-italian-gold">{t('libro')}</em> ({t('book')}) – {t('emergedBeginning')}
                    </p>
                  </div>
                </div>
                
                {/* Decorative illustration area */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-italian-gold/20 to-warm-gold/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl text-italian-gold">📚</div>
                      <p className="font-playfair text-2xl text-coffee italic">
                        {t('littleBook')}
                      </p>
                      <p className="font-inter text-sm text-coffee/70">
                        {t('operaBalletPantomime')}
                      </p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-italian-gold rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-warm-gold rounded-full animate-bounce"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Philosophy Section */}
          <Card className="mb-16 bg-gradient-to-r from-white/90 to-cream/90 backdrop-blur-sm border-cappuccino/20 shadow-elegant">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-8">
                {t('ourPhilosophy')}
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 font-crimson text-lg text-coffee/90 leading-relaxed">
                <p className="text-xl">
                  {t('justAsLibrettists')}
                </p>
                
                {/* Artistic Image Gallery */}
                <div className="my-16">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* First Image - Café Interior */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-italian-gold/30 to-warm-gold/30 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-700"></div>
                      <div className="relative bg-white rounded-3xl p-6 shadow-elegant group-hover:shadow-gold transition-all duration-500">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                          <img 
                            src="/lovable-uploads/ab01f7e2-ebef-4e5d-9af9-159fec66683e.png"
                            alt="Interior of Café Libretto showing dining area and display case"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="mt-6 text-center">
                          <h4 className="font-playfair text-xl font-bold text-coffee mb-2">
                            {t('cafeLibrettoInterior')}
                          </h4>
                          <p className="font-crimson text-sm text-coffee/70 italic leading-relaxed">
                            {t('whereStoriesComeLife')}
                          </p>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-italian-gold/40 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-warm-gold/50 rounded-full animate-bounce"></div>
                    </div>

                    {/* Artistic text section */}
                    <div className="space-y-6">
                      <div className="relative">
                        <h3 className="font-playfair text-3xl font-bold text-coffee mb-4">
                          {t('atmosphereLikeNoOther')}
                        </h3>
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-gold rounded-full"></div>
                      </div>
                      <p className="font-crimson text-lg text-coffee/80 leading-relaxed">
                        {t('stepIntoOurWorld')}
                      </p>
                      <div className="bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 rounded-2xl p-6">
                        <p className="font-inter text-coffee/70 italic text-center">
                          {t('placeWhereTime')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8 bg-gradient-gold h-px" />
                <p className="font-inter text-lg text-italian-gold font-medium">
                  {t('weWishPleasant')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fountain of Virtue Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-4">
                    {t('theFountainOfVirtue')}
                  </h2>
                  <p className="font-crimson text-xl text-italian-gold italic">
                    {t('legacyOfVirtue')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className="space-y-6 font-crimson text-lg text-coffee/90 leading-relaxed">
                    <p>
                      {t('virtueFountainPump')} <strong className="text-italian-gold">1453</strong> {t('documented')}
                    </p>
                    
                    <p>
                      {t('pumpWellBuilt')} <strong className="text-italian-gold">1768</strong> {t('built')} 
                      {t('renovatedSeveralTimes')}
                    </p>

                    <div className="bg-cappuccino/10 rounded-xl p-6 my-8">
                      <h3 className="font-playfair text-2xl font-bold text-coffee mb-4">
                        {t('theAllegoryOfVirtue')}
                      </h3>
                      <p>
                        {t('fountainDepictsAllegory')}
                      </p>
                    </div>

                    <p>
                      {t('carriesMeasuringRod')}
                    </p>
                  </div>

                  {/* Fountain Image - Artistic Layout */}
                  <div className="space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-italian-gold/25 to-warm-gold/25 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-all duration-700"></div>
                      <div className="relative bg-white rounded-3xl p-6 shadow-elegant group-hover:shadow-gold transition-all duration-500">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                          <img 
                            src="/lovable-uploads/4ceae6e5-7085-4c94-9ba4-b2493c34111f.png"
                            alt="The Fountain of Virtue - Historical statue depicting the allegory of Virtue"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="mt-6 text-center">
                          <h4 className="font-playfair text-xl font-bold text-coffee mb-2">
                            {t('theFountainOfVirtueTitle')}
                          </h4>
                          <p className="font-crimson text-sm text-coffee/70 italic leading-relaxed">
                            {t('rococoFigure')}
                          </p>
                        </div>
                      </div>
                      {/* Decorative artistic elements */}
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-warm-gold/50 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-italian-gold/40 rounded-full animate-bounce"></div>
                      <div className="absolute top-1/2 -right-2 w-6 h-6 bg-white/60 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Additional artistic quote */}
                    <div className="bg-gradient-to-r from-coffee/5 to-italian-gold/5 rounded-2xl p-6 border border-italian-gold/20">
                      <p className="font-crimson text-center text-coffee/80 italic">
                        {t('standingTestament')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Historical Timeline */}
                <div className="mt-16">
                  <h3 className="font-playfair text-2xl font-bold text-coffee mb-8 text-center">
                    Historical Timeline
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{[
                        { year: "1453", event: "Medieval draw well documented" },
                        { year: "1768", event: "Pump well built with Virtue figure" },
                        { year: "1822-1823", event: "First renovation" },
                        { year: "1887", event: "Second renovation" },
                        { year: "1944", event: "City destruction - only statue survived" },
                        { year: "1967", event: "Restoration by Georg Krämer" }
                      ].map((item, index) => (
                        <div key={index} className="group">
                          <div className="bg-white/60 hover:bg-white/80 rounded-xl p-6 h-full transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-sm hover:shadow-elegant">
                            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                              {item.year.split('-')[0]}
                            </div>
                            <p className="font-inter text-coffee text-center">{item.event}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 rounded-xl p-8 mt-12">
                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-2xl font-bold text-coffee">
                      Legacy Continues
                    </h3>
                    <p className="font-crimson text-lg text-coffee/90">
                      After the Second World War, only the fountain statue survived the destruction. 
                      Sculptor Georg Krämer restored the fountain in a simplified form by 1967. 
                      It then came under the care of the Stadtsparkasse (city savings bank). 
                      For the opening of the central library, the Tugendbrunnen was included in 
                      the city's fountain renovation program.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;