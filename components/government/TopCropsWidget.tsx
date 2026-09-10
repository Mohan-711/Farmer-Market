const crops = [
  { rank: 1, name: 'Tomato', value: 35, color: 'bg-[#39b36b]' },
  { rank: 2, name: 'Onion', value: 20, color: 'bg-[#64c780]' },
  { rank: 3, name: 'Potato', value: 15, color: 'bg-[#99d8a4]' },
  { rank: 4, name: 'Green Chilli', value: 10, color: 'bg-[#c7e7ca]' },
  { rank: 5, name: 'Wheat', value: 8, color: 'bg-[#dfeae3]' },
];

export function TopCropsWidget() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Top Crops</div>
      </div>

      <div className="space-y-4">
        {crops.map(({ rank, name, value, color }) => (
          <div key={name} className="space-y-2">
            <div className="flex items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2 text-[#123a2d]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3f7f4] text-[0.7rem] font-bold text-slate-600">{rank}</span>
                <span className="font-medium">{name}</span>
              </div>
              <span className="font-semibold text-slate-600">{value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-[#edf1ee]">
              <div className={`${color} h-full rounded-full`} style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
