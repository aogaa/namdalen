# CLAUDE.md — namsen.aogaa.no

Prosjektveiledning for Claude Code. Les denne før du gjør endringer.

## 1. Hva dette er

En statisk, elegant salgsside for en **eiendom i Overhalla kommune** (Namdalen, Trøndelag).
Målet er å **selge eiendommen** ved å presentere den som en base for verdensklasses
laksefiske i **Namsen** ("Dronningen av elvene").

- **Domene:** `namsen.aogaa.no`
- **Repo:** https://github.com/aogaa/namdalen
- **Hosting:** GitHub Pages (statisk, ingen backend)
- **Status:** Astro-skjelett bygget. Ekte foto er kuratert og koblet inn
  (se `src/data/photos.ts`). Faktatekst, pris og kontaktdetaljer er fortsatt
  plassholdere merket med `[klammer]`.

## 2. Målgruppe

Fiskere med god økonomi i **Storbritannia, Tyskland og Nederland**. De kjenner
gjerne til atlantisk laksefiske og leter etter en base/feriehus i et førsteklasses
fiskevassdrag. Tone: rolig, eksklusiv, tillitvekkende — ikke masete "salg".

## 3. Prioriteringer (i rekkefølge)

1. **Bildene selger huset.** Store, raske, vakre foto av hus, tomt, utsikt og elva.
   Alt annet er sekundært.
2. **Fisket er kroken.** Formidle Namsen: storlaks-historikk, sonene, sesong, og
   at eiendommen er en praktisk base for fisketurer.
3. **Elegant og enkelt.** Rolig typografi, god luft, få men gjennomtenkte seksjoner.
   Rask lasting (viktig for besøkende i UK/DE/NL).
4. **Lett å ta kontakt.** Tydelig e-post + telefon i footer og egen kontaktseksjon.

## 4. Språk (i18n)

Fire språk, likestilt innhold:

| Språk       | Sti      |
|-------------|----------|
| Norsk       | `/`      |
| Engelsk     | `/en/`   |
| Tysk        | `/de/`   |
| Nederlandsk | `/nl/`   |

- Norsk (`/`) er standard/rot.
- Én kilde per språk; del komponenter og layout, ikke dupliser markup.
- Synlig språkvelger i header.
- Sett `lang`-attributt og `hreflang`-lenker riktig per side (SEO for tre land).

## 5. Teknologi

**Astro** (statisk output, null JS by default). Valgt for innebygd i18n-ruting,
førsteklasses bildeoptimalisering, og enkel GitHub Pages-deploy.

- Bruk Astros `<Image>`/`<Picture>` for alle foto → responsive WebP/AVIF.
- Ingen tung klient-JS. Legg bare til interaktivitet (f.eks. galleri/lightbox) der
  det gir tydelig verdi, og hold det lett.
- Ingen backend. Kontaktskjema er bevisst utelatt — bruk e-post + telefon.

### Kommandoer
```bash
npm install        # installer avhengigheter
npm run dev        # lokal utvikling
npm run build      # bygg til ./dist
npm run preview    # forhåndsvis produksjonsbygg
```

## 6. Innholdsstruktur (planlagt)

En rolig one-pager per språk, eventuelt med egne undersider senere:

1. **Hero** — signaturfoto + kort verdiløfte ("Your base on the Namsen").
2. **Eiendommen** — bildegalleri, fakta (størrelse, rom, tomt, standard), kart.
3. **Fisket i Namsen** — om vassdraget, storlaks, soner, sesong, avstand fra huset.
4. **Området** — Overhalla/Namdalen, reise (nærmeste flyplass, kjøretid), aktiviteter.
5. **Kontakt** — e-post + telefon, selger/megler.

> Faktatekst, pris, bilder og kontaktdetaljer er **plassholdere** til eier leverer
> ekte innhold. Ikke finn på fakta om eiendommen eller pris — merk tydelig som
> `TODO`/placeholder.

## 7. Kontakt

Kontakt via **e-post + telefon** (ingen skjema). Reelle detaljer er TODO;
prosjekteier er `espen@aogaa.no`.

## 8. Deploy (GitHub Pages)

- Egen `CNAME`-fil med `namsen.aogaa.no`.
- Sett `site`/`base` i `astro.config` til domenet (custom domain → `base: '/'`).
- GitHub Actions bygger `dist/` og publiserer til Pages ved push til `main`.
- **Merk:** `namdalen/` skal være sitt eget git-repo (`aogaa/namdalen`). Lokalt
  ligger mappen foreløpig inne i paraply-repoet `C:/codex` — skille den ut som
  eget repo før første push.

## 9. Fakta som må verifiseres før publisering

Ikke publiser før eier har bekreftet. Hentes fra:
- Namsen generelt: https://lakseelver.no/nb/elver/namsenvassdraget
- Fiske/soner: https://fishnamsen.no/

Sjekkliste (alle `TODO` til bekreftet):
- [ ] Pris og eiendomsfakta (areal, rom, tomt, byggeår, standard)
- [ ] Nøyaktig beliggenhet / kart
- [ ] Bilder (høyoppløst, rettighetsklarert)
- [ ] Kontaktperson, e-post, telefon
- [ ] Fiskerettigheter som følger / ikke følger eiendommen (viktig for kjøper!)
- [ ] Reiseinfo (nærmeste flyplass: Trondheim/Namsos, kjøretid)

## 10. Retningslinjer for Claude

- Ikke oppfinn fakta om eiendom, pris eller fiskerettigheter — bruk merkede placeholders.
- Behold alle fire språk i synk når du endrer innhold.
- Prioriter bildekvalitet og lastetid; ikke legg til tunge avhengigheter uten grunn.
- Hold designet rolig og eksklusivt — unngå aggressiv salgsstil.
