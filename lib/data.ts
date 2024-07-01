import AustrianJuice from '@/public/logos/austria_juice.svg';
import BigDreams from '@/public/logos/big-dreams.jpg';
import Contrust from '@/public/logos/contrust.png';
import Dakom from '@/public/logos/dakom-logo.jpg';
import Jezdimirovic from '@/public/logos/jezdimirovic.png';
import Progard from '@/public/logos/progard.png';
import SamAkademija from '@/public/logos/sam_akademija.png';

// image of students

import Student1 from '@/public/des/review-1.jpg';
import Student2 from '@/public/des/review-2.jpg';
import Student3 from '@/public/des/review-3.jpg';
import Student4 from '@/public/des/review-4.jpg';
import Student5 from '@/public/des/review-5.jpg';
import Student6 from '@/public/des/review-6.jpg';
import Student7 from '@/public/des/review-7.jpg';

//image of  popular programs

import fkzmImage from '@/public/des/programme-3.jpg';
import fzpImage from '@/public/des/programme-4.jpg';
import emolidImage from '@/public/des/programme-2.jpg';
import intervjuImage from '@/public/des/programme-1.jpg';

//gallery images

import galleryImage1 from '@/public/gallery_image/DSC_2390.jpg';
import galleryImage2 from '@/public/gallery_image/DSC_2400.jpg';
import galleryImage3 from '@/public/gallery_image/DSC_2412.jpg';
import galleryImage4 from '@/public/gallery_image/DSC_2457.jpg';
import galleryImage5 from '@/public/gallery_image/DSC_2458.jpg';
import galleryImage6 from '@/public/gallery_image/DSC_2461.jpg';
import galleryImage7 from '@/public/gallery_image/DSC_4196.jpg';
import galleryImage8 from '@/public/gallery_image/DSC_4246.jpg';
import galleryImage9 from '@/public/gallery_image/IMG_20230929_182545.jpg';
import galleryImage10 from '@/public/gallery_image/IMG_20230930_161411.jpg';
import galleryImage11 from '@/public/gallery_image/IMG_20230930_161433.jpg';
import galleryImage12 from '@/public/gallery_image/IMG_20231104_140432.jpg';
import galleryImage13 from '@/public/gallery_image/IMG_20231106_144740.jpg';
import galleryImage14 from '@/public/gallery_image/IMG_20240426_144218_346.jpg';
import galleryImage15 from '@/public/gallery_image/IMG-20210606-WA0009.jpg';
import galleryImage16 from '@/public/gallery_image/IMG-20210606-WA0010.jpg';
import galleryImage17 from '@/public/gallery_image/IMG-20210606-WA0012.jpg';
import galleryImage18 from '@/public/gallery_image/IMG-20231016-WA0000.jpg';

//blog images
import blogTestImage from '@/public/des/blog-placceholder.jpg';

// it images
import IntFrontEnd from '@/public/des/uvod_u _frontedn.jpg';
import HtmlCssJs from '@/public/des/html_css_js.png';
import reactJS from '@/public/des/reactJs.png';

export const logosUrl = [
  AustrianJuice,
  BigDreams,
  Contrust,
  Dakom,
  Jezdimirovic,
  Progard,
  SamAkademija,
] as const;

export const students = [
  {
    imageUrl: Student1,
    name: 'Mirjana Dajković',
    ratings: 5,
    review:
      'Mirjana je izuzetno obrazovana, sa odličnim pristupom nastavi i uvek je na raspolaganju za savet. Njena posvećenost i iskrena briga o mom iskustvu učenja čine svaki čas vrednim. Sposobnost povezivanja teoretskih koncepata sa scenarijima iz stvarnog sveta poboljšala je moje razumevanje finansija.Mentorstvo se proteže van granica redovnih časova – ona podstiče diskusije i svaki čas je prilagođen i personalizovan.Bez sumnje, iskustvo mentorstva sa 5 zvezdica.',
  },
  {
    imageUrl: Student2,
    name: 'Milica Stojaković',
    ratings: 5,
    review:
      'Veoma korisno iskustvo! Obrazovanje je ispunilo moja očekivanja. Pristup mentora je na profesionalnom nivou i uvek dostupan za sve nedoumice i pitanja. Svaka čast i samo tako nastavite!',
  },
  {
    imageUrl: Student3,
    name: 'Milan Vasić',
    ratings: 5,
    review: 'Podršku i posvećenost koju dobijam su vanvremenske!',
  },
  {
    imageUrl: Student4,
    name: 'Kristina Leković',
    ratings: 5,
    review:
      'Mirina posvećenost, znanje i ljubav prema poslu koji radi su ono što ovim edukacijama daje posebnu vrednost! Topla preporuka za sve one koji žele da rade na sebi i svojim veštinama!',
  },
  {
    imageUrl: Student5,
    name: 'Tamara Sofronijević',
    ratings: 5,
    review:
      'Mirjanin preduzetnički poduhvat odiše pristupačnošću, znanjem i pozitivnom energijom. Kao mentora, njena stalna dostupnost, zajedno sa bogatom stručnošću, čini je neprocenjivim resursom za buduće preduzetnike. Mirjanina pristupačnost stvara pozitivno okruženje za učenje, što je čini izuzetnim vodičem za one koji se suočavaju sa izazovima preduzetništva.',
  },
  {
    imageUrl: Student6,
    name: 'Marija Milojičić',
    ratings: 5,
    review:
      'Odlično obrazovanje u veštinama emocionalnog pregovaranja. Hvala Mirka na nesebičnom prenošenju znanja i iskustva. Sve preporuke!',
  },
  {
    imageUrl: Student7,
    name: 'Bojana Rudović',
    ratings: 5,
    review:
      'Mirjana je, pre svega, dobar čovek! Svoju energiju i plemenitost prenosi na svoj rad, na edukacije koje su dinamične, korisne, primenljive, sa svrhom.',
  },
] as const;

export const topPrograms = [
  {
    id: 1,
    imageUrl: fkzmImage,
    typeData: 'individual',
    type: 'Individualni programi',
    title: 'FINANSIJSKI KONTROLING ZA MENADŽERE',
    desc: 'Napredovao si na veću poziciju, ideš na bitne sastanke ali i dalje ne znaš sve ključne pojmove iz rezultata poslovanja? Šta je Opex, Capex, Goodwill, povrat investicije? Ovaj program je za tebe!',
    stats: {
      duration: '4 Ssesije po 1,5h',
      location: ' Online',
      price: '350e',
    },
    fullDesc: {
      main: 'Ukoliko želiš dodatna znanja iz finansijskog kontrolinga i rezultata poslovanja uz mentora koji će pratiti tvoj razvoj, ovo je program za tebe. Bez obzira da li gradiš karijeru u oblasti finansija ili ne, ova znanja će upotpuniti tvoj portfolio menadžera, a individualni rad sa mentorom pružiće ti nove vidike i prilike u budućnosti',
      tags: [],
      titleList:
        'Program je prilagodjen tebi i tvom nivou poznavanja finansija, ali neke od ključnih tema koje ćeš naučiti jesu:',
      list: [
        'Uvod u finansijski kontroling (funkcija u organizaciji, odgovornosti, opšti pojmovi i skraćenice: BS, BU, BI, BUD, B2B,CF, EX, OPEX, GM...)',
        'Mesečni paket izvestavanja profitabilnosti kompanije (P&L, rezultati poslovanja, prezentacija poslovanja, prikaz rezultata u odnosu na budžet, na forcast, na prethodnu godinu...)',
        'CashFlow, Zalihe i Potraživanja (Bilans stanja)',
        'Sales Controling (promet, prihod, pdv, nabavna vrednost, rabati, profitabilnot robne grupe/kupca);',
      ],
      final:
        'Mentorstva su savremeni način učenja koji daju najbolje rezultate. Podrška koju ćeš imati tokom trajanja programa kroz zadatke, diskusije, pitanja i odgovore dodatno će unaprediti tvoje znanje i stvoriti uslove za napredovanje.',
    },
  },
  {
    id: 2,
    imageUrl: fzpImage,
    type: 'Grupni program',
    typeData: 'group',
    title: 'finansije za preduzetnike',
    desc: 'Želiš da otvoriš firmu, ali nemaš znanja iz finansija? Vodiš firmu, ali ne znaš koji proizvodi i klijenti su najprofitabilniji? Planiraš novi proizvod, ali ne znaš budući uticaj?',
    stats: {
      duration: '3 radionice po 4h',
      location: ' Online',
      price: '180e',
    },
    fullDesc: {
      main: 'Želiš da otvoriš firmu, ali nemaš znanja iz finansija, o fakturama, porezima, PDV-u? Vodiš firmu ali ne znaš na kojim proizvodima zaradjuješ i koliko, koji su klijenti najprofitabilniji?Razmišljaš da uvedeš novi proizvod ili uslugu ali ne znaš kako će to uticati na poslovanje u budućnosti? Ukoliko imaš slična pitanja u glavi, naše radionice će ti pomoći da dodješ do odgovora. Cilj ove edukacije je unapredjenje tvog poslovanja, sticanje novih znanja i veština u oblasti finansija.',
      tags: [],
      titleList: 'Neke od ključnih tema koje ćeš naučiti na ovoj edukaciji su:',
      list: [
        'Uvod u finansije – prihod, fakture, pdv, marža, zarada;',
        'Šire sagledavanje biznisa – profitabilnost proizvoda, klijenata, upravljanje troškovima;',
        'Analiza biznisa kroz rezultate i brojke – zarada na kraju meseca, prostor za unapredjenje;',
        'Budžet – definisanje planova za rast biznisa;',
        'Postavka parametara za praćenje poslovanja;',
      ],
      final:
        'Podrška koju ćeš imati tokom trajanja programa kroz zadatke, diskusije, pitanja i odgovore dodatno će unaprediti tvoje znanje, a time i tvoje poslovanje.',
    },
  },
  {
    id: 3,
    imageUrl: emolidImage,
    typeData: 'group',
    type: 'Grupne edukacije',
    title: 'Emocijalna inteligencija i liderstvo',
    desc: 'Istraživanja pokazuju da 67% veština potrebnih za uspeh lidera zavisi od emocionalne inteligencije. Efikasno vođenje tima više se oslanja na emocije nego na logiku. Naučite više i razvijte liderske veštine.',
    stats: {
      duration: '2 radionice po 3h',
      location: 'Online',
      price: '120e',
    },
    fullDesc: {
      main: 'Istraživanja pokazuju da 67% svih veština koje su lideru potrebne za poslovni rezultat i uspeh, zasnivaju se na emocionalnoj inteligenciji. Zašto je to tako? Uspešno vodjenje tima je više emotivan, nego kongitivan proces, jer lideri imaju bolje rezultate u motivaciji članova tima putem emocije, u odnosu na korišćenje logike. Ukoliko želiš da naučiš više o emocionalnoj inteligenciji i efikasnom vodjenju timova, da uložiš u razvoj svojih liderskih veština, ovo je prava edukacija za tebe.',
      tags: [],
      titleList: 'Na edukaciji ćeš naučiti:',
      list: [
        'Šta je emocionalna inteligencija i kako ona utiče na biznis;',
        'Koja su četiri stuba emocionalne inteligencije i na koji način oni tranformišu neuspeh u uspeh;',
        'Šta znači biti asertivan, empatičan i koliko to pomaže u komunikaciji lidera sa svojim timom;',
        'Koji stilovi liderstva postoje i kako se oni menjaju;',
        'Koje su najznačajnije liderske osobine;',
        'Šta je potrebno za razvoj emocionalno inteligentnih timova i organizacija;',
        'Kako dati kontruktivan feedback;',
        'Koji je značaj emocionalne inteligencije za kreiranje korporativne kulture;',
      ],
      final:
        'Lakše se uči uz primere iz prakse i zadatke, pa je to neizostavni deo naših edukacija. Kako bismo što bolje upoznali tebe kao lidera, na edukaciji radi se test emocionalne inteligencije i test stila liderstva. Na kraju edukacije obavezna je završna diskusija, a nakon toga i dodale potvrda o uspešno završenoj edukaciji.',
    },
  },

  {
    id: 5,
    imageUrl: IntFrontEnd,
    typeData: 'group',
    type: 'Grupne edukacije',
    title: 'Uvod u Frontend',
    desc: 'Ovaj kurs pruža osnovno upoznavanje sa front-end programiranjem, pokrivajući ključne tehnologije kao što su HTML, CSS i JavaScript',
    stats: {
      duration: '4 nedelja',

      location: 'Online',
      price: '150e',
    },
    fullDesc: {
      main: 'Kurs "Uvod u Frontend" je osmišljen da studentima pruži sveobuhvatan uvod u svet web developmenta, sa posebnim fokusom na frontend tehnologije. Cilj kursa je da polaznici steknu osnovna znanja i veštine potrebne za izradu modernih, interaktivnih i responzivnih web sajtova. Tokom kursa, studenti će se upoznati sa ključnim tehnologijama i alatima koje web developeri koriste svakodnevno.',
      tags: [
        'Uvod u web development',
        'HTML i CSS',
        'JavaScript',
        'Responsive design',
        'Git',
        'Napredne teme',
      ],
      titleList: '',
      list: [
        'Učenje strukture HTML dokumenta, osnovnih elemenata i atributa.',
        'Razumevanje osnovnih koncepata CSS-a, kao što su selektori, pravila stilizacije i osnovne tehnike pozicioniranja.',
        ' Upoznavanje sa osnovnim konceptima JavaScript-a, kao što su promenljive, petlje, uslovni izrazi i manipulacija DOM-a.',
        'Uvod u principe responzivnog dizajna i korišćenje media queries za prilagođavanje web stranica različitim ekranima.',
        'Osnove verzionisanja koda kroz Git, uključujući osnovne komande za rad sa repozitorijumima i rad u timskom okruženju.',
      ],
      final: '',
    },
  },
  {
    id: 6,
    imageUrl: HtmlCssJs,
    typeData: 'group',
    type: 'Grupne edukacije',
    title: ' Osnove HTML, CSS, JavaScript',
    desc: 'Ovaj kurs pruža temeljno upoznavanje sa osnovnim web tehnologijama HTML, CSS i JavaScript, omogućavajući polaznicima da kreiraju i stilizuju interaktivne web stranice.',
    stats: {
      duration: '12 nedelja',
      location: 'Online',
      price: '350e',
    },
    fullDesc: {
      main: 'Kurs "Osnove HTML, CSS i JavaScripta" pruža temeljno razumevanje tri ključne tehnologije neophodne za razvoj modernih web stranica. Ovaj kurs je namenjen apsolutnim početnicima u web developmentu i cilj mu je da polaznike uvede u svet frontend tehnologija i pripremi ih za dalje napredovanje u ovoj oblasti.',
      titleList: '',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web development', 'Frontend'],
      list: [
        'Osnove HTML-a, uključujući strukturu dokumenata, osnovne elemente i njihove atribute, kao i semantičko označavanje sadržaja.',
        'Osnovni koncepte CSS-a, kao što su selektori, pravila stilizacije, boje, pozadine i pozicioniranje elemenata na stranici',
        'Ucenje JavaScripta kroz osnovne koncepte poput promenljivih, tipova podataka, upravljanja tokom izvršavanja (if-else strukture, petlje) i osnovne manipulacije DOM-om (Document Object Model).',
        'Kroz praktične vežbe, polaznici će primeniti svoje znanje iz HTML-a, CSS-a i JavaScripta, razvijajući jednostavne web stranice i interaktivne elemente',
      ],
      final: '',
    },
  },
  {
    id: 7,
    imageUrl: reactJS,
    typeData: 'group',
    type: 'Grupne edukacije',
    title: 'Osnove React JS',
    desc: 'Ovaj kurs pruža osnovno upoznavanje sa React JS bibliotekom, omogućavajući polaznicima da kreiraju interaktivne web aplikacije.',
    stats: {
      duration: '12 nedelja',
      location: 'Online',
      price: '350e',
    },
    fullDesc: {
      main: 'Kurs "Osnove ReactJS-a" je namenjen polaznicima koji žele da se upoznaju sa popularnim JavaScript framework-om za izgradnju korisničkih interfejsa.Tokom kursa, učesnici će naučiti osnovne koncepte React-a, kao što su komponente, stanje (state) i svojstva (props), koji su ključni za razvoj modernih web aplikacija.Fokus će biti na praktičnim vežbama i projektima, gde će polaznici implementirati naučene veštine u stvarnim scenarijima.Kurs takođe obuhvata upotrebu JSX-a, jezika za pisanje HTML-a unutar JavaScripta, kao i osnove rada sa React-ovim životnim ciklusom komponenti.Na kraju kursa, polaznici će biti osposobljeni da samostalno razvijaju jednostavne React aplikacije i da nastave sa naprednijim temama u ReactJS-u.',
      tags: [
        'ReactJS',
        'JavaScript',
        'Frontend',
        'Web development',
        'React Comonents',
        'React State',
        'React Props',
      ],
      titleList: '',
      list: [
        'Upoznavanje sa osnovnim konceptima React-a, kao što su komponente, stanje (state) i svojstva (props).',
        'Korišćenje JSX-a za pisanje HTML-a unutar JavaScript-a.',
        'Osnove rada sa React-ovim životnim ciklusom komponenti.',
        'Praktične vežbe i projekti za primenu naučenih veština u stvarnim scenarijima.',
        'Razvoj jednostavnih React aplikacija i interaktivnih elemenata.',
      ],
      final: '',
    },
  },
];

// gallery images

export const galleryImages = [
  {
    id: 1,
    imageUrl: galleryImage1,
    title: 'Sam Predavanje',
  },
  {
    id: 2,
    imageUrl: galleryImage2,
    title: 'Sam Predavanje',
  },
  {
    id: 3,
    imageUrl: galleryImage3,
    title: 'Sam Predavanje',
  },
  {
    id: 4,
    imageUrl: galleryImage4,
    title: 'Sam Predavanje',
  },
  {
    id: 5,
    imageUrl: galleryImage5,
    title: 'Sam Predavanje',
  },
  {
    id: 6,
    imageUrl: galleryImage6,
    title: 'Sam Predavanje',
  },
  {
    id: 7,
    imageUrl: galleryImage7,
    title: 'Edukacija zaposlenih utice na rezultate poslovanja ',
  },
  {
    id: 8,
    imageUrl: galleryImage8,
    title: 'Edukacija zapos lenih utice na rezultate poslovanja ',
  },
  {
    id: 9,
    imageUrl: galleryImage9,
    title: 'BFS Bookmarker ',
  },
  {
    id: 10,
    imageUrl: galleryImage10,
    title: 'BFS Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 11,
    imageUrl: galleryImage11,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 12,
    imageUrl: galleryImage12,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 13,
    imageUrl: galleryImage13,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 14,
    imageUrl: galleryImage14,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 15,
    imageUrl: galleryImage15,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 16,
    imageUrl: galleryImage16,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 17,
    imageUrl: galleryImage17,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 18,
    imageUrl: galleryImage18,
    title: 'Ucesnici edukacije emocionalne inteligencije u pregovaranju',
  },
  {
    id: 19,
    imageUrl: galleryImage9,
    title: 'BFS Bookmarker ',
  },
  {
    id: 20,
    imageUrl: galleryImage7,
    title: 'Edukacija zaposlenih utice na rezultate poslovanja ',
  },
];

export const blogPosts = [
  {
    id: 1,
    imageUrl: blogTestImage,
    title: 'Kako da postanete lider u svom poslu',
    date: '25.12.2024',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure quos, excepturi natus eum saepe ...',
  },
  {
    id: 2,
    imageUrl: blogTestImage,
    title: 'Kako da postanete lider u svom poslu',
    date: '25.12.2024',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure quos, excepturi natus eum saepe ...',
  },
  {
    id: 3,
    imageUrl: blogTestImage,
    title: 'Kako da postanete lider u svom poslu',
    date: '25.12.2024',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure quos, excepturi natus eum saepe ...',
  },
  {
    id: 4,
    imageUrl: blogTestImage,
    title: 'Kako da postanete lider u svom poslu',
    date: '25.12.2024',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure quos, excepturi natus eum saepe ...',
  },
] as const;
