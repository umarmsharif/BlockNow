import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export function NeonButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        `
        relative overflow-hidden rounded-xl px-5 py-5 sm:px-6
        bg-gradient-to-r from-primary to-primary/70
        text-primary-foreground
        shadow-[0_20px_55px_hsl(var(--primary)/0.35)]
        hover:shadow-[0_26px_70px_hsl(var(--primary)/0.45)]
        hover:-translate-y-0.5 active:translate-y-0
        transition-all duration-200
        `,
        className,
      )}
      data-testid={props["data-testid"] ?? "neon-button"}
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-0
          bg-[radial-gradient(120px_80px_at_20%_30%,hsl(var(--accent)/0.35),transparent_60%),radial-gradient(160px_110px_at_80%_10%,hsl(var(--neon-3)/0.25),transparent_60%)]
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />
      <span className="relative inline-flex items-center whitespace-nowrap">{props.children}</span>
    </Button>
  );
}
