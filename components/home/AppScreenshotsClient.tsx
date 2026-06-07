'use client';

import dynamic from 'next/dynamic';

const AppScreenshots = dynamic(() => import('./AppScreenshots'), {
  ssr: false,
  loading: () => <div className="h-[500px]" aria-hidden="true" />,
});

export default function AppScreenshotsClient() {
  return <AppScreenshots />;
}
