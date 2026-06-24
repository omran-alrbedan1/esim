import {
  AppWindow,
  BadgeCheck,
  Check,
  CircleAlert,
  CircleHelp,
  Download,
  Globe2,
  Headphones,
  MapPin,
  QrCode,
  Radio,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export const countries = [
  ['US', 'United States'],
  ['AE', 'United Arab Emirates'],
  ['GB', 'United Kingdom'],
  ['FR', 'France'],
  ['IT', 'Italy'],
  ['ES', 'Spain'],
  ['TR', 'Turkey'],
  ['JP', 'Japan'],
  ['TH', 'Thailand'],
  ['SG', 'Singapore'],
  ['CA', 'Canada'],
  ['AU', 'Australia'],
];

export function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function StoreButtons() {
  return (
    <div className="store-buttons">
      <button>
        <span className="store-glyph">G</span>
        <span>GET IT ON<strong>Google Play</strong></span>
      </button>
      <button>
        <span className="store-glyph">A</span>
        <span>Download on the<strong>App Store</strong></span>
      </button>
    </div>
  );
}


const faqItems = [
  ['What is an eSIM?', 'An eSIM is a digital SIM embedded in your device, allowing you to activate a plan without a physical card.'],
  ['Does Net eSIM offer calls or SMS?', 'Our travel plans focus on reliable mobile data. Internet calling apps continue to work normally.'],
  ['Can I purchase a plan from the website?', 'Yes. Choose your destination, select a package, and complete checkout directly from the site.'],
  ['Is the price inclusive of taxes?', 'The final amount shown during checkout is the amount you pay before placing the order.'],
  ['Can I use WhatsApp normally?', 'Yes. Your WhatsApp account stays tied to your existing number while data runs through the eSIM.'],
  ['Can I share my internet hotspot?', 'Most supported phones can use hotspot sharing with Net eSIM plans, depending on local network rules.'],
];

export function FAQ({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`section faq-section ${compact ? 'compact' : ''}`}>
      <SectionTitle title="Frequently Asked Questions" copy="Find answers to common questions about our service and solutions." />
      <div className="faq-grid">
        {faqItems.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<span>+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <Link className="button button-dark faq-button" href="/contact">
        <Headphones size={16} /> Have more questions? Contact our support team
      </Link>
    </section>
  );
}

export function MiniFeatureGrid() {
  const items = [
    [Globe2, 'Global coverage'],
    [BadgeCheck, 'Trusted networks'],
    [ShieldCheck, 'Secure connection'],
    [Headphones, '24/7 support'],
  ] as const;

  return (
    <div className="mini-features">
      {items.map(([Icon, label]) => (
        <div key={label}>
          <Icon />
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}


export const featureIcons = [
  Globe2,
  Radio,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Headphones,
  MapPin,
  AppWindow,
  CircleHelp,
  CircleAlert,
  Check,
];
