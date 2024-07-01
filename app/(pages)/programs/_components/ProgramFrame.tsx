import Image, { StaticImageData } from 'next/image';
import PrimaryBtn from '@/app/_components/ui/primary-btn';

interface ProgramFrameProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  type: string;
  desc?: string;
  stats?: {
    duration: string;
    location: string;
    price: string;
  };
}

const ProgramFrame = ({ program }: { program: ProgramFrameProps }) => {
  const { id, stats, imageUrl, title, type, desc } = program;

  return (
    <article className="md:w-[267px] h-[560px] rounded-[4px] md:mx-0 mx-4 overflow-hidden bg-card-bg border-2 border-card-bg  flex flex-col  justify-between">
      <div>
        <h3 className=" uppercase text-base font-semibold  text-center text-white bg-bg-light">
          {type}
        </h3>
        <Image src={imageUrl} alt={title} className="bg-white" />
        <h3 className="font-bold text-base text-center mt-4 p-3 uppercase h-[72px]">
          {title}
        </h3>
        <p className="text-sm text-center md:mt-2 px-4">{desc}</p>
      </div>
      <div className="flex flex-col mb-4 ">
        <ul className="list-disc ml-[35px] my-[16px]">
          <li>{stats?.duration}</li>
          <li>{stats?.location}</li>
          <li>
            Cena: <span className="font-bold">{stats?.price}</span>
          </li>
        </ul>
        <PrimaryBtn path={`/programs/${id}`}>DETALJI PROGRAMA</PrimaryBtn>
      </div>
    </article>
  );
};

export default ProgramFrame;
