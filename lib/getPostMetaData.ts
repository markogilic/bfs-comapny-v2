import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function getPostMetadata(basePath: string) {
  // const folder = basePath + '/';
  // const fielPath = path.join(process.cwd(), basePath);
  const files = fs.readdirSync(path.join(process.cwd(), 'post'));
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      bio: matterResult.data.description,
      slug: filename.replace('.md', ''),
    };
  });
  return posts;
}
