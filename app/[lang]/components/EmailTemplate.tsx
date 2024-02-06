import * as React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

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
    <div>
      <h1>
        {dictionary.greeting} {firstName}!
      </h1>
      <p>{dictionary.p1}</p>
      <p>{dictionary.p2}</p>
      <p>{message}</p>
      <p>{dictionary.p3}</p>
      <br />
      <p>
        <i>Facundo Masino.</i>
      </p>
    </div>
  );
};
