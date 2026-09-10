const sales = [
  { crop: 'Tomato', stock: '800 kg', price: '₹34 / kg', action: 'Create Listing' },
  { crop: 'Onion', stock: '500 kg', price: '₹26 / kg', action: 'Create Listing' },
  { crop: 'Potato', stock: '1,600 kg', price: '₹29 / kg', action: 'Create Listing' },
  { crop: 'Green Chilli', stock: '600 kg', price: '₹52 / kg', action: 'Create Listing' },
  { crop: 'Wheat', stock: '4,500 kg', price: '₹30 / kg', action: 'Create Listing' },
];

export function SellToBuyersTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Sell to Buyers</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Available Stock</th>
              <th className="px-4 py-3">Selling Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(({ crop, stock, price, action }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{crop}</td>
                <td className="px-4 py-3">{stock}</td>
                <td className="px-4 py-3">{price}</td>
                <td className="px-4 py-3">
                  <button className="rounded-md bg-[#0f7b4a] px-2.5 py-1.5 text-[0.68rem] font-semibold text-white hover:bg-[#0b5d3d]">
                    {action}
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
