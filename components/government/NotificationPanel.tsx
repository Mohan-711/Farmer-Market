import { BellRing, Send } from 'lucide-react';

export function NotificationPanel() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-black tracking-[-0.05em] text-[#123a2d]">
          <BellRing className="h-5 w-5 text-[#0f7b4a]" />
          Notifications
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            defaultValue="Price Alert"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 py-2 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            defaultValue="Tomato prices have increased by 12% in the last 7 days. Please review the market-level adjustments."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Target Audience</label>
          <select className="h-11 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10">
            <option>All farmers</option>
            <option>All companies</option>
            <option>Buyers</option>
            <option>Logistics</option>
          </select>
        </div>

        <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-[#0f7b4a] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-700/20 hover:bg-[#0b5d3d]">
          <Send className="h-4 w-4" />
          Send
        </button>
      </form>
    </div>
  );
}
