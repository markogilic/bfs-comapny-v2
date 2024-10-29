import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const LeadResultComponents = () => {
  const {
    autkratskiPoints,
    situacioniPoints,
    demokratskiPoints,
    slobodniPoints,
  } = useSelector((state: RootState) => state.leadTest);

  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 px-8 py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">
        {autkratskiPoints} / {situacioniPoints} / {demokratskiPoints} /{' '}
        {slobodniPoints}
      </div>
    </div>
  );
};
