import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cappuccino/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee/20 via-transparent to-italian-gold/10"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-italian-gold/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-warm-gold/20 transform rotate-45 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cappuccino/30 rounded-full animate-ping"></div>
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-coffee mb-6 tracking-tight">
            Café
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-4">
              Libretto
            </span>
          </h1>
          <p className="font-crimson text-xl md:text-2xl text-coffee/80 italic">
            "Little Book" - Where Stories Come to Life
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-gold w-32"></div>
            <div className="mx-4 w-3 h-3 bg-italian-gold rounded-full"></div>
            <div className="h-px bg-gradient-gold w-32"></div>
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
                    The Etymology
                  </h2>
                  <div className="space-y-4 font-crimson text-lg text-coffee/90 leading-relaxed">
                    <p>
                      <strong className="text-italian-gold">Libretto</strong> is the euphonious word for 
                      <em className="text-warm-gold"> "little book"</em>.
                    </p>
                    <p>
                      In particular, this refers to the texts or stories that are written by the 
                      so-called librettists for opera, ballet or pantomime.
                    </p>
                    <p>
                      Since the sung word is always longer than the written word, these "librettos" 
                      are usually shorter than a novel. Thus, the term "libretto" – a diminutive of 
                      the Italian word <em className="text-italian-gold">"libro"</em> (book) – emerged 
                      as early as the beginning of the 18th century.
                    </p>
                  </div>
                </div>
                
                {/* Decorative illustration area */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-italian-gold/20 to-warm-gold/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl text-italian-gold">📚</div>
                      <p className="font-playfair text-2xl text-coffee italic">
                        "Little Book"
                      </p>
                      <p className="font-inter text-sm text-coffee/70">
                        Opera • Ballet • Pantomime
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
                Our Philosophy
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 font-crimson text-lg text-coffee/90 leading-relaxed">
                <p className="text-xl">
                  Just as librettists have always known how to captivate opera and ballet audiences 
                  with their exciting or thrilling stories, we would like to invite your senses to 
                  travel to another world with an extraordinary atmosphere and small and large 
                  culinary delights.
                </p>
                <Separator className="my-8 bg-gradient-gold h-px" />
                <p className="font-inter text-lg text-italian-gold font-medium">
                  We wish you a pleasant stay in our hotel and would be pleased to welcome you 
                  again at Café Libretto on your next stroll through the city.
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
                    The Fountain of Virtue
                  </h2>
                  <p className="font-crimson text-xl text-italian-gold italic">
                    A Legacy of Virtue at Café Libretto
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className="space-y-6 font-crimson text-lg text-coffee/90 leading-relaxed">
                    <p>
                      The Virtue Fountain is a pump well that stood on the Heilig-Geist-Plätzchen 
                      square until the city was destroyed in 1944. A medieval draw well was 
                      documented at this location in the city as early as <strong className="text-italian-gold">1453</strong>.
                    </p>
                    
                    <p>
                      A pump well was built here in <strong className="text-italian-gold">1768</strong>. 
                      This was renovated several times, for example in 1822 or 1823, then in 1887, 
                      and finally in 1967.
                    </p>

                    <div className="bg-cappuccino/10 rounded-xl p-6 my-8">
                      <h3 className="font-playfair text-2xl font-bold text-coffee mb-4">
                        The Allegory of Virtue
                      </h3>
                      <p>
                        The Fountain of Virtue depicts the allegory of Virtue; a figure said to have 
                        originated from the first fountain in 1768. The Rococo figure stands, like 
                        medieval figures of the Virgin Mary, on a globe symbolizing vice, which she 
                        tramples underfoot.
                      </p>
                    </div>

                    <p>
                      She carries a measuring rod, a sword, and a ball weight; comparable to the 
                      statuette in the Justitia Fountain on the Römerberg.
                    </p>
                  </div>

                  {/* Historical Timeline */}
                  <div className="space-y-6">
                    <h3 className="font-playfair text-2xl font-bold text-coffee mb-6">
                      Historical Timeline
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { year: "1453", event: "Medieval draw well documented" },
                        { year: "1768", event: "Pump well built with Virtue figure" },
                        { year: "1822-1823", event: "First renovation" },
                        { year: "1887", event: "Second renovation" },
                        { year: "1944", event: "City destruction - only statue survived" },
                        { year: "1967", event: "Restoration by Georg Krämer" },
                        { year: "1967", event: "Inauguration by Mayor Willi Brundert" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 group">
                          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                            {item.year}
                          </div>
                          <div className="flex-1 p-4 bg-white/60 rounded-lg group-hover:bg-white/80 transition-colors duration-300">
                            <p className="font-inter text-coffee">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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