import Link from 'next/link';
import Image from 'next/image';

interface BlogFrameProps {
  title: string;
  date: string;
  bio: string;
  slug: string;
}

const BlogFrame = ({ blogPost }: { blogPost: BlogFrameProps }) => {
  const { title, date, bio, slug } = blogPost;

  return (
    <article className="bg-white  mx-4  overflow-hidden rounded-md shadow-sm w-[364px] p-4">
      <Image
        src={`/post_images/${slug}.jpg`}
        alt="blog"
        width={364}
        height={240}
      />

      <div className="p-3 flex flex-col gap-[10px]">
        <p className="text-sm text-bg-light">
          <span className="font-semibold text-black">Objavljeno: </span>
          {date}
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
