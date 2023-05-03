import Fuse from "fuse.js";
import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
); // is there a way to cache this?

const processedPosts = posts.map((post) => ({
  slug: post.slug,
  data: {
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
  },
}));

const searchIndex = Fuse.createIndex(
  ["data.title", "data.description", "data.date", "slug"],
  processedPosts
);

export async function get({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const limit = url.searchParams.get("limit");
  const fuse = new Fuse(
    processedPosts,
    {
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
      ],
    },
    searchIndex
  );
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
