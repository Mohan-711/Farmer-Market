import { Check, MapPin, Package, ShieldCheck, ShoppingBag } from 'lucide-react';

export function ProductDetailsCard() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Product Details</div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-[#edf1ee] bg-[#fafcfb] p-3">
        <div className="mb-3 overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#f3f7ee,#e0e8dd)]">
          <img
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80"
            alt="Tomato"
            className="h-40 w-full object-cover"
          />
        </div>

        <div className="text-[1.05rem] font-black text-[#123a2d]">Tomato</div>
        <div className="mt-1 text-sm text-slate-500">by GreenFresh Foods Pvt Ltd</div>

        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <div className="flex items-center justify-between"><span className="flex items-center gap-2"><Package className="h-4 w-4 text-[#0f7b4a]" /> Available</span><span className="font-semibold text-[#123a2d]">1,000 kg</span></div>
          <div className="flex items-center justify-between"><span className="flex items-center gap-2"><ShoppingBag className="h-4 w-4 text-[#0f7b4a]" /> Price</span><span className="font-semibold text-[#123a2d]">₹35 / kg</span></div>
          <div className="flex items-center justify-between"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0f7b4a]" /> Quality</span><span className="font-semibold text-[#123a2d]">Grade A</span></div>
          <div className="flex items-center justify-between"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0f7b4a]" /> Warehouse</span><span className="font-semibold text-[#123a2d]">Mumbai, MH</span></div>
        </div>

        <div className="mt-4 rounded-xl border border-[#edf1ee] bg-white p-3 text-sm text-slate-600">
          Fresh farm tomatoes, suitable for retail and bulk purchase. Carefully packed to preserve freshness and quality.
        </div>

        <button className="mt-4 w-full rounded-xl bg-[#0f7b4a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b5d3d]">
          Purchase Now
        </button>
      </div>
    </div>
  );
}
