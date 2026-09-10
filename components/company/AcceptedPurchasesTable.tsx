const purchases = [
  { crop: 'Tomato', quantity: '1,000 kg', price: '₹27 / kg', status: 'Pending' },
  { crop: 'Onion', quantity: '500 kg', price: '₹20 / kg', status: 'Verified' },
  { crop: 'Green Chilli', quantity: '800 kg', price: '₹42 / kg', status: 'Pending' },
  { crop: 'Potato', quantity: '2,000 kg', price: '₹18 / kg', status: 'Verified' },
  { crop: 'Wheat', quantity: '5,000 kg', price: '₹24 / kg', status: 'Rejected' },
];

const statusClasses: Record<string, string> = {
  Pending: 'bg-[#fff3c7] text-[#b7791f]',
  Verified: 'bg-[#eaf7ee] text-[#0f7b4a]',
  Rejected: 'bg-[#ffe7ea] text-[#d6556f]',
};

export function AcceptedPurchasesTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Accepted Purchases</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Purchase Price</th>
              <th className="px-4 py-3">Verification</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map(({ crop, quantity, price, status }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{crop}</td>
                <td className="px-4 py-3">{quantity}</td>
                <td className="px-4 py-3">{price}</td>
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
