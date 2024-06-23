import { logosUrl } from '@/lib/data';

import Image from 'next/image';

const ProudOfSection = () => {
  return (
    <div className=" md:py-12 md:px-[150px]  md:border-y-4 border-y-2 py-4 ">
      {/* <SubHeading>PONOSNI NA SARADNJU SA</SubHeading> */}
      <h3 className="text-center text-2xl font-bold">PONOSNI NA SARADNJU</h3>
      <div className="max-w-[1500px] w-full mx-auto mt-5 ">
        <div className="banner-wrapper">
          <div className="wrapper">
            <div className="images">
              {logosUrl.map((logo, index) => (
                <div key={index} className="image">
                  <Image src={logo} alt="logo" />
                </div>
              ))}
            </div>
            <div className="images">
              {logosUrl.map((logo, index) => (
                <div key={index} className="image">
                  <Image src={logo} alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudOfSection;
