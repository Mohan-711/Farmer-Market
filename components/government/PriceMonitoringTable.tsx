const rows = [
  { crop: 'Tomato', farmer: 25, company: 35, diff: 10 },
  { crop: 'Onion', farmer: 18, company: 26, diff: 8 },
  { crop: 'Potato', farmer: 16, company: 24, diff: 8 },
  { crop: 'Green Chilli', farmer: 38, company: 50, diff: 12 },
  { crop: 'Wheat', farmer: 22, company: 32, diff: 10 },
];

export function PriceMonitoringTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Price Monitoring</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View More →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Farmer Price</th>
              <th className="px-4 py-3">Company Selling Price</th>
              <th className="px-4 py-3">Difference</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ crop, farmer, company, diff }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123b2d]">{crop}</td>
                <td className="px-4 py-3">₹{farmer}/kg</td>
                <td className="px-4 py-3">₹{company}/kg</td>
                <td className={`px-4 py-3 font-semibold ${diff > 8 ? 'text-[#e25252]' : 'text-[#0f7b4a]'}`}>
                  ₹{diff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
