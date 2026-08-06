"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/brand.config";

/**
 * No backend / form API is wired for this site, so submitting opens a
 * pre-filled email to the real business address, a working contact path
 * that doesn't pretend to submit somewhere it doesn't.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const activity = String(form.get("activity") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Booking inquiry: ${activity || "Lake Tahoe adventure"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nActivity: ${activity}\n\n${message}`
    );
    window.location.href = `mailto:${brand.social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-4">
        <Field label="Activity you're interested in" name="activity" placeholder="Kayak tour, mountain biking, fly fishing…" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Dates, group size, anything else we should know"
          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send Message <Send className="size-4" />
      </Button>
      {sent && (
        <p className="mt-3 text-sm text-muted-foreground">
          Opening your email app with this message addressed to {brand.social.email}.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
