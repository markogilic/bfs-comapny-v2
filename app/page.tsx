import HeroSection from './_components/sections/HeroSection';
import MainSectionTwo from './_components/sections/MainSectionTwo';
import MainSectionThree from './_components/sections/MainSectionThree';
import BestProgramsSection from './_components/sections/BestProgramsSection';
import ProudOfSection from './_components/sections/ProudOfSection';
import ClientSection from './_components/sections/ClientSection';

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <HeroSection />
      <MainSectionTwo />
      <MainSectionThree />
      <BestProgramsSection />
      <ProudOfSection />
      <ClientSection />
    </main>
  );
}
