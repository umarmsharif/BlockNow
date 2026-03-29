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
  BadgeCheck,
  Globe,
  Phone,
  Check,
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
      title: "BlockNow — AI Receptionist for GP Practices & Dental Clinics",
      description:
        "BlockNow gives NHS GP surgeries and dental practices an AI receptionist that answers every patient call, books appointments 24/7, and eliminates the 8am phone rush.",
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
                <Pill testId="hero-pill">AI receptionist for NHS GP practices & dental clinics</Pill>

                <h1
                  id={heroId}
                  className="
                    mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02]
                  "
                  data-testid="hero-title"
                >
                  Never miss a <span className="text-gradient">patient call</span> again.{" "}
                  <span className="neon-underline">24/7</span> AI receptionist for your surgery.
                </h1>

                <p
                  className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
                  data-testid="hero-subtitle"
                >
                  BlockNow answers every patient call instantly — during the 8am rush, lunch hour, and out of hours.
                  Books, reschedules, and cancels appointments in real time. Your reception team focuses on the patients in front of them.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <DemoRequestDialog
                    context="site"
                    trigger={
                      <NeonButton data-testid="hero-cta-demo" className="h-12 px-6 w-fit">
                        Book a free demo <ArrowRight className="h-4 w-4 ml-2 opacity-90" />
                      </NeonButton>
                    }
                    onOpenChange={() => {}}
                  />

                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      const el = document.getElementById("pricing");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    data-testid="hero-cta-pricing"
                    className="
                      h-12 rounded-xl px-6
                      border border-border/70 bg-card/60 backdrop-blur
                      text-sm font-semibold
                      shadow-[0_18px_50px_hsl(var(--foreground)/0.08)]
                      hover:bg-card/80 hover:-translate-y-0.5 active:translate-y-0
                      transition-all duration-200
                    "
                  >
                    See pricing
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="hero-metrics">
                  {[
                    { icon: <Zap className="h-4 w-4" />, label: "Answers in under 3 seconds" },
                    { icon: <Phone className="h-4 w-4" />, label: "Unlimited simultaneous calls" },
                    { icon: <Clock className="h-4 w-4" />, label: "24/7, 365 days a year" },
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
                              "Good morning — I can book that for you."
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground leading-relaxed" data-testid="hero-card-body">
                              An AI receptionist that answers patient calls, handles enquiries, and confirms the next available appointment in seconds.
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
                      No more missed patients
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Every call answered instantly — no more patients lost to voicemail or engaged tones.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Zap className="h-4 w-4 text-accent" />
                      End the 8am rush
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      AI handles unlimited calls simultaneously. No queues, no busy signal.
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

        {/* TRUST BADGES */}
        <section className="mt-10 sm:mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, label: "GDPR Compliant" },
                { icon: <Globe className="h-5 w-5" />, label: "Data Hosted in the UK" },
                { icon: <BadgeCheck className="h-5 w-5" />, label: "ICO Registration in Progress" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"
                >
                  <span className="text-accent">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why practices choose BlockNow"
              title="Your reception team, reinforced"
              description="Eliminate phone queues, capture every patient call, and free your staff to focus on the patients in front of them."
              data-testid="benefits-heading"
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="benefits-grid">
              <BenefitCard
                testId="benefit-24-7"
                tone="accent"
                icon={<Clock className="h-4 w-4" />}
                title="24/7 availability"
                description="Patients can book, reschedule, or cancel appointments any time — evenings, weekends, bank holidays."
              />
              <BenefitCard
                testId="benefit-8am"
                tone="primary"
                icon={<Zap className="h-4 w-4" />}
                title="End the 8am rush"
                description="AI handles unlimited simultaneous calls. No more patients redialling for 45 minutes to get through."
              />
              <BenefitCard
                testId="benefit-queue"
                tone="violet"
                icon={<Sparkles className="h-4 w-4" />}
                title="No waiting queues"
                description="Patients are served instantly — no hold music, no 'press 1 for...' menus, no callbacks needed."
              />
              <BenefitCard
                testId="benefit-errors"
                tone="primary"
                icon={<Workflow className="h-4 w-4" />}
                title="No booking errors"
                description="AI checks your real-time calendar before confirming. No double bookings, no missed details."
              />
              <BenefitCard
                testId="benefit-booking"
                tone="accent"
                icon={<CalendarCheck className="h-4 w-4" />}
                title="Instant confirmations"
                description="Patient hangs up with a confirmed appointment. No 'we'll call you back' — it's done."
              />
              <BenefitCard
                testId="benefit-staff"
                tone="violet"
                icon={<Headphones className="h-4 w-4" />}
                title="Free your reception team"
                description="Staff focus on patients in the surgery instead of juggling phones. Better experience for everyone."
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="From patient call to booked appointment"
              description="A simple flow that feels natural to patients and works with your existing systems."
              data-testid="how-heading"
            />

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7">
                <div className="neon-frame noise-overlay">
                  <div className="p-6 sm:p-7">
                    <ol className="space-y-5" data-testid="how-steps">
                      {[
                        {
                          icon: <Phone className="h-4 w-4" />,
                          title: "Patient calls your surgery",
                          body: "AI answers instantly — no hold music, no engaged tone. Greets with your practice name.",
                        },
                        {
                          icon: <Sparkles className="h-4 w-4" />,
                          title: "AI handles the request",
                          body: "Books, reschedules, or cancels appointments. Checks your live calendar for availability. Sounds natural, not robotic.",
                        },
                        {
                          icon: <CalendarCheck className="h-4 w-4" />,
                          title: "Appointment confirmed instantly",
                          body: "Patient hangs up with a confirmed booking. Appointment appears in your calendar immediately.",
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
                            Book a free demo <ArrowRight className="h-4 w-4 ml-2" />
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
                    Built for GP surgeries and dental practices
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="how-panel-body">
                    Whether you run an NHS GP surgery, a private practice, or a dental clinic — BlockNow handles patient calls
                    with the right tone, your opening hours, and your booking rules.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3" data-testid="how-panel-points">
                    {[
                      { icon: <Bot className="h-4 w-4" />, text: "Natural, human-like voice" },
                      { icon: <ShieldCheck className="h-4 w-4" />, text: "GDPR compliant, UK-hosted data" },
                      { icon: <Workflow className="h-4 w-4" />, text: "Works with your existing calendar" },
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
                        <div className="text-sm font-bold">Prefer email?</div>
                        <div className="mt-1 text-xs text-muted-foreground">Contact details and demo request form</div>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* PRICING */}
            <div id="pricing" className="mt-16 sm:mt-20">
              <SectionHeading
                eyebrow="Pricing"
                title="Less than a part-time receptionist"
                description="Transparent pricing. No hidden fees. Free setup for our first 5 practices."
                data-testid="pricing-heading"
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Launch offer */}
                <div className="neon-frame noise-overlay">
                  <div className="p-6 sm:p-7">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-accent">
                      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]" />
                      Launch offer — first 5 practices
                    </div>
                    <div className="mt-3">
                      <div className="text-3xl sm:text-4xl font-bold">
                        <span className="line-through text-muted-foreground text-xl mr-2">£1,499</span>
                        £0 <span className="text-base font-semibold text-muted-foreground">setup</span>
                      </div>
                      <div className="mt-1 text-2xl font-bold">
                        £699<span className="text-base font-semibold text-muted-foreground">/month</span>
                        <span className="text-xs font-normal text-muted-foreground ml-1">management</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      + system infrastructure costs on top (~£200-400/mo for telephony &amp; AI minutes, passed through at cost)
                    </p>
                    <ul className="mt-5 space-y-2">
                      {[
                        "AI receptionist answering all calls 24/7",
                        "Appointment booking, rescheduling, cancellation",
                        "Full dashboard — calls, appointments, analytics",
                        "Calendar integration (Google / Outlook)",
                        "Monthly performance reports",
                        "Setup in under a week",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent mt-0.5 flex-none" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <DemoRequestDialog
                        context="site"
                        trigger={
                          <NeonButton data-testid="pricing-cta" className="h-12 px-6 w-full">
                            Claim your spot <ArrowRight className="h-4 w-4 ml-2" />
                          </NeonButton>
                        }
                        onOpenChange={() => {}}
                      />
                    </div>
                  </div>
                </div>

                {/* ROI card */}
                <div className="glass rounded-3xl p-6 sm:p-7 border border-border/70 shadow-[0_30px_90px_hsl(var(--foreground)/0.10)]">
                  <div className="text-sm font-bold">Why it pays for itself</div>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                      <div className="text-xs font-bold text-muted-foreground">The problem</div>
                      <p className="mt-1 text-sm">
                        The average GP surgery misses <span className="font-bold text-foreground">13-40% of patient calls</span>.
                        During the 8am rush, some practices report over 40% going unanswered.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                      <div className="text-xs font-bold text-muted-foreground">For dental practices</div>
                      <p className="mt-1 text-sm">
                        Each missed call from a new private patient is worth <span className="font-bold text-foreground">£150-500</span>.
                        74% of patients who hit voicemail call the next practice instead.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                      <div className="text-xs font-bold text-muted-foreground">The comparison</div>
                      <p className="mt-1 text-sm">
                        A part-time receptionist costs <span className="font-bold text-foreground">£900-1,200/month</span> through an agency.
                        BlockNow costs less, works 24/7, and handles unlimited simultaneous calls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="mt-16 sm:mt-20">
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions"
                description="Everything practice managers ask before getting started."
                data-testid="faq-heading"
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="faq-grid">
                {[
                  {
                    q: "Does it work with EMIS or SystmOne?",
                    a: "The AI books directly into your Google Calendar or Outlook. Your reception team transfers bookings to EMIS/SystmOne as part of their normal workflow. Direct integration is on our roadmap.",
                  },
                  {
                    q: "Is it GDPR compliant?",
                    a: "Yes. All data is hosted in the UK, encrypted at rest and in transit. We do not share patient data with third parties. ICO registration is in progress.",
                  },
                  {
                    q: "How long does setup take?",
                    a: "Less than a week. We configure the AI with your practice details, connect your calendar, and test everything before going live. Your team doesn't need to do anything technical.",
                  },
                  {
                    q: "Will it replace our reception staff?",
                    a: "No — it supports them. The AI handles the calls your team can't get to: the 8am rush, lunch hour, after hours, and when the desk is busy with patients in the surgery.",
                  },
                  {
                    q: "What about urgent or emergency calls?",
                    a: "If a patient mentions an emergency, the AI immediately directs them to call 999. For urgent clinical queries, it advises them to ring back during surgery hours to speak with a member of staff.",
                  },
                  {
                    q: "How much will we save compared to hiring?",
                    a: "A part-time receptionist through an agency costs £900-1,200/month. BlockNow is £699/month management plus system infrastructure on top — and it works 24/7 without sick days, holidays, or training.",
                  },
                  {
                    q: "Can patients tell it's AI?",
                    a: "The voice is completely natural — most patients don't realise they're speaking to AI. No robotic voice, no 'press 1 for...' menus. It's a natural conversation that ends with a booked appointment.",
                  },
                  {
                    q: "What if the AI can't handle a question?",
                    a: "For anything outside booking, rescheduling, or cancelling — prescriptions, test results, clinical questions — the AI politely directs the patient to ring back during surgery hours.",
                  },
                  {
                    q: "Is it available 24/7?",
                    a: "Yes. Patients can book evenings, weekends, and bank holidays. The AI only offers appointment slots within your actual opening hours.",
                  },
                  {
                    q: "What languages does it support?",
                    a: "Currently English (British). Additional language support is planned for future releases.",
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
                        See BlockNow in action — tailored to your practice.
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-2xl" data-testid="final-cta-subtitle">
                        We'll demo the AI receptionist live with your practice name and your opening hours. Free setup for the first 5 practices.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <DemoRequestDialog
                        context="site"
                        trigger={
                          <NeonButton data-testid="final-cta-demo" className="h-12 w-fit sm:w-auto px-6">
                            Book a free demo
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
                        Contact us
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
