'use client';
import Image from 'next/image';
import { TestNavigation } from './test-navigation';
import { useSession } from 'next-auth/react';
import { setUserId } from '../test-slice/testSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export const MainInfoTestFrame = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user.id) {
      dispatch(setUserId(session?.user.id));
    }
  }, [session, dispatch]);

  return (
    <div className=" flex ">
      <div>
        <p className=" text-slate-600 mt-10 text-[17px] ">
          Na ovom delu platforme omoguceno vam je da testirate svoje znanje
          putem testova iz oblasti web developmenta i soft veština
          (komunikacija, emocionalna inteligencija, liderstvo), ovde imate
          jedinstvenu priliku za sveobuhvatan razvoj veština. Ove platforme
          kombinuju tehničke aspekte, potrebne za uspešnu karijeru u digitalnom
          svetu, sa ključnim interpersonalnim veštinama, koje su neophodne za
          efikasnu saradnju i liderstvo u profesionalnom okruženju.
        </p>
        <hr className="my-6 h-0.5 border-t-0 bg-slate-200 dark:bg-white/10" />

        <TestNavigation />
        <hr className="my-8 h-0.5 border-t-0 bg-slate-200 dark:bg-white/10" />
      </div>

      <Image
        src="/des/main_test_image.jpg"
        alt="main test image"
        width={500}
        height={500}
      />
    </div>
  );
};