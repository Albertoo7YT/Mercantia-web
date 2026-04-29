import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Mercantia',
  description:
    'Términos y condiciones de uso de Mercantia: contratación, planes, cancelación sin permanencia, obligaciones del cliente y prestador, SLA y limitación de responsabilidad.',
};

export default function TerminosPage() {
  return (
    <div className="legal-content">
      <h1>Términos y Condiciones</h1>
      <span className="legal-updated">Última actualización: 24 de abril de 2026</span>

      <p>Estos Términos y Condiciones regulan la contratación y uso del servicio <strong>Mercantia</strong> (en adelante, &quot;el Servicio&quot;), ofrecido por A. Izquierdo SL.</p>

      <h2>1. Identificación del prestador</h2>
      <div className="legal-table-box">
        <p><strong>Razón social:</strong> A. Izquierdo SL</p>
        <p><strong>CIF:</strong> B13309356</p>
        <p><strong>Domicilio:</strong> C/ La Mancha, 6. Socuéllamos (Ciudad Real), CP 13630, España</p>
        <p><strong>Email:</strong> <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a></p>
      </div>

      <h2>2. Objeto del contrato</h2>
      <p>Mercantia es una plataforma SaaS B2B que permite a fabricantes y distribuidores gestionar pedidos de sus comerciales y clientes mayoristas. Incluye módulos de catálogo, pedidos, reservas, stock, garantías, CRM y notificaciones.</p>

      <h2>3. Contratación</h2>
      <p>La contratación del Servicio se formaliza mediante:</p>
      <ul>
        <li>Solicitud de demo y presupuesto personalizado.</li>
        <li>Aceptación expresa del presupuesto por parte del cliente.</li>
        <li>Alta técnica del entorno y entrega de credenciales.</li>
      </ul>
      <p>Los precios y condiciones económicas se establecerán en el presupuesto/contrato específico firmado con cada cliente. Los precios no incluyen IVA salvo que se indique expresamente.</p>

      <h2>4. Duración y cancelación</h2>
      <p>El Servicio no tiene permanencia mínima salvo pacto expreso. La cancelación puede realizarse en cualquier momento con un preaviso mínimo de 15 días. Al finalizar el contrato, el cliente dispondrá de 30 días para exportar sus datos antes de la eliminación definitiva.</p>

      <h2>5. Obligaciones del cliente</h2>
      <ul>
        <li>Facilitar datos veraces y actualizados.</li>
        <li>Custodiar las credenciales de acceso y no compartirlas con terceros no autorizados.</li>
        <li>Usar el Servicio de acuerdo con su finalidad y con la legalidad vigente.</li>
        <li>Abonar los importes en los plazos acordados.</li>
        <li>Cumplir con la normativa de protección de datos respecto a la información que introduzca en la plataforma.</li>
      </ul>

      <h2>6. Obligaciones del prestador</h2>
      <ul>
        <li>Prestar el Servicio en las condiciones pactadas.</li>
        <li>Mantener la disponibilidad del Servicio con un objetivo de <strong>99,9 % de uptime mensual</strong>, exceptuando ventanas de mantenimiento programado.</li>
        <li>Realizar copias de seguridad diarias.</li>
        <li>Aplicar medidas técnicas y organizativas para la protección de los datos.</li>
        <li>Informar con antelación razonable de cambios sustanciales en el Servicio.</li>
      </ul>

      <h2>7. Limitación de responsabilidad</h2>
      <p>A. Izquierdo SL no será responsable de:</p>
      <ul>
        <li>Daños derivados de un uso indebido del Servicio por parte del cliente.</li>
        <li>Fallos de servicios de terceros ajenos a nuestro control (proveedores de internet, datacenters, pasarelas de pago).</li>
        <li>Lucro cesante o daños indirectos derivados del uso o imposibilidad de uso del Servicio.</li>
      </ul>
      <p>En cualquier caso, la responsabilidad máxima acumulada de A. Izquierdo SL frente al cliente se limita al importe equivalente a las cuotas mensuales satisfechas durante los 12 meses anteriores al hecho que origine la reclamación.</p>

      <h2>8. Propiedad intelectual</h2>
      <p>El software, diseño, código fuente, documentación y cualquier elemento del Servicio es propiedad exclusiva de A. Izquierdo SL. La contratación del Servicio otorga al cliente una licencia de uso limitada, no exclusiva y no transferible para utilizar la plataforma durante la vigencia del contrato.</p>
      <p>Los datos introducidos por el cliente en la plataforma son propiedad del cliente, quien concede a A. Izquierdo SL las licencias necesarias para prestar el Servicio.</p>

      <h2>9. Protección de datos</h2>
      <p>El tratamiento de datos personales se rige por nuestra <Link href="/legal/privacidad">Política de Privacidad</Link>. Al contratar el Servicio se suscribirá además un <strong>contrato de encargo del tratamiento</strong> conforme al art. 28 del RGPD.</p>

      <h2>10. Modificación de los términos</h2>
      <p>A. Izquierdo SL podrá modificar estos Términos notificando al cliente con al menos 30 días de antelación. Si el cliente no acepta los cambios, podrá resolver el contrato sin penalización.</p>

      <h2>11. Legislación aplicable y jurisdicción</h2>
      <p>Estos Términos se rigen por la legislación española. Las partes se someten a los Juzgados y Tribunales de Ciudad Real, renunciando expresamente a cualquier otro fuero.</p>
    </div>
  );
}
