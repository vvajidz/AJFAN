import { useTranslation } from 'react-i18next';
import type { KeyboardEvent } from 'react';
import broastImg from '@/assets/broast.jpg';
import burgerImg from '@/assets/burger.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import heroPizza from '@/assets/hero-pizza.jpg';

const Menu = () => {
  const { t, i18n } = useTranslation();

  const openMenuPdf = () => {
    window.open('/menu.pdf', '_blank');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') openMenuPdf();
  };

  const menuItems = [
    {
      name: 'Zinger Chicken',
      nameAr: 'دجاج زنجر',
      category: 'Fried Chicken',
      price: '19 SAR',
      image: broastImg
    },
    {
      name: 'Fresh Beef Burger',
      nameAr: 'برجر لحم طازج',
      category: 'Burger',
      price: '17-25 SAR',
      sizes: [
        { size: 'Large', price: '25 SAR' },
        { size: 'Medium', price: '20 SAR' },
        { size: 'Small', price: '17 SAR' }
      ],
      image: burgerImg
    },
    {
      name: 'Kudu Sandwich',
      nameAr: 'كودو ساندوتش',
      category: 'Sandwich',
      price: '15-20 SAR',
      sizes: [
        { size: 'Large/Meal', price: '20 SAR' },
        { size: 'Small/Single', price: '15 SAR' }
      ],
      image: sandwichImg
    },
    {
      name: 'Beef Pizza',
      nameAr: 'بيتزا لحم',
      category: 'Pizza',
      price: '15-30 SAR',
      sizes: [
        { size: 'Extra Large', price: '30 SAR' },
        { size: 'Large', price: '25 SAR' },
        { size: 'Medium', price: '20 SAR' },
        { size: 'Small', price: '15 SAR' }
      ],
      description: 'Tomato Sauce, Cheese, Beef, Green Pepper, Black Olives',
      image: heroPizza
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
            {t('menu.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('menu.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale"
              role="button"
              tabIndex={0}
              onClick={openMenuPdf}
              onKeyDown={handleKeyDown}
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
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{i18n.language === 'ar' ? item.nameAr : item.name}</h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                    {item.sizes && (
                      <div className="mt-2 space-y-1">
                        {item.sizes.map((size, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {size.size}: {size.price}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <a
                    href="tel:+966503146050"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover-scale inline-block"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {t('order')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
