import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import galleryHeroImage from "@/assets/gallery-hero-artistic.jpg";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    {
      src: gallery1,
      title: "Café Interior",
      description: "Warm and inviting atmosphere with modern design"
    },
    {
      src: gallery2,
      title: "Coffee Artistry",
      description: "Expertly crafted beverages with vintage equipment"
    },
    {
      src: gallery3,
      title: "Fresh Pastries",
      description: "Daily selection of artisanal cakes and treats"
    },
    {
      src: gallery4,
      title: "Community Gathering",
      description: "Where stories come to life over great coffee"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cappuccino/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${galleryHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-italian-gold/10"></div>
        </div>
        
        {/* Artistic floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-italian-gold/15 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-warm-gold/20 transform rotate-45 animate-bounce blur-xs"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cappuccino/25 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-cream/15 transform rotate-12 animate-pulse"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-italian-gold/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-warm-gold/40 to-transparent animate-bounce"></div>
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Our
            <span className="bg-gradient-to-r from-italian-gold to-warm-gold bg-clip-text text-transparent ml-4">
              Gallery
            </span>
          </h1>
          <p className="font-crimson text-xl md:text-2xl text-white/90 italic drop-shadow-lg">
            Visual Stories from Café Libretto
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-32"></div>
            <div className="mx-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-32"></div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                  index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-playfair text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="font-crimson text-sm">{image.description}</p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-italian-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-warm-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Artist Statement */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-white/90 to-cream/90 backdrop-blur-sm border-cappuccino/20 shadow-elegant p-8 md:p-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee mb-6">
                Capturing Moments
              </h2>
              <p className="font-crimson text-lg text-coffee/90 leading-relaxed mb-6">
                Every corner of Café Libretto tells a story. From the gentle steam rising from freshly brewed espresso 
                to the warm conversations shared over homemade pastries, these moments create the heart of our little book.
              </p>
              <p className="font-inter text-italian-gold font-medium">
                Like pages in a libretto, each image captures a scene from our daily opera of hospitality and craftsmanship.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-italian-gold transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;