import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function BenefitCard({
  icon,
  title,
  description,
  tone = "primary",
  testId,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone?: "primary" | "accent" | "violet";
  testId: string;
}) {
  const glow =
    tone === "primary"
      ? "shadow-[0_20px_70px_hsl(var(--primary)/0.18)]"
      : tone === "accent"
        ? "shadow-[0_20px_70px_hsl(var(--accent)/0.16)]"
        : "shadow-[0_20px_70px_hsl(var(--neon-3)/0.14)]";

  const badgeBg =
    tone === "primary"
      ? "bg-primary/10 text-primary"
      : tone === "accent"
        ? "bg-accent/10 text-accent"
        : "bg-[hsl(var(--neon-3)/0.12)] text-[hsl(var(--neon-3))]";

  return (
    <Card
      data-testid={testId}
      className={cn(
        `
        relative overflow-hidden rounded-2xl border border-card-border/70
        bg-card/70 backdrop-blur
        p-6
        hover-lift
        `,
        glow,
      )}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative">
        <div className={cn("inline-flex items-center justify-center rounded-xl border border-border/60 px-3 py-2", badgeBg)}>
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
