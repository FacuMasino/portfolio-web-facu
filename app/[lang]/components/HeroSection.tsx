import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';

const HeroSection = async ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const {
    section: { home },
  } = dictionary;

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {home.title + ' '}
            </span>
            Facu.
          </h1>
          <p className="mb-6 text-base text-[#c2c2c2] sm:text-lg lg:text-xl">
            {home.description}
          </p>
          <div>
            <button className="w-full rounded-full bg-white px-6 py-3 font-bold text-black hover:bg-slate-200 sm:w-fit">
              {home.btnContact}
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="h-[240px] w-[240px] lg:h-[300px] lg:w-[300px]">
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
