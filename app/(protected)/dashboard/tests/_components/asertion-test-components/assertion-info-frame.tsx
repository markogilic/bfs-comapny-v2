import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
import { setLoading } from '../../test-slice/testSlice';
import { back, start } from '../../test-slice/assertionSlice';
import { useDispatch } from 'react-redux';

export const AssertionInfoFrame = () => {
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
      <p className="text-[18px] text-slate-500 ">
        <span className="font-semibold">Asertivnost</span> omogućava lideru da
        jasno komunicira, postavi očekivanja i efikasno rešava konflikte, dok
        istovremeno uvažava tuđa mišljenja. Time gradi poverenje i poštovanje u
        timu, podstiče odgovornost i omogućava konstruktivne povratne
        informacije. Asertivni lideri su emocionalno stabilni i zadržavaju
        smirenost u stresnim situacijama, što im pomaže da donose racionalne
        odluke. Ova osobina podstiče proaktivnost i inicijativu u timu,
        stvarajući okruženje u kojem svi mogu doprineti i napredovati.
      </p>
      <p className="text-[18px] text-slate-500 mb-4">
        Asertivnost se sastoji od tri ključne komponente: <br />
        <span className="font-semibold">1. Samopouzdanje</span> – uverenje u
        sopstvene sposobnosti i vrednost, <br />
        <span className="font-semibold">2. Empatija</span> – sposobnost da se
        stavi u tuđu kožu i razume tuđe potrebe i osećaje, <br />
        <span className="font-semibold">3. Jasan izraz</span> – sposobnost da se
        jasno i precizno izrazi svoje misli, osećanja i potrebe.
      </p>
      <button
        onClick={() => dispatch(start())}
        className="text-white uppercase bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
      >
        Zapocni Test
      </button>
    </div>
  );
};
