/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Globe,
  Languages,
  PhoneCall,
  Send,
  MapPin,
  Menu,
  X,
  GraduationCap,
  Instagram,
  MessageCircle,
  Lightbulb,
  Book,
  PenTool,
  Palette,
  Calculator,
  Brain,
  Backpack,
  Scissors,
  Mic2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import CoursePage from './pages/CourseDetail';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/Contact';

// --- Components ---

const Logo = ({ className = "", light = false, footer = false }: { className?: string; light?: boolean; footer?: boolean }) => {
  const textColor = light || footer ? 'text-white' : 'text-[#002B5B]';
  const goldColor = '#C5A037';
  

  return (
    <div className={`flex flex-col items-center ${className} select-none`}>
      <div className={`flex items-center font-heading font-black uppercase tracking-tighter whitespace-nowrap ${footer ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'}`}>
        {/* ILM */}
        <div className="flex items-center">
          <div className="relative">
            <GraduationCap
              className="w-[0.6em] h-[0.6em] absolute -top-[0.45em] left-1/2 -translate-x-[60%] rotate-[-5deg] z-10"
              style={{ color: goldColor }}
              fill="currentColor"
            />
            <span className={textColor}>I</span>
          </div>
          <span className={textColor}>LM</span>
        </div>

        {/* SAROYI */}
        <div className="ml-[0.2em] flex items-center">
          <span className={textColor}>S</span>
          <div className="relative inline-flex items-center justify-center">
            <span className={textColor}>A</span>
          </div>
          <span className={textColor}>R</span>
          <div className="relative inline-flex items-center justify-center">
            <span className="opacity-0">O</span>
            <Lightbulb
              className="w-[0.9em] h-[0.9em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ color: goldColor }}
              fill="currentColor"
            />
          </div>
          <span className={textColor}>YI</span>
        </div>
      </div>

      {/* Gold Underline */}
      <div className="w-full h-[2px] sm:h-[3px] mt-0.5 overflow-hidden flex items-center justify-center">
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
            <path d="M 0 5 L 100 5" stroke={goldColor} strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};



// --- Translations ---

const translations = {
  uz: {
    home: "Asosiy",
    about: "Biz haqimizda",
    courses: "Kurslar",
    contact: "Bog'lanish",
    heroTitle: "Ilm Saroyi",
    courseGroup: "Guruh",
    courseProgram: "Kurs dasturi",
    heroMainTitle: "Farzandingizning",
    courseUnlimited: "Chegaralanmagan",
    courseStudents: "12 kishi",
    courseGroupCount: "10-12 kishi",
    enrollCourse: "Kursga yozilish",
    kursDastur: "Kurs Davomiyligi",
    contactHeroTop: "Biz bilan",
    contactHeroBottom: "Bog'laning",
    heroHighlight: "KELAJAGI",
    heroEnd: "shu yerda boshlanadi",
    heroSubtitle: "Kelajagingizni biz bilan boshlang. Zamonaviy bilimlar markazi.",
    heroBtn: "Kurslarni ko'rish",
    aboutTitle: "Biz haqimizda",
    aboutHeading: "Sizning muvaffaqiyatingiz - bizning maqsadimiz",
    aboutText: "Ilm Saroyi - bu kelajak mutaxassislarini tayyorlaydigan zamonaviy ta'lim maskani. Biz har bir talabaga individual yondashamiz.",
    advantagesTitle: "Afzalliklarimiz",
    advantagesHeading: "Nima uchun biz?",
    contactTitle: "Aloqa uchun",
    contactHeading: "Savollar uchun",
    galleryHeading: "O'quv Markazimiz Haqidagi Rasmlar",
    footerRights: "Barcha huquqlar himoyalangan.",
    aboutBtn: "Batafsil ma'lumot",
    contactName: "Ismingiz",
    contactPhone: "Telefon raqamingiz",
    contactMessage: "Xabar",
    contactSend: "Xabarni yuborish",
    contactPlaceholderName: "Ismingizni kiriting",
    contactPlaceholderPhone: "+998",
    contactPlaceholderMessage: "Xabaringizni yozing...",
    contactInfoTitle: "Biz bilan bog'laning",
    points: ["Xalqaro standartlar", "Amaliy darslar", "Ishga ko'mak", "Doimiy yordam"],
    courseList: [
      { title: "Ingliz tili", desc: "Zamonaviy metodika asosida General English va IELTS darslari." },
      { title: "Rus tili", desc: "Sizning darajangizga moslangan professional rus tili kurslari." },
      { title: "Arab tili", desc: "Grammatika va mukammal so'zlashuv bilimlari." },
      { title: "Matematika", desc: "Misol va masalalarni mantiqiy hamda oson yechish usullari." },
      { title: "Mental arifmetika", desc: "Bolalarda xotira va tezkor hisoblash qobiliyatini oshirish." },
      { title: "Maktabga tayyorlov (o'zbek)", desc: "Bolalarni maktab hayotiga mukammal va sifatli tayyorlash." },
      { title: "Rus tili \"Pochemuchka\"", desc: "Kichik yoshdagi bolalar uchun qiziqarli rus tili darslari." },
      { title: "IT", desc: "Zamonaviy texnologiyalar va dasturlash sohasining sirlari." },
      { title: "Logoped", desc: "Nutq nuqsonlarini bartaraf etish va ravon so'zlashuv darslari." },
      { title: "Qo'l mehnati", desc: "Ijodiy qobiliyatlarni va nozik motorikani rivojlantirish." },
      { title: "Karving san'ati", desc: "Meva va sabzavotlardan san'at asarlari yaratish san'ati." }
    ],
    foundersTitle: "O'quv markazimiz asoschisi",
    foundersHeading: "O'quv markazimiz asoschisi ta'lim sohasidagi tajribali mutaxassisdir.",
    teachersTitle: "Bizning jamoa",
    teachersHeading: "Darslarni 5 yillik tajribaga ega mutaxassislar olib boradilar.",
    experience: "tajriba"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    courses: "Курсы",
    contact: "Контакты",
    heroTitle: "Ilm Saroyi",
    courseGroup: "Группа",
    courseProgram: "Программа курса",
    courseUnlimited: "Неограниченно",
    courseStudents: "12 человек",
    courseGroupCount: "10-12 человек",
    enrollCourse: "Записаться",
    kursDastur: "Программа курса",
    contactHeroTop: "Свяжитесь с",
    contactHeroBottom: "нами",
    heroMainTitle: "Будущее вашего ребёнка",
    heroHighlight: "НАЧИНАЕТСЯ",
    heroEnd: "именно здесь",
    heroSubtitle: "Начните свое будущее с нами. Центр современных знаний.",
    heroBtn: "Посмотреть курсы",
    aboutTitle: "О нас",
    aboutHeading: "Ваш успех - наша цель",
    aboutText: "Ilm Saroyi - это современное образовательное учреждение, готовящее специалистов будущего. Мы подходим к каждому студенту индивидуально.",
    advantagesTitle: "Наши преимущества",
    advantagesHeading: "Почему мы?",
    contactTitle: "Для связи",
    contactHeading: "Для вопросов",
    galleryHeading: "Сцены из жизни центра",
    footerRights: "Все права защищены.",
    aboutBtn: "Подробнее",
    contactName: "Ваше имя",
    contactPhone: "Номер телефона",
    contactMessage: "Сообщение",
    contactSend: "Отправить сообщение",
    contactPlaceholderName: "Введите ваше имя",
    contactPlaceholderPhone: "+998",
    contactPlaceholderMessage: "Напишите ваше сообщение...",
    contactInfoTitle: "Свяжитесь с нами",
    points: ["Международные стандарты", "Практические занятия", "Помощь в работе", "Постоянная поддержка"],
    courseList: [
      { title: "Английский язык", desc: "Уроки General English и подготовки к IELTS на основе современных методик." },
      { title: "Русский язык", desc: "Профессиональные курсы русского языка, адаптированные под ваш уровень." },
      { title: "Арабский язык", desc: "Чтение Корана, грамматика и совершенные навыки разговорной речи." },
      { title: "Математика", desc: "Логические и легкие способы решения примеров и задач." },
      { title: "Ментальная арифметика", desc: "Развитие памяти и навыков быстрого счета у детей." },
      { title: "Подготовка к школе (узб)", desc: "Идеальная и качественная подготовка детей к школьной жизни." },
      { title: "Русский язык \"Почемучка\"", desc: "Интересные уроки русского языка для детей младшего возраста." },
      { title: "IT", desc: "Секреты современных технологий и сферы программирования." },
      { title: "Логопед", desc: "Устранение дефектов речи и уроки плавной разговорной речи." },
      { title: "Ручная работа", desc: "Развитие творческих способностей и мелкой моторики." },
      { title: "Искусство карвинга", desc: "Искусство создания произведений искусства из фруктов и овощей." }
    ],
    foundersTitle: "Основатель нашего центра",
    foundersHeading: "Основатель нашей школы - опытный специалист в сфере образования.",
    teachersTitle: "Наша команда",
    teachersHeading: "Занятия проводят специалисты с 5-летним опытом.",
    experience: "опыт"
  },
  en: {
    home: "Home",
    about: "About Us",
    courses: "Courses",
    contact: "Contact",
    heroTitle: "Ilm Saroyi",
    courseGroup: "Group",
    courseProgram: "Course Program",
    courseUnlimited: "Unlimited",
    courseStudents: "12 students",
    courseGroupCount: "10-12 students",
    enrollCourse: "Enroll Now",
    kursDastur: "Course program",
    contactHeroTop: "Get in",
    contactHeroBottom: "Touch",
    heroMainTitle: "Your Child's",
    heroHighlight: "FUTURE",
    heroEnd: "starts here",
    heroSubtitle: "Start your future with us. Modern knowledge center.",
    heroBtn: "View Courses",
    welcomeText: "Welcome to the world of comprehensive knowledge. Here, you can professionally learn any field you desire.",
    aboutTitle: "About Us",
    aboutHeading: "Your success is our goal",
    aboutText: "Ilm Saroyi is a modern educational institution preparing specialists of the future. We approach each student individually.",
    advantagesTitle: "Our Advantages",
    advantagesHeading: "Why choose us?",
    contactTitle: "Contact Us",
    contactHeading: "For Questions",
    galleryHeading: "Scenes from Center Life",
    footerRights: "All rights reserved.",
    aboutBtn: "Learn More",
    contactName: "Your Name",
    contactPhone: "Phone Number",
    contactMessage: "Message",
    contactSend: "Send Message",
    contactPlaceholderName: "Enter your name",
    contactPlaceholderPhone: "+998",
    contactPlaceholderMessage: "Write your message...",
    contactInfoTitle: "Contact Us",
    points: ["International standards", "Practical lessons", "Job assistance", "Constant support"],
    courseList: [
      { title: "English Language", desc: "General English and IELTS lessons based on modern methodologies." },
      { title: "Russian Language", desc: "Professional Russian language courses adapted to your level." },
      { title: "Arabic Language", desc: "Quran reading, grammar and perfect speaking skills." },
      { title: "Mathematics", desc: "Logical and easy ways to solve examples and problems." },
      { title: "Mental Arithmetic", desc: "Improving memory and fast counting skills in children." },
      { title: "Pre-school Preparation (uzb)", desc: "Perfect and quality preparation of children for school life." },
      { title: "Russian Language \"Pochemuchka\"", desc: "Interesting Russian language lessons for young children." },
      { title: "IT", desc: "Secrets of modern technologies and the sphere of programming." },
      { title: "Logoped", desc: "Fixing speech defects and lessons for fluent speaking." },
      { title: "Handwork", desc: "Development of creative abilities and fine motor skills." },
      { title: "Carving Art", desc: "The art of creating works of art from fruits and vegetables." }
    ],
    foundersTitle: "Founder of Our Center",
    foundersHeading: "Our center founder is an experienced professional in the field of education.",
    teachersTitle: "Our Team",
    teachersHeading: "Classes are taught by experts with 5 years of experience.",
    experience: "experience"
  }
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'uz' | 'ru' | 'en'>('uz');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: t.home, href: "/" },
    { name: t.about, href: "/about" },
    { name: t.courses, href: "/courses" },
    { name: t.contact, href: "/contact" },
  ];

  const courseData = [
    {
      id: "ingliz-tili",
      title: t.courseList[0].title,
      desc: t.courseList[0].desc,
      icon: <Languages />,
      color: "bg-blue-600",
      image: "https://prep.uz/storage/posts/March2020/istockphoto-1047570732-612x6121.jpg",
      fullDesc: lang === 'uz' ? "Ingliz tili - bu global muloqot tili. Kursimizda siz nafaqat grammatikani, balki erkin so'zlashuvni ham o'rganasiz. General English va IELTS tayyorlov bosqichlari mavjud." : lang === 'ru' ? "Английский язык — это язык глобального общения. На нашем курсе вы выучите не только грамматику, но и свободную речь. Доступны этапы General English и подготовки к IELTS." : "English is the language of global communication. In our course, you will learn not only grammar but also free speech. General English and IELTS preparation stages are available.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Elementar asoslar", topics: ["Harflar va tovushlar", "Sodda fe'llar", "Oila va do'stlar"] },
        { month: 2, title: "Grammatika", topics: ["Hozirgi va o'tgan zamon", "Sifatlar", "Savol berish"] },
        { month: 3, title: "So'zlashuv", topics: ["Kundalik mavzular", "Do'kon va bozor", "Transport"] },
        { month: 4, title: "Pre-IELTS", topics: ["Matn bilan ishlash", "Eshatish mashqlari", "Insho yozish intro"] },
        { month: 5, title: "IELTS Intensive", topics: ["Mock exam", "Tez o'qish", "Listening practice"] },
        { month: 6, title: "Yakuniy bosqich", topics: ["Full Test", "Sertifikat", "Bitiruv"] }
      ] : [
        { month: 1, title: "Элементарные основы", topics: ["Буквы и звуки", "Простые глаголы", "Семья и друзья"] },
        { month: 2, title: "Грамматика", topics: ["Настоящее и прошедшее время", "Прилагательные", "Вопросы"] },
        { month: 3, title: "Общение", topics: ["Ежедневные темы", "Магазин и рынок", "Транспорт"] },
        { month: 4, title: "Pre-IELTS", topics: ["Работа с текстом", "Упражнения на слух", "Введение в эссе"] },
        { month: 5, title: "IELTS Intensive", topics: ["Пробный экзамен", "Сккоростное чтение", "Практика аудирования"] },
        { month: 6, title: "Финальный этап", topics: ["Полный тест", "Сертификат", "Выпускной"] }
      ]
    },
    {
      id: "rus-tili",
      title: t.courseList[1].title,
      desc: t.courseList[1].desc,
      icon: <Globe />,
      color: "bg-red-600",
      image: "https://terdpi.uz/uploads/resource/13/l_f115ef859b65b44f8a357757162c4069.jpg",
      fullDesc: lang === 'uz' ? "Rus tili darslarimizda siz muloqotga e'tibor berasiz. Bizning o'qituvchilarimiz sizga qisqa vaqt ichida ravon so'zlashuvni o'rgatishadi." : lang === 'ru' ? "На наших уроках русского языка вы сосредоточитесь на общении. Наши учителя научат вас бегло говорить за короткое время." : "In our Russian language lessons, you will focus on communication. Our teachers will teach you to speak fluently in a short time.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Alifbo va talaffuz", topics: ["Unli va undoshlar", "O'qish qoidalari", "Salomlashuv"] },
        { month: 2, title: "Kundalik so'zlar", topics: ["Uy jihozlari", "Ranglar", "Raqamlar"] },
        { month: 3, title: "Grammatika", topics: ["Kelishiklar (Padejlar)", "Shaxs-son", "Fe'l zamonlari"] }
      ] : [
        { month: 1, title: "Алфавит и произношение", topics: ["Гласные и согласные", "Правила чтения", "Приветствие"] },
        { month: 2, title: "Ежедневные слова", topics: ["Предметы дома", "Цвета", "Цифры"] },
        { month: 3, title: "Грамматика", topics: ["Падежи", "Лицо и число", "Времена глагола"] }
      ]
    },
    {
      id: "arab-tili",
      title: t.courseList[2].title,
      desc: t.courseList[2].desc,
      icon: <BookOpen />,
      color: "bg-emerald-600",
      image: "https://frankfurt.apollo.olxcdn.com/v1/files/ncveh71009co1-UZ/image",
      fullDesc: lang === 'uz' ? "Arab tili - Sharq madaniyati va islom ilmlari kalitidir. Bizda Muallimi Soniy va grammatika darslari olib boriladi." : lang === 'ru' ? "Арабский язык — ключ к восточной культуре и исламским наукам. У нас проводятся уроки Муаллими Сони и грамматики." : "Arabic is the key to Eastern culture and Islamic sciences. We have Muallimi Soni and grammar lessons.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Harflar va maxraj", topics: ["Alifbo", "Maxrajlar", "Harakatlar"] },
        { month: 2, title: "Muallimi soniy", topics: ["So'zlarni bog'lash", "O'qish qoidalari", "Sodda duolar"] },
        { month: 3, title: "Nahv va Sarf", topics: ["Grammatika", "So'z yasalishi", "Lug'at boyitish"] }
      ] : [
        { month: 1, title: "Буквы и махрадж", topics: ["Алфавит", "Махраджи", "Харакаты"] },
        { month: 2, title: "Муаллими сони", topics: ["Связывание слов", "Правила чтения", "Простые дуа"] },
        { month: 3, title: "Нахв и Сарф", topics: ["Грамматика", "Словообразование", "Расширение словаря"] }
      ]
    },
    {
      id: "matematika",
      title: t.courseList[3].title,
      desc: t.courseList[3].desc,
      icon: <Calculator />,
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      fullDesc: lang === 'uz' ? "Matematika fanidan chuqurlashtirilgan darslar. Milliy va xalqaro imtihonlarga tayyorlov, mantiqiy misollar yechish." : lang === 'ru' ? "Углубленные уроки математики. Подготовка к национальным и международным экзаменам, решение логических примеров." : "In-depth mathematics lessons. Preparation for national and international exams, solving logical examples.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Algebra", topics: ["Sonli ifodalar", "Tenglamalar", "Ko'phadlar"] },
        { month: 2, title: "Geometriya", topics: ["Shakllar", "Burchaklar", "Yuzani hisoblash"] },
        { month: 3, title: "Mantiq", topics: ["Murakkab masalalar", "Tez yechish usullari", "Testlar"] }
      ] : [
        { month: 1, title: "Алгебра", topics: ["Числовые выражения", "Уравнения", "Многочлены"] },
        { month: 2, title: "Геометрия", topics: ["Фигуры", "Углы", "Расчет площади"] },
        { month: 3, title: "Логика", topics: ["Сложные задачи", "Методы быстрого решения", "Тесты"] }
      ]
    },
    {
      id: "mental-arifmetika",
      title: t.courseList[4].title,
      desc: t.courseList[4].desc,
      icon: <Brain />,
      color: "bg-[#C5A037]",
      image: "https://coursetop.fra1.cdn.digitaloceanspaces.com/1694252241682-arifmet.jpg",
      fullDesc: lang === 'uz' ? "Bolalarning mantiqiy fikrlashini charxlaydi. Abakus yordamida tezkor hisoblash xotirani kuchaytiradi." : lang === 'ru' ? "Развивает логическое мышление детей. Быстрый счет с помощью абакуса укрепляет память." : "It sharpens children's logical thinking. Fast counting using an abacus strengthens memory.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Abakus sirlari", topics: ["Boshlang'ich amallar", "Formula 1-4", "O'yinlar"] },
        { month: 2, title: "Formula-2", topics: ["Do'stlar formulasi", "Tasavvur qilish", "Tezlik"] },
        { month: 3, title: "Musobaqa", topics: ["Murakkab hisob", "Aniq natija", "Final"] }
      ] : [
        { month: 1, title: "Секреты абакуса", topics: ["Начальные действия", "Формулы 1-4", "Игры"] },
        { month: 2, title: "Формула-2", topics: ["Формулы друзей", "Воображение", "Скорость"] },
        { month: 3, title: "Соревнование", topics: ["Сложные вычисления", "Точный результат", "Финал"] }
      ]
    },
    {
      id: "maktabga-tayyorlov",
      title: t.courseList[5].title,
      desc: t.courseList[5].desc,
      icon: <Backpack />,
      color: "bg-indigo-600",
      image: "https://marifat.uz/storage/posts/1770272756w1MAW6eviOr-rFbE8EfH215.jpg",
      fullDesc: lang === 'uz' ? "Bolalardagi yozish, o'qish va mantiqiy fikrlashni maktab yoshigacha shakllantiramiz. O'zbek tilidagi mukammal dastur." : lang === 'ru' ? "Формируем у детей навыки письма, чтения и логического мышления до школьного возраста. Идеальная программа на узбекском языке." : "We form children's writing, reading, and logical thinking skills before school age. Perfect program in Uzbek.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Savodxonlik", topics: ["Harflar", "Bo'g'inlash", "O'qish bosqichi"] },
        { month: 2, title: "Husnixat", topics: ["Chiroyli yozuv", "Elementlar bilan ishlash", "Qo'l gimnastikasi"] },
        { month: 3, title: "Atrof-olam", topics: ["Tabiat", "Ijtimoiy odoblar", "Mantiqiy savollar"] }
      ] : [
        { month: 1, title: "Грамотность", topics: ["Буквы", "Слоги", "Этап чтения"] },
        { month: 2, title: "Чистописание", topics: ["Красивое письмо", "Работа с элементами", "Гимнастика рук"] },
        { month: 3, title: "Окружающий мир", topics: ["Природа", "Социальный этикет", "Логические вопросы"] }
      ]
    },
    {
      id: "pochemuchka",
      title: t.courseList[6].title,
      desc: t.courseList[6].desc,
      icon: <PenTool />,
      color: "bg-pink-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKkrGvNoTEaJE5-irhjnU4qJqgHJtrn-Dhg&s",
      fullDesc: lang === 'uz' ? "Kichik yoshga mo'ljallangan rus tili darslari. O'yinlar, qo'shiqlar va qiziqarli mashg'ulotlar orqali til o'rganish." : lang === 'ru' ? "Уроки русского языка для самых маленьких. Изучение языка через игры, песни и увлекательные занятия." : "Russian language lessons for the youngest. Language learning through games, songs, and fun activities.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Ranglar olami", topics: ["Asosiy ranglar", "Hayvonlar", "Meva/Sabzavot"] },
        { month: 2, title: "Oila", topics: ["Siz-biz", "Qarindoshlar", "O'yinlar"] },
        { month: 3, title: "Atrof-olam", topics: ["Tabiat", "Muloqot", "Yakun"] }
      ] : [
        { month: 1, title: "Мир цветов", topics: ["Основные цвета", "Животные", "Фрукты/Овощи"] },
        { month: 2, title: "Семья", topics: ["Вы-мы", "Родственники", "Игры"] },
        { month: 3, title: "Окружающий мир", topics: ["Природа", "Общение", "Финал"] }
      ]
    },
    {
      id: "it",
      title: t.courseList[7].title,
      desc: t.courseList[7].desc,
      icon: <Code />,
      color: "bg-slate-900",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      fullDesc: lang === 'uz' ? "Dasturlash olamiga ilk qadam. Web-saytlar yaratish va mantiqiy algoritmlar bilan ishlashni o'rganasiz." : lang === 'ru' ? "Первый шаг в мир программирования. Вы научитесь создавать веб-сайты и работать с логическими алгоритмами." : "The first step into the world of programming. You will learn how to create websites and work with logical algorithms.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "IT Savodxonlik", topics: ["Kompyuter tuzilishi", "MS Office", "Windows"] },
        { month: 2, title: "Web asoslari", topics: ["HTML5", "CSS3", "Dizayn"] },
        { month: 3, title: "Loyiha", topics: ["Lending sahifa", "Hosting", "Portfoliyo"] }
      ] : [
        { month: 1, title: "ИТ Грамотность", topics: ["Устройство ПК", "MS Office", "Windows"] },
        { month: 2, title: "Основы Web", topics: ["HTML5", "CSS3", "Дизайн"] },
        { month: 3, title: "Проект", topics: ["Лендинг пейдж", "Хостинг", "Портфолио"] }
      ]
    },
    {
      id: "logoped",
      title: t.courseList[8].title,
      desc: t.courseList[8].desc,
      icon: <MessageCircle />,
      color: "bg-cyan-500",
      image: "https://aba-mehr.uz/wp-content/uploads/2025/10/8923408-_1_.webp",
      fullDesc: lang === 'uz' ? "Malkali logopedlar yordamida nutq nuqsonlarini bartaraf etish. Bolalar va kattalar uchun individual darslar." : lang === 'ru' ? "Устранение дефектов речи с помощью опытных логопедов. Индивидуальные занятия для детей и взрослых." : "Fixing speech defects with the help of experienced speech therapists. Individual lessons for children and adults.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Diagnostika", topics: ["Holatni aniqlash", "Nafas mashqlari", "Diagnoz"] },
        { month: 2, title: "Tovushlar bosqichi", topics: ["S harfi", "R harfi", "Nutq ravonligi"] },
        { month: 3, title: "Muloqot", topics: ["Harakatli darslar", "Erkin nutq", "Nazorat"] }
      ] : [
        { month: 1, title: "Диагностика", topics: ["Определение состояния", "Дыхательная гимнастика", "Диагноз"] },
        { month: 2, title: "Этап звуков", topics: ["Буква С", "Буква Р", "Плавность речи"] },
        { month: 3, title: "Общение", topics: ["Подвижные уроки", "Свободная речь", "Контроль"] }
      ]
    },
    {
      id: "qol-mehnati",
      title: t.courseList[9].title,
      desc: t.courseList[9].desc,
      icon: <Scissors />,
      color: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      fullDesc: lang === 'uz' ? "Kreativ fikrlashni rivojlantirish. Qog'oz, bo'yoq va boshqa narsalar bilan san'at asarlari yaratish." : lang === 'ru' ? "Развитие креативного мышления. Создание произведений искусства из бумаги, красок и других материалов." : "Development of creative thinking. Creating works of art with paper, paint and other things.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Qog'oz bilan ishlash", topics: ["Origami", "Qirqish", "Applikatsiya"] },
        { month: 2, title: "Rasm va bo'yoq", topics: ["Ranglar uyg'unligi", "Tabiat manzarasi", "Akvarel"] },
        { month: 3, title: "Loyiha", topics: ["Yirik kompozitsiya", "Ko'rgazma", "Sovg'alar"] }
      ] : [
        { month: 1, title: "Работа с бумагой", topics: ["Оригами", "Вырезание", "Аппликация"] },
        { month: 2, title: "Рисунок и краски", topics: ["Гармония цветов", "Пейзаж", "Акварель"] },
        { month: 3, title: "Проект", topics: ["Большая композиция", "Выставка", "Подарки"] }
      ]
    },
    {
      id: "karving",
      title: t.courseList[10].title,
      desc: t.courseList[10].desc,
      icon: <Palette />,
      color: "bg-green-600",
      image: "https://i.ytimg.com/vi/bxontcg1s1w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpFSJ4vGbXUY-iIvsz2dpQkxS1aA",
      fullDesc: lang === 'uz' ? "Dasturxon bezatish san'ati. Karving orqali oddiy mevalarga hayot bag'ishlang va go'zallik yarating." : lang === 'ru' ? "Искусство оформления стола. Оживите обычные фрукты и создайте красоту с помощью карвинга." : "The art of table decoration. Bring life to ordinary fruits and create beauty through carving.",
      curriculum: lang === 'uz' ? [
        { month: 1, title: "Pichoqlar va usullar", topics: ["Xavfsizlik", "Asboblar", "Sodda gullar"] },
        { month: 2, title: "Meva-sabzavot", topics: ["Tarvuzda naqsh", "Olma dekorlari", "Salat bezatish"] },
        { month: 3, title: "Professionalizm", topics: ["Kecha bezatish", "Loyiha ishi", "Final"] }
      ] : [
        { month: 1, title: "Ножи и методы", topics: ["Безопасность", "Инструменты", "Простые цветы"] },
        { month: 2, title: "Фрукты-овощи", topics: ["Узоры на арбузе", "Декор из яблок", "Оформление салата"] },
        { month: 3, title: "Профессионализм", topics: ["Оформление вечера", "Проектная работа", "Финал"] }
      ]
    }
  ];

  const aboutPoints = [
    { text: t.points[0], color: "#3B82F6" },
    { text: t.points[1], color: "#10B981" },
    { text: t.points[2], color: "#F59E0B" },
    { text: t.points[3], color: "#8B5CF6" },
  ];

const teachersData = [
  {
    name: "Xusayinova Iroda",
    role:
      lang === "uz"
        ? "Logoped Ustoz"
        : lang === "ru"
        ? "Логопед"
        : "Speech Therapist",
    experience: "7+",
    image: "/images/logoped_ustoz.png",
  },
  {
    name: "Jamolova Muyassar",
    role:
      lang === "uz"
        ? "Mental Arifmetika Ustoz"
        : lang === "ru"
        ? "Преподаватель ментальной арифметики"
        : "Mental Arithmetic Teacher",
    experience: "5+",
    image: "/images/arifmetika_ustoz.jpg",
  },
  {
    name: "Muhiddinova Feruza",
    role:
      lang === "uz"
        ? "Maktabga tayyorlov"
        : lang === "ru"
        ? "Подготовка к школе"
        : "School Preparation Teacher",
    experience: "25+",
    image: "/images/feruza_teacher.jpg",
  },
  {
    name: "Kozimxonova Muhlisa",
    role:
      lang === "uz"
        ? "Ingliz tili va Rus tili Ustoz"
        : lang === "ru"
        ? "Преподаватель английского и русского языка"
        : "English and Russian Language Teacher",
    experience: "6+",
    image: "/images/ingliz_ustoz.jpg",
  },
];

  const founderData = {
    name: "Muhiddinova Muhayyo",
    role: lang === 'uz' ? "O'quv markazi asoschisi" : lang === 'ru' ? "Основатель учебного центра" : "Founder of the learning center",
    bio: lang === 'uz' ? "Buxgalteriya hisobchisi mutaxassisligi bo'yicha kollej diplomiga ega bo'lish bilan bir qatorda, ta'lim sohasida ko'p yillik sermazmun tajriba egasidir. Uning rahbarligida 'Ilm Saroyi' markazi nafaqat ta'lim maskani, balki har bir o'quvchining ichki salohiyatini kashf etuvchi zamonaviy ekotizimga aylandi." : lang === 'ru' ? "Обладая дипломом бухгалтера и многолетним опытом в сфере образования, она создала уникальную среду для развития талантов." : "Having a degree in accounting and years of experience in education, she created a unique environment for the development of talents.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
      {/* Background Watermark Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] z-0 overflow-hidden select-none">
        <div className="absolute inset-0 flex flex-wrap gap-40 p-10 justify-around rotate-[-12deg]">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20 * (i % 2 === 0 ? 1 : -1), 0],
                rotate: [-12, -8, -12]
              }}
              transition={{
                duration: 10 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center"
            >
              <GraduationCap className="w-32 h-32 mb-6" strokeWidth={1} />
              <div className="font-heading font-black text-6xl tracking-tighter whitespace-nowrap">ILM SAROYI</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-xl py-4">
        <div className="container mx-auto px-6 flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <Logo light={true} />
          </Link>

          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-base font-bold transition-all hover:scale-110 text-white hover:text-blue-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 ml-auto">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-between w-20 px-3 py-2 bg-white text-blue-600 rounded-lg font-bold uppercase"
              >
                {lang}
                <span>{isLangOpen ? "▲" : "▼"}</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full left-0 mt-1 w-20 bg-white rounded-lg shadow-lg overflow-y-auto max-h-24">
                  {(['uz', 'ru', 'en'] as const)
                    .filter((l) => l !== lang)
                    .map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                        className="block w-full px-3 py-2 text-left uppercase "
                      >
                        {l}
                      </button>
                    ))}
                </div>
              )}
            </div>
            <Button
              onClick={() => handleNavClick('/contact')}
              className={`rounded-full px-8 py-6 font-bold transition-all hover:scale-105 ${(scrolled || location.pathname !== '/') ? 'bg-blue-600 hover:bg-blue-600 text-white shadow-lg shadow-blue-00' : 'bg-blue-600 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 '}`}
            >
              {t.contact}
            </Button>
          </div>

          <button className={`md:hidden ml-auto ${(scrolled || location.pathname !== '/') ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button key={item.name} onClick={() => handleNavClick(item.href)} className="text-left text-lg font-bold text-slate-700">
                    {item.name}
                  </button>
                ))}
                <div className="flex gap-4 py-4 border-t border-slate-100">
                  {(['uz', 'ru', 'en'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsMenuOpen(false); }}
                      className={`px-4 py-2 rounded-xl text-sm font-bold uppercase ${lang === l ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <Button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full bg-blue-600 text-white rounded-xl py-6 text-lg font-bold"
                >
                  {t.contact}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} courseData={courseData} aboutPoints={aboutPoints} teachersData={teachersData} founderData={founderData} />} />
        <Route path="/about" element={<AboutPage t={t} aboutPoints={aboutPoints} lang={lang} />} />
        <Route path="/courses" element={<CoursesPage courseData={courseData} lang={lang} />} />
        <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />
        <Route path="/courses/:id" element={<CoursePage courseData={courseData} lang={lang}  t={t} />} />
      </Routes>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-slate-950 text-white pt-12 pb-8"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <Logo footer />
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">{t.courses}</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-400 text-sm">
                {courseData.map((c, i) => (
                  <li key={i} className="hover:text-blue-400 transition-colors cursor-pointer">
                    <Link to={`/courses/${c.id}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">{t.contact}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-blue-400 transition-colors">
                  <Link to="/">{t.home}</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  <Link to="/about">{t.about}</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  <Link to="/courses">{t.courses}</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  <Link to="/contact">{t.contact}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">{lang === 'uz' ? 'Bog\'lanish' : lang === 'ru' ? 'Контакты' : 'Contact'}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex flex-col gap-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-[#C5A037] flex-shrink-0" />
                    +998 93 000 29 49
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-[#C5A037] flex-shrink-0" />
                    +998 33 002 49 29
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <a href="https://www.instagram.com/ilm.saroyi_markazi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <Instagram className="w-4 h-4 text-[#C5A037]" />
                    ilm.saroyi_markazi
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <a href="https://t.me/ilmsaroyimarkazi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <Send className="w-4 h-4 text-[#C5A037] flex-shrink-0" />
                    @ilmsaroyimarkazi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-slate-800 gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-slate-500 text-xs text-center md:text-left">
                &copy; {new Date().getFullYear()} Ilm Saroyi. {t.footerRights}
              </p>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.1em]">
                {lang === 'uz' ? 'Dizayn va tuzuvchi' : lang === 'ru' ? 'Дизайн и разработка' : 'Design and development'}: {' '}
                <a
                  href="https://t.me/aexar_tm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  @aexar_tm
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ilm.saroyi_markazi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-[#C5A037] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/ilmsaroyimarkazi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-[#C5A037] transition-all">
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
