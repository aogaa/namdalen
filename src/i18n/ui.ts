// Alle fire språk i én kilde. Del innhold via nøkler; ikke dupliser markup.
// Fakta i [klammer] er PLASSHOLDERE — må bekreftes av eier før publisering.

export const languages = {
  no: 'Norsk',
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'no';

export const ui = {
  no: {
    'site.title': 'Namsen — din base for laksefiske i Namdalen',
    'site.description':
      'Eksklusiv eiendom i Overhalla ved Namsen — dronningen av norske lakseelver. Din faste base for uforglemmelige fisketurer.',

    'nav.property': 'Eiendommen',
    'nav.fishing': 'Fisket',
    'nav.area': 'Området',
    'nav.contact': 'Kontakt',

    'hero.eyebrow': 'Overhalla · Namdalen · Norge',
    'hero.title': 'Din base ved Namsen',
    'hero.subtitle':
      'En eiendom skapt for den som elsker laksefiske — ved en av verdens fremste elver for atlantisk laks.',
    'hero.cta': 'Se eiendommen',
    'hero.cta2': 'Om fisket',

    'property.title': 'Eiendommen',
    'property.lead':
      'Et hjem med plass, ro og nærhet til elva — perfekt som feriebolig og base for fiskesesongen.',
    'property.factsTitle': 'Fakta',
    'property.plansTitle': 'Plantegninger',
    'property.plansLead':
      'Praktisk planløsning over to plan. Klikk på tegningene for større visning.',
    'property.f.type': 'Type',
    'property.f.typeVal': 'Enebolig med sidebygning',
    'property.f.bedrooms': 'Soverom',
    'property.f.bedroomsVal': '4 soverom',
    'property.f.area': 'Bruksareal (BRA)',
    'property.f.areaVal': '109 m² hovedhus · 199 m² inkl. sidebygning',
    'property.f.matrikkel': 'Matrikkel',
    'property.f.matrikkelVal': 'Gnr. 10, bnr. 117, Overhalla',
    'property.f.river': 'Til Namsen',
    'property.f.riverVal': 'ca. 611 m i luftlinje',
    'property.f.airport': 'Til flyplass',
    'property.f.airportVal': 'Namsos ca. 10 min · Trondheim ca. 2,5 t',
    'property.f.location': 'Beliggenhet',
    'property.f.locationVal': 'Bussholdeplass ved siden av · gangavstand til butikk · parkering til flere biler',
    'property.f.price': 'Prisantydning',
    'property.f.priceVal': '€ 250 000',
    'property.galleryNote': 'Bilder legges inn her',

    'fishing.title': 'Fisket i Namsen',
    'fishing.lead': '«Dronningen av elvene» — kjent for storlaks siden 1800-tallet.',
    'fishing.p1':
      'Namsenvassdraget er ett av Norges lengste og mest anerkjente laksevassdrag, med rundt 100 km lakseførende strekning og en lang historie med stor laks. Elva byr på alt fra rolige, brede høler til strie strømpartier — fiske fra båt (harling) og fra land.',
    'fishing.p2':
      'Sesongen strekker seg normalt fra tidlig sommer til utpå høsten. Fra eiendommen når du flere soner på kort tid, slik at du kan følge forholdene og finne det beste fisket dag for dag.',
    'fishing.factHarling': 'Klassisk harling fra båt',
    'fishing.factBig': 'Kjent for storlaks',
    'fishing.factLength': 'Ca. 100 km lakseførende elv',
    'fishing.linksTitle': 'Les mer om Namsen',
    'fishing.disclaimer':
      'Det følger ingen fiskerettigheter med eiendommen. Fiske i Namsen er tilgjengelig for alle gjennom fiskekort og vald hos lokale tilbydere – eiendommen er din komfortable base i kort avstand fra elva.',

    'area.title': 'Området',
    'area.lead': 'Overhalla i Namdalen — trøndersk natur, laks og ro.',
    'area.p1':
      'Overhalla ligger midt i Namdalen, omgitt av skog, jordbrukslandskap og elva. Et rolig og trygt sted, med kort vei til dagligvarer og tjenester.',
    'area.travelTitle': 'Reise hit',
    'area.travel1': 'Namsos lufthavn: ca. 10 minutter med bil',
    'area.travel3': 'Bussholdeplass rett ved eiendommen · gangavstand til butikk',
    'area.mapLink': 'Se beliggenheten i kart',

    'contact.title': 'Interessert?',
    'contact.lead':
      'Ta kontakt for en prat om eiendommen og fisket.',
    'contact.emailLabel': 'E-post',
    'contact.phoneLabel': 'Telefon',
    'contact.email': 'g.tangvald@icloud.com',
    'contact.phone': '+47 986 20 425',
    'contact.person': 'Gjermund Tangvald',
    'contact.personLabel': 'Kontaktperson',

    'footer.tagline': 'Din base for laksefiske ved Namsen.',
    'footer.rights': 'Alle rettigheter forbeholdt.',

    'fishing.galleryTitle': 'Elva',
    'area.seasonsTitle': 'Gjennom årstidene',

    'cap.exterior': 'Eiendommen med uthus og innkjørsel',
    'cap.facade': 'Fasade og inngangsparti',
    'cap.livingroom': 'Lys stue',
    'cap.woodstove': 'Vedovn gir lune kvelder',
    'cap.kitchen': 'Kjøkken med utsikt til jordene',
    'cap.bathroom': 'Bad med frittstående badekar',
    'cap.bedroom': 'Soverom med utsikt til grønt',
    'cap.dining': 'Dekket bord ved vinduet',
    'cap.namsen_pano': 'Namsen speiler fjellene',
    'cap.namsen_valley': 'Elva slynger seg gjennom dalen',
    'cap.namsen_view': 'Utsikt over Namsen',
    'cap.creek': 'Bekk gjennom enga nær huset',
    'cap.namsen_church': 'Elva, jordene og bygdekirka',
    'cap.setting': 'Eiendommen i landskapet',
    'cap.winter': 'Vinterkveld over bygda',
    'cap.sunrise': 'Morgenlys over jordene',
    'cap.deer': 'Rådyr i vinterlandskapet',
    'cap.plan1': 'Første etasje: stue, kjøkken, soverom, bad og terrasse',
    'cap.plan2': 'Andre etasje: tre soverom',

    'nav.explore': 'Utforsk',
    'area.flights': 'Daglige flyavganger fra Amsterdam, London og Frankfurt',
    'area.total':
      'Under 5 timer fra du setter deg på flyet til du sitter foran peisen.',
    'links.title': 'Utforsk Namsen og Namdalen',
    'links.lead': 'Nyttige kilder om elva, regionen og naturen rundt eiendommen.',
    'links.region': 'Region og reiseliv',
    'links.fishing': 'Fisket i Namsen',
    'links.nature': 'Natur og nasjonalparker',
    'lightbox.close': 'Lukk',
  },

  en: {
    'site.title': 'The Namsen — your base for salmon fishing in Namdalen',
    'site.description':
      'An exclusive property in Overhalla by the Namsen — the queen of Norwegian salmon rivers. Your permanent base for unforgettable fishing.',

    'nav.property': 'The property',
    'nav.fishing': 'The fishing',
    'nav.area': 'The area',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Overhalla · Namdalen · Norway',
    'hero.title': 'Your base on the Namsen',
    'hero.subtitle':
      'A property made for those who love salmon fishing — beside one of the world’s finest rivers for Atlantic salmon.',
    'hero.cta': 'View the property',
    'hero.cta2': 'About the fishing',

    'property.title': 'The property',
    'property.lead':
      'A home with space, calm and the river close by — ideal as a holiday house and a base for the fishing season.',
    'property.factsTitle': 'Key facts',
    'property.plansTitle': 'Floor plans',
    'property.plansLead':
      'A practical layout across two floors. Click a plan to view it larger.',
    'property.f.type': 'Type',
    'property.f.typeVal': 'Detached house with annex',
    'property.f.bedrooms': 'Bedrooms',
    'property.f.bedroomsVal': '4 bedrooms',
    'property.f.area': 'Internal area (BRA)',
    'property.f.areaVal': '109 m² main house · 199 m² incl. annex',
    'property.f.matrikkel': 'Land ID',
    'property.f.matrikkelVal': 'Gnr. 10, bnr. 117, Overhalla',
    'property.f.river': 'To the Namsen',
    'property.f.riverVal': 'approx. 611 m as the crow flies',
    'property.f.airport': 'To the airport',
    'property.f.airportVal': 'Namsos approx. 10 min · Trondheim approx. 2.5 h',
    'property.f.location': 'Location',
    'property.f.locationVal': 'Bus stop next door · walking distance to a shop · parking for several cars',
    'property.f.price': 'Guide price',
    'property.f.priceVal': '€ 250,000',
    'property.galleryNote': 'Photos will be placed here',

    'fishing.title': 'Fishing the Namsen',
    'fishing.lead': '“The queen of rivers” — famed for big salmon since the 1800s.',
    'fishing.p1':
      'The Namsen watercourse is one of Norway’s longest and most respected salmon rivers, with around 100 km of salmon-bearing water and a long history of large fish. It offers everything from calm, broad pools to lively rapids — fishing from a boat (harling) and from the bank.',
    'fishing.p2':
      'The season typically runs from early summer into autumn. From the property you can reach several beats in a short drive, so you can follow the conditions and find the best fishing day by day.',
    'fishing.factHarling': 'Classic harling from a boat',
    'fishing.factBig': 'Famous for big salmon',
    'fishing.factLength': 'Approx. 100 km of salmon river',
    'fishing.linksTitle': 'Read more about the Namsen',
    'fishing.disclaimer':
      'No fishing rights are included with the property. Fishing on the Namsen is open to everyone through day cards and beats from local providers — the property is your comfortable base within easy reach of the river.',

    'area.title': 'The area',
    'area.lead': 'Overhalla in Namdalen — Norwegian nature, salmon and calm.',
    'area.p1':
      'Overhalla sits in the heart of Namdalen, surrounded by forest, farmland and the river. A quiet, safe place with everyday shops and services close by.',
    'area.travelTitle': 'Getting here',
    'area.travel1': 'Namsos Airport: approx. 10 minutes by car',
    'area.travel3': 'Bus stop right by the property · walking distance to a shop',
    'area.mapLink': 'See the location on a map',

    'contact.title': 'Interested?',
    'contact.lead':
      'Get in touch for a chat about the property and the fishing.',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.email': 'g.tangvald@icloud.com',
    'contact.phone': '+47 986 20 425',
    'contact.person': 'Gjermund Tangvald',
    'contact.personLabel': 'Contact',

    'footer.tagline': 'Your base for salmon fishing on the Namsen.',
    'footer.rights': 'All rights reserved.',

    'fishing.galleryTitle': 'The river',
    'area.seasonsTitle': 'Through the seasons',

    'cap.exterior': 'The property with outbuildings and driveway',
    'cap.facade': 'Facade and entrance',
    'cap.livingroom': 'Bright living room',
    'cap.woodstove': 'A wood stove for cosy evenings',
    'cap.kitchen': 'Kitchen with a view over the fields',
    'cap.bathroom': 'Bathroom with a freestanding bathtub',
    'cap.bedroom': 'Bedroom overlooking greenery',
    'cap.dining': 'A table set by the window',
    'cap.namsen_pano': 'The Namsen mirrors the mountains',
    'cap.namsen_valley': 'The river winds through the valley',
    'cap.namsen_view': 'A view over the Namsen',
    'cap.creek': 'A stream through the meadow near the house',
    'cap.namsen_church': 'The river, the fields and the village church',
    'cap.setting': 'The property in its landscape',
    'cap.winter': 'A winter evening over the village',
    'cap.sunrise': 'Morning light over the fields',
    'cap.deer': 'Roe deer in the winter landscape',
    'cap.plan1': 'Ground floor: living room, kitchen, bedroom, bathroom and terrace',
    'cap.plan2': 'First floor: three bedrooms',

    'nav.explore': 'Explore',
    'area.flights': 'Daily flight connections from Amsterdam, London and Frankfurt',
    'area.total':
      'Under five hours from your seat on the plane to your seat by the fire.',
    'links.title': 'Explore the Namsen and Namdalen',
    'links.lead':
      'Useful sources about the river, the region and the nature around the property.',
    'links.region': 'Region & travel',
    'links.fishing': 'Fishing the Namsen',
    'links.nature': 'Nature & national parks',
    'lightbox.close': 'Close',
  },

  de: {
    'site.title': 'Der Namsen — Ihre Basis zum Lachsfischen in Namdalen',
    'site.description':
      'Ein exklusives Anwesen in Overhalla am Namsen — der Königin der norwegischen Lachsflüsse. Ihre feste Basis für unvergessliche Angeltage.',

    'nav.property': 'Das Anwesen',
    'nav.fishing': 'Das Fischen',
    'nav.area': 'Die Region',
    'nav.contact': 'Kontakt',

    'hero.eyebrow': 'Overhalla · Namdalen · Norwegen',
    'hero.title': 'Ihre Basis am Namsen',
    'hero.subtitle':
      'Ein Anwesen für alle, die das Lachsfischen lieben — an einem der besten Flüsse der Welt für den Atlantischen Lachs.',
    'hero.cta': 'Anwesen ansehen',
    'hero.cta2': 'Über das Fischen',

    'property.title': 'Das Anwesen',
    'property.lead':
      'Ein Haus mit Platz, Ruhe und dem Fluss ganz in der Nähe — ideal als Ferienhaus und Basis für die Angelsaison.',
    'property.factsTitle': 'Eckdaten',
    'property.plansTitle': 'Grundrisse',
    'property.plansLead':
      'Ein praktischer Grundriss über zwei Etagen. Zum Vergrößern auf einen Plan klicken.',
    'property.f.type': 'Typ',
    'property.f.typeVal': 'Einfamilienhaus mit Nebengebäude',
    'property.f.bedrooms': 'Schlafzimmer',
    'property.f.bedroomsVal': '4 Schlafzimmer',
    'property.f.area': 'Nutzfläche (BRA)',
    'property.f.areaVal': '109 m² Haupthaus · 199 m² inkl. Nebengebäude',
    'property.f.matrikkel': 'Katasternummer',
    'property.f.matrikkelVal': 'Gnr. 10, bnr. 117, Overhalla',
    'property.f.river': 'Zum Namsen',
    'property.f.riverVal': 'ca. 611 m Luftlinie',
    'property.f.airport': 'Zum Flughafen',
    'property.f.airportVal': 'Namsos ca. 10 Min · Trondheim ca. 2,5 Std',
    'property.f.location': 'Lage',
    'property.f.locationVal': 'Bushaltestelle nebenan · fußläufig zum Geschäft · Parkplätze für mehrere Autos',
    'property.f.price': 'Preisvorstellung',
    'property.f.priceVal': '250.000 €',
    'property.galleryNote': 'Hier kommen die Fotos',

    'fishing.title': 'Fischen im Namsen',
    'fishing.lead': '„Die Königin der Flüsse“ — berühmt für große Lachse seit dem 19. Jahrhundert.',
    'fishing.p1':
      'Das Namsen-Gewässer ist einer der längsten und angesehensten Lachsflüsse Norwegens, mit rund 100 km lachsführender Strecke und einer langen Tradition großer Fische. Er bietet alles von ruhigen, breiten Gumpen bis zu lebhaften Stromschnellen — Fischen vom Boot (Harling) und vom Ufer.',
    'fishing.p2':
      'Die Saison reicht typischerweise vom Frühsommer bis in den Herbst. Vom Anwesen aus erreichen Sie mehrere Strecken in kurzer Fahrt und können so die Bedingungen verfolgen und Tag für Tag das beste Fischen finden.',
    'fishing.factHarling': 'Klassisches Harling vom Boot',
    'fishing.factBig': 'Bekannt für große Lachse',
    'fishing.factLength': 'Ca. 100 km Lachsfluss',
    'fishing.linksTitle': 'Mehr über den Namsen',
    'fishing.disclaimer':
      'Zum Anwesen gehören keine Fischereirechte. Das Fischen im Namsen steht allen über Angelkarten und Strecken lokaler Anbieter offen – das Anwesen ist Ihre komfortable Basis in kurzer Entfernung zum Fluss.',

    'area.title': 'Die Region',
    'area.lead': 'Overhalla in Namdalen — norwegische Natur, Lachs und Ruhe.',
    'area.p1':
      'Overhalla liegt mitten in Namdalen, umgeben von Wald, Feldern und dem Fluss. Ein ruhiger, sicherer Ort mit Geschäften und Diensten des täglichen Bedarfs in der Nähe.',
    'area.travelTitle': 'Anreise',
    'area.travel1': 'Flughafen Namsos: ca. 10 Minuten mit dem Auto',
    'area.travel3': 'Bushaltestelle direkt am Grundstück · fußläufig zum Geschäft',
    'area.mapLink': 'Lage auf der Karte ansehen',

    'contact.title': 'Interessiert?',
    'contact.lead':
      'Melden Sie sich für ein Gespräch über das Anwesen und das Fischen.',
    'contact.emailLabel': 'E-Mail',
    'contact.phoneLabel': 'Telefon',
    'contact.email': 'g.tangvald@icloud.com',
    'contact.phone': '+47 986 20 425',
    'contact.person': 'Gjermund Tangvald',
    'contact.personLabel': 'Ansprechpartner',

    'footer.tagline': 'Ihre Basis zum Lachsfischen am Namsen.',
    'footer.rights': 'Alle Rechte vorbehalten.',

    'fishing.galleryTitle': 'Der Fluss',
    'area.seasonsTitle': 'Durch die Jahreszeiten',

    'cap.exterior': 'Das Anwesen mit Nebengebäuden und Auffahrt',
    'cap.facade': 'Fassade und Eingang',
    'cap.livingroom': 'Helles Wohnzimmer',
    'cap.woodstove': 'Ein Holzofen für gemütliche Abende',
    'cap.kitchen': 'Küche mit Blick über die Felder',
    'cap.bathroom': 'Bad mit freistehender Badewanne',
    'cap.bedroom': 'Schlafzimmer mit Blick ins Grüne',
    'cap.dining': 'Gedeckter Tisch am Fenster',
    'cap.namsen_pano': 'Der Namsen spiegelt die Berge',
    'cap.namsen_valley': 'Der Fluss windet sich durch das Tal',
    'cap.namsen_view': 'Blick über den Namsen',
    'cap.creek': 'Ein Bach durch die Wiese am Haus',
    'cap.namsen_church': 'Der Fluss, die Felder und die Dorfkirche',
    'cap.setting': 'Das Anwesen in der Landschaft',
    'cap.winter': 'Winterabend über dem Dorf',
    'cap.sunrise': 'Morgenlicht über den Feldern',
    'cap.deer': 'Rehe in der Winterlandschaft',
    'cap.plan1': 'Erdgeschoss: Wohnzimmer, Küche, Schlafzimmer, Bad und Terrasse',
    'cap.plan2': 'Obergeschoss: drei Schlafzimmer',

    'nav.explore': 'Entdecken',
    'area.flights': 'Tägliche Flugverbindungen ab Amsterdam, London und Frankfurt',
    'area.total':
      'Weniger als fünf Stunden vom Sitz im Flugzeug bis zum Platz am Kamin.',
    'links.title': 'Entdecken Sie Namsen und Namdalen',
    'links.lead':
      'Nützliche Quellen über den Fluss, die Region und die Natur rund um das Anwesen.',
    'links.region': 'Region & Reise',
    'links.fishing': 'Fischen im Namsen',
    'links.nature': 'Natur & Nationalparks',
    'lightbox.close': 'Schließen',
  },

  nl: {
    'site.title': 'De Namsen — uw uitvalsbasis voor zalmvissen in Namdalen',
    'site.description':
      'Een exclusieve woning in Overhalla aan de Namsen — de koningin van de Noorse zalmrivieren. Uw vaste basis voor onvergetelijke visdagen.',

    'nav.property': 'De woning',
    'nav.fishing': 'Het vissen',
    'nav.area': 'De omgeving',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Overhalla · Namdalen · Noorwegen',
    'hero.title': 'Uw basis aan de Namsen',
    'hero.subtitle':
      'Een woning voor wie van zalmvissen houdt — aan een van ’s werelds beste rivieren voor Atlantische zalm.',
    'hero.cta': 'Bekijk de woning',
    'hero.cta2': 'Over het vissen',

    'property.title': 'De woning',
    'property.lead':
      'Een huis met ruimte, rust en de rivier dichtbij — ideaal als vakantiewoning en basis voor het visseizoen.',
    'property.factsTitle': 'Kenmerken',
    'property.plansTitle': 'Plattegronden',
    'property.plansLead':
      'Een praktische indeling over twee verdiepingen. Klik op een plattegrond voor een grotere weergave.',
    'property.f.type': 'Type',
    'property.f.typeVal': 'Vrijstaande woning met bijgebouw',
    'property.f.bedrooms': 'Slaapkamers',
    'property.f.bedroomsVal': '4 slaapkamers',
    'property.f.area': 'Gebruiksoppervlak (BRA)',
    'property.f.areaVal': '109 m² hoofdhuis · 199 m² incl. bijgebouw',
    'property.f.matrikkel': 'Kadaster',
    'property.f.matrikkelVal': 'Gnr. 10, bnr. 117, Overhalla',
    'property.f.river': 'Naar de Namsen',
    'property.f.riverVal': 'ca. 611 m hemelsbreed',
    'property.f.airport': 'Naar de luchthaven',
    'property.f.airportVal': 'Namsos ca. 10 min · Trondheim ca. 2,5 u',
    'property.f.location': 'Ligging',
    'property.f.locationVal': 'Bushalte naast de deur · loopafstand tot winkel · parkeren voor meerdere auto’s',
    'property.f.price': 'Richtprijs',
    'property.f.priceVal': '€ 250.000',
    'property.galleryNote': 'Hier komen de foto’s',

    'fishing.title': 'Vissen in de Namsen',
    'fishing.lead': '“De koningin der rivieren” — beroemd om grote zalm sinds de 19e eeuw.',
    'fishing.p1':
      'De Namsen is een van de langste en meest gerespecteerde zalmrivieren van Noorwegen, met zo’n 100 km zalmwater en een lange geschiedenis van grote vis. Van rustige, brede kolken tot levendige stroomversnellingen — vissen vanuit de boot (harling) en vanaf de oever.',
    'fishing.p2':
      'Het seizoen loopt doorgaans van de vroege zomer tot in de herfst. Vanaf de woning bereikt u meerdere trajecten binnen korte rijafstand, zodat u de omstandigheden kunt volgen en dag na dag het beste vissen vindt.',
    'fishing.factHarling': 'Klassiek harling vanuit de boot',
    'fishing.factBig': 'Bekend om grote zalm',
    'fishing.factLength': 'Ca. 100 km zalmrivier',
    'fishing.linksTitle': 'Lees meer over de Namsen',
    'fishing.disclaimer':
      'Er horen geen visrechten bij de woning. Vissen in de Namsen staat open voor iedereen via visvergunningen en trajecten van lokale aanbieders – de woning is uw comfortabele basis op korte afstand van de rivier.',

    'area.title': 'De omgeving',
    'area.lead': 'Overhalla in Namdalen — Noorse natuur, zalm en rust.',
    'area.p1':
      'Overhalla ligt midden in Namdalen, omringd door bos, landbouwgrond en de rivier. Een rustige, veilige plek met winkels en voorzieningen dichtbij.',
    'area.travelTitle': 'Reizen naar hier',
    'area.travel1': 'Luchthaven Namsos: ca. 10 minuten met de auto',
    'area.travel3': 'Bushalte direct bij de woning · loopafstand tot winkel',
    'area.mapLink': 'Bekijk de locatie op de kaart',

    'contact.title': 'Interesse?',
    'contact.lead':
      'Neem contact op voor een gesprek over de woning en het vissen.',
    'contact.emailLabel': 'E-mail',
    'contact.phoneLabel': 'Telefoon',
    'contact.email': 'g.tangvald@icloud.com',
    'contact.phone': '+47 986 20 425',
    'contact.person': 'Gjermund Tangvald',
    'contact.personLabel': 'Contactpersoon',

    'footer.tagline': 'Uw basis voor zalmvissen aan de Namsen.',
    'footer.rights': 'Alle rechten voorbehouden.',

    'fishing.galleryTitle': 'De rivier',
    'area.seasonsTitle': 'Door de seizoenen',

    'cap.exterior': 'De woning met bijgebouwen en oprit',
    'cap.facade': 'Gevel en entree',
    'cap.livingroom': 'Lichte woonkamer',
    'cap.woodstove': 'Een houtkachel voor gezellige avonden',
    'cap.kitchen': 'Keuken met uitzicht over de velden',
    'cap.bathroom': 'Badkamer met vrijstaand bad',
    'cap.bedroom': 'Slaapkamer met uitzicht op het groen',
    'cap.dining': 'Een gedekte tafel bij het raam',
    'cap.namsen_pano': 'De Namsen weerspiegelt de bergen',
    'cap.namsen_valley': 'De rivier kronkelt door het dal',
    'cap.namsen_view': 'Uitzicht over de Namsen',
    'cap.creek': 'Een beek door de wei bij het huis',
    'cap.namsen_church': 'De rivier, de velden en de dorpskerk',
    'cap.setting': 'De woning in het landschap',
    'cap.winter': 'Winteravond boven het dorp',
    'cap.sunrise': 'Ochtendlicht over de velden',
    'cap.deer': 'Reeën in het winterlandschap',
    'cap.plan1': 'Begane grond: woonkamer, keuken, slaapkamer, badkamer en terras',
    'cap.plan2': 'Eerste verdieping: drie slaapkamers',

    'nav.explore': 'Ontdek',
    'area.flights': 'Dagelijkse vluchtverbindingen vanuit Amsterdam, Londen en Frankfurt',
    'area.total':
      'Minder dan vijf uur van uw stoel in het vliegtuig tot uw plek bij de haard.',
    'links.title': 'Ontdek de Namsen en Namdalen',
    'links.lead':
      'Handige bronnen over de rivier, de regio en de natuur rond de woning.',
    'links.region': 'Regio & reizen',
    'links.fishing': 'Vissen in de Namsen',
    'links.nature': 'Natuur & nationale parken',
    'lightbox.close': 'Sluiten',
  },
} as const;

export type UIKey = keyof (typeof ui)['no'];
