import Link from 'next/link';
import {
  BarChart3,
  BellRing,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  CreditCard,
  Gauge,
  House,
  Menu,
  Settings,
  Truck,
  Users,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '#', active: true, icon: House },
  { label: 'Available Deliveries', href: '#', active: false, icon: Truck },
  { label: 'My Deliveries', href: '#', active: false, icon: ClipboardCheck },
  { label: 'Completed Deliveries', href: '#', active: false, icon: CheckCircle2 },
  { label: 'Transactions', href: '#', active: false, icon: CreditCard },
  { label: 'Earnings', href: '#', active: false, icon: BarChart3 },
  { label: 'Vehicle Management', href: '#', active: false, icon: Gauge },
  { label: 'Driver Management', href: '#', active: false, icon: Users },
  { label: 'Support', href: '#', active: false, icon: CircleHelp },
  { label: 'Settings', href: '#', active: false, icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-[280px] flex-col border-r border-[#dfe7df] bg-[#f4f8f4] px-4 py-4">
      <div className="mb-5 flex items-center gap-3 px-2 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] ring-1 ring-[#0f7b4a]/20">
          <Truck className="h-5 w-5 text-[#0f7b4a]" />
        </div>
        <div>
          <div className="text-[1.9rem] font-black leading-none tracking-[-0.06em] text-[#113f35]">AgriLink</div>
          <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Logistics Partner</div>
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

      <div className="mt-auto overflow-hidden rounded-[24px] border border-[#dfe9df] bg-gradient-to-b from-[#eef7f1] to-[#dfe9df] p-3 shadow-inner">
        <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-gradient-to-b from-[#ecf9ee] via-[#dfeee4] to-[#bed9b5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.6),transparent_28%)]" />
          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/50 bg-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#103f32] backdrop-blur-sm">
            Logistics
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(180deg,rgba(20,95,62,0.12),rgba(12,74,53,0.28)),url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute left-1/2 top-[52%] -translate-x-1/2 whitespace-nowrap text-center text-[1.18rem] font-black tracking-[-0.04em] text-[#123d2d]">
            Delivering Freshness
            <br />
            Connecting India
          </div>
          <div className="absolute inset-x-0 bottom-3 text-center text-[0.7rem] font-medium text-[#1d4e3e]">
            From Farms to Markets
            <br />
            On Time, Every Time.
          </div>
        </div>
      </div>
    </aside>
  );
}
