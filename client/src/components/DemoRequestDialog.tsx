import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Mail, Building2, User2, Briefcase, MessageSquareText } from "lucide-react";
import { useForm } from "react-hook-form";
import { demoRequestSchema, type DemoRequest } from "@shared/schema";
import { useCreateDemoRequest } from "@/hooks/use-demo-requests";
import { useToast } from "@/hooks/use-toast";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NeonButton } from "@/components/NeonButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DemoRequestDialog({
  trigger,
  defaultOpen,
  onOpenChange,
  context = "site",
}: {
  trigger: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  context?: "site" | "contact";
}) {
  const { toast } = useToast();
  const create = useCreateDemoRequest();

  const form = useForm<DemoRequest>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      businessName: "",
      otherInfo: "",
      desiredSlotDate: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: DemoRequest) => {
    try {
      const res = await create.mutateAsync(values);
      toast({
        title: "Request received",
        description: res.message,
      });
      form.reset();
      onOpenChange?.(false);
    } catch (e) {
      toast({
        title: "Could not send request",
        description: e instanceof Error ? e.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "max-w-2xl p-0 overflow-hidden border border-border/70",
          "bg-mesh",
        )}
        data-testid={`demo-dialog-${context}`}
      >
        <div className="p-6 sm:p-7 pt-8 sm:pt-9">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl leading-tight">
              Request a <span className="text-gradient">demo</span>
            </DialogTitle>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="demo-dialog-subtitle">
              Tell us a bit about your business. We’ll reply to <span className="font-semibold">{`your email`}</span> to
              confirm a slot.
            </p>
          </DialogHeader>

          <div className="mt-6 neon-frame noise-overlay">
            <div className="p-5 sm:p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="demo-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">First name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="Sarah"
                                className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                data-testid="demo-firstName"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Last name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="Thompson"
                                className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                data-testid="demo-lastName"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              {...field}
                              placeholder="name@company.com"
                              inputMode="email"
                              className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-accent focus:ring-4 focus:ring-[hsl(var(--accent)/0.16)] transition-all"
                              data-testid="demo-email"
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">What do you do?</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="Owner / Ops / Reception"
                                className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                data-testid="demo-role"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Business name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="BlockNow"
                                className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                data-testid="demo-businessName"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="desiredSlotDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Preferred slot date</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              {...field}
                              type="date"
                              className="pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-accent focus:ring-4 focus:ring-[hsl(var(--accent)/0.16)] transition-all"
                              data-testid="demo-desiredSlotDate"
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="otherInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Anything else we should know?</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquareText className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                            <Textarea
                              {...field}
                              placeholder="Current booking volume, industry, tools you use, languages you support…"
                              className="min-h-[110px] pl-9 rounded-xl bg-background/70 border-2 border-border/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                              data-testid="demo-otherInfo"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        form.reset();
                      }}
                      data-testid="demo-reset"
                      className="rounded-xl border border-border/70 bg-secondary/70 hover:bg-secondary transition-all"
                    >
                      Clear
                    </Button>

                    <NeonButton
                      type="submit"
                      disabled={create.isPending}
                      data-testid="demo-submit"
                      className="h-12"
                    >
                      {create.isPending ? "Sending…" : "Request a demo"}
                    </NeonButton>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
