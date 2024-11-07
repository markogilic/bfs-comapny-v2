import { auth, signOut } from '@/auth';
import { getTestRecordsByUserId } from '@/data/get-test-records';
import { TestListRecords } from './_components/test-records-list';
import Image from 'next/image';
const DashBoardPage = async () => {
  const session = await auth();

  if (!session?.user.id) {
    return null;
  }
  // const testRecords = await getTestRecordsByUserId(session.user.id);
  const testRecords = [];

  if (testRecords?.length === 0) {
    return (
      <div className="  bg-white flex flex-col  md:px-[150px] px-4  gap-4 lg:h-[calc(100vh-100px)] justify-start md:pt-[100px] pt-[90px] items-start relative ">
        <h1 className="text-3xl font-semibold text-slate-800">
          Dobrodošli na našu platformu!
        </h1>
        <div className="lg:flex lg:justify-center lg:items-center mt-2">
          <p className="text-lg font-semibold text-slate-600">
            Drago nam je što ste se pridružili zajednici koja vam omogućava da
            testirate svoje znanje iz različitih oblasti! Naša platforma je
            osmišljena da vam pruži interaktivno i korisno iskustvo u učenju i
            evaluaciji. Bez obzira da li želite da se usavršavate u finansijama,
            emocionalnoj inteligenciji, liderstvu, web razvoju ili nekoj drugoj
            oblasti, na pravom ste mestu!
          </p>

          <Image
            src="/basic_dashboard_image_2.svg"
            alt="Welcome"
            width={800}
            height={800}
            className="absolute left-0 lg:top-0 top-[90px] opacity-15"
          />
        </div>
      </div>
    );
  }
  // return <TestListRecords testRecords={testRecords} />;
};

export default DashBoardPage;
