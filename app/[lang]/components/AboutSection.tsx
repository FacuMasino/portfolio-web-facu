"use client";
import React, { useState, useTransition } from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import TabButton from "./TabButton";

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
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          className="rounded"
          src="/images/aboutimg.jpeg"
          alt="hero image"
          width={500}
          height={500}
        />
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-3xl font-bold pb-4">{about.title}</h2>
          <p className="text-base lg:text-lg">{about.description}</p>
          <div className="flex flex-row md:gap-0 gap-2 md:flex-nowrap flex-wrap mt-8 justify-start">
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
            <ul className="list-disc list-inside">
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
