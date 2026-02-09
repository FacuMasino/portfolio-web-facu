import { Locale } from '@/i18n.config';
import HeroSection from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { getDictionary } from '@/lib/dictionary';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

type Menu = {
  [key: string]: string;
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  // Titulos de menu traducidos para usar en client component
  const dictionary = await getDictionary(lang as Locale);
  const { menu } = dictionary;

  return (
    <main className="flex min-h-screen flex-col bg-[#131313]">
      <Navbar menuTitles={menu} currentLang={lang as Locale} />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection dictionary={dictionary} />
        <AboutSection about={dictionary.section.about} />
        <ProjectsSection projects={dictionary.section.projects} />
        <ContactSection
          dictionary={dictionary.section.contact}
          currentLang={lang as Locale}
        />
      </div>
      <Footer />
    </main>
  );
}
