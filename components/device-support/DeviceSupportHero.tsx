"use client";

import Hero from '@/components/Hero';
import { useTranslations } from 'next-intl';
import { DEVICE_SUPPORT_IMAGES } from '@/constants/images';
import { Rocket, Wifi, Infinity } from 'lucide-react';

export default function DeviceSupportHero() {
  const t = useTranslations('deviceSupport');

  return (
    <Hero
      title={t('hero.titleLine1') + ' ' + t('hero.titleLine2')}
      description={t('hero.description')}
      imageSrc={DEVICE_SUPPORT_IMAGES.hero}
      imageSizes="(max-width: 768px) 100vw, 250px"
      floatingText={`${t('hero.floatingPrefix')} ${t('hero.floatingHighlight')}`}
      actions={[
        { href: '/supported-devices', label: t('hero.primaryCta'), variant: 'primary' },
        { href: '/support', label: t('hero.secondaryCta'), variant: 'secondary' },
        { href: '/support', label: t('hero.secondaryCta'), variant: 'text' },
      ]}
      floatingIcons={[
        { icon: <Rocket size={18} className="transform rotate-45" />, label: "5G" },
        { icon: <Wifi size={18} /> },
        { icon: <Infinity size={18} /> }
      ]}
    />
  );
}