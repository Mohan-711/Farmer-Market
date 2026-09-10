import { ArrowRight, BadgeCheck, Building2, ClipboardList, Landmark, ShieldCheck, ShoppingBasket, Sprout, Users } from 'lucide-react';

const benefits = [
  {
    title: 'For Farmers',
    color: 'bg-[#eaf7ee]',
    icon: Sprout,
    points: ['Better prices', 'More buyers', 'Payment transparency'],
  },
  {
    title: 'For Companies',
    color: 'bg-[#eaf3ff]',
    icon: Building2,
    points: ['Easy sourcing', 'Verified farmers', 'Reliable procurement'],
  },
  {
    title: 'For Buyers',
    color: 'bg-[#fff0e5]',
    icon: ShoppingBasket,
    points: ['Quality products', 'Verified suppliers', 'Efficient purchasing'],
  },
  {
    title: 'For Government',
    color: 'bg-[#f3f5ff]',
    icon: Landmark,
    points: ['Market visibility', 'Complaint handling', 'Price monitoring'],
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-1.5 w-10 rounded-full bg-[#0f7b4a]" />
        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#132f2b] md:text-4xl">Benefits for Everyone</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map(({ title, color, icon: Icon, points }) => (
          <div key={title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                <Icon className="h-5 w-5 text-[#0f7b4a]" />
              </div>
              <h3 className="text-xl font-bold text-[#163d39]">{title}</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf7ee] text-[#0f7b4a]">
                    <BadgeCheck className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
