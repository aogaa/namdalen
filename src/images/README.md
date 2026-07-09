# Bilder

Her ligger hele bildebiblioteket (`namdalen*.webp`). Det **kuraterte utvalget**
som vises på siden er definert i [`src/data/photos.ts`](../data/photos.ts) —
kun bildene som importeres der blir optimalisert og lagt i det ferdige bygget.

## Bytte ut / legge til bilder

1. Legg nye `.webp`/`.jpg` her.
2. Importer dem i `src/data/photos.ts` og legg dem i riktig gruppe
   (`propertyPhotos`, `fishingPhotos`, `areaPhotos`) med en `cap`-nøkkel.
3. Legg til bildeteksten (`cap.*`) på alle fire språk i
   [`src/i18n/ui.ts`](../i18n/ui.ts).

Astros `<Image>` (via `Figure.astro`) lager responsive WebP/AVIF automatisk —
originalene kan derfor være i full oppløsning.
