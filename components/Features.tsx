import { ArrowUpRight, Bot, BriefcaseBusiness, Building2, Landmark, ShieldCheck, Sparkles, Truck, Wallet } from 'lucide-react';

const features = [
  {
    title: 'Smart Price Discovery',
    description: 'Compare multiple company offers and select the best price.',
    icon: Sparkles,
    accent: 'bg-[#eaf7ee]',
    iconColor: 'text-[#0f7b4a]',
  },
  {
    title: 'AI Assistance',
    description: 'Get crop demand insights and selling price recommendations.',
    icon: Bot,
    accent: 'bg-[#f0f6ff]',
    iconColor: 'text-[#1d6fe4]',
  },
  {
    title: 'Secure Payments',
    description: 'Transparent payment tracking for every transaction.',
    icon: Wallet,
    accent: 'bg-[#edfcf4]',
    iconColor: 'text-[#2ca76d]',
  },
  {
    title: 'Logistics Integration',
    description: 'Connect with transport providers for smooth delivery.',
    icon: Truck,
    accent: 'bg-[#f7f1ff]',
    iconColor: 'text-[#8e5ccf]',
  },
  {
    title: 'Government Monitoring',
    description: 'Improve transparency and trust through government oversight.',
    icon: Landmark,
    accent: 'bg-[#fff5e7]',
    iconColor: 'text-[#d78a1f]',
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-1.5 w-10 rounded-full bg-[#0f7b4a]" />
        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#132f2b] md:text-4xl">Key Features</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {features.map(({ title, description, icon: Icon, accent, iconColor }) => (
          <div key={title} className="feature-card group rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1a3b36]">{title}</h3>
            <p className="text-[0.95rem] leading-7 text-slate-600">{description}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0f7b4a] opacity-0 transition group-hover:opacity-100">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
