import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogFrameProps {
  imageUrl: StaticImageData;
  title: string;
  date: string;
  desc: string;
  id: number;
}

const BlogFrame = ({ blogPost }: { blogPost: BlogFrameProps }) => {
  const { imageUrl, title, date, desc, id } = blogPost;
  return (
    <div className="bg-white mx-4  overflow-hidden rounded-sm">
      <Image src={imageUrl} alt="blog" />
      <div className="p-3 flex flex-col gap-[10px]">
        <p className="text-sm">{date}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base ">{desc}</p>
        <Link
          href="/blog/[id]"
          as="/blog/1"
          className="underline text-bg-light hover:text-btn-primary  transition-colors"
        >
          Prođitaj ceo članak
        </Link>
      </div>
    </div>
  );
};

export default BlogFrame;
