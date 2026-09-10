const transactions = [
  { id: 'TX001', orderId: 'ORD001', crop: 'Tomato', amount: '₹10,500', date: '10 Aug 2026', status: 'Completed' },
  { id: 'TX002', orderId: 'ORD002', crop: 'Onion', amount: '₹14,000', date: '09 Aug 2026', status: 'Completed' },
  { id: 'TX003', orderId: 'ORD003', crop: 'Potato', amount: '₹22,000', date: '07 Aug 2026', status: 'Completed' },
  { id: 'TX004', orderId: 'ORD004', crop: 'Green Chilli', amount: '₹9,600', date: '06 Aug 2026', status: 'Pending' },
  { id: 'TX005', orderId: 'ORD005', crop: 'Wheat', amount: '₹52,000', date: '04 Aug 2026', status: 'Completed' },
];

const statusClasses: Record<string, string> = {
  Completed: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Pending: 'bg-[#fff3c7] text-[#b7791f]',
  Failed: 'bg-[#ffe7ea] text-[#d6556f]',
  Refunded: 'bg-[#e9f1ff] text-[#3b82f6]',
};

export function TransactionsTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Recent Transactions</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, orderId, crop, amount, date, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{orderId}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3 font-semibold text-[#123a2d]">{amount}</td>
                <td className="px-4 py-3">{date}</td>
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
