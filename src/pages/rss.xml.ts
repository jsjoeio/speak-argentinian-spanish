import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { CollectionEntry, getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

function sortPosts(a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) {
  return Number(b.data.date) - Number(a.data.date);
}

function formatDate(date: Date) {
  date.setUTCHours(0);
  return date;
}

export const get: APIRoute = async (context) => {
  const unsortedPosts = await getCollection("blog");
  const posts = unsortedPosts.sort((a, b) => sortPosts(a, b));

  console.log(
    posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: item.slug,
      content: sanitizeHtml(parser.render(item.body)),
      pubDate: formatDate(item.data.date),
    }))
  );

  return rss({
    title: "Speak Argentinan Spanish Blog",
    description:
      "Learn about the Rioplatense dialect spoken in Argentina, from finding the best content, to tips and tricks, and vocabulary you wish you knew before.",
    site: context.site!.href,
    // The list of items for your RSS feed, sorted.
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: item.slug,
      content: sanitizeHtml(parser.render(item.body)),
      pubDate: formatDate(item.data.date),
    })),
  });
};
