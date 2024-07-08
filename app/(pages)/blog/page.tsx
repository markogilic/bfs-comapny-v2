import getPostMetadata from '@/lib/getPostMetaData';
import PageBlogFrame from './_components/PageBlogFrame';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Pratite naš blog za najnovije savete i uvide u oblasti finansija, kontrolinga, liderstva i web programiranja!',
};

const Blog = () => {
  const postMetadata = getPostMetadata('post');
  const orderPostbYDate = postMetadata.sort((a: any, b: any) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <main className=" pb-12 ">
      <PageBlogFrame postMetadata={orderPostbYDate} />
      <BestProgramsSection />
    </main>
  );
};

export default Blog;
