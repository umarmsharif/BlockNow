import * as React from "react";
import { cn } from "@/lib/utils";
import heroVideo from "@assets/Suggestion_2_1770294627865.mp4";

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
          relative
          overflow-hidden
          rounded-xl
        "
        aria-hidden="true"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-150"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 grid place-items-center">
          <span className="text-gradient text-2xl sm:text-3xl font-bold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">B</span>
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
