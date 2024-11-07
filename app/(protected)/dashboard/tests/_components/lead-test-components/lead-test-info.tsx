import { useDispatch } from 'react-redux';
import { back, start } from '../../test-slice/leadSlice';
import { setLoading } from '../../test-slice/testSlice';

import { TestInfoFrame } from '../static/TestInfoFrame';

export const LeatTestInfo = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setLoading());
    dispatch(back());
  };

  return (
    <TestInfoFrame onClick={handleBack}>
      <div className="font-semibold text-sm lg:text-base text-slate-400 py-4">
        <span className="text-black text-lg  ">Liderstvo</span> je proces
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
        className="text-white text-sm lg:text-base uppercase bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
      >
        Započni Test
      </button>
    </TestInfoFrame>
  );
};
