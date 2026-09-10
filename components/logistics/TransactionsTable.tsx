const transactions = [
  { id: 'TR001', deliveryId: 'DL010', date: '10 Sep 2026', amount: '₹2,000', status: 'Paid' },
  { id: 'TR002', deliveryId: 'DL011', date: '09 Sep 2026', amount: '₹1,500', status: 'Paid' },
  { id: 'TR003', deliveryId: 'DL012', date: '08 Sep 2026', amount: '₹3,000', status: 'Pending' },
  { id: 'TR004', deliveryId: 'DL013', date: '07 Sep 2026', amount: '₹1,800', status: 'Processing' },
  { id: 'TR005', deliveryId: 'DL014', date: '06 Sep 2026', amount: '₹4,500', status: 'Paid' },
];

const statusClasses: Record<string, string> = {
  Paid: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Pending: 'bg-[#fff4d7] text-[#b7791f]',
  Processing: 'bg-[#e9f1ff] text-[#3b82f6]',
  Failed: 'bg-[#ffe7ea] text-[#d6556f]',
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
              <th className="px-4 py-3">Delivery ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, deliveryId, date, amount, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{deliveryId}</td>
                <td className="px-4 py-3">{date}</td>
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
