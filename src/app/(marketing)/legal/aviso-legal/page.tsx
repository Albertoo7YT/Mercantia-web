import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal — Mercantia',
  description: 'Información legal requerida por la LSSI-CE sobre el titular de Mercantia.',
};

export default function AvisoLegalPage() {
  return (
    <div className="legal-content">
      <h1>Aviso Legal</h1>
      <span className="legal-updated">Última actualización: 24 de abril de 2026</span>

      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos identificativos del titular del sitio web <strong>mercantia.pro</strong>.</p>

      <h2>1. Titular del sitio web</h2>
      <div className="legal-table-box">
        <p><strong>Razón social:</strong> A. Izquierdo SL</p>
        <p><strong>CIF:</strong> B13309356</p>
        <p><strong>Domicilio social:</strong> C/ La Mancha, 6. Socuéllamos (Ciudad Real), CP 13630, España</p>
        <p><strong>Correo electrónico:</strong> <a href="mailto:hola@mercantia.pro">hola@mercantia.pro</a></p>
        <p><strong>Marca comercial:</strong> Mercantia</p>
      </div>

      <h2>2. Objeto</h2>
      <p>El presente Aviso Legal regula el acceso y uso del sitio web alojado en el dominio mercantia.pro (en adelante, &quot;el Sitio Web&quot;), cuya titularidad corresponde a A. Izquierdo SL. El acceso al Sitio Web es gratuito e implica la aceptación plena de las condiciones aquí expuestas.</p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>Todos los contenidos del Sitio Web (textos, imágenes, código, logotipos, marcas, bases de datos, estructura, diseño gráfico) son propiedad exclusiva de A. Izquierdo SL o de terceros que han autorizado su uso, y están protegidos por la normativa vigente en materia de propiedad intelectual e industrial.</p>
      <p>Queda prohibida cualquier reproducción, distribución, transformación, comunicación pública o puesta a disposición de los contenidos sin autorización expresa y por escrito del titular.</p>

      <h2>4. Condiciones de uso</h2>
      <p>El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, este Aviso Legal, la moral y el orden público. En particular, se compromete a:</p>
      <ul>
        <li>No reproducir, copiar, distribuir ni permitir el acceso del público a los contenidos mediante cualquier modalidad de comunicación pública.</li>
        <li>No modificar ni transformar los contenidos.</li>
        <li>No utilizar los contenidos y servicios con fines o efectos ilícitos, contrarios a la moral, lesivos de los derechos e intereses de terceros o que de cualquier forma puedan dañar, inutilizar o deteriorar el Sitio Web.</li>
        <li>No utilizar mecanismos automáticos de recolección masiva de datos (scraping).</li>
      </ul>

      <h2>5. Exclusión de garantías y responsabilidad</h2>
      <p>A. Izquierdo SL no garantiza la disponibilidad continua del Sitio Web, si bien realizará las mejores esfuerzos razonables para mantenerlo operativo. No se hace responsable de los daños y perjuicios que pudieran derivarse de:</p>
      <ul>
        <li>Interferencias, interrupciones, fallos, omisiones, averías telefónicas, retrasos, bloqueos o desconexiones en el funcionamiento del sistema electrónico, motivadas por causas ajenas.</li>
        <li>Intromisiones ilegítimas mediante el uso de programas maliciosos de cualquier tipo.</li>
        <li>Uso indebido o inadecuado del Sitio Web.</li>
      </ul>

      <h2>6. Enlaces a terceros</h2>
      <p>El Sitio Web puede contener enlaces a sitios web de terceros. A. Izquierdo SL no se responsabiliza del contenido ni de la disponibilidad de dichos sitios, ni respalda necesariamente los servicios u opiniones que en ellos se expresen.</p>

      <h2>7. Modificación del aviso legal</h2>
      <p>A. Izquierdo SL se reserva el derecho a efectuar sin previo aviso las modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios como la forma en que estos aparezcan presentados.</p>

      <h2>8. Legislación aplicable y jurisdicción</h2>
      <p>Las presentes condiciones se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Ciudad Real, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
    </div>
  );
}
