import * as React from "react";
import { Link } from "wouter";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { BrandMark } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <BrandMark badge="AI receptionist for GP practices & dental clinics" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md" data-testid="footer-tagline">
                BlockNow answers every patient call, books appointments in real time, and works 24/7 — so your
                reception team can focus on the patients in front of them.
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-sm font-bold tracking-tight">Contact</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-accent" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-foreground/90 hover:text-foreground hover:underline underline-offset-4 transition"
                    data-testid="footer-email"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-accent" />
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-foreground/90 hover:text-foreground hover:underline underline-offset-4 transition"
                    data-testid="footer-phone"
                  >
                    {CONTACT.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-accent" />
                  <a
                    href={`tel:${CONTACT.mobile.replace(/\s+/g, "")}`}
                    className="text-foreground/90 hover:text-foreground hover:underline underline-offset-4 transition"
                    data-testid="footer-mobile"
                  >
                    {CONTACT.mobile}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                  <p className="text-foreground/85" data-testid="footer-address">
                    {CONTACT.address}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 mt-0.5 text-accent" />
                  <p className="text-foreground/85" data-testid="footer-registered">
                    GDPR Compliant &middot; Registered in {CONTACT.registeredIn}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-sm font-bold tracking-tight">Explore</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </div>

              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                © {new Date().getFullYear()} BlockNow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
