"use client";

import Hero from '@/components/Hero';
import { useTranslations } from 'next-intl';
import { HOW_TO_INSTALL_IMAGES } from '@/constants/images';
import { Smartphone, Wifi, Zap, Users } from 'lucide-react';

export default function HowToInstallHero() {
  const t = useTranslations('howToInstall.hero');

  return (
    <Hero
      title={t('title')}
      description={t('description')}
      imageSrc={HOW_TO_INSTALL_IMAGES.hero}
      floatingText={t('floatingText')}
      actions={[
        { 
          href: '/partner', 
          label: t('primaryCta'), 
          variant: 'primary',
          icon: <Users size={16} />
        },
        { 
          href: '/contact', 
          label: t('secondaryCta'), 
          variant: 'secondary' 
        },
      ]}
      floatingIcons={[
        { icon: <Smartphone size={18} />, label: "Easy Install" },
        { icon: <Wifi size={18} />, label: "Fast Setup" },
        { icon: <Zap size={18} />, label: "Instant" }
      ]}
    />
  );
}