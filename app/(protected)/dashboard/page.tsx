import { auth, signOut } from '@/auth';
import { getTestRecordsByUserId } from '@/data/get-test-records';
import { TestListRecords } from './_components/test-records-list';
const DashBoardPage = async () => {
  const session = await auth();

  if (!session?.user.id) {
    return null;
  }
  const testRecords = await getTestRecordsByUserId(session.user.id);

  if (testRecords?.length === 0) {
    return (
      <div className="  bg-white flex flex-col  px-[150px] gap-4   ">
        <h1 className="text-3xl font-semibold text-slate-800">
          Dobrodošli na našu platformu!
        </h1>
        <p className="text-lg font-semibold text-slate-400">
          Drago nam je što ste se pridružili zajednici koja vam omogućava da
          testirate svoje znanje iz različitih oblasti! Naša platforma je
          osmišljena da vam pruži interaktivno i korisno iskustvo u učenju i
          evaluaciji. Bez obzira da li želite da se usavršavate u finansijama,
          emocionalnoj inteligenciji, liderstvu, web razvoju ili nekoj drugoj
          oblasti, na pravom ste mestu!
        </p>
      </div>
    );
  }
  return <TestListRecords testRecords={testRecords} />;
};

export default DashBoardPage;
