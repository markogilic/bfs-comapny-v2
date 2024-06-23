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
    type: 'Individualni programi',
    title: 'FINANSIJSKI KONTROLING ZA MENADŽERE',
    desc: 'Napredovao si na veću poziciju, ideš na bitne sastanke ali i dalje ne znaš sve ključne pojmove iz rezultata poslovanja? Šta je Opex, Capex, Goodwill, povrat investicije? Ovaj program je za tebe!',
    stats: {
      duration: '4 Ssesije po 1,5h',
      location: ' Online',
      price: '350e',
    },
  },
  {
    id: 2,
    imageUrl: fzpImage,
    type: 'Grupne edukacije',
    title: 'FINANSIJSKI za preduzetnike',
    desc: 'Želiš da otvoriš firmu, ali nemaš znanja iz finansija? Vodiš firmu, ali ne znaš koji proizvodi i klijenti su najprofitabilniji? Planiraš novi proizvod, ali ne znaš budući uticaj?',
    stats: {
      duration: '4 Ssesije po 1,5h',
      location: ' Online',
      price: '250e',
    },
  },
  {
    id: 3,
    imageUrl: emolidImage,
    type: 'Grupne edukacije',
    title: 'Emocijalna inteligencija i liderstvo',
    desc: 'Istraživanja pokazuju da 67% veština potrebnih za uspeh lidera zavisi od emocionalne inteligencije. Efikasno vođenje tima više se oslanja na emocije nego na logiku. Naučite više i razvijte liderske veštine.',
    stats: {
      duration: 'Jednodnevna edukacija',
      location: 'Uzivo',
      price: '14900 RSD',
    },
  },
  {
    id: 4,
    imageUrl: intervjuImage,
    type: 'Individualni programi',
    title: 'Programi pripreme za intervju',
    desc: 'Imaš bitan razgovor za posao? Prijavi se na naš individualni program za pripremu. Poboljšaj CV, saznaj šta te čeka na intervjuu, smanji tremu i povećaj samopouzdanje za bolje rezultate!',
    stats: {
      duration: '1 sesija od 2 sata',
      location: ' Online',
      price: '80e',
    },
  },
] as const;

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
