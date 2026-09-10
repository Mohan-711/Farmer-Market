export function MakeOfferCard() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Make Offer</div>
      </div>

      <div className="rounded-[18px] border border-[#edf1ee] bg-[#fafcfb] p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0d9] text-lg">🍅</div>
          <div>
            <div className="text-[1.05rem] font-black text-[#123a2d]">Tomato</div>
            <div className="text-sm text-slate-500">Farmer: Ramesh</div>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex items-center justify-between"><span>Location</span><span className="font-semibold text-[#123a2d]">Pune, MH</span></div>
          <div className="flex items-center justify-between"><span>Quantity</span><span className="font-semibold text-[#123a2d]">1,000 kg</span></div>
          <div className="flex items-center justify-between"><span>Expected Price</span><span className="font-semibold text-[#123a2d]">₹25 / kg</span></div>
        </div>

        <div className="mt-4 rounded-[14px] border border-[#e7ebe7] bg-white p-3">
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Offer Price (₹/kg)</label>
          <div className="flex items-center gap-2 rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 py-2">
            <span className="text-sm font-semibold text-slate-500">₹</span>
            <input aria-label="Offer price" value="27" readOnly className="w-full bg-transparent text-base font-bold text-[#123a2d] outline-none" />
          </div>
        </div>

        <button className="mt-4 w-full rounded-xl bg-[#0f7b4a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b5d3d]">
          Submit Offer
        </button>

        <div className="mt-4 rounded-xl border border-[#edf1ee] bg-[#f7faf7] p-3">
          <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
            <span className="inline-block h-2 w-2 rounded-full bg-[#f5cb5c]" />
            Offer Workflow
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-[#eaf7ee] px-2 py-1 font-semibold text-[#0f7b4a]">Submit Offer</span>
            <span>→</span>
            <span className="rounded-full bg-[#fff4d7] px-2 py-1 font-semibold text-[#b7791f]">Offer Saved</span>
            <span>→</span>
            <span className="rounded-full bg-[#e9f1ff] px-2 py-1 font-semibold text-[#3b82f6]">Farmer Notified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
