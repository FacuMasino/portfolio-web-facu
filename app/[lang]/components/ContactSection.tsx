import { type getDictionary } from '@/lib/dictionary';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';
import { socialLinks } from '@/app/assets';

const ContactSection = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['section']['contact'];
}) => {
  return (
    <section className="my-12 grid gap-4 py-24 md:grid-cols-2">
      <div className="relative">
        <div className="animate-blob absolute -bottom-20 -left-[20%] hidden h-72 w-72 rounded-full bg-blue-600 opacity-30 blur-xl filter md:block "></div>
        <div className="relative">
          <h5 className="my-2 text-xl font-semibold text-white">
            {dictionary.title}
          </h5>
          <p className="mb-4 max-w-md text-[#c2c2c2]">
            {dictionary.description}
          </p>
          <div className="flex flex-row gap-2">
            <Link href={socialLinks.github} target="_blank">
              <Image alt="GitHub" src={githubIcon} width={32} height={32} />
            </Link>
            <Link href={socialLinks.linkedin} target="_blank">
              <Image alt="LinkedIn" src={linkedinIcon} width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="md:w-1/2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                {dictionary.name}
              </label>
              <input
                type="text"
                id="name"
                required
                className="block w-full rounded-lg border border-[#33353F]
               bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder={dictionary.placeholders.name}
              />
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                {dictionary.subject}
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full rounded-lg border border-[#33353F] bg-[#18191E]
                         p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] md:block"
                placeholder={dictionary.placeholders.subject}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-lg border border-[#33353F] bg-[#18191E]
                         p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] md:block"
              placeholder={dictionary.placeholders.email}
            />
          </div>
          <div>
            <label
              htmlFor="body"
              className="mb-2 block text-sm font-medium text-white"
            >
              {dictionary.msg}
            </label>
            <textarea
              id="body"
              required
              className="w-full rounded-lg border border-[#33353F] bg-[#18191E]
                         p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] md:block"
              placeholder={dictionary.placeholders.msg}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-600"
          >
            {dictionary.btnSend}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
