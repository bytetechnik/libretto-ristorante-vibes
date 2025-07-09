import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import MenuSlider from "@/components/MenuSlider";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <Welcome />
      </div>

      <div id="menu">
        <MenuSlider />
      </div>

      <Facilities />

      <Reviews />

      <Footer />
    </div>
  );
};

export default Index;