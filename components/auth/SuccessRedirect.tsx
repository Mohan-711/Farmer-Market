'use client';

import { useEffect, useState } from 'react';
import { Check, CircleDashed, Leaf, ShieldCheck, ShoppingCart, Truck, UserRound } from 'lucide-react';
import Link from 'next/link';

const roles = [
  { name: 'Farmer', icon: UserRound },
  { name: 'Company', icon: ShieldCheck },
  { name: 'Logistics', icon: Truck },
  { name: 'Buyer', icon: ShoppingCart },
  { name: 'Government', icon: Leaf },
];

export function SuccessRedirect() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCountdown((value) => (value > 0 ? value - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eef4ee] p-6">
      <div className="w-full max-w-[900px] rounded-[32px] bg-white p-8 shadow-[0_30px_60px_rgba(14,45,38,0.12)]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf7ee] text-[#0f7b4a] ring-8 ring-[#edf9f0]">
            <Check className="h-9 w-9" />
          </div>
          <h1 className="text-3xl font-black tracking-[-0.06em] text-[#123a2d]">You&apos;re All Set!</h1>
          <p className="mt-3 text-slate-500">Redirecting to your dashboard...</p>

          <div className="mt-8 grid w-full max-w-[650px] gap-4 sm:grid-cols-5">
            {roles.map(({ name, icon: Icon }) => (
              <div key={name} className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-[#f9fbfa] p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7ee] text-[#0f7b4a]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-slate-700">{name}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
            <CircleDashed className="h-5 w-5 animate-spin text-[#0f7b4a]" />
            Redirecting in {countdown}s
          </div>

          <Link href="/auth/login" className="mt-8 text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">
            Go to login
          </Link>
        </div>
      </div>
    </main>
  );
}
