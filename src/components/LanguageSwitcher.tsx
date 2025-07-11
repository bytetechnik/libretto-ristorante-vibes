import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/useLanguage";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`transition-all duration-300 relative group ${
            isScrolled 
              ? 'text-coffee hover:text-italian-gold hover:bg-italian-gold/10'
              : 'text-white hover:text-italian-gold hover:bg-white/10'
          }`}
        >
          <div className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-br from-italian-gold/20 to-warm-gold/20'
              : 'bg-gradient-to-br from-white/20 to-white/30'
          }`}></div>
          <Languages className="h-4 w-4 mr-2 relative z-10" />
          <span className="relative z-10 font-inter text-sm">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-cappuccino/30">
        <DropdownMenuItem
          onClick={() => setLanguage('de')}
          className={`font-inter ${language === 'de' ? 'bg-italian-gold/10 text-italian-gold' : ''}`}
        >
          <span className="mr-2">🇩🇪</span>
          {t('german')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`font-inter ${language === 'en' ? 'bg-italian-gold/10 text-italian-gold' : ''}`}
        >
          <span className="mr-2">🇺🇸</span>
          {t('english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;