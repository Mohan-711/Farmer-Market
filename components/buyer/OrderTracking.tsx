import { Check, MapPin, PackageCheck, Truck } from 'lucide-react';

const steps = [
  { label: 'Order Placed', active: true, icon: Check },
  { label: 'Shipped', active: true, icon: Truck },
  { label: 'Out for Delivery', active: true, icon: PackageCheck },
  { label: 'Delivered', active: false, icon: Check },
];

export function OrderTracking() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Order Tracking</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View Details →</button>
      </div>

      <div className="rounded-[18px] border border-[#edf1ee] bg-[#fafcfb] p-4">
        <div className="mb-3 text-[1.05rem] font-black text-[#123a2d]">ORD001 • Tomato</div>
        <div className="mb-4 text-sm text-slate-600">Supplier: GreenFresh Foods</div>

        <div className="flex flex-wrap items-center gap-3">
          {steps.map(({ label, active, icon: Icon }, index) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${active ? 'bg-[#0f7b4a] text-white' : 'bg-[#edf1ee] text-slate-500'}`}>
                <Icon className="h-4 w-4" />
              </div>
              <span className={`text-xs font-medium ${active ? 'text-[#123a2d]' : 'text-slate-500'}`}>{label}</span>
              {index !== steps.length - 1 && <div className="h-px w-5 bg-slate-200" />}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[#e7ebe7] bg-white p-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-[#0f7b4a]" />
            Current Location: Mumbai Warehouse, MH
          </div>
          <div className="mt-2 text-sm text-slate-600">Expected Delivery: 12 Aug 2026</div>
        </div>
      </div>
    </div>
  );
}
