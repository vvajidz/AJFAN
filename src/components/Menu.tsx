import { useTranslation } from 'react-i18next';
import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import broastImg from '@/assets/broast.jpg';
import burgerImg from '@/assets/burger.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import heroPizza from '@/assets/hero-pizza.jpg';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => navigate(path);

  const handleKeyDown = (e: KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') handleNavigate(path);
  };

  const menuItems = [
    {
      name: 'Sandwich',
      nameAr: 'ساندوتش',
      category: 'Sandwich',
      image: sandwichImg,
      path: '/sandwitch',
      viewAll: '/sandwitch'
    },
    {
      name: 'Burger',
      nameAr: 'برجر',
      category: 'Burger',
      image: burgerImg,
      path: '/burger',
      viewAll: '/burger'
    },
    {
      name: 'Broast',
      nameAr: 'بروست',
      category: 'Broast',
      image: broastImg,
      path: '/fries',
      viewAll: '/fries'
    },
    {
      name: 'Pizza',
      nameAr: 'بيتزا',
      category: 'Pizza',
      image: heroPizza,
      path: '/pizza',
      viewAll: '/pizza'
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
            {t('menu.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('menu.title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => handleNavigate(item.path)}
              onKeyDown={(e) => handleKeyDown(e, item.path)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">
                  {i18n.language === 'ar' ? item.nameAr : item.name}
                </h3>

                {/* VIEW ALL BUTTON */}
                <button
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover-scale"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(item.viewAll);
                  }}
                >
                  {t('view all') || 'View All'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
