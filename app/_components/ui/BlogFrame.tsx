import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface BlogFrameProps {
  title: string;
  date: string;
  bio: string;
  slug: string;
}

const BlogFrame = ({ blogPost }: { blogPost: BlogFrameProps }) => {
  const { title, date, bio, slug } = blogPost;
  const displayDate = formatDate(date);
  return (
    <article className="bg-white mx-2 overflow-hidden rounded-md shadow-sm md:w-[354px] h-[560px] p-4  border border-black/10 ">
      <Image
        src={`/post_images/${slug}.jpg`}
        alt="blog"
        width={364}
        height={240}
      />

      <div className="p-3 flex flex-col gap-[10px]">
        <p className="text-sm text-bg-light">
          <span className="font-semibold text-black">Objavljeno: </span>
          {displayDate}
        </p>
        <h3 className="text-lg font-semibold uppercase py-2">{title}</h3>
        <p className="text-base ">{bio}</p>
        <Link
          href={`/blog/${slug}`}
          replace
          className="underline text-bg-light hover:text-btn-primary  transition-colors"
        >
          Pročitaj ceo članak
        </Link>
      </div>
    </article>
  );
};

export default BlogFrame;
