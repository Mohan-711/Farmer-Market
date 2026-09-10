const companies = [
  { name: 'FarmTrade', date: '10 Aug 2026', status: 'Pending' },
  { name: 'AgriMart', date: '09 Aug 2026', status: 'Pending' },
  { name: 'BioHarvest', date: '08 Aug 2026', status: 'Pending' },
  { name: 'EcoFoods', date: '07 Aug 2026', status: 'Pending' },
  { name: 'FreshWorld', date: '06 Aug 2026', status: 'Pending' },
];

const statusClasses: Record<string, string> = {
  Pending: 'bg-[#fff4d7] text-[#b7791f]',
  Approved: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Rejected: 'bg-[#ffe7ea] text-[#d6556f]',
  Suspended: 'bg-[#f1f5f9] text-[#475569]',
};

export function CompanyVerification() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Company Verification</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Registration Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(({ name, date, status }) => (
              <tr key={name} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{name}</td>
                <td className="px-4 py-3">{date}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-[0.7rem] font-semibold ${statusClasses[status]}`}>
                    {status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-md bg-[#eaf7ee] px-2 py-1 text-[0.68rem] font-semibold text-[#0f7b4a] hover:bg-[#dff3e4]">View Details</button>
                    <button className="rounded-md bg-[#eaf7ee] px-2 py-1 text-[0.68rem] font-semibold text-[#0f7b4a] hover:bg-[#dff3e4]">Approve</button>
                    <button className="rounded-md bg-[#fff1f2] px-2 py-1 text-[0.68rem] font-semibold text-[#d6556f] hover:bg-[#ffe5ea]">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
