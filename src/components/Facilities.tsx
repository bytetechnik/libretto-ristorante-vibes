import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, Car, Wifi, Users, Coffee, CreditCard, Heart } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Leaf,
      title: "Freshness Guarantee",
      description: "Always fresh ingredients and, where possible, locally sourced.",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      icon: Sun,
      title: "Outdoor Area",
      description: "Enjoy your coffee on our sunny terrace.",
      color: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      icon: Car,
      title: "Parking",
      description: "You can always find parking in the surrounding parking garages.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet perfect for work, study, or staying connected.",
      color: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "Host your special occasions with authentic Italian catering.",
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600"
    },
    {
      icon: Coffee,
      title: "Take-Home Beans",
      description: "Premium Italian coffee beans and ground coffee for home brewing.",
      color: "from-amber-500/10 to-yellow-500/10",
      iconColor: "text-amber-600"
    },
    {
      icon: CreditCard,
      title: "All Payment Methods",
      description: "Cash, cards, mobile payments - we accept all major payment methods.",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-600"
    },
    {
      icon: Heart,
      title: "Family Friendly",
      description: "Wheelchair accessible with baby changing facilities and kids menu.",
      color: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream via-cappuccino/20 to-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-italian-gold/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl animate-float-medium"></div>
        
        {/* Artistic Background Elements */}
        <div className="absolute top-16 left-16 w-40 h-40 border border-french-gold/12 transform rotate-12 animate-rotate-slow"></div>
        <div className="absolute bottom-24 right-20 w-56 h-56 bg-gradient-radial from-parisian-blue/6 to-transparent animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-20 bg-gradient-to-b from-artistic-lavender/20 to-transparent rotate-30 animate-drift-fast"></div>
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
            Le Nostre Strutture
          </h2>
          <p className="font-inter text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Comfort e convenienza per rendere la tua esperienza italiana indimenticabile
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Card 
                key={index}
                className="group bg-cream/60 backdrop-blur-sm border border-cappuccino/20 hover:bg-cream/80 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 mx-auto rounded-full bg-italian-gold/10 flex items-center justify-center group-hover:bg-italian-gold/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className={`h-8 w-8 ${facility.iconColor} group-hover:text-italian-gold transition-colors duration-300`} />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-italian-gold/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-playfair text-xl font-semibold text-coffee mb-3 group-hover:text-italian-gold transition-colors duration-300">
                    {facility.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed group-hover:text-coffee/80 transition-colors duration-300">
                    {facility.description}
                  </p>
                  
                  {/* Decorative dots */}
                  <div className="flex justify-center mt-4 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="w-1 h-1 bg-italian-gold rounded-full"></div>
                    <div className="w-1 h-1 bg-warm-gold rounded-full"></div>
                    <div className="w-1 h-1 bg-italian-gold rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-italian-gold/50"></div>
            <div className="mx-4 font-playfair text-italian-gold/60 italic text-sm">
              Benvenuti alla famiglia Libretto
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-italian-gold/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;