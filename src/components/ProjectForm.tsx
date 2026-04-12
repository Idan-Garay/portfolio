import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Consistent card padding matching the main page's p-8 / p-10 feel.
// Card has built-in py-4 so we zero it out and own the padding ourselves.
const CARD = "glass-card ring-0 rounded-2xl inner-highlight py-0";
const CARD_HEADER = "px-8 pt-8 pb-4";
const CARD_CONTENT = "px-8 pb-8 pt-0";

type Intent = "project" | "quote";

type FormData = {
  intent: Intent;
  name: string;
  email: string;
  business: string;
  projectType: string;
  goal: string;
  budget: string;
  timeline: string;
  details: string;
};

const makeInitial = (intent: Intent): FormData => ({
  intent,
  name: "",
  email: "",
  business: "",
  projectType: "",
  goal: "",
  budget: "",
  timeline: "",
  details: "",
});

const options = {
  projectType: [
    { value: "website", label: "Website" },
    { value: "internal-system", label: "Internal System" },
    { value: "both", label: "Both" },
  ],
  goal: [
    { value: "leads", label: "Get more leads" },
    { value: "automate", label: "Automate processes" },
    { value: "improve", label: "Improve existing system" },
    { value: "other", label: "Other" },
  ],
  budget: [
    { value: "500-1k", label: "$500–$1k" },
    { value: "1k-3k", label: "$1k–$3k" },
    { value: "3k+", label: "$3k+" },
  ],
  timeline: [
    { value: "asap", label: "ASAP" },
    { value: "1-2months", label: "1–2 months" },
    { value: "flexible", label: "Flexible" },
  ],
};

function OptionGroup({
  field,
  value,
  items,
  onChange,
}: {
  field: keyof FormData;
  value: string;
  items: { value: string; label: string }[];
  onChange: (field: keyof FormData, val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = value === item.value;
        return (
          <Button
            key={item.value}
            type="button"
            variant="outline"
            onClick={() => onChange(field, active ? "" : item.value)}
            className={cn(
              "h-auto px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border",
              active
                ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(0,71,171,0.35)] hover:bg-primary"
                : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/40 hover:text-white hover:bg-white/10"
            )}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}

function AboutSection({
  form,
  set,
}: {
  form: FormData;
  set: (field: keyof FormData, val: string) => void;
}) {
  return (
    <Card className={CARD}>
      <CardHeader className={CARD_HEADER}>
        <CardTitle className="font-headline text-lg font-bold text-foreground">
          About you
        </CardTitle>
      </CardHeader>
      <CardContent className={cn(CARD_CONTENT, "grid grid-cols-1 md:grid-cols-3 gap-4")}>
        {(["name", "email", "business"] as const).map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <Label
              htmlFor={`${form.intent}-${field}`}
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
            >
              {field === "business"
                ? "Business name"
                : field.charAt(0).toUpperCase() + field.slice(1)}
              {field !== "business" && (
                <span className="text-primary ml-1">*</span>
              )}
            </Label>
            <Input
              id={`${form.intent}-${field}`}
              type={field === "email" ? "email" : "text"}
              required={field !== "business"}
              value={form[field]}
              onChange={(e) => set(field, e.target.value)}
              placeholder={
                field === "email"
                  ? "you@company.com"
                  : field === "business"
                  ? "Optional"
                  : "Your name"
              }
              className="h-12 px-4 bg-white/5 dark:bg-white/5 border-white/10 text-sm text-white placeholder:text-muted-foreground/50 focus-visible:border-primary/50 focus-visible:bg-primary/5 focus-visible:ring-primary/20 cursor-text"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <Card className={cn(CARD, "relative overflow-hidden")}>
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <CardContent className="py-16 px-12 flex flex-col items-center text-center relative z-10 space-y-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <h2 className="font-headline text-3xl font-extrabold tracking-tight">
          You're all set.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Thanks — I'll review your project and get back to you within{" "}
          <span className="text-white font-bold">24 hours</span> with next steps.
        </p>
        <Button
          variant="link"
          onClick={onReset}
          className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-4 transition-all cursor-pointer"
        >
          Submit another{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ProjectForm() {
  const [activeTab, setActiveTab] = useState<Intent>("project");
  const [forms, setForms] = useState<Record<Intent, FormData>>({
    project: makeInitial("project"),
    quote: makeInitial("quote"),
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = forms[activeTab];

  const set = (field: keyof FormData, value: string) =>
    setForms((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [field]: value },
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your form endpoint (Formspree, Resend, etc.)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForms({ project: makeInitial("project"), quote: makeInitial("quote") });
  };

  if (submitted) {
    return <SuccessState onReset={handleReset} />;
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={(val) => setActiveTab(val as Intent)}
      className="space-y-6"
    >
      {/* Tab switcher */}
      <TabsList className="w-full h-16! p-1.5 bg-white/5 border border-white/10 rounded-2xl gap-1">
        <TabsTrigger
          value="project"
          className={cn(
            "flex-1 py-3.5 px-6 rounded-xl text-sm font-bold transition-all cursor-pointer",
            "data-active:bg-primary data-active:text-white data-active:shadow-[0_0_16px_rgba(0,71,171,0.4)]",
            "text-muted-foreground hover:text-white"
          )}
        >
          <span className="material-symbols-outlined text-base mr-2">rocket_launch</span>
          Start a Project
        </TabsTrigger>
        <TabsTrigger
          value="quote"
          className={cn(
            "flex-1 py-3.5 px-6 rounded-xl text-sm font-bold transition-all cursor-pointer",
            "data-active:bg-primary data-active:text-white data-active:shadow-[0_0_16px_rgba(0,71,171,0.4)]",
            "text-muted-foreground hover:text-white"
          )}
        >
          <span className="material-symbols-outlined text-base mr-2">request_quote</span>
          Request a Quote
        </TabsTrigger>
      </TabsList>

      {/* ── Start a Project ── */}
      <TabsContent value="project">
        <form onSubmit={handleSubmit} className="space-y-6">
          <AboutSection form={form} set={set} />

          {/* Project context */}
          <Card className={CARD}>
            <CardHeader className={CARD_HEADER}>
              <CardTitle className="font-headline text-lg font-bold text-foreground">
                Project context
              </CardTitle>
            </CardHeader>
            <CardContent className={cn(CARD_CONTENT, "space-y-6")}>
              <div className="space-y-3">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  What are you looking to build?
                </Label>
                <OptionGroup field="projectType" value={form.projectType} items={options.projectType} onChange={set} />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  What's the main goal?
                </Label>
                <OptionGroup field="goal" value={form.goal} items={options.goal} onChange={set} />
              </div>
            </CardContent>
          </Card>

          {/* Budget + Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className={CARD}>
              <CardHeader className={CARD_HEADER}>
                <CardTitle className="font-headline text-lg font-bold text-foreground">Budget</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Optional — helps me suggest the right scope.</p>
              </CardHeader>
              <CardContent className={CARD_CONTENT}>
                <OptionGroup field="budget" value={form.budget} items={options.budget} onChange={set} />
              </CardContent>
            </Card>
            <Card className={CARD}>
              <CardHeader className={CARD_HEADER}>
                <CardTitle className="font-headline text-lg font-bold text-foreground">Timeline</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">When are you hoping to get started?</p>
              </CardHeader>
              <CardContent className={CARD_CONTENT}>
                <OptionGroup field="timeline" value={form.timeline} items={options.timeline} onChange={set} />
              </CardContent>
            </Card>
          </div>

          {/* Details */}
          <Card className={CARD}>
            <CardHeader className={CARD_HEADER}>
              <CardTitle className="font-headline text-lg font-bold text-foreground">Tell me more <span className="text-primary">*</span></CardTitle>
            </CardHeader>
            <CardContent className={CARD_CONTENT}>
              <Textarea
                value={form.details}
                onChange={(e) => set("details", e.target.value)}
                placeholder="Describe your project, what problem you're solving, and any specific requirements or ideas you have in mind..."
                className="bg-white/5 min-h-40 dark:bg-white/5 border-white/10 text-sm text-white placeholder:text-muted-foreground/50 focus-visible:border-primary/50 focus-visible:bg-primary/5 focus-visible:ring-primary/20 resize-none cursor-text px-4 py-3"
              />
            </CardContent>
          </Card>

          <Button
            type="submit"
            disabled={loading || !form.name || !form.email || !form.details}
            className="w-full h-14 text-white rounded-xl font-extrabold text-sm transition-all shadow-2xl neon-glow-primary hover:neon-glow-hover hover:scale-[1.01] active:scale-[0.99] cta-gradient cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Sending..." : "Get a Project Plan →"}
          </Button>
        </form>
      </TabsContent>

      {/* ── Request a Quote ── */}
      <TabsContent value="quote">
        <form onSubmit={handleSubmit} className="space-y-6">
          <AboutSection form={form} set={set} />

          {/* Budget — prominent */}
          <Card className={cn(CARD, "relative overflow-hidden")}>
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/8 rounded-full blur-[80px] pointer-events-none" />
            <CardHeader className={CARD_HEADER}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">payments</span>
                </div>
                <div>
                  <CardTitle className="font-headline text-lg font-bold text-foreground">
                    What's your budget?
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    This helps me scope the work and give you an accurate quote.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className={CARD_CONTENT}>
              <OptionGroup field="budget" value={form.budget} items={options.budget} onChange={set} />
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className={CARD}>
            <CardHeader className={CARD_HEADER}>
              <CardTitle className="font-headline text-lg font-bold text-foreground">Timeline</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">When do you need this done?</p>
            </CardHeader>
            <CardContent className={CARD_CONTENT}>
              <OptionGroup field="timeline" value={form.timeline} items={options.timeline} onChange={set} />
            </CardContent>
          </Card>

          {/* Brief description */}
          <Card className={CARD}>
            <CardHeader className={CARD_HEADER}>
              <CardTitle className="font-headline text-lg font-bold text-foreground">What do you need? <span className="text-primary">*</span></CardTitle>
            </CardHeader>
            <CardContent className={CARD_CONTENT}>
              <Textarea
                value={form.details}
                onChange={(e) => set("details", e.target.value)}
                placeholder="Give me a quick overview — what are you building, what's the scope, and any constraints I should know about..."
                className="bg-white/5 min-h-32 dark:bg-white/5 border-white/10 text-sm text-white placeholder:text-muted-foreground/50 focus-visible:border-primary/50 focus-visible:bg-primary/5 focus-visible:ring-primary/20 resize-none cursor-text px-4 py-3"
              />
            </CardContent>
          </Card>

          <Button
            type="submit"
            disabled={loading || !form.name || !form.email || !form.details}
            className="w-full h-14 text-white rounded-xl font-extrabold text-sm transition-all shadow-2xl neon-glow-primary hover:neon-glow-hover hover:scale-[1.01] active:scale-[0.99] cta-gradient cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Sending..." : "Request a Quote →"}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
