"use client";

import { useTranslations, useLocale } from 'next-intl';
import { ABOUT_IMAGES, FRAMES } from '@/constants/images';
import Hero from '../Hero';
import { Rocket, Wifi, Infinity } from 'lucide-react';

export default function AboutHero() {
  const t = useTranslations('about');
  return (
    <Hero
      title={{ __html: t.raw('hero.feature_title') }}
      titleIsHtml={true}
      description={t('hero.feature_body')}
      imageSrc={ABOUT_IMAGES.hero}
      imageSizes="(max-width: 768px) 100vw, 450px"
      floatingText={{ __html: t.raw('hero.graphic_floating') }}
      floatingTextIsHtml={true}
      actions={[
        { href: '/plans', label: t('hero.cta_primary'), variant: 'primary' },
        { href: '/how-it-works', label: t('hero.cta_how'), variant: 'secondary' },
        { href: '/support', label: t('hero.cta_learn'), variant: 'text' },
      ]}
      floatingIcons={[
        { icon: <Rocket size={18} className="transform rotate-45" />, label: "5G" },
        { icon: <Wifi size={18} /> },
        { icon: <Infinity size={18} /> }
      ]}
    />
  );
}