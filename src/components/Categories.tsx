import { useTranslation } from 'react-i18next';
import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import broastImg from '@/assets/broast.jpg';
import burgerImg from '@/assets/burger.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import heroPizza from '@/assets/hero-pizza.jpg';
import kidsMealImg from '@/assets/kids-meal.jpg';
import friesImg from '@/assets/fries.jpg';

const Categories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleKeyDown = (e: KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') handleNavigate(path);
  };

  const categories = [
    { name: t('categories.broast'), image: broastImg, count: '12 Items', path: '/fries' },
    { name: t('categories.burger'), image: burgerImg, count: '8 Items', path: '/burger' },
    { name: t('categories.sandwich'), image: sandwichImg, count: '15 Items', path: '/burger' },
    { name: t('categories.pizza'), image: heroPizza, count: '20 Items', path: '/pizza' },
    { name: t('categories.kidsMeal'), image: kidsMealImg, count: '6 Items', path: '/kidsmeal' },
    { name: t('categories.fries'), image: friesImg, count: '5 Items', path: '/fries' },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
            {t('categories.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('categories.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => handleNavigate(category.path)}
              onKeyDown={(e) => handleKeyDown(e, category.path)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover-scale">
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
