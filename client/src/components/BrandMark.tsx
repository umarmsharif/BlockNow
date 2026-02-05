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
          neon-frame noise-overlay
          h-10 w-10 sm:h-11 sm:w-11
          grid place-items-center
          shadow-[0_30px_80px_hsl(var(--accent)/0.18)]
        "
        aria-hidden="true"
      >
        <div
          className="
            h-[34px] w-[34px] sm:h-[38px] sm:w-[38px]
            rounded-xl
            bg-gradient-to-br from-primary/25 via-accent/10 to-transparent
            border border-white/10
            grid place-items-center
          "
        >
          <span className="text-gradient text-lg sm:text-xl leading-none">B</span>
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
