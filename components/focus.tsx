import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import { AiCodeMark, AutomationMark, StoreMark } from "./icons/custom";

export const Focus = () => {
  const focus = [
    {
      title: "Websites and digital experiences",
      description:
        "I look at how clearly your website explains your offer and guides visitors to the next step.",
      skeleton: (
        <StoreMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-lime-400 to-lime-600 ring-offset-lime-500",
    },
    {
      title: "AI and useful workflows",
      description:
        "I look for practical ways AI and automation could save time in your everyday work.",
      skeleton: (
        <AiCodeMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-rose-400 to-rose-600 ring-offset-rose-500",
    },
    {
      title: "Clear next steps for growth",
      description:
        "I point out a few useful improvements you can prioritize and act on.",
      skeleton: (
        <AutomationMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-fuchsia-400 to-fuchsia-600 ring-offset-fuchsia-500",
    },
  ];
  return (
    <section>
      <Subheading>What I focus on</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        {focus.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Box className={item.boxClassName}>{item.skeleton}</Box>
              <p className="text-foreground font-medium text-balance">
                {item.title}
              </p>
            </div>
            <p className="text-foreground/70 mt-2 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
