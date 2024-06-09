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
