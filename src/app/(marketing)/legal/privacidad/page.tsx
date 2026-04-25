import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad — Mercantia',
  description: 'Cómo Mercantia recopila, usa y protege tus datos personales en cumplimiento del RGPD.',
};

export default function PrivacidadPage() {
  return (
    <div className="legal-content">
      <h1>Política de Privacidad</h1>
      <span className="legal-updated">Última actualización: 24 de abril de 2026</span>

      <p>En A. Izquierdo SL (titular de la marca <strong>Mercantia</strong>) nos tomamos muy en serio la privacidad de los datos personales. Esta política explica qué información recopilamos, cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella, en cumplimiento del <strong>Reglamento (UE) 2016/679</strong> (RGPD) y de la <strong>Ley Orgánica 3/2018</strong>, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>

      <h2>1. Responsable del tratamiento</h2>
      <div className="legal-table-box">
        <p><strong>Identidad:</strong> A. Izquierdo SL</p>
        <p><strong>CIF:</strong> B13309356</p>
        <p><strong>Dirección:</strong> C/ La Mancha, 6. Socuéllamos (Ciudad Real), CP 13630, España</p>
        <p><strong>Email:</strong> <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a></p>
      </div>

      <h2>2. Qué datos recopilamos</h2>
      <p>Según la forma en la que interactúes con nosotros, podemos tratar las siguientes categorías de datos:</p>

      <h3>2.1 Datos facilitados voluntariamente</h3>
      <ul>
        <li><strong>Formulario de demo y solicitud de llamada</strong>: nombre, empresa, email, teléfono, sector, número de comerciales y mensaje opcional.</li>
        <li><strong>Comunicaciones</strong>: cualquier dato que nos envíes por email, WhatsApp o canales similares.</li>
      </ul>

      <h3>2.2 Datos recopilados automáticamente</h3>
      <ul>
        <li><strong>Datos de navegación</strong>: dirección IP, tipo y versión de navegador, sistema operativo, páginas visitadas, tiempo de permanencia, origen de la visita.</li>
        <li><strong>Cookies</strong>: consulta nuestra <Link href="/legal/cookies">Política de Cookies</Link> para más información.</li>
      </ul>

      <h3>2.3 Datos de clientes del servicio (portal B2B)</h3>
      <p>Cuando contratas Mercantia, actuamos como <strong>encargados del tratamiento</strong> de los datos que tú (responsable) introduces en el portal: catálogos, pedidos, clientes finales, usuarios del equipo, etc. Estos datos se rigen por el contrato de encargo del tratamiento firmado en el alta del servicio.</p>

      <h2>3. Con qué finalidad tratamos tus datos</h2>
      <ul>
        <li><strong>Atención comercial</strong>: responder a solicitudes de demo, información o llamadas, gestionar la relación precontractual.</li>
        <li><strong>Prestación del servicio</strong>: dar acceso al portal, procesar pedidos, facturación y soporte técnico.</li>
        <li><strong>Facturación y obligaciones fiscales</strong>: emitir facturas, cumplir con la normativa tributaria y contable.</li>
        <li><strong>Mejora del servicio</strong>: análisis agregado y anónimo del uso del sitio web para mejorar la experiencia.</li>
        <li><strong>Comunicaciones comerciales</strong>: enviar información sobre nuevas funcionalidades, siempre que hayas dado consentimiento expreso o exista una relación contractual previa.</li>
      </ul>

      <h2>4. Base legal para el tratamiento</h2>
      <ul>
        <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): para formularios de contacto, envío de newsletters, cookies no técnicas.</li>
        <li><strong>Ejecución de contrato</strong> (art. 6.1.b RGPD): para prestar el servicio contratado.</li>
        <li><strong>Obligación legal</strong> (art. 6.1.c RGPD): para facturación, impuestos y obligaciones mercantiles.</li>
        <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para mejorar el servicio, prevenir fraude y garantizar la seguridad.</li>
      </ul>

      <h2>5. Plazo de conservación</h2>
      <ul>
        <li><strong>Solicitudes comerciales sin contratación</strong>: 12 meses desde el último contacto.</li>
        <li><strong>Datos contractuales y fiscales</strong>: 6 años tras la finalización del contrato (Código de Comercio y normativa tributaria).</li>
        <li><strong>Datos del portal B2B</strong>: durante toda la vigencia del contrato y hasta 30 días después de su finalización (para posibles exportaciones solicitadas).</li>
        <li><strong>Datos de navegación</strong>: según cada cookie, consulta la política de cookies.</li>
      </ul>

      <h2>6. Destinatarios y transferencias internacionales</h2>
      <p>Solo compartimos tus datos con terceros cuando es estrictamente necesario para prestar el servicio. Actualmente trabajamos con:</p>
      <ul>
        <li><strong>Proveedor de hosting (VPS)</strong>: servidor ubicado en territorio de la Unión Europea.</li>
        <li><strong>Google Analytics</strong> (previsto): análisis de uso del sitio web. Google actúa como encargado del tratamiento.</li>
        <li><strong>Stripe</strong> (previsto, cuando se active): procesamiento de pagos. Stripe actúa como responsable independiente del tratamiento de los datos de pago.</li>
        <li><strong>Asesoría contable y fiscal</strong>: si fuera necesario para cumplir con obligaciones legales.</li>
      </ul>
      <p>Algunos de estos proveedores (Google, Stripe) pueden realizar transferencias internacionales de datos fuera del Espacio Económico Europeo. En tales casos, se aplicarán las <strong>Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea u otras garantías adecuadas previstas en el RGPD.</p>
      <p>No cedemos datos a terceros con fines comerciales bajo ninguna circunstancia.</p>

      <h2>7. Tus derechos</h2>
      <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
      <ul>
        <li><strong>Acceso</strong>: obtener confirmación de si tratamos tus datos y copia de los mismos.</li>
        <li><strong>Rectificación</strong>: corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión</strong> (derecho al olvido): pedir que eliminemos tus datos cuando ya no sean necesarios.</li>
        <li><strong>Limitación</strong>: solicitar que pausemos el tratamiento en ciertos casos.</li>
        <li><strong>Oposición</strong>: oponerte al tratamiento por interés legítimo o marketing directo.</li>
        <li><strong>Portabilidad</strong>: recibir tus datos en un formato estructurado para transferirlos a otro responsable.</li>
        <li><strong>Revocar el consentimiento</strong>: en cualquier momento, sin efecto retroactivo.</li>
      </ul>
      <p>Para ejercer estos derechos, escríbenos a <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a> indicando el derecho que deseas ejercer y adjuntando copia de un documento identificativo.</p>
      <p>Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>

      <h2>8. Seguridad</h2>
      <p>Aplicamos medidas técnicas y organizativas apropiadas para garantizar la confidencialidad, integridad y disponibilidad de los datos:</p>
      <ul>
        <li>Cifrado en tránsito (TLS 1.3) y en reposo (AES-256).</li>
        <li>Bases de datos aisladas por cliente.</li>
        <li>Backups automáticos diarios con retención de 30 días.</li>
        <li>Acceso restringido al personal autorizado.</li>
        <li>Revisiones periódicas de seguridad.</li>
      </ul>

      <h2>9. Menores de edad</h2>
      <p>Nuestros servicios están dirigidos exclusivamente a empresas y a personas mayores de 18 años. No recopilamos conscientemente datos de menores.</p>

      <h2>10. Modificaciones</h2>
      <p>Podemos actualizar esta política para reflejar cambios legales, técnicos o de negocio. La versión vigente siempre estará publicada en esta URL, con indicación de la última fecha de actualización.</p>
    </div>
  );
}
