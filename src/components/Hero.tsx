import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import heroPizza from '@/assets/hero-pizza.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const initiateCall = () => {
    window.location.href = 'tel:+966503146050';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background -z-10" />
      
  <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="flex gap-4 mb-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                ✓ Home Delivery
              </span>
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                Fast Hot Food Delivery
              </span>
            </div>
            <p className="text-secondary text-lg md:text-xl font-semibold mb-4">
              {t('hero.welcome')}
            </p>
            
            {/* Logo above subtitle */}
            <div className="flex justify-center mb-8">
              <img
                src="/logoAJFAN.png"
                alt="AJFAN PIZZA"
                className="w-48 md:w-64 lg:w-80 h-auto object-contain"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto text-center">
              {t('hero.subtitle')}
            </p>
            <div className="space-y-6">
              <Button
                size="lg"
                onClick={initiateCall}
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover-scale bg-gradient-to-r from-primary to-secondary"
              >
                {t('hero.cta')}
              </Button>
              
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    🍕
                  </div>
                  <div>
                    <p className="font-semibold">Fresh Ingredients</p>
                    <p className="text-sm text-muted-foreground">Daily Sourced</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    ⏰
                  </div>
                  <div>
                    <p className="font-semibold">Open Daily</p>
                    <p className="text-sm text-muted-foreground">4 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pizza Image and Features */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl -z-10 animate-float" />
              <img
                src={heroPizza}
                alt="Delicious Pizza"
                className="w-full h-auto rounded-3xl shadow-2xl hover-scale"
              />
              {/* Rating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-muted-foreground">1000+ Reviews</p>
                  </div>
                </div>
              </div>
              {/* Special Offer */}
              <div className="absolute -top-6 -left-6 bg-card rounded-2xl shadow-xl p-4 max-w-xs transform rotate-[-4deg]">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary">Special Offer</p>
                  <p className="text-lg font-bold">Pizza</p>
                  <p className="text-xs text-muted-foreground">On special pizzas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up">
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-3xl font-bold mb-1">5000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-3xl font-bold mb-1">15+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-3xl font-bold mb-1">100%</p>
            <p className="text-sm text-muted-foreground">Fresh Ingredients</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-3xl font-bold mb-1">30 min</p>
            <p className="text-sm text-muted-foreground">Fast Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
