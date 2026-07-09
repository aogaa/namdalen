# Bilder

Legg høyoppløste foto av huset, tomta, utsikten og elva her.

Når ekte foto er på plass, bytt ut `<Placeholder />` i
`src/components/Home.astro` med Astros optimaliserte bilde:

```astro
---
import { Image } from 'astro:assets';
import hus from '../images/hus.jpg';
---
<Image src={hus} alt="..." widths={[480, 960, 1600]} />
```

Da genereres responsive WebP/AVIF automatisk.
