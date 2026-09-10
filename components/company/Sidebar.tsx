import Link from 'next/link';
import {
  BarChart3,
  BellRing,
  Building2,
  CircleAlert,
  ClipboardList,
  FileBarChart2,
  FileText,
  House,
  Leaf,
  Package,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '#', active: true, icon: House },
  { label: 'Available Crops', href: '#', active: false, icon: Leaf },
  { label: 'My Offers', href: '#', active: false, icon: ClipboardList },
  { label: 'Accepted Purchases', href: '#', active: false, icon: ShoppingBag },
  { label: 'Inventory', href: '#', active: false, icon: Warehouse },
  { label: 'Sell to Buyers', href: '#', active: false, icon: Package },
  { label: 'Transactions', href: '#', active: false, icon: FileText },
  { label: 'Logistics Requests', href: '#', active: false, icon: Truck },
  { label: 'Complaints', href: '#', active: false, icon: CircleAlert },
  { label: 'Reports', href: '#', active: false, icon: FileBarChart2 },
  { label: 'Settings', href: '#', active: false, icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-[270px] flex-col border-r border-[#dfe7df] bg-[#f3f7f3] px-4 py-4">
      <div className="mb-5 flex items-center gap-3 px-2 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] ring-1 ring-[#0f7b4a]/20">
          <Sprout className="h-5 w-5 text-[#0f7b4a]" />
        </div>
        <div>
          <div className="text-[2rem] font-black leading-none tracking-[-0.06em] text-[#113f35]">AgriLink</div>
          <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Connecting Farms to Markets</div>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3 rounded-[20px] border border-[#dfe7df] bg-white px-3 py-3 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ddf4e4] ring-1 ring-[#0f7b4a]/10">
          <Building2 className="h-5 w-5 text-[#0f7b4a]" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-[0.92rem] font-black tracking-[-0.03em] text-[#123a2d]">GreenFresh Foods Ltd.</div>
          <div className="text-[0.7rem] text-slate-500">Buyer • Processor • Distributor</div>
        </div>
      </div>

      <nav className="space-y-1.5 px-1 pb-3">
        {navItems.map(({ label, href, active, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={[
              'flex items-center gap-3 rounded-xl px-3 py-3 text-[0.96rem] font-medium transition',
              active ? 'bg-[#0f7b4a] text-white shadow-md shadow-green-700/20' : 'text-slate-700 hover:bg-white hover:text-[#0f7b4a]',
            ].join(' ')}
          >
            <span className={active ? 'text-white' : 'text-slate-600'}>
              <Icon className="h-4 w-4" />
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto overflow-hidden rounded-[24px] border border-[#d9e7db] bg-gradient-to-b from-[#eef8ef] to-[#ddeede] p-3 shadow-inner">
        <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-gradient-to-b from-[#ebf9ed] via-[#d9edd9] to-[#bcd7b0]">
          <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[linear-gradient(180deg,rgba(34,91,63,0.18),rgba(18,79,55,0.38)),url('https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.65),transparent_26%)]" />
          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#103f32] backdrop-blur-sm">
            Processing
          </div>
          <div className="absolute inset-x-0 bottom-0 px-3 pb-6 text-center text-[#123d2d]">
            <div className="text-[1.15rem] font-black tracking-[-0.04em]">Source Sustainably</div>
            <div className="text-[0.95rem] font-bold tracking-[-0.03em]">Grow Together</div>
            <div className="mt-1 text-[0.64rem] font-medium text-[#1d4e3e]">Better Crops. Better Business. A Greener Tomorrow.</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
