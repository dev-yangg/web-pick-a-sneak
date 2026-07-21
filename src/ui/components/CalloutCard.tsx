import { ArrowRight } from "lucide-react";
import type { CalloutCardProps } from "../../types/shared.types";
import { Link } from "react-router";

interface Props extends CalloutCardProps {
  headlineWrapper?: "h2" | "h3";
  imageUrl?: string;
  className?: string;
}

const descriptionClassMap: Record<"h2" | "h3", string> = {
  h2: "text-subtitle",
  h3: "",
};

export default function CalloutCard({
  headlineWrapper = "h2",
  headline,
  description,
  to,
  ctaTitle,
  className,
}: Props) {
  const Headline = headlineWrapper;
  const descriptionClassName = descriptionClassMap[headlineWrapper];

  return (
    <article
      className={`flex flex-col outline outline-foreground/45 rounded-sm py-8 px-6 ${className ?? ""}`}>
      <Headline className="uppercase font-bold leading-tight">
        {headline}
      </Headline>
      <p
        className={`${descriptionClassName} font-light uppercase text-balance`}>
        {description}
      </p>
      {to && (
        <Link
          to={to}
          className="uppercase outline outline-foreground/45 hocus:outline-none hocus:bg-foreground hocus:text-background transition-colors duration-150 ease-linear self-start pl-4 pr-3 py-1 rounded-sm mt-4 flex items-center gap-4 group">
          <span className="font-semibold">{ctaTitle}</span>
          <span className="inline-block w-5 group-hocus:translate-x-1 transition-transform duration-500 ease-cubic">
            <ArrowRight />
          </span>
        </Link>
      )}
    </article>
  );
}
