const steps = [
  { label: 'Assigned', active: true },
  { label: 'Picked Up', active: true },
  { label: 'In Transit', active: true },
  { label: 'Delivered', active: false },
];

export function DeliveryStatusTracker() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 text-xl font-black tracking-[-0.05em] text-[#123a2d]">Delivery Status</div>

      <div className="flex flex-wrap items-center gap-3">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step.active ? 'bg-[#0f7b4a] text-white' : 'bg-[#edf1ee] text-slate-500'}`}>
              {index + 1}
            </div>
            <span className={`text-sm font-medium ${step.active ? 'text-[#123a2d]' : 'text-slate-500'}`}>{step.label}</span>
            {index < steps.length - 1 && <div className="h-px w-8 bg-slate-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}
