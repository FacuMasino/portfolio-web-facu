import * as React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import {
  Html,
  Head,
  Body,
  Heading,
  Text,
  Container,
  Tailwind,
  Preview,
} from '@react-email/components';

export const EmailTemplate = async ({
  firstName,
  message,
  currentLang,
}: {
  firstName: string;
  message: string;
  currentLang: Locale;
}) => {
  const dictionary = (await getDictionary(currentLang)).section.email;

  return (
    <Html>
      <Preview>{firstName + ' ' + dictionary.p2}</Preview>
      <Tailwind>
        <head></head>
        <Head />
        <Body className="mx-auto my-auto w-[450px] bg-white font-sans">
          <Container className="mx-auto max-w-4xl rounded-3xl bg-[#131313] shadow-xl">
            <Text className="mx-4 mt-4 text-2xl font-semibold text-white">
              {'<FM/>'}
            </Text>
            <div className="max-w-xl p-8 text-center text-[#c2c2c2] lg:max-w-3xl lg:p-12">
              <Heading className="text-2xl text-white">
                {dictionary.greeting} {firstName}!
              </Heading>
              <Text className="text-[14px] leading-[24px]">
                {dictionary.p1}
              </Text>
              <Text>{dictionary.p2}</Text>
              <Text className="sm:text-xl">
                <em>{'"' + message + '"'}</em>
              </Text>
              <Text>{dictionary.p3}</Text>
            </div>
          </Container>
          <div className="mx-auto my-auto mt-6">
            <Text className="mt-4 text-center text-sm text-black">
              <i>Facundo Masino</i>
              {' | '}
              <a
                href="https://facundomasino.com"
                className="text-blue-600 underline"
              >
                www.facundomasino.com
              </a>
            </Text>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
};
