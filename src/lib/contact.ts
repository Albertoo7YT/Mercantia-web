export const DEMO_URL = 'https://demo.mercantia.pro';

export const CONTACT = {
  whatsapp: {
    number: '34711257657',
    display: '+34 711 25 76 57',
    defaultMessage: 'Hola, me interesa Mercantia y me gustaría saber más.',
  },
  email: 'hola@mercantia.app',
} as const;

export function whatsappUrl(message?: string): string {
  const msg = encodeURIComponent(message || CONTACT.whatsapp.defaultMessage);
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${msg}`;
}
