import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/pizzaeyelid?igsh=azB6MDdzN3hjeDdq',
      color: 'hover:text-pink-500'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/share/16uNrZXqwy/',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Snapchat', 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12.206.793c-.432 0-3.906.086-5.277 3.072-.432.864-.648 1.944-.648 3.456 0 .216-.216.432-.432.432-1.296.216-3.888.864-4.104 1.296-.108.216-.216.432.108.648.54.324 1.08.54 1.62.648.108 0 .324.108.324.324 0 .432-.756 2.916-2.376 3.456-.216.108-.324.216-.216.54.108.216.432.432.864.54.432.108 1.08.324 1.404.864.108.216.324.432.648.432 1.188 0 2.376.54 3.456 1.62.756.756 1.404 1.728 1.944 2.916 0 .108.108.216.324.216.108 0 .216-.108.216-.216.54-1.188 1.188-2.16 1.944-2.916 1.08-1.08 2.268-1.62 3.456-1.62.324 0 .54-.216.648-.432.324-.54.972-.756 1.404-.864.432-.108.756-.324.864-.54.108-.324 0-.432-.216-.54-1.62-.54-2.376-3.024-2.376-3.456 0-.216.108-.324.324-.324.54-.108 1.08-.324 1.62-.648.324-.216.216-.432.108-.648-.216-.432-2.808-1.08-4.104-1.296-.216 0-.432-.216-.432-.432 0-1.512-.216-2.592-.648-3.456C16.112.879 12.638.793 12.206.793z"/>
        </svg>
      ),
      color: 'hover:text-yellow-400',
      url: 'https://www.snapchat.com/add/bytzj?share_id=LTJtRZ6aBvI&locale=en-IN'
    },
    { 
      name: 'TikTok', 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'hover:text-black',
      url: 'https://www.tiktok.com/@user4800147190057?_t=ZS-90lTc3NDR46&_r=1'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Main page heading for SEO/accessibility */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <a 
            href="https://www.google.com/maps?q=16.9888477325439,42.8184242248535"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up" 
            className="text-center p-6 group transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">Location</h3>
            <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">XRQ9+G9M, Abu Arish 84441, Saudi Arabia</p>
          </a>

          <a 
            href="tel:+966503146050"
            data-aos="fade-up" 
            data-aos-delay="100" 
            className="text-center p-6 group transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">Phone</h3>
            <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">+966 50 314 6050</p>
          </a>

          <div data-aos="fade-up" data-aos-delay="200" className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-muted-foreground">{t('contact.email')}</p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-bold mb-6">{t('contact.followUs')}</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center transition-all duration-300 hover-scale ${social.color}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          {/* Internal links to other site pages to help crawlers and users */}
          <div className="mt-6 flex justify-center gap-4">
            <a href="/about" className="text-primary hover:underline">{t('nav.about') || 'About'}</a>
            <a href="/who-we-are" className="text-primary hover:underline">Who We Are</a>
            <a href="/#menu" className="text-primary hover:underline">{t('nav.menu') || 'Menu'}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
