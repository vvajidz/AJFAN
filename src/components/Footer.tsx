import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Camera, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/pizzaeyelid?igsh=azB6MDdzN3hjeDdq',
      label: 'Instagram'
    },
    {
      icon: Camera,
      url: 'https://www.snapchat.com/add/bytzj?share_id=LTJtRZ6aBvI&locale=en-IN',
      label: 'Snapchat'
    },
    {
      icon: Youtube,
      url: 'https://www.tiktok.com/@user4800147190057?_t=ZS-90lTc3NDR46&_r=1',
      label: 'TikTok'
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/share/16uNrZXqwy/',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
            AJFAN PIZZA
          </h3>
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-background/80">
            © 2024 AJFAN PIZZA. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
