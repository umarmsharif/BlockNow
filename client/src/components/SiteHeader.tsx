import * as React from "react";
import { Link, useLocation } from "wouter";
import { MessageCircle, ArrowRight, PhoneCall } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getWhatsAppHref } from "@/lib/contact";
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
  const waHref = getWhatsAppHref();
  const disabled = !waHref;

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
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      if (!waHref) return;
                      window.open(waHref, "_blank", "noopener,noreferrer");
                    }}
                    disabled={disabled}
                    data-testid="header-whatsapp"
                    className="
                      hidden sm:inline-flex rounded-xl border border-border/60 bg-secondary/70
                      hover:bg-secondary transition-all duration-200
                    "
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                    <ArrowRight className="h-4 w-4 ml-2 opacity-70" />
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs bg-popover/90 backdrop-blur border border-border/70">
                {waHref ? (
                  <p className="text-sm">Open WhatsApp chat</p>
                ) : (
                  <p className="text-sm">
                    WhatsApp number not set yet. Update <span className="font-semibold">WHATSAPP_E164</span> in{" "}
                    <span className="font-semibold">client/src/lib/contact.ts</span>.
                  </p>
                )}
              </TooltipContent>
            </Tooltip>

            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                window.location.href = "tel:02034791300";
              }}
              data-testid="header-call"
              className="hidden lg:inline-flex rounded-xl hover:bg-secondary/60"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Call
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
