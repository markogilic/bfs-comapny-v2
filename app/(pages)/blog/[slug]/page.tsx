import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/lib/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'post/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
};

export const getStaticPaths = async () => {
  const posts = getPostMetaData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

const SingelPost = ({ params }: { params: any }) => {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <div className="mt-24 p-[100px]">
      <h1 className="text-3xl">{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default SingelPost;
