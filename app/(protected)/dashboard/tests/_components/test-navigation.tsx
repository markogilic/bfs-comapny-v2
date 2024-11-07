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
      <span className="flex mt-4  lg:justify-start  justify-center   text-slate-400">
        Soft Skill Testovi:
      </span>
      <div className="lg:flex  lg:flex-row lg:gap-4 gap-2 mt-4 grid grid-cols-2">
        <div
          onClick={() => dispatch(setTestName('assertion'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <RiSpeakFill size={32} color="#495696" />
          <p className="text-bg-light text-sm font-semibold">Asertivnost</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('lead'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <FaPeopleGroup size={32} color="#495696" />
          <p className="text-bg-light font-semibold text-sm">Stil Liderstva</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('emo'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <FaHeadSideVirus size={28} color="#495696" />
          <p className="text-bg-light font-semibold text-sm text-center hidden lg:block">
            Emocionalna Inteligencija
          </p>
          <p className="lg:hidden block text-bg-light font-semibold text-sm">
            EQ
          </p>
        </div>
      </div>
      <span className="flex mt-4  lg:justify-start  justify-center   text-slate-400">
        Web-Skill Testovi:
      </span>
      <div className="lg:flex  lg:flex-row lg:gap-4 gap-2 mt-4 grid grid-cols-2">
        <div
          onClick={() => dispatch(setTestName('html'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <FaHtml5 size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">HTML</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('css'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <BsFiletypeCss size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">CSS</p>
        </div>
        <div
          onClick={() => dispatch(setTestName('javascript'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <IoLogoJavascript size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">
            JavaScript
          </p>
        </div>
        <div
          onClick={() => dispatch(setTestName('react'))}
          className=" cursor-pointer lg:w-[115px] lg:h-[115px] lg:mx-0 lg:py-0 w-[90%] mx-auto py-2    border shadow-inner lg:rounded-xl rounded-md   bg-white border-slate-300 flex lg:flex-col  items-center justify-center  gap-2"
        >
          <FaReact size={32} color="#ec6e15" />
          <p className="text-btn-primary font-semibold  text-center">React</p>
        </div>
      </div>
    </>
  );
};
