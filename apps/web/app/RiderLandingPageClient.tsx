"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bike, Lock, CreditCard, Smartphone, TimerReset, ChevronRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function RiderLandingPageClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a className="flex items-center gap-2 select-none" href="#">
            <div className="size-8 grid place-items-center rounded-md bg-white text-black">
              <Lock className="size-4" />
            </div>
            <span className="font-semibold tracking-tight">Locker</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition"
          >
            Get started <ChevronRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div variants={container} initial="hidden" animate="show" className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={item} className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Unlock adventure.
              </h1>
              <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-prose">
                Reserve a premium fat‑tire e‑bike, walk up to the locker, tap unlock, ride. No counters, no phone calls—just trails.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#get-started" className="rounded-md bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200 transition">
                  Start a rental
                </a>
                <a href="#how" className="rounded-md border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/5 transition">
                  How it works
                </a>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-4 text-sm text-zinc-300">
                <Stat label="Avg. unlock" value="&lt; 2s" />
                <Stat label="Coverage" value="Cellular" />
                <Stat label="Support" value="24/7" />
              </dl>
            </motion.div>

            <motion.div variants={item} className="lg:col-span-5">
              {/* Media placeholder — your black‑and‑white photography will live here */}
              <div className="relative rounded-2xl border border-white/10 bg-zinc-900 aspect-[4/3] grid place-items-center">
                <div className="text-center text-zinc-400">
                  <Bike className="mx-auto size-10 text-white/80" />
                  <p className="mt-2 text-sm">Drop a high‑contrast photo here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold">How it works</h2>
        <p className="mt-2 text-zinc-300 max-w-prose">Four steps. Trail‑ready in minutes.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Step icon={<Smartphone className="size-5" />} title="Reserve">Create an account and choose your time window.</Step>
          <Step icon={<CreditCard className="size-5" />} title="Pay">Checkout securely. Your card data never hits our servers.</Step>
          <Step icon={<Lock className="size-5" />} title="Unlock">Walk up and tap unlock. Short‑lived credentials, built‑in retries.</Step>
          <Step icon={<TimerReset className="size-5" />} title="Ride & Return">Track time in the app. Return and close the loop.</Step>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Simple, time‑based pricing</h3>
              <p className="mt-2 text-zinc-300 max-w-prose">
                Pick a duration now—change later if plans shift. Exact prices show at checkout and may vary by kiosk.
              </p>
              <ul className="mt-4 text-zinc-300 list-disc pl-5 space-y-1">
                <li>Helmet & damage waiver options</li>
                <li>Early return credits (where available)</li>
                <li>Promo codes and local discounts</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PriceCard title="2 hours" note="Quick scenic loop" />
              <PriceCard title="Half‑day" note="Unhurried ride" />
              <PriceCard title="Full‑day" note="Sunrise → sunset" />
              <PriceCard title="Overnight" note="Multi‑day trips" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-2xl font-bold">FAQ</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Faq q="Do I need cell service at the locker?" a="Unlocks use compact messages and retry automatically on spotty networks." />
          <Faq q="How are payments handled?" a="Stripe processes payments. Use test cards in dev; live cards at kiosks." />
          <Faq q="What if the locker doesn’t open?" a="Contact support from the app. Staff can remotely open if needed." />
          <Faq q="Can I change my time?" a="Yes—extend or shorten from the rental screen if bikes are available." />
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Locker. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-zinc-950 p-4">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-zinc-400 text-xs mt-1">{label}</div>
    </div>
  );
}

function Step({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={item} className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
      <div className="flex items-center gap-3">
        <div className="size-9 grid place-items-center rounded-md bg-white/10 text-white">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-zinc-300">{children}</p>
    </motion.div>
  );
}

function PriceCard({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5 shadow">
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="mt-1 text-2xl font-bold">$ — <span className="text-base font-medium text-zinc-400">/ rental</span></div>
      <div className="mt-2 text-xs text-zinc-400">{note}</div>
      <button className="mt-4 w-full rounded-md bg-white px-4 py-2 text-black font-semibold hover:bg-zinc-200 transition">
        Choose
      </button>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
      <div className="font-semibold">{q}</div>
      <div className="mt-2 text-sm text-zinc-300">{a}</div>
    </div>
  );
}
