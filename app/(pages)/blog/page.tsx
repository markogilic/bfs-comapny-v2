import getPostMetadata from '@/lib/getPostMetaData';
import PageBlogFrame from './_components/PageBlogFrame';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';
import { Metadata } from 'next';

const baseUrl = process.env.BASE_METADATA_IMAGE_URL;
const imageName = 'metadata_blog_page.jpg';
const openGraphImageUrl = `${baseUrl}${imageName}`;

export const metadata: Metadata = {
  title: 'Blog | BFS Company',
  description:
    'Pratite naš blog za najnovije savete i uvide u oblasti finansija, kontrolinga, liderstva i web programiranja!',
  openGraph: {
    title: 'Blog  | BFS Company',
    description:
      'Pratite naš blog za najnovije savete i uvide u oblasti finansija, kontrolinga, liderstva i web programiranja!',
    images: [
      {
        url: openGraphImageUrl,
        width: 1200,
        height: 630,
        alt: 'Blog',
      },
    ],
  },
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
