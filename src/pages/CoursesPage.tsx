import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function CoursesPage({ courseData, lang }: { courseData: any[], lang: string }) {
  const whyChooseUs = {
    uz: [
      {
        title: "Individual yondashuv",
        desc: "Har bir talabaning o'zlashtirish darajasiga qarab darslar tashkil etiladi."
      },
      {
        title: "Zamonaviy metodika",
        desc: "Nazariya va amaliyot uyg'unligidagi eng so'nggi o'qitish usullari."
      },
      {
        title: "Karyera markazi",
        desc: "Talabalarni ishga joylashtirish va portfoliolarini shakllantirishda ko'mak."
      }
    ],
    ru: [
      {
        title: "Индивидуальный подход",
        desc: "Занятия организуются с учетом уровня подготовки каждого студента."
      },
      {
        title: "Современная методика",
        desc: "Новейшие методы обучения, сочетающие теорию и практику."
      },
      {
        title: "Карьерный центр",
        desc: "Помогаем с трудоустройством и созданием профессионального портфолио."
      }
    ],
    en: [
      {
        title: "Individual Approach",
        desc: "Lessons are organized according to each student's learning level."
      },
      {
        title: "Modern Methodology",
        desc: "The latest teaching methods combining theory and practice."
      },
      {
        title: "Career Center",
        desc: "We help students find jobs and build professional portfolios."
      }
    ]
  };
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4 py-1.5 bg-amber-100 text-[#C5A037] rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6">
            {lang === "uz"
              ? "Bizning kurslarimiz"
              : lang === "ru"
                ? "Наши курсы"
                : "Our Courses"}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-4 sm:mb-8 leading-tight">
            {lang === 'uz' ? 'Zamonaviy kasblarni biz bilan o\'rganing' : lang === 'ru' ? 'Изучайте современные профессии с нами' : 'Learn modern professions with us'}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            {lang === 'uz'
              ? "Ilm Saroyi sizga eng talabgir sohalarda sifatli ta'lim beradi. Kurslarimiz amaliyotga yo'naltirilgan."
              : lang === 'ru'
                ? "Ilm Saroyi предоставляет качественное образование в самых востребованных областях. Наши курсы ориентированы на практику."
                : "Ilm Saroyi provides quality education in the most in-demand fields. Our courses are practice-oriented."}
          </p>
        </motion.div>

        {/* Floating background elements for elegance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-10 w-80 h-80 bg-orange-300 rounded-full blur-[120px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {courseData.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.2, duration: 1.2 }}
              className="px-0 md:px-0"
            >
              <Card className="group h-full bg-white/80 backdrop-blur-md border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 left-4 sm:top-6 sm:left-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl ${course.color} text-white shadow-lg`}>
                    {course.icon}
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{course.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 md:mb-8 line-clamp-3 leading-relaxed">{course.desc}</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-slate-500 bg-slate-50 p-2 sm:p-3 rounded-xl">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                      <span>
                        {lang === "uz"
                          ? "Cheksiz"
                          : lang === "ru"
                            ? "Без ограничений"
                            : "Unlimited"}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                      <span>
                        12 {lang === "uz"
                          ? "kishi"
                          : lang === "ru"
                            ? "человек"
                            : "students"}
                      </span>
                    </div>

                    <Link to={`/courses/${course.id}`}>
                      <Button className="w-full bg-[#C5A037] hover:bg-[#b08d2f] text-white rounded-xl sm:rounded-2xl font-black py-6 sm:py-8 text-base sm:text-lg shadow-lg shadow-blue-100 group-hover:shadow-blue-200 transition-all flex items-center justify-center gap-3">
                        {lang === 'uz' ? 'Batafsil' : lang === 'ru' ? 'Подробнее' : 'Details'}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why our courses? */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="mt-16 sm:mt-24 md:mt-32 bg-white rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 md:p-20 shadow-2xl border border-blue-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
                {lang === "uz"
                  ? "Nima uchun bizning kurslarni tanlashadi?"
                  : lang === "ru"
                    ? "Почему выбирают наши курсы?"
                    : "Why Choose Our Courses?"}
              </h2>



              <div className="space-y-4 sm:space-y-6">
                {whyChooseUs[(lang as "uz" | "ru" | "en")].map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A037] flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                        {item.title}
                      </h4>

                      <p className="text-sm sm:text-base text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                className="rounded-2xl sm:rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-[#C5A037] text-white p-4 sm:p-8 rounded-xl sm:rounded-3xl shadow-xl">
                <div className="text-2xl sm:text-4xl font-black mb-1">100%</div>
                <div className="text-[10px] sm:text-sm font-bold opacity-80 uppercase">
                  {lang === "uz"
                    ? "Amaliy bilimlar"
                    : lang === "ru"
                      ? "Практические знания"
                      : "Practical Knowledge"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="mt-16 sm:mt-24 md:mt-32 text-center bg-blue-900 rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-white relative overflow-hidden ring-4 ring-[#C5A037]/20"
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8">
              {lang === "uz"
                ? "O'zingizga mos kursni tanlashda qiynalyapsizmi?"
                : lang === "ru"
                  ? "Не можете выбрать подходящий курс?"
                  : "Having trouble choosing the right course?"}
            </h2>

            <p className="text-base sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              {lang === "uz"
                ? "Bizning mutaxassislarimiz sizga qobiliyatingiz va qiziqishlaringizdan kelib chiqib eng to'g'ri yo'nalishni tanlashda yordam berishadi."
                : lang === "ru"
                  ? "Наши специалисты помогут вам выбрать наиболее подходящее направление, исходя из ваших способностей и интересов."
                  : "Our specialists will help you choose the best course based on your abilities and interests."}
            </p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#C5A037] hover:bg-[#b08d2f] text-white rounded-full px-8 sm:px-12 py-5 sm:py-8 text-base sm:text-xl font-bold transition-all hover:scale-105 shadow-2xl"
              >
                {lang === "uz"
                  ? "Bepul maslahat olish"
                  : lang === "ru"
                    ? "Получить бесплатную консультацию"
                    : "Get Free Consultation"}
              </Button>
            </Link>
          </div>

          <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  );
}
