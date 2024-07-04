import getPostMetadata from './getPostMetaData';

export default function getPostMetaDataBySlug(slug: string) {
  const posts = getPostMetadata('post');
  const post = posts.find((post) => post.slug === slug);
  return post;
}
