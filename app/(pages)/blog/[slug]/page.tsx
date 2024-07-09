import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/lib/getPostMetaData';
import getPostMetaDataBySlug from '@/lib/getPostMetaDataBySlug';
import fs from 'fs';
import matter from 'gray-matter';
import BlogFrame from '@/app/_components/ui/BlogFrame';
import styles from './css/styles.module.css';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Share from './_components/Share';

function getPostContent(slug: string) {
  const folder = 'post/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
}

function getBestPostMetadataBYDate() {
  const postsMetadata = getPostMetadata('post');
  const orderPostbYDate = postsMetadata.sort((a: any, b: any) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
  const bestPostMetadata = orderPostbYDate.slice(0, 3);
  return bestPostMetadata;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('post');

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  // const id = params?.slug ? '-' + params?.slug : '';
  const postMetadata = getPostMetaDataBySlug(params.slug);
  const { title, bio } = postMetadata || { title: '', bio: '' };
  const imageUrl = `/post_images/${postMetadata?.slug}.jpg`;
  return {
    title: title,
    description: bio,
    imageUrl: imageUrl,
  };
}

export default function SingelPost({ params }: { params: any }) {
  const { slug } = params;
  const post = getPostContent(slug);
  const bestPostMetadata = getBestPostMetadataBYDate();

  const getSinglePostMetadata = getPostMetaDataBySlug(slug);
  const { title, date, bio } = getSinglePostMetadata || {};
  const disapyDate = formatDate(date);
  return (
    <>
      <main className="mt-[61px] md:px-0 md:py-0  pb-4 mx-auto flex md:flex-col flex-col-reverse px-4 pt-6 md:pb-12 items-center">
        <Image
          src={`/post_images/large/${slug}.jpg`}
          alt="hero"
          width={960}
          height={558}
          className="rounded-md shadow-md overflow-hidden md:block hidden"
        />
        <div className="flex items-end justify-between md:w-[960px]  md:py-4">
          {/* author data */}
          <div>
            <p className="text-gray-500">Autor:</p>
            <div className="flex justify-center items-center gap-4 mt-3">
              <Image
                src="/des/Mirjan-Matic.jpg"
                alt="Sliak autora:Mirjana Gilic"
                width={80}
                height={80}
                className="rounded-full shadow-md overflow-hidden "
                priority
              />
              <div>
                <p className="font-semibold">Mirjana Gilić</p>
                <p className="text-gray-500 text-sm">
                  Founder & Director BFS Company
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm">{disapyDate}</p>
        </div>
        <div className={styles.fade_rule}></div>
        <div className=" md:w-[960px]">
          <article className={styles.blogContent}>
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </main>
      <div className={styles.fade_rule}></div>
      <Share title={title} bio={bio} />
      <div className={styles.fade_rule}></div>

      <aside className=" mx-auto gap-4 w-fit mb-[96px] px-4  md:px-0 mt-4 md:mt-0 ">
        <h3 className="font-semibold text-xl mb-4 pl-2 md:mt-4">
          Najaktuelnije:
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          {bestPostMetadata.map((post) => (
            <BlogFrame key={post.slug} blogPost={post} />
          ))}
        </div>
      </aside>
    </>
  );
}
