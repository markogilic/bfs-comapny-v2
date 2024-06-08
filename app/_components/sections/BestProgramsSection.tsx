import Image from 'next/image';

import SubHeading from '../ui/subHeading';
import ProgramFrame from '../ui/ProgramFrame';
import PrimaryBtn from '../ui/primary-btn';
import finkonImage from '@/public/des/programme-3.jpg';
import fzpImage from '@/public/des/programme-4.jpg';
import emolidImage from '@/public/des/programme-2.jpg';
import intervjuImage from '@/public/des/programme-1.jpg';
import chekIcon from '@/public/des/carbon_checkmark-filled.svg';

const BestProgramsSection = () => {
  return (
    <section className="px-[150px] py-[96px] flex flex-col gap-[48px] flex-wrap">
      <SubHeading>POPULARNI PROGRAMI</SubHeading>
      <p className="text-center text-[18px] ">
        Najtraženiji kursevi za vaš profesionalni razvoj
      </p>
      <div className="flex gap-[48px] mx-auto ">
        <ProgramFrame
          imageUrl={finkonImage}
          title="FINANSIJSKI KONTROLING ZA MENADŽERE"
          type="Individualni programi"
          desc="Napredovao si na veću poziciju, ideš na bitne sastanke ali i dalje
          ne znaš sve ključne pojmove iz rezultata poslovanja? Šta je Opex,
          Capex, Goodwill, povrat investicije? Ovaj program je za tebe!"
        >
          <ul className="list-disc ml-[16px] my-[16px]">
            <li>4 Ssesije po 1,5h</li>
            <li>Lokacija: Online</li>
            <li>
              Cena: <span className="font-bold">350e</span>
            </li>
          </ul>
          <PrimaryBtn path="/programs/fkzm">DETALJI PROGRAMA</PrimaryBtn>
        </ProgramFrame>
        <ProgramFrame
          imageUrl={fzpImage}
          title="FINANSIJE ZA PREDUZETNIKE"
          type="grupne edukacije"
          desc="Želiš da otvoriš firmu, ali nemaš znanja iz finansija? Vodiš firmu,
          ali ne znaš koji proizvodi i klijenti su najprofitabilniji? Planiraš
          novi proizvod, ali ne znaš budući uticaj?"
        >
          <ul className="list-disc ml-[16px] my-[16px]">
            <li>4 Ssesije po 1,5h</li>
            <li>Lokacija: Online</li>
            <li>
              Cena: <span className="font-bold">250e</span>
            </li>
          </ul>

          <PrimaryBtn path="/programs/fzp">DETALJI PROGRAMA</PrimaryBtn>
        </ProgramFrame>
        <ProgramFrame
          imageUrl={emolidImage}
          title="EMOCIONALNA INTELIGENCIJA I LIDERSTVO"
          type="grupne edukacije"
          desc="Istraživanja pokazuju da 67% veština potrebnih za uspeh lidera
          zavisi od emocionalne inteligencije. Efikasno vođenje tima više se
          oslanja na emocije nego na logiku. Naučite više i razvijte liderske
          veštine."
        >
          <ul className="list-disc ml-[16px] my-[16px]">
            <li>Jednodnevna edukacija</li>
            <li>Lokacija: Uzivo</li>
            <li>
              Cena: <span className="font-bold">14900 RSD</span>
            </li>
          </ul>
          <PrimaryBtn path="/programs/fkzm">DETALJI PROGRAMA</PrimaryBtn>
        </ProgramFrame>
        <ProgramFrame
          imageUrl={intervjuImage}
          title="FINANSIJSKI KONTROLING ZA MENADŽERE"
          type="Individualni programi"
          desc="Napredovao si na veću poziciju, ideš na bitne sastanke ali i dalje
          ne znaš sve ključne pojmove iz rezultata poslovanja? Šta je Opex,
          Capex, Goodwill, povrat investicije? Ovaj program je za tebe!"
        >
          <ul className="list-disc ml-[16px] my-[16px]">
            <li>4 Ssesije po 1,5h</li>
            <li>Lokacija: Online</li>
            <li>
              Cena: <span className="font-bold">350e</span>
            </li>
          </ul>
          <PrimaryBtn path="/programs/fkzm">DETALJI PROGRAMA</PrimaryBtn>
        </ProgramFrame>
      </div>
      <div className="flex justify-center gap-6">
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Duboko Razumevanje Finansijskog Kontrolinga
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Rast i Optimizacija Poslovanja
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Razvoj Veština i Liderstva
        </p>
      </div>
      <div className="mx-auto">
        <PrimaryBtn path="/programs">POGLEDAJ SVE PROGRAME</PrimaryBtn>
      </div>
    </section>
  );
};

export default BestProgramsSection;
