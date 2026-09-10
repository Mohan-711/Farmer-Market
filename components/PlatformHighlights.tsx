import { Award, BadgeCheck, Bot, ShieldCheck, Truck, Wallet } from 'lucide-react';

const features = [
  { icon: LeafIcon, label: 'Better Prices For Farmers' },
  { icon: ShieldCheck, label: 'Secure Payments' },
  { icon: Truck, label: 'Integrated Logistics' },
  { icon: Bot, label: 'AI Market Intelligence' },
  { icon: BadgeCheck, label: 'Government Monitoring' },
  { icon: Wallet, label: 'Verified Procurement Network' },
];

function LeafIcon(props: any) {
  return <Award {...props} />;
}

export function PlatformHighlights() {
  return (
    <section className="bg-[#0b5d3d] py-4 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-6 lg:px-8">
        {features.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#dff3e4]">
              <Icon className="h-4 w-4" />
            </div>
            <div className="text-sm font-semibold leading-tight text-white/95">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
