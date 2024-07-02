import getPostMetadata from '@/lib/getPostMetaData';
import BlogFrame from '@/app/_components/ui/BlogFrame';

const Blog = () => {
  const postMetadata = getPostMetadata('post');

  return (
    <main className="py-[120px]   bg-card-bg">
      <div className="w-[1140px] mx-auto grid grid-cols-3 grid-rows-2 gap-4">
        {postMetadata.map((post) => (
          <BlogFrame key={post.slug} blogPost={post} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
