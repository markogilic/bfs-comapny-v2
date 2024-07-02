'use client';
import SubHeading from '../ui/subHeading';
import BlogFrame from '../ui/BlogFrame';
import PrimaryBtn from '../ui/primary-btn';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileBlogs from './mobile/MobileBlogs';

const Bloags = ({ postsMetadata }: any) => {
  const width = UseScreenWidth();
  const bsetPostMetadata = postsMetadata.slice(0, 4);
  return (
    <section className="bg-card-bg md:py-[96px] py-12 px-4 flex flex-col gap-8 mb-1">
      {width < 768 ? (
        <MobileBlogs />
      ) : (
        <>
          <SubHeading>NAJNOVIJE NA NAŠEM BLOGU</SubHeading>
          <div className="flex px-[150px] gap-6 mt-12">
            {bsetPostMetadata.map((blogPost: any) => (
              <BlogFrame key={blogPost.slug} blogPost={blogPost} />
            ))}
          </div>
          <PrimaryBtn path="/blog">POSETI BLOG</PrimaryBtn>
        </>
      )}
    </section>
  );
};

export default Bloags;
