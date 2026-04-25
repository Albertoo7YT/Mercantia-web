'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let sessionId = localStorage.getItem('m_sid');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('m_sid', sessionId);
    }

    const params = new URLSearchParams(searchParams.toString());

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
        utmSource: params.get('utm_source'),
        utmMedium: params.get('utm_medium'),
        utmCampaign: params.get('utm_campaign'),
        utmContent: params.get('utm_content'),
        utmTerm: params.get('utm_term'),
        sessionId,
      }),
    }).catch(() => {});
  }, [pathname, searchParams]);

  return null;
}
