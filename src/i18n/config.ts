import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About",
        contact: "Contact"
      },
      hero: {
        welcome: "Welcome to",
        title: "AJFAN PIZZA",
        subtitle: "Delicious food delivered to your doorstep",
        cta: "Order Now"
      },
      about: {
        title: "About Us",
        subtitle: "Bringing Delicious Meals to Your Doorstep",
        description: "At AJFAN PIZZA, we are passionate about serving the finest food. From crispy pizzas to juicy broast, every dish is prepared with love and the freshest ingredients. We believe in quality, taste, and exceptional service that brings smiles to your face.",
        cta: "Learn More"
      },
      categories: {
        title: "Popular Categories",
        subtitle: "Discover our favorites",
        special: "Special",
        burger: "Burger",
        sandwich: "Sandwich",
        pizza: "Pizza",
        kidsMeal: "Kids Meal",
        fries: "Fries",
        viewAll: "View All"
      },
      menu: {
        title: "Our Popular Menu",
        subtitle: "The best food ever"
      },
      testimonials: {
        title: "What Our Customers Say",
        subtitle: "Testimonials",
        customer1: {
          name: "Ahmed Ali",
          review: "The best pizza in town! Fresh ingredients and amazing taste. Delivery was quick and the food arrived hot. Highly recommended!"
        },
        customer2: {
          name: "Sarah Mohammed",
          review: "Love their broast! Crispy and flavorful. The kids meal is perfect for my children. Great service and reasonable prices."
        }
      },
      newsletter: {
        title: "Join Our Newsletter",
        subtitle: "Be the first to know about fresh updates, cooking offers, and exclusive deals.",
        placeholder: "Enter your email",
        cta: "Subscribe"
      },
      contact: {
        title: "Contact Us",
        location: "Riyadh, Saudi Arabia",
        phone: "+966 XX XXX XXXX",
        email: "info@ajfanpizza.com",
        followUs: "Follow Us"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        menu: "القائمة",
        about: "من نحن",
        contact: "تواصل معنا"
      },
      hero: {
        welcome: "مرحباً بكم في",
        title: "أجفان بيتزا",
        subtitle: "طعام لذيذ يصلك حتى باب منزلك",
        cta: "اطلب الآن"
      },
      about: {
        title: "من نحن",
        subtitle: "نقدم وجبات شهية حتى باب منزلك",
        description: "في أجفان بيتزا، نحن شغوفون بتقديم أفضل الأطعمة. من البيتزا المقرمشة إلى البروست الشهي، كل طبق يُحضّر بحب وأجود المكونات الطازجة. نؤمن بالجودة والطعم والخدمة الاستثنائية التي تُدخل البهجة إلى قلوبكم.",
        cta: "اعرف المزيد"
      },
      categories: {
        title: "الفئات الشائعة",
        subtitle: "اكتشف المفضلات لدينا",
        broast: "بروست",
        burger: "برجر",
        sandwich: "ساندوتش",
        pizza: "بيتزا",
        kidsMeal: "وجبة أطفال",
        fries: "بطاطس",
        viewAll: "عرض الكل"
      },
      menu: {
        title: "قائمتنا الشهيرة",
        subtitle: "أفضل طعام على الإطلاق"
      },
      testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "آراء العملاء",
        customer1: {
          name: "أحمد علي",
          review: "أفضل بيتزا في المدينة! مكونات طازجة وطعم رائع. التوصيل كان سريعاً والطعام وصل ساخناً. أنصح به بشدة!"
        },
        customer2: {
          name: "سارة محمد",
          review: "أحب البروست لديهم! مقرمش ولذيذ. وجبة الأطفال مثالية لأطفالي. خدمة رائعة وأسعار معقولة."
        }
      },
      newsletter: {
        title: "انضم لنشرتنا الإخبارية",
        subtitle: "كن أول من يعرف عن التحديثات وعروض الطبخ والصفقات الحصرية.",
        placeholder: "أدخل بريدك الإلكتروني",
        cta: "اشترك"
      },
      contact: {
        title: "تواصل معنا",
        location: "الرياض، المملكة العربية السعودية",
        phone: "XXXX XXX XX 966+",
        email: "info@ajfanpizza.com",
        followUs: "تابعنا"
      },
      footer: {
        rights: "جميع الحقوق محفوظة."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
