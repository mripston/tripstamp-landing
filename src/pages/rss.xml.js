import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, BLOG } from '../config';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => p.data.date <= new Date())
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${SITE.name} Blog`,
    description: BLOG.rssDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
