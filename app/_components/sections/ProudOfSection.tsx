import { logosUrl } from '@/lib/data';

import Image from 'next/image';

const ProudOfSection = () => {
  return (
    <div className=" py-12 px-[150px] border-y-4 ">
      {/* <SubHeading>PONOSNI NA SARADNJU SA</SubHeading> */}
      <h3 className="text-center text-2xl font-bold">PONOSNI NA SARADNJU</h3>
      <div className="w-[1500px] mx-auto mt-5 ">
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
