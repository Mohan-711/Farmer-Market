const farmers = [
  { name: 'Ramesh', crops: 3, sales: 12, earnings: '₹1,20,000' },
  { name: 'Savita', crops: 2, sales: 8, earnings: '₹80,000' },
  { name: 'Mahesh', crops: 4, sales: 15, earnings: '₹1,50,000' },
  { name: 'Latha', crops: 1, sales: 5, earnings: '₹45,000' },
  { name: 'Suresh', crops: 3, sales: 10, earnings: '₹98,000' },
];

export function FarmerMonitoring() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Farmer Monitoring</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Farmer Name</th>
              <th className="px-4 py-3">Crops Listed</th>
              <th className="px-4 py-3">Sales Made</th>
              <th className="px-4 py-3">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map(({ name, crops, sales, earnings }) => (
              <tr key={name} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{name}</td>
                <td className="px-4 py-3">{crops}</td>
                <td className="px-4 py-3">{sales}</td>
                <td className="px-4 py-3 font-semibold text-[#123a2d]">{earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
