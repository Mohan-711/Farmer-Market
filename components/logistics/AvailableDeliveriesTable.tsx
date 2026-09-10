const deliveries = [
  { crop: 'Tomato', pickup: 'Pune, MH', destination: 'Mumbai Warehouse', quantity: '1,000 kg', date: '12 Sep 2026' },
  { crop: 'Onion', pickup: 'Nashik, MH', destination: 'Delhi Warehouse', quantity: '500 kg', date: '14 Sep 2026' },
  { crop: 'Potato', pickup: 'Indore, MP', destination: 'Bangalore', quantity: '2,000 kg', date: '13 Sep 2026' },
  { crop: 'Green Chilli', pickup: 'Hubli, KA', destination: 'Chennai', quantity: '800 kg', date: '15 Sep 2026' },
  { crop: 'Wheat', pickup: 'Nagpur, MH', destination: 'Kolkata', quantity: '5,000 kg', date: '16 Sep 2026' },
];

export function AvailableDeliveriesTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Available Deliveries</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Pickup Location</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Expected Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(({ crop, pickup, destination, quantity, date }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{crop}</td>
                <td className="px-4 py-3">{pickup}</td>
                <td className="px-4 py-3">{destination}</td>
                <td className="px-4 py-3">{quantity}</td>
                <td className="px-4 py-3">{date}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="rounded-md bg-[#edf9f1] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#0f7b4a] hover:bg-[#dff3e4]">View</button>
                    <button className="rounded-md bg-[#0f7b4a] px-2.5 py-1.5 text-[0.68rem] font-semibold text-white hover:bg-[#0b5d3d]">Accept</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
