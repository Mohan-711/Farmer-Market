export function ComplaintForm() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Raise a Complaint</div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Select Issue Type</label>
          <select className="w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10">
            <option>Product Quality Issue</option>
            <option>Delivery Delay</option>
            <option>Payment Issue</option>
            <option>Wrong Quantity</option>
            <option>Damaged Product</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Description</label>
          <textarea
            rows={4}
            placeholder="Describe your issue..."
            className="w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
          />
        </div>

        <button className="w-full rounded-xl bg-[#0f7b4a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b5d3d]">
          Submit Complaint
        </button>
      </div>
    </div>
  );
}
