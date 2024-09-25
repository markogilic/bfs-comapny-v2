interface InfoTestFrameProps {
  type: string;
  children: React.ReactNode;
}
export const InfoTestFrame = ({ type, children }: InfoTestFrameProps) => {
  return (
    <div className="max-w-[600px] shadow-inner border flex flex-col  gap-4 justify-center items-center  border-slate-300 px-8 py-4 rounded-md">
      <h1 className="font-bold text-xl">Dobrodošli na {type} test</h1>
      <p className="font-semibold text-slate-400">
        Ovaj {type} test sadrži 30 pitanja i vremensko ograničenje od 15 minuta.
        Pitanja su različitog tipa, a za svako pitanje odaberite tačan odgovor.
        Vreme će automatski krenuti čim započnete test, i test će biti
        automatski prekinut kada istekne 15 minuta. Budite pažljivi, jer nećete
        moći da se vratite na prethodna pitanja kada vreme istekne. Srećno!
      </p>
      {children}
    </div>
  );
};
