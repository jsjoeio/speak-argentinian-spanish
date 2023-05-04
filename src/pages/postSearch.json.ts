import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);

const processedPosts = posts.map((post) => ({
  slug: post.slug,
  data: {
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
  },
}));

export async function get({}) {
  return new Response(JSON.stringify(processedPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
