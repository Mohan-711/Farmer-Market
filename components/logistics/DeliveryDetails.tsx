import { ArrowRight, MapPinned, PackageCheck } from 'lucide-react';

export function DeliveryDetails() {
  return (
    <aside className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Delivery Details</div>
      </div>

      <div className="space-y-3 text-sm text-slate-600">
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Delivery ID</span>
          <span className="font-semibold text-[#123a2d]">DL001</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Farmer Name</span>
          <span className="font-semibold text-[#123a2d]">Ramesh</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Company Name</span>
          <span className="font-semibold text-[#123a2d]">GreenFresh Foods</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Crop</span>
          <span className="font-semibold text-[#123a2d]">Tomato</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Quantity</span>
          <span className="font-semibold text-[#123a2d]">1,000 kg</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Pickup Address</span>
          <span className="font-semibold text-right text-[#123a2d]">Pune, MH</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Destination</span>
          <span className="font-semibold text-right text-[#123a2d]">Mumbai Warehouse</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="font-medium text-slate-500">Expected Date</span>
          <span className="font-semibold text-[#123a2d]">12 Sep 2026</span>
        </div>
      </div>

      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f7b4a] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 hover:bg-[#0b5d3d]">
        <PackageCheck className="h-4 w-4" />
        Accept Delivery
      </button>
    </aside>
  );
}
