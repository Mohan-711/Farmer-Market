import { Bell, ChevronDown, Menu, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-[#dfe7df] bg-[#f3f7f3] px-5 py-4">
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dfe6df] bg-white text-slate-700 shadow-sm md:hidden">
          <Menu className="h-4 w-4" />
        </button>

        <div className="relative hidden w-[430px] md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            aria-label="Search crops, farmers, offers, or transactions"
            placeholder="Search for crops, farmers, offers, or transactions..."
            className="h-11 w-full rounded-xl border border-[#dfe6df] bg-white pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#0f7b4a] focus:outline-none focus:ring-2 focus:ring-[#0f7b4a]/10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6df] bg-white text-slate-700 shadow-sm">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#f26d65] ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-[#dfe6df] bg-white px-2 py-1.5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] text-xs font-black text-[#0b5d3d] ring-1 ring-[#0f7b4a]/10">
            G
          </div>
          <div className="hidden text-left sm:block">
            <div className="text-[0.72rem] font-bold text-[#103d33]">GreenFresh Foods Ltd.</div>
            <div className="text-[0.62rem] text-slate-500">Company</div>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-slate-500 sm:block" />
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-[#dfe6df] bg-white px-3 py-2 shadow-sm md:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] text-[#0c5d3d] ring-1 ring-[#0f7b4a]/10">
            <span className="text-xs font-black">IN</span>
          </div>
          <div className="text-right">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Today</div>
            <div className="text-xs font-semibold text-[#123d30]">Tue, 12 Aug 2026</div>
          </div>
        </div>
      </div>
    </header>
  );
}
