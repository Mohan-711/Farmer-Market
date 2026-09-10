import { Building2, Check, FileText, ShieldCheck, ShoppingCart, Truck, UserRound, Warehouse } from 'lucide-react';

const stakeholders = [
  {
    name: 'Farmers',
    icon: UserRound,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    points: ['Upload Crops', 'Receive Offers', 'Track Payments'],
    tint: 'bg-[#eaf7ee]',
  },
  {
    name: 'Companies',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    points: ['View Crops', 'Submit Offers', 'Manage Inventory'],
    tint: 'bg-[#eaf3ff]',
  },
  {
    name: 'Logistics Partners',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    points: ['Accept Deliveries', 'Transport Produce', 'Update Status'],
    tint: 'bg-[#f5ebff]',
  },
  {
    name: 'Buyers',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    points: ['Browse Marketplace', 'Purchase Products', 'Track Orders'],
    tint: 'bg-[#fff0e5]',
  },
  {
    name: 'Government',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80',
    points: ['Monitor Pricing', 'Resolve Complaints', 'Ensure Transparency'],
    tint: 'bg-[#eaf7ee]',
  },
];

export function Stakeholders() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-1.5 w-10 rounded-full bg-[#0f7b4a]" />
        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#132f2b] md:text-4xl">Our Stakeholders</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {stakeholders.map(({ name, icon: Icon, image, points, tint }) => (
          <div key={name} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="overflow-hidden rounded-[20px] bg-[#eef4ef]">
              <div className={`${tint} flex h-36 items-center justify-center rounded-t-[20px]`}>
                <div className="relative h-full w-full overflow-hidden rounded-t-[20px]">
                  <img src={image} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f7b4a]/15 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-[#0f7b4a] shadow-sm backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 pb-2 pt-4">
              <h3 className="mb-3 text-2xl font-bold text-[#193731]">{name}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf7ee] text-[#0f7b4a]">
                      <Check className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
