"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Clock,
  ShieldCheck,
  Users,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { useTranslations } from "next-intl";

const PartnerApplicationSection = () => {
  const t = useTranslations('howToInstall.application');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    website: '',
    email: '',
    country: '',
    partnershipType: '',
    audience: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const features = [
    {
      icon: <Clock size={18} className="text-white opacity-90" />,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
    },
    {
      icon: <ShieldCheck size={18} className="text-white opacity-90" />,
      title: t('features.commitment.title'),
      description: t('features.commitment.description'),
    },
    {
      icon: <Users size={18} className="text-white opacity-90" />,
      title: t('features.review.title'),
      description: t('features.review.description'),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full  px-4 py-12 sm:py-16 lg:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-[1140px]">
        {/* Trust Badge - moved above for better mobile visibility */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 lg:mb-10"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-2.5">
            <p className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
              {t('trust.label')}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Left Content Column - Dark Card Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 bg-primary-dark border border-[#8f6fae]/30 rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden backdrop-blur-sm"
          >
            {/* Soft decorative background particles */}
            <div className="absolute top-12 right-12 w-2 h-2 bg-white/20 rounded-full" />
            <div className="absolute bottom-24 left-8 w-1.5 h-1.5 bg-white/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/40 rounded-full" />

            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold tracking-tight leading-tight mb-3 sm:mb-4">
              {t('title')}
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 font-normal">
              {t('description')}
            </p>

            {/* List Features with specialized circle ring badge icons */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/40 bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-0.5 tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-normal max-w-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content Column - Form Application Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <div className="bg-white text-gray-900 rounded-[28px] sm:rounded-[40px] p-8 sm:p-10 md:p-12 shadow-xl border border-gray-100 text-center h-full flex flex-col justify-center items-center min-h-[400px] sm:min-h-[450px]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-4 sm:mb-6">
                  <CheckCircle2 size={36} className="sm:w-11 sm:h-11 text-emerald-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                  {t('form.success.title')}
                </h3>
                <p className="text-slate-500 text-sm max-w-sm leading-relaxed px-2">
                  {t('form.success.description')}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      website: '',
                      email: '',
                      country: '',
                      partnershipType: '',
                      audience: '',
                    });
                  }}
                  className="mt-5 sm:mt-6 text-sm font-bold text-[#775796] hover:underline"
                >
                  {t('form.success.again')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#f5f2f9] text-gray-900 rounded-[28px] sm:rounded-[40px] p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl flex flex-col justify-between h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.fullName.label')}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t('form.fullName.placeholder')}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-purple-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] focus:ring-2 focus:ring-[#775796]/10 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label htmlFor="company" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.company.label')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('form.company.placeholder')}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Website or Social Profile */}
                  <div className="flex flex-col">
                    <label htmlFor="website" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.website.label')}
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email address */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('form.email.placeholder')}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Country Selection */}
                  <div className="flex flex-col relative">
                    <label htmlFor="country" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.country.label')}
                    </label>
                    <div className="relative">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 appearance-none pr-8 sm:pr-10"
                      >
                        <option value="">{t('form.country.placeholder')}</option>
                        <option value="SY">Syria</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AE">UAE</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="EG">Egypt</option>
                        <option value="JO">Jordan</option>
                        <option value="LB">Lebanon</option>
                        <option value="TR">Turkey</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Partnership Type Selection */}
                  <div className="flex flex-col relative">
                    <label htmlFor="partnershipType" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.partnershipType.label')}
                    </label>
                    <div className="relative">
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 appearance-none pr-8 sm:pr-10"
                      >
                        <option value="">{t('form.partnershipType.placeholder')}</option>
                        <option value="travel-agency">{t('form.partnershipType.options.agency')}</option>
                        <option value="creator">{t('form.partnershipType.options.creator')}</option>
                        <option value="tourism">{t('form.partnershipType.options.tourism')}</option>
                        <option value="blogger">{t('form.partnershipType.options.blogger')}</option>
                        <option value="affiliate">{t('form.partnershipType.options.affiliate')}</option>
                        <option value="other">{t('form.partnershipType.options.other')}</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Tell us about your audience text field */}
                  <div className="flex flex-col sm:col-span-2">
                    <label htmlFor="audience" className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2 pl-1">
                      {t('form.audience.label')}
                    </label>
                    <textarea
                      id="audience"
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      placeholder={t('form.audience.placeholder')}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white text-sm outline-none transition-all duration-200 focus:border-[#775796] text-slate-900 placeholder:text-slate-400 resize-none leading-relaxed min-h-[80px] sm:min-h-[100px]"
                    />
                  </div>

                </div>

                {/* Submit Button with Terms */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed text-center sm:text-left order-2 sm:order-1">
                    {t('form.terms')} <a href="#" className="text-[#775796] font-medium hover:underline">{t('form.termsLink')}</a> {t('form.and')} <a href="#" className="text-[#775796] font-medium hover:underline">{t('form.privacyLink')}</a>
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button button-light w-full sm:w-auto order-1 sm:order-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {isSubmitting ? t('form.submitting') : t('form.submit')}
                  </button>
                </div>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnerApplicationSection;