'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, BellRing, Building2, FileText, House, ShieldCheck, Sprout, TriangleAlert, Users, WalletCards } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/government', icon: House },
  { label: 'Transactions', href: '/government/transactions', icon: FileText },
  { label: 'Farmers', href: '/government/farmers', icon: Users },
  { label: 'Companies', href: '/government/companies', icon: Building2 },
  { label: 'Price Monitoring', href: '/government/price-monitoring', icon: WalletCards },
  { label: 'Complaints', href: '/government/complaints', icon: TriangleAlert },
  { label: 'Analytics', href: '/government/analytics', icon: BarChart3 },
  { label: 'Notifications', href: '/government/notifications', icon: BellRing },
  { label: 'Company Verification', href: '/government/company-verification', icon: ShieldCheck },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[280px] flex-col border-r border-[#dfe6df] bg-[#f3f6f3] px-4 py-4">
      <div className="mb-5 flex items-center gap-3 px-2 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] ring-1 ring-[#0f7b4a]/20">
          <Sprout className="h-5 w-5 text-[#0f7b4a]" />
        </div>
        <div>
          <div className="text-[2rem] font-black leading-none tracking-[-0.06em] text-[#113f35]">AgriLink</div>
          <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Government Portal</div>
        </div>
      </div>

      <nav className="space-y-1.5 px-1 pb-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href === '/government' && pathname.startsWith('/government') && !['/government/transactions', '/government/farmers', '/government/companies', '/government/price-monitoring', '/government/complaints', '/government/analytics', '/government/notifications', '/government/company-verification'].includes(pathname));

          return (
            <Link
              key={label}
              href={href}
              className={[
                'flex items-center gap-3 rounded-xl px-3 py-3 text-[0.98rem] font-medium transition',
                active
                  ? 'bg-[#0f7b4a] text-white shadow-md shadow-green-700/20'
                  : 'text-slate-700 hover:bg-white hover:text-[#0f7b4a]',
              ].join(' ')}
            >
              <span className={active ? 'text-white' : 'text-slate-600'}>
                <Icon className="h-4 w-4" />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto overflow-hidden rounded-[26px] border border-[#d9e7db] bg-gradient-to-b from-[#edf7ee] to-[#dfece1] p-3 shadow-inner">
        <div className="relative h-[200px] overflow-hidden rounded-[22px] bg-gradient-to-b from-[#ebf9ed] via-[#d9edd9] to-[#b6d8ae]">
          <div className="absolute inset-x-0 bottom-0 h-[52%] bg-[linear-gradient(180deg,rgba(67,131,93,0.28),rgba(18,79,55,0.35)),url('https://images.unsplash.com/photo-1464226184884-fa52ac9c5ed5?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.65),transparent_28%)]" />
          <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-white/50 bg-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#103f32] backdrop-blur-sm">
            Government
          </div>
          <div className="absolute left-1/2 top-[58%] -translate-x-1/2 whitespace-nowrap text-center text-[1.2rem] font-black tracking-[-0.04em] text-[#123d2d]">
            For a Fairer
            <br />
            Food Ecosystem
          </div>
          <div className="absolute inset-x-0 bottom-3 text-center text-[0.7rem] font-medium text-[#1d4e3e]">
            Monitor • Regulate • Support
          </div>
        </div>
      </div>
    </aside>
  );
}
