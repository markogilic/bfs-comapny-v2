import HeroSection from './_components/sections/HeroSection';
import MainSectionTwo from './_components/sections/MainSectionTwo';
import MainSectionThree from './_components/sections/MainSectionThree';
import BestProgramsSection from './_components/sections/BestProgramsSection';
import ProudOfSection from './_components/sections/ProudOfSection';
import ClientSection from './_components/sections/ClientSection';
import AboutUs from './_components/sections/AboutUs';
import Gallery from './_components/sections/Gallery';
import Bloags from './_components/sections/Bloags';
import NavigateToProgram from './_components/sections/NavigateToProgram';
// import InstagramPost from './_components/sections/InstagramPost';
import getPostMetadata from '@/lib/getPostMetaData';

export default function Home() {
  const postsMetadata = getPostMetadata('post');
  return (
    <main className=" min-h-screen ">
      <HeroSection />
      <MainSectionTwo />
      <MainSectionThree />
      <BestProgramsSection />
      <ProudOfSection />
      <ClientSection />
      <AboutUs />
      <Gallery />
      <Bloags postsMetadata={postsMetadata} />
      {/* <InstagramPost /> */}
      <NavigateToProgram />
    </main>
  );
}
