import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
import { back } from '../test-slice/testSlice';
import { useDispatch } from 'react-redux';

interface InfoTestFrameProps {
  type: string;
  children: React.ReactNode;
}
export const InfoTestFrame = ({ type, children }: InfoTestFrameProps) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-[600px] bg-white shadow-inner border flex flex-col  gap-4   border-slate-300 lg:px-8 px-4 py-4 mx-2 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="lg:text-2xl text-xl font-semibold text-slate-400 ">
          Na <span className="text-btn-primary">KORAK</span> do testa
        </span>
        <button onClick={() => dispatch(back())}>
          <IoArrowBackCircleOutline size={28} color="#d55617" />
        </button>
      </div>
      <div className=" flex justify-between items-center bg-btn-primary/15 px-4 py-2 rounded-md text-btn-primary-hover text-sm lg:text-base ">
        <p className="px-2">
          {' '}
          <span className="font-semibold">Napomena:</span> <br /> Obavezno pre
          pocetka svakog testa detaljno procitajte upustvo.
        </p>
        <BsInfoCircle size={28} />
      </div>
      <p className="lg:text-[18px] text-sm text-slate-500">
        Ovaj{' '}
        <span className="text-[#d55617] font-semibold uppercase">{type}</span>{' '}
        test sadrži 30 pitanja i vremensko ograničenje od 10 minuta. Pitanja su
        različitog tipa, a za svako pitanje odaberite tačan odgovor. Vreme će
        automatski krenuti čim započnete test, i test će biti automatski
        prekinut kada istekne 10 minuta. Budite pažljivi, jer nećete moći da se
        vratite na prethodna pitanja kada vreme istekne. Srećno!
      </p>
      {children}
    </div>
  );
};
