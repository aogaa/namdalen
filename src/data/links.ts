// Kuratert utvalg av eksterne ressurser om Namsen, regionen og naturen.
// Bevisst utelatt: kommersielle fiskelodge/reisebyråer som konkurrerer med
// eiendommens verdiløfte (egen base ved elva).
import type { Lang, UIKey } from '../i18n/ui';

type Url = string | Partial<Record<Lang, string>>;

export interface LinkItem {
  label: string;
  url: Url;
}
export interface LinkGroup {
  titleKey: UIKey;
  items: LinkItem[];
}

/** Velg språkriktig URL med fornuftig fallback. */
export function resolveUrl(url: Url, lang: Lang): string {
  if (typeof url === 'string') return url;
  return url[lang] ?? url.en ?? url.no ?? Object.values(url)[0]!;
}

export const linkGroups: LinkGroup[] = [
  {
    titleKey: 'links.region',
    items: [
      {
        label: 'Visit Namdalen',
        url: {
          no: 'https://visitnamdalen.com/',
          en: 'https://en.visitnamdalen.com/',
          de: 'https://en.visitnamdalen.com/',
          nl: 'https://en.visitnamdalen.com/',
        },
      },
      {
        label: 'Visit Norway – Namdalen',
        url: {
          no: 'https://www.visitnorway.com/places-to-go/trondelag/namdalen/',
          en: 'https://www.visitnorway.com/places-to-go/trondelag/namdalen/',
          de: 'https://www.visitnorway.de/',
          nl: 'https://www.visitnorway.nl/',
        },
      },
      { label: 'Trøndelag – Namdalen', url: 'https://trondelag.com/en/namdalen/' },
    ],
  },
  {
    titleKey: 'links.fishing',
    items: [
      {
        label: 'Namsenvassdraget – Norske Lakseelver',
        url: 'https://lakseelver.no/nb/elver/namsenvassdraget',
      },
      {
        label: 'Elveguiden – Namsenvassdraget',
        url: 'https://elveguiden.no/no/elv/namsenvassdraget',
      },
      { label: 'FishNamsen', url: 'https://fishnamsen.no/' },
    ],
  },
  {
    titleKey: 'links.nature',
    items: [
      {
        label: 'Børgefjell nasjonalpark',
        url: {
          no: 'https://borgefjellnasjonalpark.no/',
          en: 'https://borgefjellnasjonalpark.no/en/',
          de: 'https://borgefjellnasjonalpark.no/en/',
          nl: 'https://borgefjellnasjonalpark.no/en/',
        },
      },
      {
        label: 'Lierne nasjonalpark',
        url: 'https://www.norgesnasjonalparker.no/en/nationalparks/lierne/',
      },
      { label: 'Namdalskysten', url: 'https://en.visitnamdalen.com/namdalen-coast/' },
    ],
  },
];
