import { useDispatch } from 'react-redux';
import { back, start } from '../../test-slice/emoTestSlice';
import { setLoading } from '../../test-slice/testSlice';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';

export const EmoTestInfo = () => {
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
      <div className="font-semibold text-slate-400">
        <p className="mb-4 ">
          Emocionalna inteligencija (EI) odnosi se na sposobnost prepoznavanja,
          razumijevanja i upravljanja vlastitim emocijama, kao i emocijama
          drugih ljudi. U današnjem svijetu, emocionalna inteligencija je
          ključna vještina koja može utjecati na sve aspekte života – od osobnih
          odnosa do profesionalnog uspjeha.
        </p>
        <p className="mb-4">
          Ovaj test je osmišljen kako bi vam pomogao procijeniti vašu razinu
          emocionalne inteligencije kroz nekoliko ključnih dimenzija:
          samosvijest, samoregulacija, motivacija, empatija i socijalne
          vještine. Uz pomoć ovog testa, možete otkriti svoje jake strane, ali i
          područja koja bi mogla zahtijevati dodatni rad i razvoj.
        </p>
        <p className="mb-2">Na kraju testa dobijate rezultate po slede:</p>
        <ul className="ml-2 text-sm">
          <li>- Test emocionalne inteligencije</li>
          <li>- Odnos prema sebi: Intimna emocionalna inteligencija</li>
          <li>- Odnos prema sebi: Intimna emocionalna inteligencija</li>
          <li>- Odnos prema životu: Emocionalna inteligencija egzistencije</li>
        </ul>
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
