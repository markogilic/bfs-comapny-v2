import { useDispatch } from 'react-redux';
import { back, start } from '../../test-slice/leadSlice';
import { setLoading } from '../../test-slice/testSlice';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';

export const LeatTestInfo = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setLoading());
    dispatch(back());
  };

  return (
    <div className="max-w-[850px] bg-white shadow-inner border flex flex-col  gap-4   border-slate-300 px-8 py-4 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold text-slate-400 ">
          Na <span className="text-btn-primary">KORAK</span> do testa
        </span>
        <button onClick={handleBack}>
          <IoArrowBackCircleOutline size={28} color="#d55617" />
        </button>
      </div>
      <div className=" flex justify-between items-center bg-btn-primary/15 px-4 py-2 rounded-md text-btn-primary-hover ">
        <p className="px-2">
          {' '}
          <span className="font-semibold">Napomena:</span> <br /> Obavezno pre
          pocetka svakog testa detaljno procitajte upustvo.
        </p>
        <BsInfoCircle size={28} />
      </div>
      <div className="font-semibold text-slate-400 py-4">
        <span className="text-black text-lg ">Liderstvo</span> je proces
        uticanja na ljude kako bi se postigli zajednički ciljevi. Dobri lideri
        inspirišu svoje timove, motivišu ih i usmeravaju ka uspehu kroz jasno
        definisanu viziju i smernice. Efikasan lider prilagođava svoj stil
        vođenja u zavisnosti od situacije, potreba tima i specifičnih izazova.
        Ključ uspešnog liderstva leži u sposobnosti da se balansiraju autoritet
        i saradnja, uz stalnu komunikaciju i poverenje. Postoji mnogo različitih
        stilova liderstva, a svaki od njih može biti efikasan u različitim
        situacijama. Tim postaje jači kada se koristi kombinacija različitih
        stilova vođenja. Kada ljudi postanu lideri, obično imaju svoj omiljeni
        stil. Ovaj test će vam pomoći da otkrijete koji stil vođenja, onaj koji
        vam je najdominantniji. Važno je napomenuti da se taj stil može menjati
        kako se razvijate i stičete nova iskustva.
      </div>
      <button
        onClick={() => dispatch(start())}
        className="text-white uppercase bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
      >
        Zapocni Test
      </button>
    </div>
  );
};
