import Image from 'next/image';

import InovacijaImage from '@/public/des/inovativni-pristup.jpg';

const MainSectionThree = () => {
  return (
    <section className="md:flex bg-bg-darck gap-[48px]">
      <div className="md:w-[50%]">
        <Image src={InovacijaImage} alt="Inovacija" />
      </div>
      <div className="flex flex-col items-start  justify-center md:w-[540px] md:gap-[48px] px-4 gap-4 pb-12 pt-6 ">
        <h3 className="font-bold md:text-[36px] text-[32px] text-white uppercase leading-9 ">
          Inovativni Pristup <br />
          Finansijskom <br /> Kontrolingu i <br /> Menadžmentu
        </h3>
        <p className="leading-[22.4px] text-white">
          Naša osnovna delatnost obuhvata analizu, kreiranje i implementaciju
          poslovnih rešenja u finansijskom kontrolingu i menadžmentu, uz
          pružanje usluga savetovanja, istraživanja i edukacije. Fokusirani smo
          na mikro pristup prema klijentima, razumevanje njihovih specifičnih
          potreba i prilagođavanje rešenja njihovom poslovanju. Naši edukativni
          programi nude konzistentan pristup i posebne programe za mala
          preduzeća i pojedince, doprinoseći njihovom razvoju i uspehu.
        </p>
      </div>
    </section>
  );
};

export default MainSectionThree;
