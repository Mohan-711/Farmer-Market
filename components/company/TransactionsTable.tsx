const transactions = [
  { id: 'TX001', type: 'Purchase', crop: 'Tomato', amount: '₹27,000', status: 'Completed' },
  { id: 'TX002', type: 'Purchase', crop: 'Onion', amount: '₹10,000', status: 'In Transit' },
  { id: 'TX003', type: 'Sale', crop: 'Potato', amount: '₹34,000', status: 'Completed' },
  { id: 'TX004', type: 'Purchase', crop: 'Green Chilli', amount: '₹22,600', status: 'Processing' },
  { id: 'TX005', type: 'Sale', crop: 'Onion', amount: '₹26,000', status: 'Cancelled' },
];

const statusClasses: Record<string, string> = {
  Completed: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Processing: 'bg-[#e9f1ff] text-[#3b82f6]',
  'In Transit': 'bg-[#fff3c7] text-[#b7791f]',
  Cancelled: 'bg-[#ffe7ea] text-[#d6556f]',
};

export function TransactionsTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Transactions</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, type, crop, amount, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{type}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3 font-semibold text-[#123a2d]">{amount}</td>
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
