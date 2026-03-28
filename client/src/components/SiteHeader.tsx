import * as React from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, PhoneCall, CalendarCheck } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { DemoRequestDialog } from "@/components/DemoRequestDialog";
import { NeonButton } from "@/components/NeonButton";
import { cn } from "@/lib/utils";

function NavLink({ href, children, testId }: { href: string; children: React.ReactNode; testId: string }) {
  const [loc] = useLocation();
  const active = loc === href;

  return (
    <Link
      href={href}
      data-testid={testId}
      className={cn(
        `
        px-3 py-2 rounded-xl text-sm font-semibold
        transition-all duration-200
        hover:bg-secondary/70 hover:text-foreground
        focus:outline-none focus:ring-4 focus:ring-[hsl(var(--accent)/0.16)]
        `,
        active ? "bg-secondary/80 text-foreground" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-background/70 backdrop-blur-xl border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group" data-testid="header-home">
            <BrandMark />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            <NavLink href="/" testId="nav-home">
              Home
            </NavLink>
            <NavLink href="/contact" testId="nav-contact">
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => { window.location.href = "tel:02034791300"; }}
              data-testid="header-call"
              className="hidden lg:inline-flex rounded-xl hover:bg-secondary/60"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Call
            </Button>

            <DemoRequestDialog
              context="site"
              trigger={
                <NeonButton data-testid="header-book-demo" className="hidden sm:inline-flex h-9 px-4 text-sm">
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  Book a Demo
                  <ArrowRight className="h-4 w-4 ml-2 opacity-70" />
                </NeonButton>
              }
              onOpenChange={() => {}}
            />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
