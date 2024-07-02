import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/lib/getPostMetaData';
import fs from 'fs';
import matter from 'gray-matter';
import BlogFrame from '@/app/_components/ui/BlogFrame';
import styles from './css/styles.module.css';

function getPostContent(slug: string) {
  const folder = 'post/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
}

function getBestPostMetadata() {
  const postsMetadata = getPostMetadata('post');
  const bestPostMetadata = postsMetadata.slice(0, 3);
  return bestPostMetadata;
}

// export const getStaticParams = async () => {
//   const posts = getPostMetadata('post');

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const id = params?.slug ? '-' + params?.slug : '';

  return {
    title: `BFS Company ${id.replaceAll('_', ' ')}`,
  };
}

export default function SingelPost({ params }: { params: any }) {
  const { slug } = params;
  const post = getPostContent(slug);
  const bestPostMetadata = getBestPostMetadata();

  return (
    <main className="mt-[61px] md:py-[96px] md:px-[150px] mx-auto flex gap-[80px] bg-card-bg">
      <article className={styles.blogContent}>
        <Markdown>{post.content}</Markdown>
      </article>
      <aside className="flex flex-col gap-4">
        {bestPostMetadata.map((post) => (
          <BlogFrame key={post.slug} blogPost={post} />
        ))}
      </aside>
    </main>
  );
}
