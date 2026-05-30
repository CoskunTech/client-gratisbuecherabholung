"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-neutral-900"
      >
        {q}
        <span className="shrink-0 text-2xl font-normal text-primary-500">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <p className="overflow-hidden leading-relaxed text-neutral-700">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Häufig gestellte Fragen
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">FAQ</h2>
        </div>
        <div>
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
