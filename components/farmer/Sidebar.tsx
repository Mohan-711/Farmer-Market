import Link from 'next/link';
import { BellRing, CircleAlert, FileText, House, Leaf, MessageSquareText, Package, PlusCircle, Settings, ShieldCheck, Sprout, Tractor, WalletCards } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '#', active: true, icon: House },
  { label: 'My Crops', href: '#', active: false, icon: Leaf },
  { label: 'Add Crop', href: '#', active: false, icon: PlusCircle },
  { label: 'Offers Received', href: '#', active: false, icon: Package },
  { label: 'Accepted Deals', href: '#', active: false, icon: ShieldCheck },
  { label: 'Payments', href: '#', active: false, icon: WalletCards },
  { label: 'AI Assistant', href: '#', active: false, icon: MessageSquareText },
  { label: 'Complaints', href: '#', active: false, icon: CircleAlert },
  { label: 'Notifications', href: '#', active: false, icon: BellRing },
  { label: 'Market Insights', href: '#', active: false, icon: Tractor },
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
          <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Farmer Portal</div>
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

      <div className="mt-auto overflow-hidden rounded-[26px] border border-[#d9e7db] bg-gradient-to-b from-[#edf8ef] to-[#ddeede] p-3 shadow-inner">
        <div className="relative h-[190px] overflow-hidden rounded-[20px] bg-gradient-to-b from-[#ebf9ed] via-[#d9edd9] to-[#b9d7af]">
          <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(180deg,rgba(24,91,53,0.14),rgba(30,87,62,0.34)),url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.7),transparent_25%)]" />
          <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#103f32] backdrop-blur-sm">
            Farming
          </div>
          <div className="absolute inset-x-0 bottom-0 px-3 pb-6 text-center text-[#123d2d]">
            <div className="text-[1.1rem] font-black tracking-[-0.04em]">Stronger Farmers</div>
            <div className="text-[0.96rem] font-bold tracking-[-0.03em]">Brighter India</div>
            <div className="mt-1 text-[0.64rem] font-medium text-[#1d4e3e]">Sustainable Farming</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
