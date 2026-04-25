import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies — Mercantia',
  description: 'Información sobre el uso de cookies en Mercantia.',
};

export default function CookiesPage() {
  return (
    <div className="legal-content">
      <h1>Política de Cookies</h1>
      <span className="legal-updated">Última actualización: 24 de abril de 2026</span>

      <p>Esta Política de Cookies explica qué son las cookies, cuáles usamos en <strong>mercantia.pro</strong>, con qué finalidad y cómo puedes gestionarlas.</p>

      <h2>1. Qué son las cookies</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para recordar información sobre tu visita (preferencias de idioma, inicio de sesión) y para analizar cómo se usa el sitio.</p>

      <h2>2. Tipos de cookies que usamos</h2>

      <h3>2.1 Cookies técnicas (necesarias)</h3>
      <p>Imprescindibles para el funcionamiento del sitio. No requieren consentimiento. Incluyen cookies de sesión y de seguridad.</p>

      <h3>2.2 Cookies analíticas</h3>
      <p>Cuando activemos Google Analytics, utilizaremos cookies para medir de forma agregada y anónima cómo los usuarios interactúan con el sitio. Requieren consentimiento previo.</p>
      <div className="legal-table-box">
        <p><strong>Proveedor:</strong> Google LLC (Google Analytics)</p>
        <p><strong>Finalidad:</strong> Análisis de uso del sitio.</p>
        <p><strong>Duración:</strong> Hasta 14 meses.</p>
        <p><strong>Transferencia internacional:</strong> Sí (EEUU), con Cláusulas Contractuales Tipo.</p>
      </div>

      <h3>2.3 Cookies de terceros (pasarela de pago)</h3>
      <p>Cuando se active Stripe como pasarela de pago, puede instalar sus propias cookies para prevenir fraude y procesar pagos de forma segura. Más información en la <a href="https://stripe.com/es/privacy" target="_blank" rel="noopener noreferrer">política de privacidad de Stripe</a>.</p>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>Puedes aceptar, rechazar o configurar las cookies en cualquier momento:</p>
      <ul>
        <li>Mediante el banner de consentimiento que aparece en tu primera visita.</li>
        <li>Desde la configuración de tu navegador (puedes borrar cookies ya instaladas o bloquear nuevas).</li>
      </ul>
      <p>Ten en cuenta que deshabilitar ciertas cookies puede afectar a la funcionalidad del sitio.</p>

      <h2>4. Enlaces para gestionar cookies en los navegadores</h2>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>5. Actualizaciones</h2>
      <p>Podemos actualizar esta política cuando incorporemos nuevas herramientas que usen cookies. Siempre encontrarás la versión vigente en esta URL.</p>
    </div>
  );
}
