const transactions = [
  { id: 'TX001', farmer: 'Ramesh', company: 'GreenFresh', crop: 'Tomato', amount: '₹27,000', status: 'Completed' },
  { id: 'TX002', farmer: 'Savita', company: 'Organic Foods', crop: 'Onion', amount: '₹18,500', status: 'In Transit' },
  { id: 'TX003', farmer: 'Mahesh', company: 'NatureHarvest', crop: 'Potato', amount: '₹32,000', status: 'Completed' },
  { id: 'TX004', farmer: 'Latha', company: 'AgriPure', crop: 'Green Chilli', amount: '₹15,200', status: 'Processing' },
  { id: 'TX005', farmer: 'Suresh', company: 'FreshKart', crop: 'Tomato', amount: '₹41,000', status: 'Completed' },
];

const statusClasses = {
  Completed: 'bg-[#eaf7ee] text-[#0f7b4a]',
  'In Transit': 'bg-[#fff0d9] text-[#d18a18]',
  Processing: 'bg-[#e9f1ff] text-[#3b82f6]',
};

export function RecentTransactions() {
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
              <th className="px-4 py-3">Farmer</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, farmer, company, crop, amount, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{farmer}</td>
                <td className="px-4 py-3">{company}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3 font-semibold text-[#123a2d]">{amount}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-[0.7rem] font-semibold ${statusClasses[status as keyof typeof statusClasses]}`}>
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
