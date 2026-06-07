'use client';

import dynamic from 'next/dynamic';

const ContactUs = dynamic(() => import('./ContactUs'), {
  ssr: false,
  loading: () => <div className="h-[500px]" aria-hidden="true" />,
});

export default function ContactUsClient() {
  return <ContactUs />;
}
