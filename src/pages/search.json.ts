import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);

export async function get({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  const filteredPosts = posts.reduce((acc, post) => {
    const postTitleAndDescription = `${post.data.title} ${post.data.description}`;
    if (postTitleAndDescription.toLowerCase().includes(query.toLowerCase())) {
      acc.push(post);
    }
    return acc;
  }, []);
  return new Response(JSON.stringify(filteredPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
