import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('newsletter.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 bg-white/95 border-0 h-12 text-lg"
            />
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8 rounded-full"
            >
              {t('newsletter.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
