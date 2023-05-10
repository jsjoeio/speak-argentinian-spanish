import { getCollection } from "astro:content";

export async function getSortedBlogPosts() {
  const unsortedContent = await getCollection("blog");
  const posts = unsortedContent.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return posts;
}
