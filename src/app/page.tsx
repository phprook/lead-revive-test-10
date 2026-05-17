import LeadForm from "./LeadForm";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <section className="w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 text-center sm:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Real estate
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Thinking about your next move?
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Tell us a little about what you&apos;re looking for and a local agent will
            follow up with the next step — no pressure, no spam.
          </p>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
