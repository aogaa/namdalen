import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Returnerer en oversetter-funksjon for gitt språk, med fallback til norsk. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Sti-prefiks per språk: '' for norsk (rot), '/en' osv. for de andre. */
export function localePath(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** hreflang-koder for <link rel="alternate">. */
export const hreflang: Record<Lang, string> = {
  no: 'no',
  en: 'en',
  de: 'de',
  nl: 'nl',
};
