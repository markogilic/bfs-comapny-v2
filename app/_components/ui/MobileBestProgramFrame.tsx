import Image, { StaticImageData } from 'next/image';
import PrimaryBtn from './primary-btn';

interface BestProgramProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  type: string;
  desc?: string;
  stats: {
    duration: string;
    location: string;
    price: string;
  };
}
interface ProgramFrameProps {
  bestProgram: BestProgramProps;
}

const MobileBestProgramFrame = ({ bestProgram }: ProgramFrameProps) => {
  const { imageUrl, title, type, desc, stats, id } = bestProgram;
  return (
    <article className="rounded-[4px] h-[582px] overflow-hidden bg-card-bg  flex flex-col justify-between mx-4">
      <div>
        <h3 className=" uppercase text-base font-semibold  text-center text-white bg-bg-light">
          {type}
        </h3>
        <Image src={imageUrl} alt={title} />
        <h3 className="font-bold text-base uppercase text-center mt-4 p-3">
          {title}
        </h3>
        <p className="text-sm text-center  px-4">{desc}</p>
      </div>
      <div className="flex flex-col  mb-4 ">
        <ul className="list-disc ml-[35px] my-[16px]">
          <li>{stats.duration}</li>
          <li>Lokacija:{stats.location}</li>
          <li>
            Cena: <span className="font-bold">{stats.price}</span>
          </li>
        </ul>
        <PrimaryBtn path={`/programs/${id}`}>DETALJI PROGRAMA</PrimaryBtn>
      </div>
    </article>
  );
};

export default MobileBestProgramFrame;
