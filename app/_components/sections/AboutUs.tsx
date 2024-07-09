import AboutUsImage from '@/public/des/about_us.jpg';
import miraImage from '@/public/des/Mirjan-Matic.jpg';
import markoImage from '@/public/des/Marko-Gilic.jpg';
import Image from 'next/image';
import PrimaryBtn from '@/app/_components/ui/primary-btn';

const AboutUs = () => {
  return (
    <section className=" bg-card-bg ">
      <div className="md:max-w-[1440px]  md:px-[150px] md:py-[96px] mx-auto w-full px-4 py-12 flex-col gap-8 ">
        <div className="md:flex md:justify-between flex md:flex-row flex-col gap-8  ">
          <h3 className="text-4xl font-semibold md:hidden block">O NAMA</h3>
          <Image src={AboutUsImage} alt="About Us" />
          <div className="flex  gap-4 flex-wrap">
            <h3 className="text-4xl font-semibold hidden md:block">O NAMA</h3>
            <p className="text-base">
              Naša misija je duboko utemeljena na razumevanju potreba klijenata,
              osluškivanju tržišta i ulaganju u zaposlene i spoljne saradnike.
              Svoju misiju ostvarujemo kroz pružanje znanja i inovativnih
              pristupa koji su rezultat našeg bogatog iskustva iz korporativnog
              sveta. Kroz godine rada u renomiranim kompanijama, stekli smo
              dragoceno iskustvo koje koristimo kako bismo gradili brend od
              poverenja kroz kvalitet i autentičnost.
            </p>
            <p className="text-base">
              Nastojimo postati sinonim za kompaniju koja ne samo da prepoznaje
              već i pomeraju granice u pružanju vrednosti klijentima. Kroz
              kontinuirano učenje iz iskustava, stvaramo pozitivne promene i
              trendove u oblasti finansijskog kontrolinga i menadžmenta,
              omogućavajući našim klijentima da budu korak ispred u dinamičnom
              poslovnom okruženju.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-12 text-center">NAŠ TIM</h3>
          <div className="md:flex md:flex-row flex flex-col justify-between gap-6 mt-12">
            {/* left card */}
            <div className="md:flex-row flex flex-col  bg-white md:p-8 p-4 md:max-w-[540px] ">
              {/* image part */}
              <div className="md:w-1/3 flex flex-col justify-center items-center gap-2">
                <Image
                  src={miraImage}
                  alt="Mira Matic"
                  className="w-[166px] h-[166px] rounded-full"
                />
                <p className="text-lg font-semibold">Mirjana Gilić</p>
                <p className="text-center italic mb-6 md:mb-0">
                  Osnivač i Direktor BFS Company
                </p>
              </div>
              {/* text part */}
              <div className=" md:w-2/3 md:pl-7 md:text-start text-center">
                Dugi niz godina bila je deo velikih kompanija, Mercator-S doo i
                Tehnomanija doo, na rukovodećim pozicijama u veleprodaji i
                finansijskom kontrolingu, gde je stekla neprocenjivo iskustvo i
                znanje. Poslednjih godina bavi se naučno-istraživačkim radom na
                Fakultetu organizacionih nauka u Beogradu u okviru doktorskih
                akademskih studija. Ima tri objavljene knjige i pet naučnih
                radova. Stručna oblast kojom se bavi je emocionalna
                inteligencija i razvoj organizacije.
              </div>
            </div>
            <div className="flex flex-col md:flex md:flex-row  bg-white md:p-8  p-4 max-w-[540px]">
              {/* image part */}
              <div className="md:w-1/3 flex flex-col gap-2 justify-center items-center">
                <Image
                  src={markoImage}
                  alt="Mira Matic"
                  className="w-[166px] h-[166px] rounded-full"
                />
                <p className="text-lg font-semibold">Marko Gilić</p>
                <p className="text-base italic ">IT Konsultant</p>
              </div>
              {/* text part */}
              <div className="md:w-2/3 md:text-start md:pl-7 w-full text-base text-center mt-6 md:mt-0">
                Znanja iz oblasti IT-a i web programiranja stekao je kako kroz
                formalno obrazovanje, tako i kroz samostalne projekte i
                kontinuirano usavršavanje. Takođe, veliko iskustvo poseduje iz
                oblasti logistike koje je stekao kroz rad u međunarodnim
                kompanijama Havi Logistic i Stellantis. Poznavanje biznis
                procesa velikih organizacija u velikoj meri doprinelo je razvoju
                IT karijere kao konsultanta i web programera.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items- mt-12">
          <PrimaryBtn path="/programs">POGLEDAJ PROGRAME</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
