// Kuratert utvalg av eiendomsbildene, gruppert per seksjon.
// Astro bundler kun bildene som importeres her — resten av biblioteket i
// src/images/ blir liggende tilgjengelig for senere bruk.
import type { ImageMetadata } from 'astro';
import type { UIKey } from '../i18n/ui';

import hero from '../images/namdalen.webp';

import exterior from '../images/namdalen_49.webp';
import facade from '../images/namdalen_21.webp';
import livingroom from '../images/namdalen_40.webp';
import woodstove from '../images/namdalen_45.webp';
import kitchen from '../images/namdalen_26.webp';
import bathroom from '../images/namdalen_29.webp';
import bedroom from '../images/namdalen_32.webp';
import dining from '../images/namdalen_39.webp';

import namsenPano from '../images/namdalen_4.webp';
import namsenValley from '../images/namdalen_6.webp';
import namsenView from '../images/namdalen_15.webp';
import creek from '../images/namdalen_33.webp';
import namsenChurch from '../images/namdalen_2.webp';

import setting from '../images/namdalen_1.webp';
import winter from '../images/namdalen_8.webp';
import sunrise from '../images/namdalen_7.webp';
import deer from '../images/namdalen_13.webp';

import plan1 from '../images/plan1.jpg';
import plan2 from '../images/plan2.jpg';

export interface Photo {
  src: ImageMetadata;
  cap: UIKey;
}

export const heroPhoto: ImageMetadata = hero;

export const propertyPhotos: Photo[] = [
  { src: exterior, cap: 'cap.exterior' },
  { src: facade, cap: 'cap.facade' },
  { src: livingroom, cap: 'cap.livingroom' },
  { src: kitchen, cap: 'cap.kitchen' },
  { src: bathroom, cap: 'cap.bathroom' },
  { src: bedroom, cap: 'cap.bedroom' },
  { src: woodstove, cap: 'cap.woodstove' },
  { src: dining, cap: 'cap.dining' },
];

export const fishingPhotos: Photo[] = [
  { src: namsenPano, cap: 'cap.namsen_pano' },
  { src: namsenValley, cap: 'cap.namsen_valley' },
  { src: namsenView, cap: 'cap.namsen_view' },
  { src: creek, cap: 'cap.creek' },
  { src: namsenChurch, cap: 'cap.namsen_church' },
];

export const areaPhotos: Photo[] = [
  { src: setting, cap: 'cap.setting' },
  { src: winter, cap: 'cap.winter' },
  { src: sunrise, cap: 'cap.sunrise' },
  { src: deer, cap: 'cap.deer' },
];

export const floorPlanPhotos: Photo[] = [
  { src: plan1, cap: 'cap.plan1' },
  { src: plan2, cap: 'cap.plan2' },
];
