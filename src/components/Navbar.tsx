import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src="/logoAJFAN.png" 
              alt="AJFAN PIZZA" 
              className="h-12 w-auto"
              onClick={() => scrollToSection('home')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 px-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
