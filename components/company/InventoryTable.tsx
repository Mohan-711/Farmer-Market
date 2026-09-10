const inventory = [
  { crop: 'Tomato', total: '1,000 kg', available: '800 kg', price: '₹27 / kg' },
  { crop: 'Onion', total: '500 kg', available: '500 kg', price: '₹20 / kg' },
  { crop: 'Potato', total: '2,000 kg', available: '1,600 kg', price: '₹18 / kg' },
  { crop: 'Green Chilli', total: '800 kg', available: '600 kg', price: '₹42 / kg' },
  { crop: 'Wheat', total: '5,000 kg', available: '4,500 kg', price: '₹24 / kg' },
];

export function InventoryTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Inventory</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Total Purchased</th>
              <th className="px-4 py-3">Available Stock</th>
              <th className="px-4 py-3">Purchase Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(({ crop, total, available, price }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{crop}</td>
                <td className="px-4 py-3">{total}</td>
                <td className="px-4 py-3">{available}</td>
                <td className="px-4 py-3">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
