import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CoursePage({
  courseData,
  lang,
  t
}: {
  courseData: any[],
  lang: string,
  t: any
}) {
  // 1. URL dan kurs id yoki slug ini olamiz
  const { id } = useParams<{ id: string }>();

  // 2. courseData ichidan shu ID ga mos keladigan kursni topamiz
  // (Agar sizda id emas, slug bo'lsa, c.slug === id deb yozishingiz mumkin)
  const course = courseData?.find((c) => c.id === id || c.slug === id);

  // 3. Agar kurs topilmasa, xatolik bermasligi uchun tekshirish
  if (!course) {
    return (
      <div className="pt-32 text-center text-slate-600">
        {lang === 'uz' ? 'Kurs topilmadi' : lang === 'ru' ? 'Курс не найден' : 'Course not found'}
      </div>
    );
  }

  const courseFeatures = [
    {
      title:
        lang === "uz"
          ? "Sertifikat"
          : lang === "ru"
          ? "Сертификат"
          : "Certificate",
      desc:
        lang === "uz"
          ? "Kursni tamomlagach rasmiy sertifikat beriladi"
          : lang === "ru"
          ? "Официальный сертификат по окончании курса"
          : "Official certificate after course completion"
    },
    {
      title:
        lang === "uz"
          ? "Amaliyot"
          : lang === "ru"
          ? "Практика"
          : "Practice",
      desc:
        lang === "uz"
          ? "Real loyihalar ustida ishlash imkoniyati"
          : lang === "ru"
          ? "Возможность работы над реальными проектами"
          : "Work on real projects"
    },
    {
      title:
        lang === "uz"
          ? "Mentorlik"
          : lang === "ru"
          ? "Менторство"
          : "Mentorship",
      desc:
        lang === "uz"
          ? "Tajribali ustozlardan doimiy yordam"
          : lang === "ru"
          ? "Постоянная помощь опытных наставников"
          : "Constant support from experienced mentors"
    },
    {
      title:
        lang === "uz"
          ? "Ishga joylashish"
          : lang === "ru"
          ? "Трудоустройство"
          : "Employment",
      desc:
        lang === "uz"
          ? "Eng yaxshi talabalarga ish topishda ko'mak"
          : lang === "ru"
          ? "Помощь лучшим студентам в трудоустройстве"
          : "Employment assistance for top students"
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen relative overflow-hidden">
      {/* Background Deco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Link to="/courses" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-6 sm:mb-8 md:mb-12 hover:gap-4 transition-all group text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          {lang === 'uz' ? 'Orqaga' : lang === 'ru' ? 'Назад' : 'Back'}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={`inline-block p-2.5 sm:p-4 rounded-xl sm:rounded-2xl ${course.color || 'bg-blue-600'} text-white shadow-xl mb-4 sm:mb-8`}>
              <div className="scale-90 sm:scale-100">{course.icon}</div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-7xl font-heading font-bold text-slate-900 mb-4 sm:mb-8 leading-tight">
              {course.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-12 leading-relaxed">
              {course.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">
              <div className="p-4 sm:p-8 bg-white rounded-xl sm:rounded-[2.5rem] shadow-xl border border-blue-50 flex items-center gap-3 sm:gap-6 text-left">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="text-[10px] md:text-sm text-slate-400 uppercase font-bold tracking-wider">Davomiyligi</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-800">{t.courseUnlimited}</div>
                </div>
              </div>
              <div className="p-4 sm:p-8 bg-white rounded-xl sm:rounded-[2.5rem] shadow-xl border border-blue-50 flex items-center gap-3 sm:gap-6 text-left">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <Users className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="text-[10px] md:text-sm text-slate-400 uppercase font-bold tracking-wider">{t.courseGroup}</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-800">{t.courseGroupCount}</div>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button size="lg" className="w-full md:w-auto px-8 sm:px-16 py-5 sm:py-10 text-lg sm:text-2xl rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 font-black">
                {t.enrollCourse}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, type: "spring" }}
            className="relative"
          >
            <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white aspect-video relative group">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
            </div>
            
            <div className="mt-8 md:mt-12 grid grid-cols-1 gap-4 md:gap-6">
              {courseFeatures.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 1.2 }}
                  className="flex items-start gap-4 md:gap-6 p-5 md:p-6 bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white shadow-lg"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm md:text-base text-slate-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Course Curriculum Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="bg-slate-900 rounded-2xl sm:rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12"> {t.courseProgram}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"> 
              {course.curriculum ? (
                course.curriculum.map((stage: any) => (
                  <div key={stage.month} className="p-5 sm:p-8 bg-white/5 rounded-xl sm:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-blue-400 font-bold mb-2 sm:mb-4 uppercase tracking-widest text-[9px] sm:text-sm">{stage.month}-OY</div>
                    <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
                      {stage.title}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-3 text-xs sm:text-sm md:text-slate-400">
                      {stage.topics.map((topic: string, i: number) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400" /> 
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                [1, 2, 3, 4, 5, 6].map((month) => (
                  <div key={month} className="p-5 sm:p-8 bg-white/5 rounded-xl sm:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-blue-400 font-bold mb-2 sm:mb-4 uppercase tracking-widest text-[9px] sm:text-sm">{month}-OY</div>
                    <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
                      {lang === 'uz' ? `${month}-bosqich asoslari` : `${month}-этап основ`}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-3 text-xs sm:text-sm md:text-slate-400">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400" /> Nazariy bilimlar</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400" /> Amaliy mashqlar</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400" /> Haftalik testlar</li>
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}