const orders = [
  { id: 'ORD001', crop: 'Tomato', company: 'GreenFresh', quantity: '300 kg', date: '10 Aug 2026', status: 'Processing' },
  { id: 'ORD002', crop: 'Onion', company: 'AgriPure', quantity: '500 kg', date: '09 Aug 2026', status: 'Shipped' },
  { id: 'ORD003', crop: 'Potato', company: 'NatureHarvest', quantity: '1,000 kg', date: '07 Aug 2026', status: 'Delivered' },
  { id: 'ORD004', crop: 'Green Chilli', company: 'FreshKart', quantity: '200 kg', date: '06 Aug 2026', status: 'Delivered' },
  { id: 'ORD005', crop: 'Wheat', company: 'FarmTrade', quantity: '2,000 kg', date: '04 Aug 2026', status: 'Processing' },
];

const statusClasses: Record<string, string> = {
  Processing: 'bg-[#fff3c7] text-[#b7791f]',
  Shipped: 'bg-[#e9f1ff] text-[#3b82f6]',
  Delivered: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Cancelled: 'bg-[#ffe7ea] text-[#d6556f]',
};

export function OrdersTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">My Orders</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Order Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id, crop, company, quantity, date, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3">{company}</td>
                <td className="px-4 py-3">{quantity}</td>
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
