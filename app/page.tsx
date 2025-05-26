import Image from "next/image"
import Link from "next/link"
import { Play, Cpu, Award, Clock, Building, Zap, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-blue-600">OAR S.A.</div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contáctenos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Optimización Profesional de
                <span className="text-blue-600 block">Software Empresarial</span>
                En El Salvador
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos OAR S.A., una empresa tecnológica salvadoreña especializada en mejorar el rendimiento,
                escalabilidad y estabilidad de sistemas existentes. Transformamos software para que funcione mejor, más
                rápido y de forma sostenible.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-500">Años de experiencia</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-500">Proyectos optimizados</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-500">PYMES beneficiadas</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <Image
                src="/images/oar-logo.png"
                alt="OAR S.A. - Optimizamos el presente, escalamos tu futuro"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-500 p-6 rounded-lg text-white">
              <div className="mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimización</h3>
              <p className="text-sm">
                Mejoramos el rendimiento de sistemas existentes aplicando buenas prácticas de desarrollo.
              </p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg text-white">
              <div className="mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Auditorías Técnicas</h3>
              <p className="text-sm">
                Realizamos análisis profundos para identificar cuellos de botella y oportunidades de mejora.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg text-white">
              <div className="mb-4">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Refactorización</h3>
              <p className="text-sm">Reestructuramos código legacy para mejorar su mantenibilidad y escalabilidad.</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg text-white">
              <div className="mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Arquitecturas Modernas</h3>
              <p className="text-sm">
                Implementamos arquitecturas escalables y sostenibles para el crecimiento empresarial.
              </p>
            </div>
          </div>
        </section>

        <section id="nosotros" className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Sobre OAR S.A.</h2>
              <p className="mb-4">
                Somos una empresa tecnológica salvadoreña que nació con el objetivo de ayudar a las PYMES a superar los
                desafíos digitales que afectan su productividad, como sistemas lentos, estructuras obsoletas o falta de
                escalabilidad.
              </p>
              <p className="mb-4">
                A diferencia de muchas empresas que solo crean software, nosotros lo transformamos para que funcione
                mejor, más rápido y de forma sostenible. Nos especializamos en la optimización de software empresarial
                existente.
              </p>
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden mt-6 bg-blue-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="rounded-full bg-blue-800 p-3 text-white mx-auto mb-4">
                      <Play className="h-8 w-8" />
                    </div>
                    <p className="text-sm">Video corporativo</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded transition-colors">
                Conocer Más
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">¿Por Qué Elegir OAR S.A.?</h2>
              <p className="text-gray-500 mb-6">
                Nuestra experiencia en el mercado salvadoreño y nuestro enfoque especializado en optimización nos
                permite ofrecer soluciones efectivas y medibles para las PYMES.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enfoque en PYMES</h3>
                    <p className="text-sm text-gray-500">
                      Entendemos las necesidades específicas de las pequeñas y medianas empresas salvadoreñas.
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
                      Ofrecemos mejoras cuantificables en rendimiento, velocidad y estabilidad de sistemas.
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
                      Conocimiento profundo del mercado tecnológico y empresarial de El Salvador.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Nuestros Aliados Tecnológicos</h2>
          <p className="text-gray-500 mb-8">
            Trabajamos con las mejores tecnologías y plataformas para garantizar soluciones de calidad mundial.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=60&width=120" alt="Microsoft" width={120} height={60} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=60&width=120" alt="AWS" width={120} height={60} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=60&width=120" alt="Google Cloud" width={120} height={60} />
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
              Ofrecemos soluciones integrales para optimizar su software empresarial y mejorar la productividad de su
              organización.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Optimización de Rendimiento</h3>
              <p className="text-gray-500 mb-6">
                Mejoramos la velocidad y eficiencia de sus sistemas existentes mediante técnicas avanzadas de
                optimización y buenas prácticas.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                Más Información
              </button>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Auditorías Técnicas</h3>
              <p className="text-gray-500 mb-6">
                Realizamos análisis exhaustivos de su infraestructura tecnológica para identificar oportunidades de
                mejora y optimización.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                Más Información
              </button>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modernización de Arquitectura</h3>
              <p className="text-gray-500 mb-6">
                Transformamos arquitecturas obsoletas en sistemas modernos, escalables y mantenibles para el crecimiento
                futuro.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                Más Información
              </button>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Optimizamos el Presente, Escalamos tu Futuro</h2>
            <p className="text-xl mb-8 text-blue-100">
              Transforme su software empresarial con las mejores prácticas y tecnologías modernas
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-lg font-semibold transition-colors">
              Solicitar Consulta Gratuita
            </button>
          </div>
        </section>
      </main>

      <footer id="contacto" className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">OAR S.A.</h3>
              <p className="text-slate-300 mb-4">
                Empresa tecnológica salvadoreña especializada en optimización de software empresarial.
              </p>
              <p className="text-sm text-blue-300 font-medium">"Optimizamos el presente, escalamos tu futuro"</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contáctenos</h3>
              <p className="text-slate-300 mb-2">Email: info@oar.com.sv</p>
              <p className="text-slate-300 mb-2">Teléfono: +503 2XXX-XXXX</p>
              <p className="text-slate-300">San Salvador, El Salvador</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Manténgase Informado</h3>
              <p className="text-slate-300 mb-4">
                Reciba noticias sobre optimización de software y tendencias tecnológicas.
              </p>
              <div className="flex">
                <input type="email" placeholder="Su email" className="px-4 py-2 w-full text-black rounded-l" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>© 2024 OAR S.A. Todos los derechos reservados. | El Salvador</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
