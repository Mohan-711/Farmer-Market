'use client';

import { ArrowRight, BadgeCheck, Building2, Factory, ShoppingCart, Tractor, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { number: '1', title: 'Farmer', subtitle: 'Uploads Crop', icon: Tractor, accent: 'bg-[#eaf7ee]', text: 'text-[#0f7b4a]' },
  { number: '2', title: 'Companies', subtitle: 'Submit Offers', icon: Building2, accent: 'bg-[#eaf3ff]', text: 'text-[#2d6acc]' },
  { number: '3', title: 'Farmer', subtitle: 'Accepts Offer', icon: UserCheck, accent: 'bg-[#fff0e5]', text: 'text-[#d08128]' },
  { number: '4', title: 'Logistics', subtitle: 'Pickup & Transport', icon: Factory, accent: 'bg-[#f6edf9]', text: 'text-[#9f5dd2]' },
  { number: '5', title: 'Buyer', subtitle: 'Purchases Products', icon: ShoppingCart, accent: 'bg-[#eaf8f0]', text: 'text-[#0f7b4a]' },
  { number: '6', title: 'Government', subtitle: 'Monitors', icon: BadgeCheck, accent: 'bg-[#fff1df]', text: 'text-[#e89d25]' },
];

export function HowItWorks() {
  return (
    <section id="features" className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-10 rounded-full bg-[#0f7b4a]" />
          <h2 className="text-3xl font-black tracking-[-0.06em] text-[#132f2b] md:text-4xl">How It Works</h2>
        </div>
        <p className="hidden text-base text-slate-600 md:block">A simple and transparent flow from farm to market</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
        {steps.map(({ number, title, subtitle, icon: Icon, accent, text }, index) => (
          <motion.div
            key={title + subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="group relative flex items-center gap-4 rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${accent} ${text}`}>
              <Icon className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <div className="mb-1 text-xl font-bold text-[#1f463e]">{title}</div>
              <div className="text-sm font-medium text-slate-700">{subtitle}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 xl:flex">
                <ArrowRight className="h-5 w-5 text-[#0f7b4a]" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
