import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Sun, Cake } from "lucide-react";

interface MenuSectionProps {
  title: string;
  description: string;
  icon: "coffee" | "sun" | "cake";
  items: string[];
  reversed?: boolean;
}

const MenuSection = ({ title, description, icon, items, reversed = false }: MenuSectionProps) => {
  const IconComponent = {
    coffee: Coffee,
    sun: Sun,
    cake: Cake,
  }[icon];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${reversed ? 'lg:order-2' : ''} space-y-6`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-italian-gold/10">
                <IconComponent className="h-8 w-8 text-italian-gold" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee">
                {title}
              </h2>
            </div>
            
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-cream/50 hover:bg-cream transition-colors duration-300 hover:shadow-elegant"
                >
                  <div className="w-2 h-2 rounded-full bg-italian-gold" />
                  <span className="font-inter text-coffee font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-italian-gold text-italian-gold hover:bg-italian-gold hover:text-white transition-all duration-300 font-inter font-medium"
            >
              View Full Menu
            </Button>
          </div>
          
          {/* Visual Card */}
          <div className={`${reversed ? 'lg:order-1' : ''}`}>
            <Card className="shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 bg-gradient-hero border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-italian-gold/20 flex items-center justify-center mb-4">
                  <IconComponent className="h-8 w-8 text-italian-gold" />
                </div>
                <CardTitle className="font-playfair text-2xl text-coffee">{title}</CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  Crafted with Italian tradition
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="h-32 bg-cappuccino/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-inter text-muted-foreground italic">
                    Delicious {title.toLowerCase()} awaits
                  </span>
                </div>
                <p className="font-inter text-sm text-muted-foreground">
                  Made fresh daily with authentic Italian ingredients
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;