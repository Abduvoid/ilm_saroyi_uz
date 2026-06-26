import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Send, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage({ t, lang }: { t: any, lang: string }) {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        // Reset after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('idle');
      alert(lang === 'uz' ? 'Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.' : 'Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-20 sm:pb-32 bg-white relative overflow-hidden">
      {/* Cinematic background accents */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-50 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#C5A037]/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 md:mb-40 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-20 h-1 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm">
                CONTACT
              </span>
            </div>
            <h2 className="text-[90px] sm:text-[80px] lg:text-[120px] font-black uppercase leading-[0.9] tracking-[-0.04em]">
              <span className="block text-slate-900">
                {t.contactHeroTop}
              </span>

              <span className="block text-[#C5A037] italic">
                {t.contactHeroBottom}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-500 max-w-2xl leading-relaxed italic border-l-8 border-slate-100 pl-10">
              {lang === 'uz'
                ? "Sizning savollaringiz va takliflaringiz biz uchun juda muhim. Keling, birgalikda eng yaxshi natijaga erishamiz."
                : lang === 'ru'
                  ? "Ваши вопросы и предложения очень важны для нас. Давайте вместе достигать лучших результатов."
                  : "Your questions and suggestions are important to us. Let's achieve the best results together."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="hidden lg:block relative"
          >
            <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-[3rem] sm:rounded-[4rem] bg-[#C5A037] rotate-12 transition-transform hover:rotate-0 duration-700 shadow-2xl flex items-center justify-center overflow-hidden">
              <PhoneCall className="w-20 h-20 sm:w-40 sm:h-40 text-white/20 absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10" />
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-white shadow-xl flex items-center justify-center relative z-10">
                <Send className={`w-8 h-8 sm:w-12 sm:h-12 text-blue-600 transition-transform duration-700 ${formStatus === 'success' ? 'scale-0' : 'scale-100'}`} />
                <CheckCircle2 className={`w-8 h-8 sm:w-12 sm:h-12 text-green-600 absolute transition-transform duration-700 ${formStatus === 'success' ? 'scale-100' : 'scale-0'}`} />
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl -z-10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Info Panels */}
          <div className="lg:col-span-5 space-y-8">
            {[
              { icon: <PhoneCall />, label: lang === 'uz' ? 'Telefon' : 'Телефон', val: "93 000 29 49 / 33 002 49 29", color: "bg-blue-600", link: "tel:+998930002949" },
              { icon: <Send />, label: "Telegram", val: "@ilmsaroyimarkazi", color: "bg-[#0088cc]", link: "https://t.me/ilmsaroyimarkazi" },
              { icon: <Globe />, label: "Instagram", val: "@ilm.saroyi_markazi", color: "bg-gradient-to-tr from-orange-500 to-purple-600", link: "https://instagram.com/ilm.saroyi_markazi" },
              { icon: <MapPin />, label: lang === 'uz' ? 'Manzil' : 'Адрес', val: "Shifobaxsh suvlar 177", color: "bg-emerald-600", link: "https://maps.google.com/?q=Shifobaxsh+suvlar+177" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex items-center gap-4 sm:gap-8 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-x-4 transition-all duration-500 block"
              >
                <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[2rem] ${item.color} flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500 shrink-0`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-1 sm:mb-2">{item.label}</p>
                  <p className="text-base sm:text-3xl font-black text-slate-900 tracking-tighter uppercase break-all sm:break-normal">{item.val}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="p-10 sm:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="relative z-10 py-20 text-center"
                  >
                    <div className="w-40 h-40 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-10 border-4 border-green-500/30">
                      <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">Xabaringiz yuborildi!</h3>
                    <p className="text-slate-400 text-xl font-medium max-w-sm mx-auto leading-relaxed">
                      Mutaxassislarimiz tez orada siz bilan bog'lanishadi. E'tiboringiz uchun rahmat!
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="relative z-10" exit={{ opacity: 0, y: -20 }}>
                    <h3 className="text-4xl sm:text-5xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">{t.contactInfoTitle}</h3>
                    <form className="space-y-10" onSubmit={handleSubmit}>
                      <div className="relative group text-left">
                        <input
                          type="text"
                          required
                          placeholder=" "
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none focus:border-[#C5A037] transition-colors peer text-2xl font-medium"
                        />
                        <label className="absolute top-4 left-0 text-slate-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#C5A037] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs uppercase font-black tracking-widest">
                          {t.contactName}
                        </label>
                      </div>

                      <div className="relative group text-left">
                        <input
                          type="tel"
                          required
                          placeholder=" "
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none focus:border-[#C5A037] transition-colors peer text-2xl font-medium"
                        />
                        <label className="absolute top-4 left-0 text-slate-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#C5A037] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs uppercase font-black tracking-widest">
                          {t.contactPhone}
                        </label>
                      </div>

                      <div className="relative group text-left">
                        <textarea
                          rows={1}
                          required
                          placeholder=" "
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none focus:border-[#C5A037] transition-colors peer text-2xl font-medium resize-none overflow-hidden"
                          onInput={(e: any) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                          }}
                        />
                        <label className="absolute top-4 left-0 text-slate-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#C5A037] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs uppercase font-black tracking-widest">
                          {t.contactMessage}
                        </label>
                      </div>

                      <Button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full h-16 sm:h-24 bg-white hover:bg-[#C5A037] text-slate-900 hover:text-white rounded-[1.2rem] sm:rounded-[2rem] font-black py-4 sm:py-5 text-lg sm:text-xl transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 sm:gap-5 group/btn uppercase tracking-wider sm:tracking-[0.2em] relative overflow-hidden active:scale-95"
                      >
                        {formStatus === 'sending' ? (
                          <div className="flex items-center gap-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-slate-900 border-t-transparent rounded-full"
                            />
                            <span className="text-sm sm:text-xl">YUBORILMOQDA...</span>
                          </div>
                        ) : (
                          <>
                            <span className="truncate">{t.contactSend}</span>
                            <Send className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4 transition-transform duration-500 hidden sm:block" />
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C5A037] rounded-full blur-3xl opacity-30 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="mt-32 md:mt-56 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white h-[400px] sm:h-[600px] relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d697.9528954981615!2d69.11404860594962!3d41.3598972841895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1776437227142!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 py-2 sm:py-3 px-4 sm:px-8 bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl z-20 border border-white/50 pointer-events-none">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">G-Map</p>
                <p className="text-slate-900 font-black uppercase text-xs sm:text-sm">Bizning joylashuvimiz</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
