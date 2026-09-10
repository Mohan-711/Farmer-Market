'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Leaf, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';

const roles = [
  {
    id: 'farmer',
    name: 'Farmer',
    icon: Leaf,
    description: 'Sell your crops directly',
    badge: 'Fair Prices',
  },
  {
    id: 'company',
    name: 'Company',
    icon: Building2,
    description: 'Buy and process produce',
    badge: 'Trade',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: Truck,
    description: 'Deliver produce across India',
    badge: 'Grow',
  },
  {
    id: 'buyer',
    name: 'Buyer',
    icon: ShoppingCart,
    description: 'Purchase quality produce',
    badge: 'Prosper',
  },
  {
    id: 'government',
    name: 'Government',
    icon: ShieldCheck,
    description: 'Monitor and regulate pricing',
    badge: 'Monitor',
  },
];

export function RoleSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>('farmer');

  const handleContinue = () => {
    router.push(`/auth/register/${selected}`);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="text-2xl font-black tracking-[-0.05em] text-[#123a2d]">Create Your Account</div>
      </div>

      <div className="mb-6 text-sm text-slate-500">
        Join AgriLink and be part of a transparent agriculture ecosystem.
      </div>

      <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf7ee] text-[#0f7b4a]">1</span>
        <span>Select Role</span>
        <span className="text-slate-300">•</span>
        <span className="opacity-60">2 Fill Details</span>
        <span className="text-slate-300">•</span>
        <span className="opacity-60">3 Complete</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {roles.map(({ id, name, icon: Icon, description, badge }) => {
          const isSelected = id === selected;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setSelected(id)}
              className={`group rounded-[24px] border p-4 text-left transition duration-200 ${
                isSelected
                  ? 'border-[#0f7b4a] bg-[#ebf8ef] shadow-[0_18px_28px_rgba(15,90,61,0.12)]'
                  : 'border-slate-200 bg-white hover:border-[#9ad8b3] hover:bg-[#f7faf7]'
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7ee] text-[#0f7b4a]">
                  <Icon className="h-5 w-5" />
                </div>
                {isSelected && <BadgeCheck className="h-5 w-5 text-[#0f7b4a]" />}
              </div>

              <div className="mb-2 text-xl font-bold text-[#153b35]">{name}</div>
              <div className="text-sm text-slate-600">{description}</div>
              <div className="mt-4 inline-flex rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0f7b4a] ring-1 ring-[#0f7b4a]/10">
                {badge}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Link href="/auth/login" className="text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">
          Back to Login
        </Link>
        <button
          type="button"
          onClick={handleContinue}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0f7b4a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d]"
        >
          Continue <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
