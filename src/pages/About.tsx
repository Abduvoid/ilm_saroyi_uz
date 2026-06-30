import { motion } from 'motion/react';
import { CheckCircle2, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AboutPage({ t, aboutPoints, lang }: { t: any, aboutPoints: any[], lang: string }) {
  return (
    <div className="min-h-screen bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_top_right,rgba(197,160,55,0.05),transparent),radial-gradient(circle_at_bottom_left,rgba(0,43,91,0.05),transparent)]" />

      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 -right-20 w-80 h-80 bg-[#C5A037]/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#C5A037]" />
              <span className="text-[#C5A037] font-black uppercase tracking-[0.4em] text-xs sm:text-sm">
                {t.aboutTitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-heading font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 uppercase px-2">
              {lang === 'uz' ? (
                <>Kelajak <br /> <span className="text-blue-600 italic">ilm bilan</span> <br /> boshlanadi</>
              ) : lang === 'ru' ? (
                <>Будущее <br /> <span className="text-blue-600 italic">начинается</span> <br /> со знаний</>
              ) : (
                <>Future <br /> <span className="text-blue-600 italic">starts</span> <br /> with knowledge</>
              )}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              {t.aboutText}
            </p>
          </motion.div>
        </div>

        {/* Artistic Image Mosaic Section */}
        <div className="grid grid-cols-12 gap-4 sm:gap-8 mb-32 md:mb-56">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-7 aspect-[16/9] rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Education Life"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="rounded-[3rem] overflow-hidden bg-blue-600 text-white p-10 flex flex-col justify-end text-right group relative"
            >
              <Star className="absolute top-8 left-8 w-16 h-16 opacity-10 group-hover:rotate-45 transition-transform duration-700" />
              <h3 className="text-6xl font-black mb-2">10+</h3>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">
                {lang === "uz"
                  ? "Yillik tajriba"
                  : lang === "ru"
                    ? "Лет опыта"
                    : "Years of Experience"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="rounded-[3rem] overflow-hidden border-[10px] border-white shadow-xl relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="Student Success"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#C5A037]/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>

        {/* Core Values - Professional Editorial Layout */}
        <div className="mb-32 md:mb-56">
          <div className="flex flex-col items-start justify-start mb-24 md:mb-32 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="max-w-2xl w-full"
            >
              <div className="w-20 h-1 bg-blue-600 mb-10" />

              <h2 className="text-3xl sm:text-7xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
                {lang === "uz" ? (
                  <>
                    Bizning <br />
                    <span className="text-[#C5A037] italic">Qadriyatlarimiz</span>
                  </>
                ) : lang === "ru" ? (
                  <>
                    Наши <br />
                    <span className="text-[#C5A037] italic">Ценности</span>
                  </>
                ) : (
                  <>
                    Our <br />
                    <span className="text-[#C5A037] italic">Values</span>
                  </>
                )}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="max-w-2xl text-slate-500 font-medium text-xl leading-relaxed italic text-left w-full border-l-4 border-slate-100 pl-8"
            >
              {lang === "uz"
                ? `"Sifat - bu hech kim qaramayotganida ham hamma narsani to'g'ri qilishdir."`
                : lang === "ru"
                  ? `"Качество — это делать всё правильно, даже когда никто не смотрит."`
                  : `"Quality is doing everything right, even when no one is watching."`}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {aboutPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`group relative p-12 rounded-[3.5rem] flex flex-col items-start transition-all duration-700 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-6 ${i === 1 ? 'lg:translate-y-16' : i === 3 ? 'lg:translate-y-16' : ''
                  }`}
              >
                {/* Floating Index Background */}
                <div className="absolute top-10 right-10 text-slate-100 text-6xl font-black italic pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="w-20 h-20 rounded-[2.5rem] mb-12 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative" style={{ backgroundColor: point.color }}>
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">
                  {point.text}
                </h4>

                <p className="text-slate-500 leading-relaxed font-medium mb-10">
                  {lang === "uz"
                    ? (
                      i === 0 ? "Har bir darsimiz zamonaviy standartlarga javob beradi." :
                        i === 1 ? "Biz bilan o'rganish sizga nafaqat bilim, balki tajriba beradi." :
                          i === 2 ? "Ustozlarimiz o'z sohasining haqiqiy mutaxassislari." :
                            "Natijaga yo'naltirilgan intensiv o'quv dasturi."
                    )
                    : lang === "ru"
                      ? (
                        i === 0 ? "Каждый наш урок соответствует современным стандартам." :
                          i === 1 ? "Обучаясь с нами, вы получите не только знания, но и практический опыт." :
                            i === 2 ? "Наши преподаватели — настоящие специалисты своего дела." :
                              "Интенсивная программа обучения, ориентированная на результат."
                      )
                      : (
                        i === 0 ? "Every lesson meets modern educational standards." :
                          i === 1 ? "Learning with us gives you not only knowledge but also practical experience." :
                            i === 2 ? "Our teachers are true experts in their fields." :
                              "An intensive training program focused on results."
                      )}
                </p>

                <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700 mt-auto" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement - Full Width Creative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="relative rounded-[4rem] bg-slate-950 p-12 md:p-32 text-white overflow-hidden mb-32 md:mb-56"
        >
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circleAt 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <h2 className="text-xl sm:text-5xl md:text-7xl font-heading font-black leading-none mb-12 tracking-tighter uppercase italic">
            {lang === "uz" ? (
              <>
                "Bizning asosiy <span className="text-blue-500">ishonchimiz</span> - ta'lim orqali{" "}
                <span className="text-[#C5A037]">hayotlarni</span> o'zgartirishdir"
              </>
            ) : lang === "ru" ? (
              <>
                "Наша главная <span className="text-blue-500">миссия</span> — менять{" "}
                <span className="text-[#C5A037]">жизни</span> через образование"
              </>
            ) : (
              <>
                "Our greatest <span className="text-blue-500">belief</span> is changing{" "}
                <span className="text-[#C5A037]">lives</span> through education"
              </>
            )}
          </h2>

          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#C5A037]/10 rounded-full blur-[100px]" />
        </motion.div>

        {/* Final CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-6xl font-black text-slate-900 mb-12 uppercase tracking-tighter">
              {lang === "uz" ? (
                <>
                  Siz ham <span className="text-blue-600 italic">o'z yo'lingizni</span>
                  <br />
                  biz bilan boshlang
                </>
              ) : lang === "ru" ? (
                <>
                  Начните <span className="text-blue-600 italic">свой путь</span>
                  <br />
                  вместе с нами
                </>
              ) : (
                <>
                  Start <span className="text-blue-600 italic">your journey</span>
                  <br />
                  with us
                </>
              )}
            </h2>
            <Link to="/contact">
              <Button size="lg" className="h-20 sm:h-24 px-10 sm:px-16 rounded-[2rem] sm:rounded-[2.5rem] bg-[#002B5B] hover:bg-[#C5A037] text-white font-black text-xl sm:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                {lang === 'uz' ? 'HOZIROQ BOG\'LANING' : 'СВЯЖИТЕСЬ СЕЙЧАС'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
