import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          data-testid="theme-toggle"
          className="
            rounded-xl border border-border/60 bg-secondary/70
            shadow-[0_10px_30px_hsl(var(--foreground)/0.08)]
            hover:bg-secondary hover:shadow-[0_18px_44px_hsl(var(--foreground)/0.12)]
            transition-all duration-200
          "
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-popover/90 backdrop-blur border border-border/70">
        <p className="text-sm">Toggle {isDark ? "light" : "dark"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
