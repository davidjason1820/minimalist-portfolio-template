const SUBSTACK_FEED_URL = "https://davidjason1820.substack.com/feed";

export type SubstackPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary?: string;
  href: string;
};

const FEATURED_POST: SubstackPost = {
  slug: "substack-shopify-account-guide",
  title: "How to Get a Shopify Account for Free (and What It Really Costs After)",
  publishedAt: "",
  summary:
    "A practical guide to opening a Shopify account, choosing a plan, understanding costs, and getting paid.",
  href: "https://davidjason1820.substack.com/p/how-to-get-a-shopify-account-for",
};

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(x[0-9a-f]+|[0-9]+);/gi, (_, code: string) =>
      String.fromCodePoint(
        code.toLowerCase().startsWith("x")
          ? parseInt(code.slice(1), 16)
          : parseInt(code, 10),
      ),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim();
}

function readTag(item: string, tag: string) {
  const match = item.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"),
  );
  return match ? decodeXml(match[1]) : "";
}

function sortByPublishedDate(posts: SubstackPost[]) {
  return posts.sort((a, b) => {
    const dateA = Date.parse(a.publishedAt) || 0;
    const dateB = Date.parse(b.publishedAt) || 0;
    return dateB - dateA;
  });
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });

    if (!response.ok) return [FEATURED_POST];
    const xml = await response.text();
    const items = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) ?? [];

    const posts: SubstackPost[] = items
      .map((item, index) => {
        const title = readTag(item, "title");
        const href = readTag(item, "link");
        const publishedAt = readTag(item, "pubDate") || readTag(item, "dc:date");
        const summary = readTag(item, "description").replace(/<[^>]+>/g, "");

        return {
          slug: `substack-${index}`,
          title,
          publishedAt,
          summary,
          href,
        };
      })
      .filter((post) => post.title && post.href);

    if (!posts.some((post) => post.href === FEATURED_POST.href)) {
      posts.push(FEATURED_POST);
    }

    return sortByPublishedDate(posts);
  } catch {
    return [FEATURED_POST];
  }
}
