import React from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

const HeroSection = async ({ lang }: { lang: Locale }) => {
  const {
    section: { home },
  } = await getDictionary(lang);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {home.title + " "}
            </span>
            Facu.
          </h1>
          <p className="text-[#c2c2c2] text-base sm:text-lg lg:text-xl mb-6">
            {home.description}
          </p>
          <div>
            <button className="bg-white w-full sm:w-fit hover:bg-slate-200 rounded-full px-6 py-3 text-black font-bold">
              {home.btnContact}
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="w-[240px] h-[240px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/hero_profile_color.png"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
