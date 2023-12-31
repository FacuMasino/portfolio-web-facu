import { Locale } from "@/i18n.config";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { getDictionary } from "@/lib/dictionary";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

type Menu = {
  [key: string]: string;
};

export default async function Home({ params }: { params: { lang: Locale } }) {
  // Titulos de menu traducidos para usar en client component
  const { menu } = (await getDictionary(params.lang)) as { menu: Menu };
  const {
    section: { about },
  } = await getDictionary(params.lang);
  const {
    section: { projects },
  } = await getDictionary(params.lang);

  return (
    <main className="flex min-h-screen flex-col bg-[#131313]">
      <Navbar menuTitles={menu} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection lang={params.lang} />
        <AboutSection about={about} />
        <ProjectsSection projects={projects} />
      </div>
    </main>
  );
}
