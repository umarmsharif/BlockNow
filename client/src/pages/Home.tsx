import * as React from "react";
import { Link } from "wouter";
import {
  Bot,
  Clock,
  ShieldCheck,
  Sparkles,
  Headphones,
  CalendarCheck,
  ArrowRight,
  Zap,
  MessagesSquare,
  Workflow,
} from "lucide-react";

import { applySeo } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { BenefitCard } from "@/components/BenefitCard";
import { DemoRequestDialog } from "@/components/DemoRequestDialog";
import { NeonButton } from "@/components/NeonButton";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/Suggestion_2_1770294627865.mp4";

function usePageSeo() {
  React.useEffect(() => {
    applySeo({
      title: "BlockNow — AI agents that chat & book appointments 24/7",
      description:
        "BlockNow provides businesses with an AI agent that answers client questions and books appointments around the clock—reducing queues, errors, and missed calls.",
    });
  }, []);
}

function Pill({ children, testId }: { children: React.ReactNode; testId: string }) {
  return (
    <div
      className="
        inline-flex items-center gap-2 rounded-full
        border border-border/70 bg-secondary/60 px-3 py-1
        text-xs font-bold text-muted-foreground
        shadow-[0_12px_30px_hsl(var(--foreground)/0.06)]
      "
      data-testid={testId}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]" />
      {children}
    </div>
  );
}

export default function Home() {
  usePageSeo();

  const heroId = "hero";

  return (
    <div className="min-h-screen bg-mesh noise-overlay">
      <SiteHeader />

      <main className="relative">
        {/* HERO */}
        <section className="relative pt-10 sm:pt-14 lg:pt-20" aria-labelledby={heroId}>
          <div className="absolute inset-x-0 -top-16 h-64 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent blur-2xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 animate-in-up" style={{ animationDelay: "30ms" }}>
                <Pill testId="hero-pill">Industry-agnostic AI booking agent</Pill>

                <h1
                  id={heroId}
                  className="
                    mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02]
                  "
                  data-testid="hero-title"
                >
                  Your AI <span className="text-gradient">receptionist</span>.{" "}
                  Handles <span className="neon-underline">calls</span>, chats, and bookings — 24/7.
                </h1>

                <p
                  className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
                  data-testid="hero-subtitle"
                >
                  BlockNow gives your GP practice an AI agent trained to answer patient calls, handle enquiries, and book appointments—
                  24/7—without queues, missed calls, or overloaded reception staff.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <DemoRequestDialog
                    context="site"
                    trigger={
                      <NeonButton data-testid="hero-cta-demo" className="h-12 px-6 w-fit">
                        Request a demo <ArrowRight className="h-4 w-4 ml-2 opacity-90" />
                      </NeonButton>
                    }
                    onOpenChange={() => {}}
                  />

                  <Link
                    href="/contact"
                    className="
                      group inline-flex items-center justify-center
                      h-12 rounded-xl px-6
                      border border-border/70 bg-card/60 backdrop-blur
                      text-sm font-semibold
                      shadow-[0_18px_50px_hsl(var(--foreground)/0.08)]
                      hover:bg-card/80 hover:-translate-y-0.5 active:translate-y-0
                      transition-all duration-200
                    "
                    data-testid="hero-cta-contact"
                  >
                    Contact details
                    <ArrowRight className="h-4 w-4 ml-2 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="hero-metrics">
                  {[
                    { icon: <Clock className="h-4 w-4" />, label: "24/7 coverage" },
                    { icon: <CalendarCheck className="h-4 w-4" />, label: "Instant bookings" },
                    { icon: <ShieldCheck className="h-4 w-4" />, label: "Consistent answers" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="
                        glass rounded-2xl p-4 border border-border/60
                        shadow-[0_18px_60px_hsl(var(--foreground)/0.06)]
                      "
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
                        <span className="text-accent">{m.icon}</span>
                        <span>{m.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video panel */}
              <div className="lg:col-span-6 animate-in-fade" style={{ animationDelay: "100ms" }}>
                <div className="neon-frame noise-overlay shadow-[0_50px_140px_hsl(var(--primary)/0.15)]">
                  <div className="relative overflow-hidden rounded-[1.2rem]">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/75 z-[1]" />
                    <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_20%,hsl(var(--accent)/0.10),transparent_55%)] z-[1]" />

                    <video
                      className="w-full aspect-[16/10] object-cover opacity-90"
                      src={heroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      data-testid="hero-video"
                    />

                    <div className="absolute bottom-4 left-4 right-4 z-[2]">
                      <div className="glass rounded-2xl border border-border/70 p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/25 via-accent/10 to-transparent border border-border/60 grid place-items-center">
                            <Bot className="h-5 w-5 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold" data-testid="hero-card-title">
                              “Hi — I can book that for you.”
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground leading-relaxed" data-testid="hero-card-body">
                              A branded AI agent that answers questions and confirms your next available slot in seconds.
                            </p>
                          </div>
                          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_0_4px_hsl(var(--accent)/0.14)]" />
                            Live
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MessagesSquare className="h-4 w-4 text-accent" />
                      No more missed clients
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      No more clients waiting in queues—your agent answers instantly.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Zap className="h-4 w-4 text-accent" />
                      Faster customer journey
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Reduce waiting time and friction in booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-14 sm:mt-16 lg:mt-20">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why businesses choose BlockNow"
              title="A reliable front desk, a faster customer journey"
              description="Eliminate queues and delays, remove human errors, and remove communication barriers—without hiring more staff."
              data-testid="benefits-heading"
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="benefits-grid">
              <BenefitCard
                testId="benefit-24-7"
                tone="accent"
                icon={<Clock className="h-4 w-4" />}
                title="24/7 availability"
                description="Your AI agent handles inquiries and bookings day or night—no waiting for office hours."
              />
              <BenefitCard
                testId="benefit-errors"
                tone="primary"
                icon={<Workflow className="h-4 w-4" />}
                title="No human errors"
                description="Standardised flows eliminate missed details, double bookings, and miscommunication."
              />
              <BenefitCard
                testId="benefit-queue"
                tone="violet"
                icon={<Sparkles className="h-4 w-4" />}
                title="No waiting queues"
                description="Clients are served instantly with answers and availability—cutting back-and-forth and drop-offs."
              />
              <BenefitCard
                testId="benefit-comms"
                tone="primary"
                icon={<Headphones className="h-4 w-4" />}
                title="Clear, consistent communication"
                description="A trained agent delivers the same quality information to every client, every time."
              />
              <BenefitCard
                testId="benefit-booking"
                tone="accent"
                icon={<CalendarCheck className="h-4 w-4" />}
                title="Faster booking confirmations"
                description="From question to confirmed slot—clients complete bookings in a single conversation."
              />
              <BenefitCard
                testId="benefit-trust"
                tone="violet"
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Professional experience"
                description="A premium experience that feels attentive, responsive, and reliable."
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="From first question to booked slot"
              description="A simple, high-converting flow that feels natural to customers."
              data-testid="how-heading"
            />

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7">
                <div className="neon-frame noise-overlay">
                  <div className="p-6 sm:p-7">
                    <ol className="space-y-5" data-testid="how-steps">
                      {[
                        {
                          icon: <MessagesSquare className="h-4 w-4" />,
                          title: "Clients talk to Agent",
                          body: "From your site, WhatsApp, or a widget—your agent answers instantly.",
                        },
                        {
                          icon: <Sparkles className="h-4 w-4" />,
                          title: "Agent assesses the request",
                          body: "The agent assesses their talk, responds, and works out the request details without confusion.",
                        },
                        {
                          icon: <CalendarCheck className="h-4 w-4" />,
                          title: "Provides the requested slot",
                          body: "Works out with them to provide the requested slot for appointments with clarity and speed.",
                        },
                      ].map((s, idx) => (
                        <li key={s.title} className="flex gap-4">
                          <div
                            className="
                              h-10 w-10 rounded-2xl border border-border/70
                              bg-gradient-to-br from-primary/18 via-accent/8 to-transparent
                              grid place-items-center shadow-[0_20px_60px_hsl(var(--accent)/0.12)]
                              flex-none
                            "
                            aria-hidden="true"
                          >
                            <span className="text-accent">{s.icon}</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold">
                              <span className="text-muted-foreground mr-2">{String(idx + 1).padStart(2, "0")}</span>
                              {s.title}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <DemoRequestDialog
                        context="site"
                        trigger={
                          <NeonButton data-testid="how-cta-demo" className="h-12 px-6">
                            Book a demo slot <ArrowRight className="h-4 w-4 ml-2" />
                          </NeonButton>
                        }
                        onOpenChange={() => {}}
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                          const el = document.getElementById("faq");
                          el?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        data-testid="how-cta-faq"
                        className="h-12 rounded-xl border border-border/70 bg-secondary/70 hover:bg-secondary transition-all"
                      >
                        See FAQ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="glass rounded-3xl p-6 sm:p-7 border border-border/70 shadow-[0_30px_90px_hsl(var(--foreground)/0.10)]">
                  <div className="text-sm font-bold" data-testid="how-panel-title">
                    Designed for real-world businesses
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="how-panel-body">
                    Whether you run a clinic, salon, consultancy, gym, or service business—BlockNow can shape the same
                    booking experience to fit your tone, your services, and your rules.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3" data-testid="how-panel-points">
                    {[
                      { icon: <Bot className="h-4 w-4" />, text: "Consistent brand voice" },
                      { icon: <ShieldCheck className="h-4 w-4" />, text: "Polished client experience" },
                      { icon: <Workflow className="h-4 w-4" />, text: "Clear booking workflows" },
                    ].map((p) => (
                      <div
                        key={p.text}
                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/40 p-3 hover:bg-card/60 transition"
                      >
                        <div className="h-9 w-9 rounded-xl bg-secondary/60 border border-border/70 grid place-items-center text-accent">
                          {p.icon}
                        </div>
                        <div className="text-sm font-semibold">{p.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="
                        group inline-flex items-center justify-between
                        w-full rounded-2xl border border-border/70
                        bg-gradient-to-r from-primary/12 via-accent/8 to-transparent
                        p-4
                        hover:-translate-y-0.5 transition-all duration-200
                      "
                      data-testid="how-contact-card"
                    >
                      <div>
                        <div className="text-sm font-bold">Prefer email or phone?</div>
                        <div className="mt-1 text-xs text-muted-foreground">Contact details and WhatsApp option</div>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="mt-16 sm:mt-20">
              <SectionHeading
                eyebrow="FAQ"
                title="Quick answers"
                description="If you're exploring BlockNow, these are the questions we hear most."
                data-testid="faq-heading"
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="faq-grid">
                {[
                  {
                    q: "Is BlockNow industry-specific?",
                    a: "No. The booking flow is industry-agnostic and can be tailored to your service types and policies.",
                  },
                  {
                    q: "Will it reduce queue and delays?",
                    a: "Yes. Your AI agent can handle multiple client conversations at once—instantly—without hold times.",
                  },
                  {
                    q: "What about human errors?",
                    a: "Standardised flows reduce missed details, miscommunication, and manual booking mistakes.",
                  },
                  {
                    q: "Is it available 24/7?",
                    a: "Yes. Always-on coverage means clients can book even outside office hours.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="glass rounded-3xl border border-border/70 p-6 hover-lift"
                    data-testid={`faq-${item.q.replace(/\W+/g, "-").toLowerCase()}`}
                  >
                    <div className="text-sm font-bold">{item.q}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="mt-16 sm:mt-20">
              <div className="neon-frame noise-overlay">
                <div className="p-7 sm:p-10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]" />
                        Ready when you are
                      </div>
                      <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight" data-testid="final-cta-title">
                        See BlockNow in action — tailored to your business.
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-2xl" data-testid="final-cta-subtitle">
                        Share your preferred date and we’ll set up a demo slot. No waiting. No confusion. Just bookings.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <DemoRequestDialog
                        context="site"
                        trigger={
                          <NeonButton data-testid="final-cta-demo" className="h-12 w-fit sm:w-auto px-6">
                            Request a demo
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </NeonButton>
                        }
                        onOpenChange={() => {}}
                      />
                      <Link
                        href="/contact"
                        className="
                          inline-flex items-center justify-center h-12
                          rounded-xl px-6 w-full sm:w-auto
                          border border-border/70 bg-card/60 backdrop-blur
                          text-sm font-semibold
                          hover:bg-card/80 hover:-translate-y-0.5 active:translate-y-0
                          transition-all duration-200
                        "
                        data-testid="final-cta-contact"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
