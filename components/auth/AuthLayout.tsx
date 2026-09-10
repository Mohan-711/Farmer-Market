import Link from 'next/link';
import { ArrowLeft, BadgeCheck, Leaf, ShieldCheck, Sprout, Store, Truck, Users } from 'lucide-react';
import type { ReactNode } from 'react';

export interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  slogan: string;
  highlight?: string;
  features?: string[];
  children: ReactNode;
}

const featureMap = {
  price: { icon: BadgeCheck, label: 'Fair Prices' },
  market: { icon: Store, label: 'Direct Markets' },
  growth: { icon: Sprout, label: 'Sustainable Growth' },
};

export function AuthLayout({
  title,
  subtitle,
  slogan,
  highlight,
  features = ['Fair Prices', 'Direct Markets', 'Sustainable Growth'],
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#eef4ee] p-4 py-8 md:p-8 lg:p-10">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[30px] border border-[#e6ece6] bg-white/95 shadow-[0_30px_70px_rgba(19,72,50,0.10)] lg:grid-cols-[38%_62%]">
        <aside className="relative overflow-hidden bg-gradient-to-br from-[#0a5c3a] via-[#0f7b4a] to-[#b7d8aa] p-8 text-white md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_30%)]" />
          <div className="absolute bottom-[-12%] left-[-4%] right-[-4%] h-52 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3528]/50 to-transparent" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
                <Leaf className="h-5 w-5" />
              </div>
              <div className="text-3xl font-black tracking-[-0.05em]">AgriLink</div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="text-lg font-semibold text-white/80">{title}</div>
              {subtitle && <div className="text-sm text-white/80">{subtitle}</div>}
              {highlight && (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 ring-1 ring-white/20">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {highlight}
                </div>
              )}
            </div>

            <div className="mt-8 rounded-[24px] border border-white/20 bg-white/8 p-4 backdrop-blur-sm">
              <div className="text-2xl font-black leading-tight tracking-[-0.04em]">{slogan}</div>
            </div>

            <div className="mt-8 space-y-3">
              {features.map((feature, index) => {
                const Icon = [BadgeCheck, Store, Sprout][index % 3];
                return (
                  <div key={feature} className="flex items-center gap-3 rounded-full bg-white/7 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto rounded-[28px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-2xl font-black tracking-[-0.05em]">Together for a</div>
                  <div className="text-2xl font-black tracking-[-0.05em]">Stronger Tomorrow</div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dff3e4] text-[#0d4635] shadow-lg">
                  <Users className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex items-center justify-center bg-[#f8faf7] p-4 sm:p-6 lg:p-10">
          <div className="w-full max-w-[700px] rounded-[30px] bg-white p-5 shadow-[0_20px_40px_rgba(17,50,39,0.08)] sm:p-7 lg:p-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
