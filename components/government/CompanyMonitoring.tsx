const companies = [
  { name: 'GreenFresh', purchases: 120, sales: 95, complaints: 2, status: 'Active' },
  { name: 'Organic Foods', purchases: 85, sales: 70, complaints: 1, status: 'Active' },
  { name: 'NatureHarvest', purchases: 150, sales: 130, complaints: 0, status: 'Active' },
  { name: 'AgriPure', purchases: 60, sales: 45, complaints: 3, status: 'Under Review' },
  { name: 'FreshKart', purchases: 100, sales: 90, complaints: 1, status: 'Active' },
];

const statusClasses: Record<string, string> = {
  Active: 'bg-[#eaf7ee] text-[#0f7b4a]',
  'Under Review': 'bg-[#fff4d7] text-[#b7791f]',
  Flagged: 'bg-[#ffe7ea] text-[#d6556f]',
  Suspended: 'bg-[#f1f5f9] text-[#475569]',
};

export function CompanyMonitoring() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Company Monitoring</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Total Purchases</th>
              <th className="px-4 py-3">Total Sales</th>
              <th className="px-4 py-3">Complaints</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(({ name, purchases, sales, complaints, status }) => (
              <tr key={name} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{name}</td>
                <td className="px-4 py-3">{purchases}</td>
                <td className="px-4 py-3">{sales}</td>
                <td className="px-4 py-3">{complaints}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-[0.7rem] font-semibold ${statusClasses[status]}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
