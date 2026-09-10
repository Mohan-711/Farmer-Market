const deliveries = [
  { id: 'DL010', crop: 'Tomato', pickup: 'Pune', destination: 'Mumbai', date: '10 Sep 2026', amount: '₹2,000', status: 'Completed' },
  { id: 'DL011', crop: 'Onion', pickup: 'Nashik', destination: 'Delhi', date: '09 Sep 2026', amount: '₹1,500', status: 'Completed' },
  { id: 'DL012', crop: 'Potato', pickup: 'Indore', destination: 'Bangalore', date: '08 Sep 2026', amount: '₹3,000', status: 'Completed' },
  { id: 'DL013', crop: 'Green Chilli', pickup: 'Hubli', destination: 'Chennai', date: '07 Sep 2026', amount: '₹1,800', status: 'Returned' },
  { id: 'DL014', crop: 'Wheat', pickup: 'Nagpur', destination: 'Kolkata', date: '06 Sep 2026', amount: '₹4,500', status: 'Completed' },
];

const statusClasses: Record<string, string> = {
  Completed: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Returned: 'bg-[#fff4d7] text-[#b7791f]',
  Cancelled: 'bg-[#ffe7ea] text-[#d6556f]',
};

export function CompletedDeliveriesTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Completed Deliveries</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Delivery ID</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Pickup</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(({ id, crop, pickup, destination, date, amount, status }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3">{pickup}</td>
                <td className="px-4 py-3">{destination}</td>
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
