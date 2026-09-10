import { AlertTriangle, ClipboardList, CreditCard, Search } from 'lucide-react';

const actions = [
  { label: 'Browse Marketplace', icon: Search, tone: 'bg-[#eaf7ee] text-[#0f7b4a]' },
  { label: 'Track My Orders', icon: ClipboardList, tone: 'bg-[#edf5ff] text-[#3b82f6]' },
  { label: 'View Transactions', icon: CreditCard, tone: 'bg-[#fff1dc] text-[#d29d2a]' },
  { label: 'Raise a Complaint', icon: AlertTriangle, tone: 'bg-[#fbe6ef] text-[#c84a73]' },
];

export function QuickActions() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Quick Actions</div>
      </div>

      <div className="grid gap-3">
        {actions.map(({ label, icon: Icon, tone }) => (
          <button
            key={label}
            className="flex w-full items-center justify-between rounded-[16px] border border-[#e7ebe7] bg-white px-3 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#d5e5d8] hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[0.96rem] font-semibold text-[#123a2d]">{label}</span>
            </div>
            <span className="text-xl text-slate-500">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
