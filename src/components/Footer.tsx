import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-coffee text-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <img 
              src="/lovable-uploads/cdb32fff-8cdf-4c49-9efd-a02207927c65.png" 
              alt="Café Libretto" 
              className="h-16 mb-4"
            />
            <p className="font-inter text-cream/80 leading-relaxed max-w-md">
              Experience the authentic taste of Italy in every sip and bite. 
              Our passion for traditional Italian coffee culture meets modern culinary excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/60 hover:text-italian-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-cream/60 hover:text-italian-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-cream/60 hover:text-italian-gold transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-cream mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-italian-gold mt-1 flex-shrink-0" />
                <div className="font-inter text-cream/80 text-sm">
                  <p>123 Via Roma</p>
                  <p>Italian Quarter, City 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <span className="font-inter text-cream/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <span className="font-inter text-cream/80 text-sm">info@cafelibretto.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-cream mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <div className="font-inter text-cream/80 text-sm">
                  <p className="font-medium">Monday - Friday</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="font-inter text-cream/80 text-sm ml-8">
                <p className="font-medium">Saturday - Sunday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="font-inter text-cream/60 text-sm">
            © 2024 Café Libretto. All rights reserved. Made with ❤️ in Italy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;