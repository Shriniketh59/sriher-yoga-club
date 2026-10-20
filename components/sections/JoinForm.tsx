"use client";

import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Values = {
  name: string;
  role: "" | "Student" | "Faculty / staff" | "Public visitor";
  department: string;
  email: string;
  phone: string;
  interests: string[];
  purpose: "" | "membership" | "events" | "enquiry";
  message: string;
  website: string; // honeypot, must stay empty
};
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string }
  | { kind: "offline" };

const endpoint = process.env.NEXT_PUBLIC_JOIN_ENDPOINT;

const purposeLabel = {
  membership: "Join the club",
  events: "Attend sessions",
  enquiry: "General enquiry",
} as const;
const purposeHint = {
  membership: "For the SRIHER community. Eligibility is confirmed by the club.",
  events: "Hear about upcoming sessions.",
  enquiry: "Questions, collaborations or media.",
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!v.role) e.role = "Please tell us whether you are a student, faculty / staff or a public visitor.";
  if (!v.purpose) e.purpose = "Please choose what you would like to do.";
  if (!v.department.trim()) e.department = "Please enter your department or institution.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
  if (v.phone && !/^\+?[\d\s-]{8,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number, or leave it blank.";
  return e;
}

const fieldBase =
  "mt-2 block w-full min-h-13 rounded-2xl border bg-white/20 px-4 text-base text-ink placeholder:text-ink-soft/60 transition focus:border-saffron focus:bg-white/20 focus:outline-none focus:ring-4 focus:ring-saffron/25";

export function JoinForm() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Values>({ name: "", role: "", department: "", email: "", phone: "", interests: [], purpose: "", message: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (values.website) return; // bot filled the hidden field
    setSubmitted(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ kind: "idle" });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (!endpoint) {
      setStatus({ kind: "offline" });
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "We couldn’t send your registration. Please try again, or email us directly." });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent("SRIHER Yoga Club — enquiry")}&body=${encodeURIComponent(
    `Purpose: ${purposeLabel[values.purpose as keyof typeof purposeLabel] ?? ""}\nName: ${values.name}\nI am: ${values.role}\nDepartment / institution: ${values.department}\nEmail: ${values.email}\nPhone: ${values.phone || "—"}\nMessage: ${values.message || "—"}`,
  )}`;

  const errorList = Object.entries(errors) as [keyof Values, string][];
  const describe = (k: keyof Values, hint?: string) =>
    [hint && id(`${k}-hint`), errors[k] && id(`${k}-err`)].filter(Boolean).join(" ") || undefined;
  const Err = ({ k }: { k: keyof Values }) =>
    errors[k] ? (
      <p id={id(`${k}-err`)} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#b00020]">
        <AlertCircle className="size-4 shrink-0" aria-hidden /> {errors[k]}
      </p>
    ) : null;

  if (status.kind === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="glass rounded-[2rem] p-10 text-center outline-none">
        <CheckCircle2 className="mx-auto size-12 text-saffron" aria-hidden />
        <h3 className="mt-5 text-3xl">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-ink-soft">Your registration has been received. We’ll be in touch about upcoming sessions.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="glass relative rounded-[2.25rem] p-6 sm:p-10" aria-describedby={id("intro")}>
      <p id={id("intro")} className="text-sm text-ink-soft">
        Fields marked <span aria-hidden className="text-ember">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {submitted && errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-2xl border border-[#b00020]/30 bg-[#fff3e8] p-5 outline-none"
        >
          <p className="font-semibold text-[#7a0016]">Please correct {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#7a0016]">
            {errorList.map(([k, msg]) => (
              <li key={k}>
                <a href={`#${k === "role" ? id("role-Student") : k === "purpose" ? id("purpose-membership") : k === "interests" ? id("interest-0") : id(k)}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={id("name")} className="text-sm font-bold text-ink">
            Full name <span aria-hidden className="text-ember">*</span>
          </label>
          <input
            id={id("name")}
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
            className={cn(fieldBase, errors.name ? "border-[#b00020]" : "border-line")}
          />
          <Err k="name" />
        </div>

        <fieldset className="sm:col-span-2" aria-describedby={describe("role")}>
          <legend className="text-sm font-bold text-ink">
            Designation <span aria-hidden className="text-ember">*</span>
          </legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {(["Student", "Faculty / staff", "Public visitor"] as const).map((r) => (
              <label
                key={r}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border bg-white/20 px-4 transition has-[:checked]:border-saffron has-[:checked]:bg-[#fde8d7] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sunset/25",
                  errors.role ? "border-[#b00020]" : "border-line",
                )}
              >
                <input
                  id={id(`role-${r.replace(/\W+/g, "-")}`)}
                  type="radio"
                  name="role"
                  value={r}
                  checked={values.role === r}
                  onChange={() => set("role", r)}
                  className="size-4 accent-[#111111]"
                />
                <span className="font-medium">{r}</span>
              </label>
            ))}
          </div>
          <Err k="role" />
        </fieldset>

        <fieldset className="sm:col-span-2" aria-describedby={describe("purpose")}>
          <legend className="text-sm font-bold text-ink">
            What would you like to do? <span aria-hidden className="text-ember">*</span>
          </legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {(Object.keys(purposeLabel) as (keyof typeof purposeLabel)[]).map((k) => (
              <label
                key={k}
                className={cn(
                  "flex cursor-pointer gap-3 rounded-2xl border bg-white px-4 py-3 transition has-[:checked]:border-maroon has-[:checked]:bg-ivory has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sunset/25",
                  errors.purpose ? "border-[#b00020]" : "border-line",
                )}
              >
                <input
                  id={id(`purpose-${k}`)}
                  type="radio"
                  name="purpose"
                  value={k}
                  checked={values.purpose === k}
                  onChange={() => set("purpose", k)}
                  className="mt-1 size-4 accent-[#68140e]"
                />
                <span>
                  <span className="block font-semibold text-ink">{purposeLabel[k]}</span>
                  <span className="block text-xs leading-relaxed text-ink-soft">{purposeHint[k]}</span>
                </span>
              </label>
            ))}
          </div>
          <Err k="purpose" />
        </fieldset>

        <div>
          <label htmlFor={id("department")} className="text-sm font-bold text-ink">
            Department or institution <span aria-hidden className="text-ember">*</span>
          </label>
          <input
            id={id("department")}
            autoComplete="organization-title"
            required
            value={values.department}
            onChange={(e) => set("department", e.target.value)}
            aria-invalid={Boolean(errors.department)}
            aria-describedby={describe("department", "hint")}
            className={cn(fieldBase, errors.department ? "border-[#b00020]" : "border-line")}
          />
          <p id={id("department-hint")} className="mt-1.5 text-xs text-ink-soft">e.g. Physiotherapy (SRIHER), or your college / organisation</p>
          <Err k="department" />
        </div>

        <div>
          <label htmlFor={id("email")} className="text-sm font-bold text-ink">
            Email <span aria-hidden className="text-ember">*</span>
          </label>
          <input
            id={id("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
            className={cn(fieldBase, errors.email ? "border-[#b00020]" : "border-line")}
          />
          <Err k="email" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={id("phone")} className="text-sm font-bold text-ink">
            Contact number <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id={id("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describe("phone")}
            className={cn(fieldBase, "sm:max-w-sm", errors.phone ? "border-[#b00020]" : "border-line")}
          />
          <Err k="phone" />
        </div>

      </div>

      <div className="mt-6">
        <label htmlFor={id("message")} className="text-sm font-bold text-ink">
          Message <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id={id("message")}
          rows={4}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={cn(fieldBase, "min-h-28 border-line py-3")}
        />
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status.kind === "sending"} className={buttonClass("saffron")}>
          {status.kind === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          {status.kind === "sending" ? "Sending…" : "Send"}
        </button>
        <p className="max-w-md text-xs leading-relaxed text-ink-soft">
          Privacy: your details are used only by SRIHER Yoga Club to respond to you about club activities. They are not shared or
          used for marketing. Submitting this form is an expression of interest, not confirmed membership.
        </p>
      </div>

      {(status.kind === "offline" || status.kind === "error") && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className={cn(
            "mt-8 flex gap-4 rounded-2xl border p-5 text-sm leading-relaxed outline-none",
            status.kind === "error" ? "border-[#b00020]/30 bg-[#fff3e8] text-[#7a0016]" : "border-sunset/40 bg-transparent text-ink",
          )}
        >
          {status.kind === "error" ? <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden /> : <Info className="mt-0.5 size-5 shrink-0 text-ember" aria-hidden />}
          <div>
            {status.kind === "error" ? (
              <p>{status.message}</p>
            ) : (
              <p>
                <strong className="text-maroon">Online registration isn’t connected yet</strong>, so your details have
                not been sent or stored. You can email them to the club instead — we’ve prepared the message for you.
              </p>
            )}
            <a href={mailto} className="mt-3 inline-flex font-semibold text-ember underline decoration-sunset/50 underline-offset-4 hover:decoration-sunset">
              Email my details to {site.contact.email}
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
