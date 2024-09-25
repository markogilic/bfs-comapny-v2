// import { auth, signOut } from '@/auth';

const DashBoardPage = () => {
  // const session = await auth();

  return (
    <div className=" h-screen flex flex-col items-center px-[150px] gap-4  mt-4 ">
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
};

export default DashBoardPage;
