import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Index = () => {
  const breakfastItems = [
    "Espresso & Cappuccino",
    "Fresh Cornetti",
    "Italian Frittata",
    "Bruschetta Varieties",
    "Yogurt Parfait",
    "Seasonal Fruit"
  ];

  const summerItems = [
    "Affogato al Caffè",
    "Granita Siciliana",
    "Prosciutto & Melon",
    "Caprese Salad",
    "Gazpacho",
    "Limoncello Spritz"
  ];

  const cakeItems = [
    "Tiramisu Classico",
    "Cannoli Siciliani",
    "Panna Cotta",
    "Sfogliatelle",
    "Gelato Artigianale",
    "Biscotti Assortiti"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>

      <div id="breakfast" className="bg-background">
        <MenuSection
          title="Breakfast & Brunch"
          description="Start your day the Italian way with our authentic breakfast selections. From perfectly brewed espresso to fresh cornetti, every morning becomes a celebration of Italian culinary tradition."
          icon="coffee"
          items={breakfastItems}
        />
      </div>

      <div id="summer" className="bg-gradient-hero">
        <MenuSection
          title="Summer Menu"
          description="Embrace the warmth of summer with our refreshing seasonal specialties. Light, fresh, and bursting with Mediterranean flavors that transport you to the Italian countryside."
          icon="sun"
          items={summerItems}
          reversed={true}
        />
      </div>

      <div id="cakes" className="bg-background">
        <MenuSection
          title="Cakes & Sweets"
          description="Indulge in our exquisite collection of traditional Italian desserts. Each sweet creation is a masterpiece, crafted with love and authentic recipes passed down through generations."
          icon="cake"
          items={cakeItems}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;