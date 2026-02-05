import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  "data-testid": dataTestId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
      data-testid={dataTestId ?? "section-heading"}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-bold text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]" />
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        {title.split(" ").map((w, i) =>
          i === 0 ? (
            <span key={i} className="neon-underline">
              {w}
            </span>
          ) : (
            <span key={i}>{" " + w}</span>
          ),
        )}
      </h2>

      {description ? (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
