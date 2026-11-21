import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPostDate } from "@/lib/format-post-date";

export type BlogPostLinkProps = {
  title: string;
  slug: string;
  publishedAt: string;
  href?: string;
  className?: string;
};

export function BlogPostLink({
  title,
  slug,
  publishedAt,
  href,
  className,
}: BlogPostLinkProps) {
  const linkClassName = cn(
    "group flex items-center justify-between gap-8 transition-colors duration-200 md:gap-20",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
      >
        <span className="text-foreground truncate group-hover:text-primary">
          {title}
        </span>
        <span className="text-foreground/50 shrink-0 font-mono text-xs font-light group-hover:text-primary">
          {formatPostDate(publishedAt)}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className={linkClassName}
    >
      <span className="text-foreground truncate group-hover:text-primary">
        {title}
      </span>
      <span className="text-foreground/50 shrink-0 font-mono text-xs font-light group-hover:text-primary">
        {formatPostDate(publishedAt)}
      </span>
    </Link>
  );
}
