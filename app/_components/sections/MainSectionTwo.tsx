'use client';
// image imports

import imageOne from '@/public/des/ic_sharp-control-camera.svg';
import imageTwo from '@/public/des/mdi_finance.svg';
import imageThree from '@/public/des/material-symbols_social-leaderboard-rounded.svg';
import imageFour from '@/public/des/mdi_person.svg';
import imageFive from '@/public/des/material-symbols_contact-support.svg';

import SubHeadign from '@/app/_components/ui/subHeading';
import GoalCard from '../ui/GoalCard';
import MobileAccordianSection from './MobileAccordianSection';

import { UseScreenWidth } from '@/app/hooks/screen-width';

const MainSectionTwo = () => {
  const width = UseScreenWidth();

  return (
    <section className=" md:px-[150px] md:py-[96px] flex px-4 pt-12  flex-col gap-[48px]">
      {width < 768 ? (
        <MobileAccordianSection />
      ) : (
        <>
          <SubHeadign>ZAŠTO BFS COMPANY?</SubHeadign>
          <div className="flex  gap-[48px] mx-auto">
            <GoalCard
              imagePath={imageOne}
              title="Duboko Razumevanje Finansijskog Kontrolinga"
            >
              Pružamo vam ključno znanje i analitičke veštine kako biste
              efikasno upravljali finansijskim aspektima vašeg poslovanja.
            </GoalCard>
            <GoalCard
              imagePath={imageTwo}
              title="Rast i Optimizacija Poslovanja"
            >
              Omogućujemo vam da identifikujete profitabilne prilike, planirate
              strategije rasta i optimizujete performanse vašeg biznisa.
            </GoalCard>
            <GoalCard imagePath={imageThree} title="Razvoj Veština i Liderstva">
              Kroz naše programe, unapređujete svoje veštine pregovaranja,
              timskog rada i liderstva, stvarajući snažnu osnovu za uspeh.
            </GoalCard>
          </div>
          <div className="flex mx-auto gap-[48px]">
            <GoalCard imagePath={imageFour} title="Personalizovan pristup">
              Prilagođavamo se vašim specifičnim potrebama i ciljevima,
              pružajući vam rešenja koja odgovaraju vašem poslovnom modelu.
            </GoalCard>
            <GoalCard imagePath={imageFive} title="Dugoročna podrška">
              Naša podrška se ne završava nakon završetka programa; nastavljamo
              da vas podržavamo dugoročno kako biste ostvarili kontinuirani rast
              i uspeh.
            </GoalCard>
          </div>
        </>
      )}
    </section>
  );
};

export default MainSectionTwo;
