import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import heroPizza from '@/assets/hero-pizza.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />
              <img
                src={heroPizza}
                alt="About AJFAN PIZZA"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
              {t('about.title')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-primary to-secondary hover-scale"
            >
              {t('about.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
