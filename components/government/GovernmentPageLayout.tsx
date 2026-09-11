'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function GovernmentPageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('agri_token');
    const role = window.localStorage.getItem('agri_role');

    if (!token || role !== 'government') {
      router.replace('/auth/login');
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#edf4ef] text-slate-800">
        <div className="rounded-[24px] border border-[#dfe6df] bg-white px-6 py-5 text-sm font-medium text-slate-600 shadow-sm">
          Loading government dashboard...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf4ef] text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-0 bg-[#f2f7f3]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />
          <div className="space-y-5 p-5 lg:p-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
