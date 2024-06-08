import Image, { StaticImageData } from 'next/image';

interface ProgramFrameProps {
  imageUrl: StaticImageData;
  title: string;
  type: string;
  desc?: string;
  children: React.ReactNode;
}

const ProgramFrame = ({
  imageUrl,
  title,
  type,
  children,
  desc,
}: ProgramFrameProps) => {
  return (
    <article className="w-[267px] rounded-[4px] overflow-hidden bg-card-bg  flex flex-col justify-between">
      <div>
        <h3 className=" uppercase text-base font-semibold  text-center text-white bg-bg-light">
          {type}
        </h3>
        <Image src={imageUrl} alt={title} />
        <h3 className="font-bold text-base text-center mt-4 p-3">{title}</h3>
        <p className="text-sm text-center mt-4 px-4">{desc}</p>
      </div>
      <div className="flex flex-col mx-auto mb-4 ">{children}</div>
    </article>
  );
};

export default ProgramFrame;
