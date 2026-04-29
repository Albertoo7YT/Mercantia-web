import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Información RGPD — Mercantia',
  description:
    'Cumplimiento del RGPD en Mercantia: rol como responsable y encargado del tratamiento, contrato art. 28, medidas técnicas de seguridad, brechas y derechos de los interesados.',
};

export default function RGPDPage() {
  return (
    <div className="legal-content">
      <h1>Información RGPD</h1>
      <span className="legal-updated">Última actualización: 24 de abril de 2026</span>

      <p>Esta página resume cómo Mercantia cumple con el <strong>Reglamento (UE) 2016/679</strong> (RGPD) y la <strong>LOPDGDD</strong>, complementando la información detallada en la <Link href="/legal/privacidad">Política de Privacidad</Link>.</p>

      <h2>Rol de Mercantia según el RGPD</h2>
      <p>Mercantia opera en dos roles diferentes dependiendo del contexto:</p>

      <h3>Como responsable del tratamiento</h3>
      <p>Cuando visitas <strong>mercantia.pro</strong>, rellenas un formulario de contacto o firmas un contrato con nosotros, A. Izquierdo SL es <strong>responsable del tratamiento</strong> de tus datos personales.</p>

      <h3>Como encargado del tratamiento</h3>
      <p>Cuando eres cliente de Mercantia y usas el portal B2B para gestionar tus propios pedidos, clientes y catálogo, <strong>tú (tu empresa) eres el responsable del tratamiento</strong> de esos datos. Nosotros actuamos como <strong>encargados del tratamiento</strong>, procesando esos datos en tu nombre conforme al contrato de encargo.</p>

      <h2>Contrato de encargo del tratamiento</h2>
      <p>Todo cliente que contrata Mercantia firma un contrato de encargo del tratamiento conforme al artículo 28 del RGPD, que incluye:</p>
      <ul>
        <li>Objeto, duración y naturaleza del tratamiento.</li>
        <li>Categorías de datos e interesados.</li>
        <li>Obligaciones y derechos del responsable.</li>
        <li>Medidas técnicas y organizativas de seguridad.</li>
        <li>Subencargados autorizados y cláusulas sobre transferencias internacionales.</li>
        <li>Procedimiento en caso de brechas de seguridad.</li>
      </ul>
      <p>Si eres cliente y necesitas una copia del contrato de encargo, contacta con <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a>.</p>

      <h2>Medidas de seguridad</h2>
      <ul>
        <li><strong>Cifrado</strong>: TLS 1.3 en tránsito, AES-256 en reposo para los datos almacenados.</li>
        <li><strong>Aislamiento</strong>: cada cliente dispone de su propia base de datos PostgreSQL independiente.</li>
        <li><strong>Backups</strong>: copia automática diaria con retención de 30 días.</li>
        <li><strong>Ubicación</strong>: servidores en territorio de la Unión Europea.</li>
        <li><strong>Control de accesos</strong>: autenticación por email y contraseña, con PIN adicional para accesos sensibles.</li>
        <li><strong>Registro de actividad</strong>: logs detallados de todas las operaciones relevantes.</li>
        <li><strong>Revisiones periódicas</strong>: auditoría regular de configuración y dependencias.</li>
      </ul>

      <h2>Subencargados</h2>
      <p>Para prestar el Servicio utilizamos a los siguientes proveedores, que tienen acceso técnico a los datos bajo contrato de encargo:</p>
      <ul>
        <li><strong>Proveedor de VPS</strong> (hosting en UE): almacenamiento de datos y ejecución del software.</li>
        <li><strong>Servicio de envío de emails transaccionales</strong> (cuando se active): envío de notificaciones de pedido, recuperación de contraseña, etc.</li>
      </ul>
      <p>Cualquier incorporación o sustitución de subencargados se notificará con antelación razonable a los clientes.</p>

      <h2>Notificación de brechas de seguridad</h2>
      <p>En caso de producirse una brecha de seguridad que afecte a datos personales:</p>
      <ul>
        <li>Notificaremos a la <strong>Agencia Española de Protección de Datos</strong> en un plazo máximo de 72 horas, cuando proceda.</li>
        <li>Informaremos al cliente afectado sin dilación indebida.</li>
        <li>Si la brecha entraña un alto riesgo para los derechos y libertades de los interesados, informaremos también directamente a los mismos.</li>
      </ul>

      <h2>Derechos de los interesados</h2>
      <p>Cualquier persona cuyos datos procesamos como responsables puede ejercer los derechos recogidos en el RGPD contactando con <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a>. Consulta la <Link href="/legal/privacidad">Política de Privacidad</Link> para el detalle completo.</p>

      <h2>Reclamaciones</h2>
      <p>Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos:</p>
      <ul>
        <li>Web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a></li>
        <li>Dirección: C/ Jorge Juan 6, 28001 Madrid</li>
      </ul>
    </div>
  );
}
