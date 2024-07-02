import getPostMetadata from '@/lib/getPostMetaData';
import PageBlogFrame from './_components/PageBlogFrame';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';

const Blog = () => {
  const postMetadata = getPostMetadata('post');

  return (
    <main className=" pb-12 ">
      <PageBlogFrame postMetadata={postMetadata} />
      <BestProgramsSection />
    </main>
  );
};

export default Blog;
