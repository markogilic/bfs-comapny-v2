import { RiSpeakFill } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaHeadSideVirus } from 'react-icons/fa6';
import { FaHtml5 } from 'react-icons/fa';
import { BsFiletypeCss } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { setTestName } from '../test-slice/testSlice';
import { useDispatch } from 'react-redux';

export const TestNavigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      <span className="inline-block   text-slate-400">Soft Skill Testovi:</span>
      <div className="flex gap-4 mt-4">
        <div
          onClick={() => dispatch(setTestName('assertion'))}
          className=" cursor-pointer w-[115px] h-[115px] border shadow-inner rounded-xl  bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <RiSpeakFill size={32} color="#495696" />
          <p className="text-bg-light text-sm font-semibold">Asertivnost</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('lead'))}
          className=" cursor-pointer w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <FaPeopleGroup size={32} color="#495696" />
          <p className="text-bg-light font-semibold text-sm">Stil Liderstva</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('emo'))}
          className=" cursor-pointer pt-4 w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <FaHeadSideVirus size={30} color="#495696" />
          <p className="text-bg-light font-semibold text-sm text-center">
            Emocionalna Inteligencija
          </p>
        </div>
      </div>
      <span className="inline-block mt-4  text-slate-400">
        Web-Skill Testovi:
      </span>
      <div className="flex gap-4 mt-4">
        <div
          onClick={() => dispatch(setTestName('html'))}
          className=" cursor-pointer pt-4 w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <FaHtml5 size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">HTML</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('css'))}
          className=" cursor-pointer pt-4 w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <BsFiletypeCss size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">CSS</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('javascript'))}
          className=" cursor-pointer pt-4 w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <IoLogoJavascript size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">
            JavaScript
          </p>
        </div>
        <div
          onClick={() => dispatch(setTestName('react'))}
          className=" cursor-pointer pt-4 w-[115px] h-[115px] border shadow-inner rounded-xl bg-white border-slate-300 flex flex-col  items-center justify-center  gap-2"
        >
          <FaReact size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">React</p>
        </div>
        {/* <div className=" cursor-pointer rounded-full w-fit px-4 py-2 bg-btn-primary-hover border-slate-300  flex items-center justify-center  gap-2">
          <FaHtml5 size={26} color="white" />
          <p className="text-white">HTML</p>
        </div>
        <div className=" cursor-pointer rounded-full w-fit px-4 py-2 bg-btn-primary-hover border-slate-300  flex items-center justify-center  gap-2">
          <BsFiletypeCss size={26} color="white" />
          <p className="text-white">CSS</p>
        </div>
        <div className=" cursor-pointer rounded-full w-fit px-4 py-2 bg-btn-primary-hover border-slate-300  flex items-center justify-center  gap-2">
          <IoLogoJavascript size={26} color="white" />
          <p className="text-white">JavaScript</p>
        </div>
        <div className=" cursor-pointer rounded-full w-fit px-4 py-2 bg-btn-primary-hover border-slate-300  flex items-center justify-center  gap-2">
          <IoLogoJavascript size={26} color="white" />
          <p className="text-white">JavaScript</p>
        </div> */}
      </div>
    </>
  );
};
