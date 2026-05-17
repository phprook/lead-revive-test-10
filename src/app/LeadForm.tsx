"use client";

import { useState } from "react";

type Interest = "Buying" | "Selling" | "Both" | "Not sure" | "";

type Errors = {
  fullName?: string;
  contact?: string;
  email?: string;
  interest?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Please enter your full name.";
    if (!email.trim() && !phone.trim()) {
      next.contact = "Please provide an email or phone number so we can reach you.";
    }
    if (email.trim() && !EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!interest) next.interest = "Please tell us what you are interested in.";
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setInterest("");
    setMessage("");
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 0 1 0 1.42l-7.5 7.5a1 1 0 0 1-1.42 0l-3.5-3.5a1 1 0 1 1 1.42-1.42L8.5 12.08l6.79-6.79a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-100">
          Thank you — your request is in.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-emerald-800 dark:text-emerald-200">
          A local agent will reach out within one business day to follow up on your
          real estate goals. Keep an eye on your inbox or phone.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-emerald-900 underline underline-offset-4 hover:text-emerald-700 dark:text-emerald-100 dark:hover:text-emerald-300"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100/10"
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-sm text-red-600 dark:text-red-400">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100/10"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100/10"
          />
        </div>
      </div>
      {errors.contact && (
        <p className="-mt-2 text-sm text-red-600 dark:text-red-400">{errors.contact}</p>
      )}

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          I&apos;m interested in
        </legend>
        <div className="flex flex-wrap gap-2">
          {(["Buying", "Selling", "Both", "Not sure"] as const).map((option) => {
            const active = interest === option;
            return (
              <label
                key={option}
                className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-500"
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={option}
                  checked={active}
                  onChange={() => setInterest(option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
        {errors.interest && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.interest}</p>
        )}
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Anything we should know? <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100/10"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Request a follow-up
      </button>
    </form>
  );
}
