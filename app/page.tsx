import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Cpu,
  Award,
  Clock,
  Building,
  Zap,
  Target,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-blue-600">OAR S.A.</div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Contáctenos
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Optimización Profesional de
                <span className="text-blue-600 block">
                  Software Empresarial
                </span>
                En El Salvador
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos OAR S.A., una empresa tecnológica salvadoreña
                especializada en mejorar el rendimiento, escalabilidad y
                estabilidad de sistemas existentes. Transformamos software para
                que funcione mejor, más rápido y de forma sostenible.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to- flex items-center justify-center">
              <Image
                src="img.webp"
                alt="OAR S.A. - Optimizamos el presente, escalamos tu futuro"
                width={500}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section id="nosotros" className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Sobre OAR S.A.</h2>
              <p className="mb-4">
                Somos una empresa tecnológica salvadoreña que nació con el
                objetivo de ayudar a las PYMES a superar los desafíos digitales
                que afectan su productividad, como sistemas lentos, estructuras
                obsoletas o falta de escalabilidad.
              </p>
              <p className="mb-4">
                A diferencia de muchas empresas que solo crean software,
                nosotros lo transformamos para que funcione mejor, más rápido y
                de forma sostenible. Nos especializamos en la optimización de
                software empresarial existente.
              </p>
               <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestras tecnologias:
              </p>
              <li> ASP.NET </li>
              <li> React.js </li>
              <li> Angular </li>
              <li> Next.js </li>
              <li> Node.js</li>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">
                ¿Por Qué Elegir OAR S.A.?
              </h2>
              <p className="text-gray-500 mb-6">
                Nuestra experiencia en el mercado salvadoreño y nuestro enfoque
                especializado en optimización nos permite ofrecer soluciones
                efectivas y medibles para las PYMES.
              </p>
             
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enfoque en PYMES</h3>
                    <p className="text-sm text-gray-500">
                      Entendemos las necesidades específicas de las pequeñas y
                      medianas empresas salvadoreñas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Resultados Medibles</h3>
                    <p className="text-sm text-gray-500">
                      Ofrecemos mejoras cuantificables en rendimiento, velocidad
                      y estabilidad de sistemas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experiencia Local</h3>
                    <p className="text-sm text-gray-500">
                      Conocimiento profundo del mercado tecnológico y
                      empresarial de El Salvador.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Servicios Especializados
              <span className="block text-blue-600">Para Su Empresa</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para optimizar su software
              empresarial y mejorar la productividad de su organización.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Evaluación y Diagnóstico de Arquitectura de Software
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Análisis de la arquitectura actual del sistema,
                detección de problemas y propuesta de mejoras.
              </li>
              <li>Entrega: Informe técnico + plan de acción.</li>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Refactorización y Optimización de Código
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Mejora de código fuente para mayor eficiencia,
                modularidad y mantenibilidad.
              </li>
              <li>Entrega: Código optimizado + documentación.</li>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Diseño e Implementación de Arquitecturas Escalables
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Diseño técnico + implementación de arquitectura
                moderna adaptada al negocio.
              </li>
              <li>
                Entrega: Documento con diagramas + asesoría + implementación.
              </li>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Auditoría de Código Fuente
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Revisión de código para detectar errores, cuellos
                de botella y malas prácticas.
              </li>
              <li>
                Entrega: Reporte detallado con hallazgos y recomendaciones.
              </li>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Implementación de Patrones de Diseño y Buenas Prácticas
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Reestructuración del código aplicando patrones
                (MVC, Factory, Singleton, etc.).
              </li>
              <li>Entrega: Código actualizado + documentación técnica.</li>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Automatización de Pruebas
              </h3>
              <li className="text-gray-500 mb-6">
                Descripción: Desarrollo de scripts de pruebas para garantizar la
                funcionalidad y estabilidad del sistema.
              </li>
              <li>Entrega: Suite de pruebas automatizadas + informe.</li>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Optimizamos el Presente, Escalamos tu Futuro
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Transforme su software empresarial con las mejores prácticas y
              tecnologías modernas
            </p>
          </div>
        </section>
      </main>

      <footer id="contacto" className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">OAR S.A.</h3>
              <p className="text-slate-300 mb-4">
                Empresa tecnológica salvadoreña especializada en optimización de
                software empresarial.
              </p>
              <p className="text-sm text-blue-300 font-medium">
                "Optimizamos el presente, escalamos tu futuro"
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contáctenos</h3>
              <p className="text-slate-300 mb-2">Email: info@oar.com.sv</p>
              <p className="text-slate-300 mb-2">Teléfono: +503 24473686</p>
              <p className="text-slate-300">Santa Ana, El Salvador</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>© 2025 OAR S.A. Todos los derechos reservados. | El Salvador</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
