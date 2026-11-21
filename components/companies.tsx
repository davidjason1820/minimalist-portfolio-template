import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import {
  ClaudeMark,
  KlaviyoMark,
  N8nMark,
  ShopifyMark,
  SupabaseMark,
  WordPressMark,
} from "./icons/custom";

const iconClass = "size-4 text-white drop-shadow-xl drop-shadow-black/40";

export const Companies = () => {
  const tools = [
    {
      title: "Claude",
      icon: <ClaudeMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
    },
    {
      title: "WordPress",
      icon: <WordPressMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-slate-500 to-slate-700 ring-offset-slate-600",
    },
    {
      title: "Shopify",
      icon: <ShopifyMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
    },
    {
      title: "n8n",
      icon: <N8nMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-rose-400 to-rose-600 ring-offset-rose-500",
    },
    {
      title: "Klaviyo",
      icon: <KlaviyoMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
    },
    {
      title: "Supabase",
      icon: <SupabaseMark className={iconClass} />,
      boxClassName:
        "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
    },
  ];

  return (
    <section>
      <Subheading>Tools I use</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <div key={tool.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={tool.boxClassName}>{tool.icon}</Box>
              <p className="text-foreground text-sm font-medium">
                {tool.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
