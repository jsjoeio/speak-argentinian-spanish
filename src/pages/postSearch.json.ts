import Fuse from "fuse.js";
import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);

export async function get({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const limit = url.searchParams.get("limit");
  const fuse = new Fuse(posts, {
    includeScore: true,
    shouldSort: true,
    minMatchCharLength: 2,
    keys: [
      {
        name: "data.title",
        weight: 3,
      },
      {
        name: "data.description",
        weight: 2,
      },
      {
        name: "data.body",
        weight: 1,
      },
    ],
  });
  const filteredPosts = fuse.search(query);

  return new Response(
    limit
      ? JSON.stringify(filteredPosts.slice(0, +limit))
      : JSON.stringify(filteredPosts),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
