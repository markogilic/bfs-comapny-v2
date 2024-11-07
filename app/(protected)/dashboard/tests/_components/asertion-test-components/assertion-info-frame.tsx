import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
import { setLoading } from '../../test-slice/testSlice';
import { back, start } from '../../test-slice/assertionSlice';
import { useDispatch } from 'react-redux';
import { TestInfoFrame } from '../static/TestInfoFrame';

export const AssertionInfoFrame = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setLoading());
    dispatch(back());
  };
  return (
    <TestInfoFrame onClick={handleBack}>
      <p className="lg:text-[18px] text-slate-500 text-sm ">
        <span className="font-semibold">Asertivnost</span> omogućava lideru da
        jasno komunicira, postavi očekivanja i efikasno rešava konflikte, dok
        istovremeno uvažava tuđa mišljenja. Time gradi poverenje i poštovanje u
        timu, podstiče odgovornost i omogućava konstruktivne povratne
        informacije. Asertivni lideri su emocionalno stabilni i zadržavaju
        smirenost u stresnim situacijama, što im pomaže da donose racionalne
        odluke. Ova osobina podstiče proaktivnost i inicijativu u timu,
        stvarajući okruženje u kojem svi mogu doprineti i napredovati.
      </p>
      <p className="lg:text-[18px] text-sm text-slate-500 mb-4">
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
        className="text-white uppercase text-sm lg:text-base bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
      >
        Započni Test
      </button>
    </TestInfoFrame>
  );
};
