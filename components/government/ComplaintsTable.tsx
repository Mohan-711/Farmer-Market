const complaints = [
  { id: 'CMP001', raisedBy: 'Farmer', against: 'GreenFresh', status: 'Pending' },
  { id: 'CMP002', raisedBy: 'Company', against: 'Ramesh', status: 'In Progress' },
  { id: 'CMP003', raisedBy: 'Farmer', against: 'AgriPure', status: 'Resolved' },
  { id: 'CMP004', raisedBy: 'Buyer', against: 'NatureHarvest', status: 'Pending' },
  { id: 'CMP005', raisedBy: 'Farmer', against: 'FreshKart', status: 'Closed' },
];

const statusClasses: Record<string, string> = {
  Pending: 'bg-[#fff4d7] text-[#b7791f]',
  'In Progress': 'bg-[#e9f1ff] text-[#3b82f6]',
  Resolved: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Closed: 'bg-[#f1f5f9] text-[#475569]',
};

export function ComplaintsTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Recent Complaints</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Complaint ID</th>
              <th className="px-4 py-3">Raised By</th>
              <th className="px-4 py-3">Against</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(({ id, raisedBy, against, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{raisedBy}</td>
                <td className="px-4 py-3">{against}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-[0.7rem] font-semibold ${statusClasses[status]}`}>
                    {status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="rounded-lg bg-[#eaf7ee] px-3 py-1.5 text-xs font-semibold text-[#0f7b4a] hover:bg-[#dff3e4]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
