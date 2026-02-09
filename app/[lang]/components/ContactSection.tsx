'use client';
import { type getDictionary } from '@/lib/dictionary';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InboxIcon } from '@heroicons/react/24/solid';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';
import { socialLinks } from '@/app/assets';
import { Locale } from '@/i18n.config';

const ContactSection = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['section']['contact'];
  currentLang: Locale;
}) => {
  return (
    <section
      className="my-4 grid gap-4 py-12 md:my-12 md:grid-cols-2 md:py-24"
      id="contact"
    >
      <div className="relative">
        <div className="absolute -bottom-20 -left-[20%] hidden h-72 w-72 animate-blob rounded-full bg-blue-600 opacity-30 blur-xl filter md:block "></div>
        <div className="relative">
          <h3 className="my-2 text-xl font-semibold text-white">
            {dictionary.title}
          </h3>
          <p className="mb-4 max-w-md text-[#c2c2c2]">
            {dictionary.description}
          </p>
          <div className="flex flex-row gap-2">
            <Link
              href={socialLinks.github}
              target="_blank"
              className="transition delay-100 duration-200 ease-in-out hover:scale-105"
            >
              <Image alt="GitHub" src={githubIcon} width={32} height={32} />
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="transition delay-100 duration-200 ease-in-out hover:scale-105"
            >
              <Image alt="LinkedIn" src={linkedinIcon} width={32} height={32} />
            </Link>
            <Link
              href="mailto:info@facundomasino.com"
              className="transition delay-100 duration-200 ease-in-out hover:scale-105"
            >
              <InboxIcon className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
