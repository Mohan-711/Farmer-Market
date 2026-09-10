const offers = [
  { crop: 'Tomato', price: '₹27 / kg', farmer: 'Ramesh', date: '10 Aug 2026', status: 'Pending' },
  { crop: 'Onion', price: '₹20 / kg', farmer: 'Savitri', date: '09 Aug 2026', status: 'Rejected' },
  { crop: 'Green Chilli', price: '₹40 / kg', farmer: 'Latha', date: '08 Aug 2026', status: 'Accepted' },
  { crop: 'Potato', price: '₹18 / kg', farmer: 'Mahesh', date: '07 Aug 2026', status: 'Pending' },
  { crop: 'Wheat', price: '₹24 / kg', farmer: 'Suresh', date: '06 Aug 2026', status: 'Rejected' },
];

const statusClasses: Record<string, string> = {
  Pending: 'bg-[#fff3c7] text-[#b7791f]',
  Accepted: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Rejected: 'bg-[#ffe7ea] text-[#d6556f]',
};

export function MyOffersTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">My Offers</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Offer Price</th>
              <th className="px-4 py-3">Farmer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {offers.map(({ crop, price, farmer, date, status }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{crop}</td>
                <td className="px-4 py-3">{price}</td>
                <td className="px-4 py-3">{farmer}</td>
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
