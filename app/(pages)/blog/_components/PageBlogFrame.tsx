'use client';
import React from 'react';
import BlogFrame from '@/app/_components/ui/BlogFrame';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import CarouselTempate from '@/app/_components/template/CarouselTempate';

interface BlogFrameProps {
  title: string;
  date: string;
  bio: string;
  slug: string;
}

const PageBlogFrame = ({
  postMetadata,
}: {
  postMetadata: BlogFrameProps[];
}) => {
  const width = UseScreenWidth();

  return (
    <div className="bg-card-bg pb-8 md:py-[96px] pt-[80px] ">
      {width < 768 ? (
        <CarouselTempate toShow={1} customeDots={true}>
          {postMetadata.map((post) => (
            <BlogFrame key={post.slug} blogPost={post} />
          ))}
        </CarouselTempate>
      ) : (
        <div className="w-[1140px] mx-auto grid grid-cols-3 grid-rows-2 gap-4">
          {postMetadata.map((post) => (
            <BlogFrame key={post.slug} blogPost={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PageBlogFrame;
