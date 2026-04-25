import crypto from 'crypto';

export function hashIp(ip: string): string {
  const salt = process.env.SESSION_SECRET || 'mercantia';
  return crypto.createHash('sha256').update(ip + salt).digest('hex');
}

export function detectDevice(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (/mobile|android|iphone/.test(ua) && !/tablet|ipad/.test(ua)) return 'mobile';
  if (/tablet|ipad/.test(ua)) return 'tablet';
  return 'desktop';
}

export function detectBrowser(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('edg')) return 'Edge';
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari')) return 'Safari';
  return 'Other';
}
