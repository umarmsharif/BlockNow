import * as React from "react";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  labelClassName,
  badge = "AI Booking Agent",
}: {
  className?: string;
  labelClassName?: string;
  badge?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)} data-testid="brand-mark">
      <div
        className="
          h-10 w-10 sm:h-11 sm:w-11
          grid place-items-center
        "
        aria-hidden="true"
      >
        <div
          className="
            grid place-items-center
          "
        >
          <span className="text-gradient text-2xl sm:text-3xl font-bold leading-none">B</span>
        </div>
      </div>

      <div className="leading-tight">
        <div className={cn("text-base sm:text-lg font-bold tracking-tight", labelClassName)}>
          Block<span className="text-gradient">Now</span>
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">{badge}</div>
      </div>
    </div>
  );
}
