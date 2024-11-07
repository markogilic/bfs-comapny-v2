import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
export const TestInfoFrame = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div className="max-w-[850px] bg-white shadow-inner border flex flex-col  gap-4   border-slate-300  lg:px-8 px-4 py-4 mx-2 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="lg:text-2xl text-xl font-semibold text-slate-400 ">
          Na <span className="text-btn-primary">KORAK</span> do testa
        </span>
        <button onClick={onClick}>
          <IoArrowBackCircleOutline size={28} color="#d55617" />
        </button>
      </div>
      <div className=" flex justify-between items-center bg-btn-primary/15 px-4 py-2 rounded-md text-btn-primary-hover  text-sm lg:text-base ">
        <p className="px-2">
          {' '}
          <span className="font-semibold">Napomena:</span> <br /> Obavezno pre
          početka svakog testa detaljno pročitajte upustvo.
        </p>
        <BsInfoCircle size={28} />
      </div>

      {children}
    </div>
  );
};
