import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Code, Globe, Languages, BookOpen, Users, Award, Clock, CheckCircle2, Star, GraduationCap, MessageCircle, MapPin, Send, ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Home({ t, lang, courseData, aboutPoints, teachersData, founderData }: { t: any, lang: string, courseData: any[], aboutPoints: any[], teachersData: any[], founderData: any }) {
  return (
    <>
      {/* Hero Section */}
      {/* ====================== YANGILANGAN HERO SECTION ====================== */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920"
            alt="Ilm Saroyi" x
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A037]/15 blur-[140px] rounded-full z-10" />

        <div className="container mx-auto px-5 sm:px-6 z-20 relative">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } }
            }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="
    inline-flex
    items-center
    gap-2
    sm:gap-3
    px-5
    sm:px-8
    py-2
    sm:py-3
    bg-white/10
    backdrop-blur-md
    border
    border-white/20
    rounded-full
    mb-8
  "
            >
              <span className="text-[#C5A037] text-sm sm:text-base">
                ★
              </span>

              <span className="font-semibold text-sm sm:text-lg tracking-wider text-white">
                ILM SAROYI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-black leading-[1.05] tracking-tighter text-white mb-6"
            >
              {t.heroMainTitle}<br />
              <span className="text-[#FCD34D] drop-shadow-xl">{t.heroHighlight}</span> {t.heroEnd}<br />
            </motion.h1>

            {/* Button */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              <Link to="/courses">
                <Button className="relative overflow-hidden group bg-[#FCD34D] hover:bg-[#FACC15] text-black font-bold rounded-full px-14 py-7 text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                  <span className="relative flex items-center gap-3 z-10">
                    {t.heroBtn}
                    <ChevronRight className="group-hover:translate-x-2 transition" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* About Summary */}
      <section id="about" className="py-12 sm:py-20 md:py-32 bg-transparent overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                {t.aboutTitle}
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4 sm:mb-8 leading-tight">
                {t.aboutHeading}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-12 leading-relaxed max-w-xl">
                {t.aboutText}
              </p>

              <Link to="/about">
                <Button size="lg" className="rounded-2xl px-10 py-8 bg-[#002B5B] hover:bg-[#C5A037] text-white font-bold shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 text-base">
                  {t.aboutBtn}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="relative">
                {/* Visual Accent */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C5A037] rounded-3xl -z-10 rotate-12" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-[3rem] -z-10 -rotate-6" />

                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto lg:ml-auto border-[10px] border-white">
                  <img
                    src="/images/section_photo.png"
                    alt="About Ilm Saroyi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/5 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-slate-50/50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-[#C5A037]/20 blur-xl rounded-full" />
                <div className="relative px-6 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 text-[#C5A037] font-black text-xs sm:text-sm uppercase tracking-widest">
                  {t.foundersTitle}
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-slate-400 leading-tight mb-4 uppercase tracking-tighter">
                {t.foundersHeading}
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-black text-blue-600 tracking-tighter uppercase mb-6 leading-[1.1] text-left"
              >
                {founderData.name}
              </motion.div>
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed italic border-l-4 border-[#C5A037] pl-6 py-2 text-left">
                "{founderData.bio}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-full max-w-sm sm:max-w-md group -translate-y-26 border-radius: 200px;">
                {/* Artistic background blur */}
                {/* <div className="absolute -inset-10 bg-blue-200/30 rounded-full blur-[100px] group-hover:bg-blue-300/40 transition-colors duration-700" /> */}

                {/* <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"> */}
                <img
                  src="/images/public_rasm.png"
                  alt="Founder"
                  className="w-full h-auto object-cover object-top rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none border-radius: 200px;" />
                {/* </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section - Premium Structured Design */}
      <section id="courses" className="py-20 sm:py-32 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A037]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-start mb-24 md:mb-32 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="max-w-4xl w-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-blue-600 rounded-full" />
                <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-sm">
                  {t.courses}
                </span>
              </div>
              <h3 className="text-3xl sm:text-7xl lg:text-9xl font-heading font-black text-slate-900 leading-[0.8] tracking-tighter uppercase">
                {lang === 'uz' ? 'ILM' : 'ИЛЬМ'} <br />
                <span className="text-[#C5A037] italic">{lang === 'uz' ? 'SAROYI' : 'САРОЙИ'}</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="lg:max-w-md text-slate-500 text-lg leading-relaxed italic border-l-4 border-slate-200 pl-8 font-medium w-full text-left self-start lg:mt-20"
            >
              {
                lang === 'uz'
                  ? "Keng qamrovli bilimlar olamiga xush kelibsiz. Bizda siz istagan har qanday sohani professional darajada o'rganishingiz mumkin."
                  : lang === 'ru'
                    ? "Добро пожаловать в мир всесторонних знаний. У нас вы можете профессионально изучить любую интересующую вас сферу."
                    : t.welcomeText
              }
            </motion.div>
          </div>
          Ilm yo'llari - Ilm Saroyida!
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {courseData.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                className="group relative h-full flex"
              >
                <Card className="flex-1 border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,43,0.12)] transition-all duration-700 rounded-[2.5rem] overflow-hidden bg-white flex flex-col relative z-10 border border-slate-100 active:scale-[0.98]">
                  <div className="relative h-72 sm:h-80 overflow-hidden shrink-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(course.icon as React.ReactElement, { className: "w-7 h-7" })}
                    </div>
                  </div>

                  <CardContent className="p-10 flex flex-col flex-grow items-start">
                    <h4 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-slate-500 text-base leading-relaxed mb-10 line-clamp-3">
                      {course.desc}
                    </p>

                    <div className="w-full mt-auto">
                      <Link to={`/courses/${course.id}`} className="block">
                        <Button className="w-full h-16 bg-slate-900 hover:bg-[#C5A037] text-white rounded-[1.2rem] font-bold tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3">
                          {lang === 'uz' ? 'BATAFSIL' : 'ПОДРОБНЕЕ'}
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section - Based on Image 2 */}
      <section className="py-12 sm:py-20 md:py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
            >
              <div className="inline-block px-4 sm:px-6 py-1 sm:py-2 bg-[#C5A037] text-white rounded-xl text-xs sm:text-lg font-bold lowercase mb-4 sm:mb-8">
                {t.teachersTitle}
              </div>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-heading font-black text-slate-900 leading-tight max-w-5xl mx-auto px-2">
                {lang === 'uz' ? (
                  <>
                    Darslarni esa <span className="text-blue-600">yillik tajribaga ega</span> mutaxassislar olib boradi.
                  </>
                ) : lang === 'ru' ? (
                  <>
                    Занятия проводят <span className="text-blue-600">специалисты с опытом 5 лет</span>.
                  </>
                ) : (
                  <>
                    Classes are taught by <span className="text-blue-600">experts with 5 years of experience</span>.
                  </>
                )}
              </h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-12">
            {teachersData.map((teacher: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-5 sm:mb-8 aspect-[3/4] rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-700 w-full border-[6px] border-white ring-1 ring-slate-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center px-2">
                  <h4 className="text-lg sm:text-2xl font-black text-slate-900 mb-1 leading-tight tracking-tight uppercase">{teacher.name}</h4>
                  <div className="inline-block px-3 py-1 bg-blue-50 rounded-lg">
                    <span className="text-[10px] sm:text-xs text-blue-600 font-black uppercase tracking-widest">{teacher.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/20 -z-10 blur-[100px]" />

        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-24">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">{t.advantagesTitle}</h2>
            <h3 className="text-3xl sm:text-6xl md:text-7xl font-heading font-black text-slate-900 mb-6 tracking-tighter">
              {lang === 'uz' ? 'BIZ BILAN' : lang === 'ru' ? 'С НАМИ' : 'WITH US'} <br />
              <span className="text-[#C5A037] italic uppercase">{lang === 'uz' ? 'YUKSAKLIKKA' : lang === 'ru' ? 'К ВЕРШИНАМ' : 'TO THE TOP'}</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Users />,
                title: lang === 'uz' ? "Professional o'qituvchilar" : "Профессионалы",
                color: "bg-blue-600",
                desc: lang === 'uz' ? "Har bir o'qituvchimiz o'z sohasida kamida 5 yillik tajribaga ega mutaxassislardir." : "Каждый наш преподаватель — это специалист с опытом работы не менее 5 лет."
              },
              {
                icon: <Award />,
                title: lang === 'uz' ? "Hamyonbop narxlar" : "Доступно",
                color: "bg-[#C5A037]",
                desc: lang === 'uz' ? "Sifatli ta'lim hamma uchun ochiq. Bizda turli xil chegirmalar va qulay to'lovlar mavjud." : "Качественное образование доступно каждому. У нас есть различные скидки и удобные формы оплаты."
              },
              {
                icon: <Clock />,
                title: lang === 'uz' ? "Zamonaviy metodika" : "Методики",
                color: "bg-emerald-600",
                desc: lang === 'uz' ? "Darslarimiz eng so'nggi texnologiyalar va interaktiv metodlar asosida olib boriladi." : "Наши занятия проводятся на основе новейших технологий и интерактивных методов."
              },
              {
                icon: <CheckCircle2 />,
                title: lang === 'uz' ? "Shinam muhit" : "Комфорт",
                color: "bg-orange-600",
                desc: lang === 'uz' ? "O'quvchilarimiz uchun shinam xonalar va barcha zarur sharoitlar yaratilgan." : "Для наших студентов созданы уютные кабинеты и все необходимые условия."
              }
            ].map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative p-12 rounded-[4rem] bg-white border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-30px_rgba(0,0,43,0.1)] transition-all duration-700 overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${adv.color} opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700`} />

                <div className={`w-20 h-20 rounded-3xl ${adv.color} flex items-center justify-center mb-10 text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {React.cloneElement(adv.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h4 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">
                  {adv.title}
                </h4>
                <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-900 transition-colors duration-500">
                  {adv.desc}
                </p>

                {/* Visual line accent */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-blue-600 transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-20 md:py-32 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <div className="w-16 h-1 w-full max-w-[100px] bg-[#C5A037] rounded-full" />
              <p className="text-xl sm:text-3xl font-black text-[#002B5B] uppercase tracking-tighter italic">
                {lang === 'uz' ? 'Ilm yo\'llari - Ilm Saroyida!' : 'Пути к знаниям - в Ilm Saroyi!'}
              </p>
            </div>
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-slate-900 leading-[0.8] tracking-tighter uppercase">{t.galleryHeading}</h3>
          </motion.div>

          <div className="grid  lg:grid-cols-3 gap-3">
            {
              [
                {
                  img: "/images/image2.jpg",
                  title:
                    lang === "uz"
                      ? "O'quv Jarayoni"
                      : lang === "ru"
                        ? "Учебный процесс"
                        : "Learning Process",
                },
                {
                  img: "/images/image3.jpg",
                  title:
                    lang === "uz"
                      ? "Ingliz Tili Xonasi"
                      : lang === "ru"
                        ? "Кабинет английского языка"
                        : "English Classroom",
                },
                {
                  img: "/images/image4.jpg",
                  title:
                    lang === "uz"
                      ? "Tabiiy Muhit"
                      : lang === "ru"
                        ? "Природная среда"
                        : "Natural Environment",
                },
                {
                  img: "/images/image.jpg",
                  title:
                    lang === "uz"
                      ? "Bilim maskani"
                      : lang === "ru"
                        ? "Центр знаний"
                        : "Knowledge Center",
                },
                {
                  img: "/images/image5.jpg",
                  title:
                    lang === "uz"
                      ? "Administrator Joyi"
                      : lang === "ru"
                        ? "Рабочее место администратора"
                        : "Administrator Office",
                },
                {
                  img: "/images/image6.jpg",
                  title:
                    lang === "uz"
                      ? "IT kompyuterlarimiz"
                      : lang === "ru"
                        ? "Наши IT компьютеры"
                        : "Our IT Computers",
                },
              ]
                .map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white aspect-[3/4]"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-blue-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h4 className="text-white text-xl font-black uppercase tracking-tight">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
