import { auth, signOut } from '@/auth';

const DashBoardPage = async () => {
  // const session = await auth();

  return (
    <div className=" h-screen flex flex-col gap-6 justify-center items-center">
      <h1>DashBoard Page</h1>
      {/* <p className="w-[600px]">Session: {JSON.stringify(session)}</p> */}
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/auth/login' });
        }}
        className="mt-4"
      >
        <button
          type="submit"
          className="bg-bg-light px-4 py-2 text-white font-semibold rounded-lg hover:bg-black transition-colors"
        >
          Izloguj se{' '}
        </button>
      </form>
    </div>
  );
};

export default DashBoardPage;
