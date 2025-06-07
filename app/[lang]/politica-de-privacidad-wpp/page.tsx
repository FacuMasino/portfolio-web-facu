import { Locale } from '@/i18n.config';
import { Navbar } from '../components/Navbar';
import { getDictionary } from '@/lib/dictionary';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Facundo Masino',
  description: 'Política de privacidad del servicio de mensajería WhatsApp',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PoliticaPrivacidad({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  const { menu } = dictionary;

  return (
    <main className="flex min-h-screen flex-col bg-[#131313]">
      <Navbar menuTitles={menu} />
      <div className="container mx-auto mt-24 px-12 py-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-white">
            Política de Privacidad
          </h1>

          <div className="space-y-6 leading-relaxed text-gray-300">
            <p className="text-sm text-gray-400">
              Última actualización: 6 de junio de 2025
            </p>

            <p>
              Este servicio de mensajería utiliza la API de WhatsApp Cloud
              proporcionada por Meta para facilitar la comunicación entre un
              sistema de prueba y sus usuarios autorizados.
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Recolección de datos
              </h2>
              <p>
                No recolectamos, almacenamos ni compartimos información personal
                identificable de los usuarios. La única información que se
                procesa es la necesaria para establecer la comunicación a través
                de WhatsApp, como el número de teléfono, exclusivamente mientras
                dure la conversación.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Uso de la información
              </h2>
              <p>
                La información proporcionada por el usuario será utilizada
                únicamente con fines de prueba y desarrollo interno, sin fines
                comerciales ni de marketing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. Almacenamiento de datos
              </h2>
              <p>
                No se almacena información sensible ni conversaciones en bases
                de datos externas. Toda la información se mantiene dentro del
                entorno seguro proporcionado por Meta a través de WhatsApp Cloud
                API.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. Terceros
              </h2>
              <p>
                No compartimos datos con terceros bajo ninguna circunstancia.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Contacto
              </h2>
              <p>
                Si tenés preguntas sobre esta política, podés comunicarte con:
              </p>
              <div className="ml-4 mt-4">
                <p className="font-medium text-white">
                  Responsable del tratamiento de datos:
                </p>
                <p>Facundo Masino</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
