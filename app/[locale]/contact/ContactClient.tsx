'use client';

import { ChevronRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FRAMES } from '@/constants/images';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa6';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.411 1.451 5.428 0 9.846-4.415 9.849-9.847.001-2.632-1.019-5.101-2.871-6.955C17.166 1.949 14.693.93 12.006.93c-5.431 0-9.85 4.419-9.853 9.852-.001 1.963.512 3.878 1.488 5.568l-.98 3.58 3.688-.967zM17.14 13.7c-.278-.14-1.643-.812-1.897-.904-.253-.093-.438-.14-.622.14-.184.278-.712.904-.872 1.09-.16.184-.32.207-.597.067-.278-.14-1.173-.432-2.235-1.38-0.826-.738-1.384-1.65-1.546-1.927-.163-.278-.018-.429.122-.568.125-.125.278-.324.417-.486.14-.162.186-.278.278-.463.093-.185.047-.347-.023-.486-.07-.14-.622-1.501-.853-2.057-.225-.541-.453-.467-.622-.476-.16-.008-.344-.01-.527-.01-.184 0-.485.069-.739.347-.253.278-.967.947-.967 2.312s.993 2.684 1.132 2.869c.14.185 1.954 2.984 4.733 4.183.661.285 1.177.455 1.579.583.664.211 1.269.181 1.747.11.533-.08 1.643-.671 1.874-1.319.231-.648.231-1.203.162-1.319-.069-.117-.253-.185-.531-.325z" />
    </svg>
  );
}

export default function ContactClient() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
        }),
      });
      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="w-full px-3 sm:px-4 mt-14 sm:mt-16 py-8 sm:py-12 lg:py-16 text-primary-heading">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8 items-stretch relative">
          <ContactInfoCard t={t} isRTL={isRTL} />
          <ContactFormCard
            t={t}
            isRTL={isRTL}
            status={status}
            handleSubmit={handleSubmit}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  t,
  isRTL,
}: {
  t: ReturnType<typeof useTranslations>;
  isRTL: boolean;
}) {
  return (
    <div className={`flex flex-col justify-between rounded-[28px] sm:rounded-[44px] bg-primary-surface border border-primary-border p-6 sm:p-8 lg:p-14 shadow-soft ${isRTL ? 'text-right' : ''}`}>
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-primary-heading">
          {t('info.title')}
        </h1>

        <div className="h-2 w-12 sm:w-14 rounded-full bg-linear-to-r from-primary-mid to-brand" />

        <p className="pt-2 text-sm sm:text-base leading-relaxed text-primary-copy font-normal tracking-wide">
          {t('subtitle')}
        </p>

        <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] font-medium text-primary">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <Mail size={18} className="text-primary-heading shrink-0" />
            <span className="cursor-pointer hover:underline text-sm sm:text-base break-all">{t('info.email')}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-3.5">
            <Phone size={18} className="text-primary-heading shrink-0" />
            <span className="text-sm sm:text-base">{t('info.phone')}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-3.5">
            <FaFacebook size={18} className="text-primary-heading shrink-0" />
            <span className="cursor-pointer hover:underline text-sm sm:text-base">@NET_ESIM</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-3.5">
            <WhatsAppIcon size={18} />
            <span className="cursor-pointer hover:underline text-sm sm:text-base">@NET_ESIM</span>
          </div>
        </div>
      </div>

      <div className={`mt-8 sm:mt-12 inline-flex  items-center gap-3 sm:gap-4 rounded-full border border-primary-border-soft bg-page-bg-alt p-1.5 shadow-sm max-w-max ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Link
          href="#"
          className="button button-light text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
        >
          {t('cta_secondary')}
        </Link>

        <Link
          href="#"
          className="button text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
        >
          <span>{t('cta_primary')}</span>
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

function ContactFormCard({
  t,
  isRTL,
  status,
  handleSubmit,
  isMobile,
}: {
  t: ReturnType<typeof useTranslations>;
  isRTL: boolean;
  status: 'idle' | 'success' | 'error';
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isMobile: boolean;
}) {
  return (
    <div className="relative min-h-[450px] sm:min-h-[500px] md:min-h-full overflow-hidden rounded-[28px] sm:rounded-[44px] text-white p-6 sm:p-8 lg:p-14 flex flex-col justify-between">

      <Image
        src={FRAMES.frame3}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain"
        priority
      />

      <form onSubmit={handleSubmit} className="space-y-4 mt-14 md:mt-0 sm:space-y-6 relative z-10 w-full">
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            required
            placeholder={t('form.namePlaceholder')}
            className="w-full bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm sm:text-[15px] transition-all backdrop-blur-sm"
          />
        </div>

        <div className="space-y-2">
          <input
            type="email"
            name="email"
            required
            placeholder={t('form.emailPlaceholder')}
            className="w-full bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm sm:text-[15px] transition-all backdrop-blur-sm"
          />
        </div>

        <div className="space-y-2">
          <textarea
            name="message"
            rows={isMobile ? 2 : 4}
            required
            placeholder={t('form.messagePlaceholder')}
            className="w-full bg-white/10 border border-white/20 rounded-[24px] sm:rounded-[28px] px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm sm:text-[15px] transition-all resize-none backdrop-blur-sm"
          />
        </div>

        <div className={`flex w-full ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <button
            type="submit"
            className="button button-dark text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
          >
            {t('form.submit')}
          </button>
        </div>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-300 bg-green-900/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-center"
          >
            {t('form.success')}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-300 bg-red-900/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-center"
          >
            {t('form.error')}
          </motion.p>
        )}
      </form>

      <motion.div
        className={`absolute bottom-1 left-2 sm:left-5 z-20 hidden lg:flex flex-col gap-3`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.5,
            },
          },
        }}
      >
        {[
          { icon: <FaFacebook size={16} />, label: t('social.facebook') },
          { icon: <Mail size={16} />, label: t('social.email') },
          { icon: <WhatsAppIcon size={16} />, label: t('social.whatsapp') },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: -600,
                rotate: 720,
                scale: 0.3,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 1.2,
                  duration: 1.8,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: 15,
              backgroundColor: "#9A42E4",
              transition: { type: "spring", stiffness: 300, damping: 12 },
            }}
            className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-dark backdrop-blur-sm border border-white/10 text-white shadow-lg group transition-colors duration-200"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-linear-to-r from-primary-mid/0 via-primary-mid/20 to-brand/0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile floating social buttons */}
      <div className="lg:hidden absolute bottom-14 left-0 z-20 flex flex-col gap-2">
        {[
          { icon: <FaFacebook size={10} />, label: t('social.facebook') },
          { icon: <Mail size={10} />, label: t('social.email') },
          { icon: <WhatsAppIcon size={10} />, label: t('social.whatsapp') },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-primary-dark/80 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center shadow-lg"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}