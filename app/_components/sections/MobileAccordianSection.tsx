import MobileSubHeading from '../ui/MobileSubHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

// images

import imageOne from '@/public/des/ic_sharp-control-camera.svg';
import imageTwo from '@/public/des/mdi_finance.svg';
import imageThree from '@/public/des/material-symbols_social-leaderboard-rounded.svg';
import imageFour from '@/public/des/mdi_person.svg';
import imageFive from '@/public/des/material-symbols_contact-support.svg';

const MobileAccordianSection = () => {
  return (
    <>
      <MobileSubHeading>ZAŠTO BFS COMPANY?</MobileSubHeading>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-start">
            <Image
              src={imageOne}
              alt="Duboko razumevanje finansikog kontrolinga"
              width={48}
              className="mr-4"
            />
            Duboko Razumevanje Finansijskog Kontrolinga
          </AccordionTrigger>
          <AccordionContent>
            Pružamo vam ključno znanje i analitičke veštine kako biste efikasno
            upravljali finansijskim aspektima vašeg poslovanja
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-start">
            <div className="flex justify-center items-center">
              <Image
                src={imageTwo}
                alt="Duboko razumevanje finansikog kontrolinga"
                width={48}
                className="mr-4"
              />
              Rast i Optimizacija Poslovanja
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Omogućujemo vam da identifikujete profitabilne prilike, planirate
            strategije rasta i optimizujete performanse vašeg biznisa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold text-start">
            <div className="flex justify-center items-center">
              <Image
                src={imageThree}
                alt="Duboko razumevanje finansikog kontrolinga"
                width={48}
                className="mr-4"
              />
              Razvoj Veština i Liderstva
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Kroz naše programe, unapređujete svoje veštine pregovaranja, timskog
            rada i liderstva, stvarajući snažnu osnovu za uspeh.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-semibold text-start">
            <div className="flex justify-center items-center">
              <Image
                src={imageFour}
                alt="Duboko razumevanje finansikog kontrolinga"
                width={48}
                className="mr-4"
              />
              Personalizovan pristup
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Prilagođavamo se vašim specifičnim potrebama i ciljevima, pružajući
            vam rešenja koja odgovaraju vašem poslovnom modelu.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-semibold text-start">
            <div className="flex justify-center items-center">
              <Image
                src={imageFive}
                alt="Duboko razumevanje finansikog kontrolinga"
                width={48}
                className="mr-4"
              />
              Dugoročna podrška
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Naša podrška ne završava nakon završetka programa; nastavljamo da
            vas podržavamo dugoročno kako biste ostvarili kontinuirani rast i
            uspeh.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MobileAccordianSection;
