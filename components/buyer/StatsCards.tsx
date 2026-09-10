import { ArrowDownRight, ArrowUpRight, BadgeDollarSign, Box, CheckCircle2, ClipboardList } from 'lucide-react';

const stats = [
  { label: 'Available Products', value: '45', change: '+12% from last week', delta: 'up', accent: 'bg-[#e8f7ee]', icon: ClipboardList, iconColor: 'text-[#0f7b4a]' },
  { label: 'Active Orders', value: '3', change: '2 in processing', delta: 'neutral', accent: 'bg-[#edf5ff]', icon: Box, iconColor: 'text-[#1e6fc7]' },
  { label: 'Completed Orders', value: '25', change: '+25% from last month', delta: 'up', accent: 'bg-[#eaf7ee]', icon: CheckCircle2, iconColor: 'text-[#0f7b4a]' },
  { label: 'Total Spending', value: '₹2,45,000', change: '+18% from last month', delta: 'up', accent: 'bg-[#f0ecff]', icon: BadgeDollarSign, iconColor: 'text-[#6747d4]' },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, change, delta, accent, icon: Icon, iconColor }) => (
        <div
          key={label}
          className={`${accent} group rounded-[22px] border border-[#e6ece6] p-4 shadow-[0_12px_24px_rgba(31,75,51,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(17,50,39,0.08)]`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>
            <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.65rem] font-semibold ${delta === 'up' ? 'bg-[#dff5e8] text-[#0f7b4a]' : delta === 'neutral' ? 'bg-[#e9f1ff] text-[#3b82f6]' : 'bg-[#fbe3ea] text-[#c84062]'}`}>
              {delta === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {delta === 'up' ? 'Up' : 'In'}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-medium text-slate-600">{label}</div>
            <div className="mt-2 text-[2rem] font-black leading-none tracking-[-0.06em] text-[#132d2a]">{value}</div>
            <div className="mt-2 text-[0.76rem] text-slate-500">{change}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
