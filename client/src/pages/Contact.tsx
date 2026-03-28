import * as React from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

import { applySeo } from "@/lib/seo";
import { CONTACT } from "@/lib/contact";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { DemoRequestDialog } from "@/components/DemoRequestDialog";
import { NeonButton } from "@/components/NeonButton";

function usePageSeo() {
  React.useEffect(() => {
    applySeo({
      title: "Contact BlockNow — Email & demo request",
      description:
        "Get in touch with BlockNow. Email us or request a demo of our AI receptionist for GP practices and dental clinics.",
    });
  }, []);
}

function InfoCard({
  icon,
  label,
  value,
  href,
  testId,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
  testId: string;
}) {
  const content = (
    <div
      className="
        glass rounded-3xl border border-border/70 p-6
        shadow-[0_30px_90px_hsl(var(--foreground)/0.10)]
        hover-lift
      "
      data-testid={testId}
    >
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/22 via-accent/10 to-transparent border border-border/70 grid place-items-center text-accent">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold text-muted-foreground">{label}</div>
          <div className="mt-1 text-sm sm:text-base font-semibold break-words">{value}</div>
        </div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      className="block focus:outline-none focus:ring-4 focus:ring-[hsl(var(--accent)/0.16)] rounded-3xl"
      data-testid={`${testId}-link`}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  usePageSeo();
  return (
    <div className="min-h-screen bg-mesh noise-overlay">
      <SiteHeader />

      <main className="pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in-up" style={{ animationDelay: "40ms" }}>
            <SectionHeading
              eyebrow="Contact"
              title="Talk to BlockNow"
              description="Email us or request a demo. We'll respond within one working day."
              data-testid="contact-heading"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 space-y-5">
              <InfoCard
                testId="contact-card-email"
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <InfoCard
                testId="contact-card-phone"
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone}`}
              />
              <InfoCard
                testId="contact-card-mobile"
                icon={<Phone className="h-5 w-5" />}
                label="Mobile"
                value={CONTACT.mobile}
                href={`tel:${CONTACT.mobile.replace(/\s+/g, "")}`}
              />
              <InfoCard
                testId="contact-card-address"
                icon={<MapPin className="h-5 w-5" />}
                label="Address"
                value={CONTACT.address}
              />
              <InfoCard
                testId="contact-card-registered"
                icon={<ShieldCheck className="h-5 w-5" />}
                label="Registered"
                value={`Registered in the ${CONTACT.registeredIn}`}
              />

              <div className="pt-2">
                <Link
                  href="/"
                  className="
                    inline-flex items-center justify-center h-12 w-full
                    rounded-xl border border-border/70 bg-card/60 backdrop-blur
                    text-sm font-semibold
                    hover:bg-card/80 hover:-translate-y-0.5 active:translate-y-0
                    transition-all duration-200
                  "
                  data-testid="contact-back-home"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="neon-frame noise-overlay shadow-[0_50px_140px_hsl(var(--accent)/0.12)]">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-muted-foreground" data-testid="contact-form-eyebrow">
                        Request a demo
                      </div>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight" data-testid="contact-form-title">
                        See BlockNow in action for your practice.
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="contact-form-subtitle">
                        Share a preferred date and a few details about your practice. We'll follow up to schedule a 15-minute live demo.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <DemoRequestDialog
                      context="contact"
                      trigger={
                        <NeonButton data-testid="contact-open-demo" className="h-12 px-6 w-full sm:w-auto">
                          Open demo request form <ArrowRight className="h-4 w-4 ml-2" />
                        </NeonButton>
                      }
                      onOpenChange={() => {}}
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-border/70 bg-card/40 p-5">
                    <div className="text-sm font-bold" data-testid="contact-note-title">
                      Prefer to email directly?
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground" data-testid="contact-note-body">
                      Send us a note at{" "}
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="font-semibold text-foreground hover:underline underline-offset-4"
                        data-testid="contact-email-inline"
                      >
                        {CONTACT.email}
                      </a>{" "}
                      and we'll respond within one working day.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
