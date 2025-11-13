"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🌀 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    // If we're on the homepage, just scroll to the section
    if (location.pathname === "/") {
      element?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // If not on the homepage, navigate to the homepage first then scroll
    // Use navigate from react-router and a short timeout to allow the DOM to mount
    navigate("/");
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border shadow-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/logoAJFAN.png"
              alt="AJFAN PIZZA"
              className="h-10 w-auto sm:h-12 transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {["home", "menu", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {i18n.language === "en" ? "AR" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-2"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm">{i18n.language === "en" ? "AR" : "EN"}</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-all"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-2">
          {["home", "menu", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block text-left text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium text-base"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
