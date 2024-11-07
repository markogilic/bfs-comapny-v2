import { useDispatch } from 'react-redux';
import { back, start } from '../../test-slice/emoTestSlice';
import { setLoading } from '../../test-slice/testSlice';

import { TestInfoFrame } from '../static/TestInfoFrame';

export const EmoTestInfo = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setLoading());
    dispatch(back());
  };
  return (
    <TestInfoFrame onClick={handleBack}>
      <div className="font-semibold text-slate-400 text-sm lg:text-base">
        <p className="mb-4 ">
          <span className="text-black lg:text-xl text-base">
            Emocionalna inteligencija (EI)
          </span>{' '}
          odnosi se na sposobnost prepoznavanja, razumijevanja i upravljanja
          vlastitim emocijama, kao i emocijama drugih ljudi. U današnjem
          svijetu, emocionalna inteligencija je ključna vještina koja može
          utjecati na sve aspekte života – od osobnih odnosa do profesionalnog
          uspjeha.
        </p>
        <p className="mb-4">
          Ovaj test je osmišljen kako bi vam pomogao procijeniti vašu razinu
          emocionalne inteligencije kroz nekoliko ključnih dimenzija:
          samosvijest, samoregulacija, motivacija, empatija i socijalne
          vještine. Uz pomoć ovog testa, možete otkriti svoje jake strane, ali i
          područja koja bi mogla zahtijevati dodatni rad i razvoj.
        </p>
        <p className="mb-2">Na kraju testa dobijate rezultate po slede:</p>
        <ul className="ml-2 lg:text-sm text-[12px] font-semibold ">
          <li>- Test emocionalne inteligencije</li>
          <li>- Odnos prema sebi: Intimna emocionalna inteligencija</li>
          <li>- Odnos prema sebi: Intimna emocionalna inteligencija</li>
          <li>- Odnos prema životu: Emocionalna inteligencija egzistencije</li>
        </ul>
      </div>
      <button
        onClick={() => dispatch(start())}
        className="text-white uppercase text-sm lg:text-base bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
      >
        Započni Test
      </button>
    </TestInfoFrame>
  );
};
