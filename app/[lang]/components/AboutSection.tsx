'use client';
import React, { useState, useTransition } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import TabButton from './TabButton';

type AboutSections = {
  title: string;
  description: string[];
};

type AboutLang = {
  title: string;
  description: string;
  sections: AboutSections[];
};

const AboutSection = ({ about }: { about: AboutLang }) => {
  const [tab, setTab] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: number) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about">
      <div className="items-center gap-8 px-4 py-8 text-white sm:py-16 md:grid md:grid-cols-2 xl:gap-16">
        <Image
          className="rounded"
          src="/images/aboutimg.jpeg"
          alt="hero image"
          width={500}
          height={500}
        />
        <div className="mt-8 flex h-full flex-col text-left md:mt-0">
          <h2 className="pb-4 text-2xl font-bold md:text-3xl">{about.title}</h2>
          <p className="text-base lg:text-lg">{about.description}</p>
          <div className="mt-8 flex flex-row flex-wrap justify-start gap-2 md:flex-nowrap md:gap-0">
            {about.sections.map((val, i) => (
              <TabButton
                key={i}
                selectTab={() => handleTabChange(i)}
                isActive={tab === i}
              >
                {val.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-inside list-disc">
              {about.sections[tab].description.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
