// Astro imports
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

// utils
import { formatDate } from "../utils/formatDates";
import { getSortedBlogPosts } from "../utils/retreiveCollection";

// sanitizing
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export const get: APIRoute = async (context) => {
  const posts = await getSortedBlogPosts();

  return rss({
    title: "Speak Argentinan Spanish Blog",
    description:
      "Learn about the Rioplatense dialect spoken in Argentina, from finding the best content, to tips and tricks, and vocabulary you wish you knew before.",
    site: context.site!.href,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: item.slug,
      content: sanitizeHtml(parser.render(item.body)),
      pubDate: formatDate(item.data.date),
    })),
  });
};
