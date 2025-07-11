import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
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
              {t('footerDescription')}
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
            <h3 className="font-playfair text-xl font-semibold text-cream mb-4">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-italian-gold mt-1 flex-shrink-0" />
                <div className="font-inter text-cream/80 text-sm">
                  <p>Hasengasse 5-7</p>
                  <p>60311 Frankfurt am Main</p>
                  <p>Germany</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <span className="font-inter text-cream/80 text-sm">+49 69 29 72 91 72</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <span className="font-inter text-cream/80 text-sm">info@cafelibretto.de</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-cream mb-4">{t('openingHours')}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-italian-gold flex-shrink-0" />
                <div className="font-inter text-cream/80 text-sm">
                  <p className="font-medium">{t('mondayToSaturday')}</p>
                  <p>9:00 - 20:00</p>
                </div>
              </div>
              <div className="font-inter text-cream/80 text-sm ml-8">
                <p className="font-medium">{t('closedOn')}</p>
                <p>{t('sundays')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="font-inter text-cream/60 text-sm">
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;