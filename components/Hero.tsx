'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Leaf, ShieldCheck, Sprout, Store, Truck, Users } from 'lucide-react';

const trustBadges = [
  { icon: Leaf, label: 'Fair Prices' },
  { icon: Users, label: 'Trusted Partners' },
  { icon: ShieldCheck, label: 'Secure Payments' },
  { icon: BadgeCheck, label: 'Government Monitored' },
];

const stats = [
  { value: '10,000+', label: 'Farmers Onboarded', delta: '+12%', accent: 'bg-[#eaf7ee]' },
  { value: '500+', label: 'Verified Companies', delta: '+18%', accent: 'bg-[#eef7ff]' },
  { value: '2,000+', label: 'Buyers Connected', delta: '+25%', accent: 'bg-[#fff0df]' },
  { value: '300+', label: 'Logistics Partners', delta: '+20%', accent: 'bg-[#f6edf8]' },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-8 pt-8 md:px-6 lg:px-8">
      <div className="rounded-[30px] bg-[#dfe9ea] pb-6 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] lg:pb-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="px-4 sm:px-6 lg:pl-8 lg:pr-0"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-[#0b5d3d]/15 bg-white/70 px-4 py-2 text-xs font-semibold text-[#0d4635] shadow-sm backdrop-blur-sm">
              <Sprout className="mr-2 h-4 w-4 text-[#0f7b4a]" />
              A Transparent Agricultural Marketplace
            </div>

            <h1 className="max-w-[620px] text-[2.2rem] font-black leading-[1.05] tracking-[-0.06em] text-[#102a22] sm:text-[3.25rem] lg:text-[4.1rem]">
              Connecting Farmers,
              <br />
              Companies, Buyers & Logistics
              <br />
              for a Better, Greener Tomorrow
            </h1>

            <p className="mt-5 max-w-[650px] text-base leading-8 text-slate-700 md:text-lg">
              A government-monitored platform that enables fair pricing, verified transactions, secure payments, and efficient agricultural supply chains.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0f7b4a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/20 hover:-translate-y-0.5 hover:bg-[#0b5d3d]"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 rounded-xl border border-[#0f7b4a] bg-white px-6 py-3 text-base font-semibold text-[#0f7b4a] shadow-sm hover:-translate-y-0.5 hover:bg-[#f2faf4]"
              >
                Login
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-[#0f7b4a]/10 bg-white/80 px-3 py-2 text-sm font-medium text-[#173f35] shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7f6eb] text-[#0f7b4a]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative px-4 pb-4 sm:px-6 lg:px-0"
          >
            <div className="hero-visual relative overflow-hidden rounded-[30px] border border-white/50 p-4 shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_35%),linear-gradient(180deg,transparent,rgba(15,90,61,0.08))]" />

              <div className="absolute left-5 top-5 grid w-[240px] gap-3 sm:w-[260px]">
                {stats.slice(0, 2).map(({ value, label, delta, accent }) => (
                  <div key={label} className={`relative z-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 backdrop-blur-sm ${accent}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[#0f7b4a]">
                      {label.includes('Farmers') ? <Leaf className="h-4 w-4" /> : <Store className="h-4 w-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[1.1rem] font-bold text-slate-800">{value}</div>
                        <span className="text-[0.65rem] font-semibold text-[#0f7b4a]">{delta}</span>
                      </div>
                      <div className="text-[0.7rem] text-slate-600">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-5 right-5 grid w-[240px] gap-3 sm:w-[260px]">
                {stats.slice(2).map(({ value, label, delta, accent }) => (
                  <div key={label} className={`relative z-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 backdrop-blur-sm ${accent}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[#0f7b4a]">
                      {label.includes('Buyers') ? <Users className="h-4 w-4" /> : <Truck className="h-4 w-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[1.1rem] font-bold text-slate-800">{value}</div>
                        <span className="text-[0.65rem] font-semibold text-[#0f7b4a]">{delta}</span>
                      </div>
                      <div className="text-[0.7rem] text-slate-600">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 min-h-[480px] rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02)),url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c3e2c]/35 to-transparent" />
                <div className="absolute left-1/2 top-[15%] flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/60 bg-[#e4f6e7]/80 px-4 py-2 text-sm font-semibold text-[#123b2d] backdrop-blur-sm shadow-md">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f7b4a] text-white">
                    <Leaf className="h-3.5 w-3.5" />
                  </span>
                  AgriLink
                </div>

                <div className="absolute left-1/2 top-[32%] flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/60 bg-white/75 px-5 py-3 shadow-xl backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#dff3e4] text-[#0f7b4a]"><Users className="h-4 w-4" /></div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#e9f8ff] text-[#176b8a]"><Store className="h-4 w-4" /></div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#fff0da] text-[#d68f10]"><Truck className="h-4 w-4" /></div>
                  </div>
                  <div className="text-sm font-semibold text-[#173f35]">Farmer → Company → Buyer</div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8">
                  <div className="w-[82%] rounded-[28px] border border-white/40 bg-white/20 p-3 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center justify-between rounded-[22px] bg-white/70 px-5 py-3">
                      <div>
                        <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">Marketplace</div>
                        <div className="text-lg font-bold text-[#123b2d]">Transparent transactions</div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dff3e4] text-[#0f7b4a]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
