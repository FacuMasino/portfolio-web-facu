'use client';
import { type getDictionary } from '@/lib/dictionary';
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';
import { socialLinks } from '@/app/assets';
import { clearForm, disabledElements, sendEmail } from '@/app/utils/helpers';
import { Locale } from '@/i18n.config';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLInputElement;
  btnSend: HTMLButtonElement;
}

interface EmailForm extends HTMLFormElement {
  readonly elements: FormElements;
}

const ContactSection = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['section']['contact'];
  currentLang: Locale;
}) => {
  const [successEmail, setSuccessEmail] = useState(false);
  // Estado que controla si se muestra o no el mensaje de exito
  const [showStatus, setShowStatus] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<EmailForm>) => {
    e.preventDefault();
    // Si se habia mostrado el mensaje de estado, se vuelve a ocultar
    setShowStatus(false);
    setIsSending(true);
    const form = e.currentTarget.elements;
    disabledElements(form, true);
    // crear objeto con los datos
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      lang: currentLang,
    };
    // preparar datos para enviar como JSON
    const JSONData = JSON.stringify(data);
    // intentar enviar email
    let success = await sendEmail(JSONData);
    setSuccessEmail(success);
    setShowStatus(true);
    disabledElements(form, false);
    if (success) clearForm(form); // limpiar campos
    setIsSending(false);
  };

  return (
    <section
      className="my-4 grid gap-4 py-12 md:my-12 md:grid-cols-2 md:py-24"
      id="contact"
    >
      <div className="relative">
        <div className="absolute -bottom-20 -left-[20%] hidden h-72 w-72 animate-blob rounded-full bg-blue-600 opacity-30 blur-xl filter md:block "></div>
        <div className="relative">
          <h5 className="my-2 text-xl font-semibold text-white">
            {dictionary.title}
          </h5>
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
          </div>
        </div>
      </div>
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              id="email"
              required
              className="w-full rounded-lg border border-[#33353F] bg-[#18191E]
                         p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] md:block"
              placeholder={dictionary.placeholders.email}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
            >
              {dictionary.msg}
            </label>
            <textarea
              id="message"
              required
              className="w-full rounded-lg border border-[#33353F] bg-[#18191E]
                         p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] md:block"
              placeholder={dictionary.placeholders.msg}
            />
          </div>
          <button
            id="btnSend"
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-600"
          >
            {isSending ? dictionary.sending : dictionary.btnSend}
          </button>
          {successEmail && showStatus ? (
            <p className="mt-2 animate-fadeOut text-sm text-green-500">
              {dictionary.successMsg}
            </p>
          ) : showStatus ? (
            <p className="mt-2 text-sm text-red-400">{dictionary.errorMsg}</p>
          ) : (
            ''
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
