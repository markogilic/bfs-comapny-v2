'use client';
import SubHeading from '../ui/subHeading';
import BlogFrame from '../ui/BlogFrame';
import PrimaryBtn from '../ui/primary-btn';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileBlogs from './mobile/MobileBlogs';
import { blogPosts } from '@/lib/data';

const Bloags = () => {
  const width = UseScreenWidth();
  return (
    <section className="bg-card-bg md:py-[96px] py-12 px-4 flex flex-col gap-8 ">
      {width < 768 ? (
        <MobileBlogs />
      ) : (
        <>
          <SubHeading>NAJNOVIJE NA NAŠEM BLOGU</SubHeading>
          <div className="flex px-[150px] gap-6 mt-12">
            {blogPosts.map((blogPost) => (
              <BlogFrame key={blogPost.id} blogPost={blogPost} />
            ))}
          </div>
          <PrimaryBtn path="/blog">POSETI BLOG</PrimaryBtn>
        </>
      )}
    </section>
  );
};

export default Bloags;
