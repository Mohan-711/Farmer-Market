const deliveries = [
  { id: 'DL001', crop: 'Tomato', pickup: 'Pune', destination: 'Mumbai', quantity: '1,000 kg', status: 'In Transit', action: 'Mark Delivered' },
  { id: 'DL002', crop: 'Onion', pickup: 'Nashik', destination: 'Delhi', quantity: '500 kg', status: 'Picked Up', action: 'Mark In Transit' },
  { id: 'DL003', crop: 'Potato', pickup: 'Indore', destination: 'Bangalore', quantity: '2,000 kg', status: 'Assigned', action: 'Start Pickup' },
  { id: 'DL004', crop: 'Green Chilli', pickup: 'Hubli', destination: 'Chennai', quantity: '800 kg', status: 'In Transit', action: 'Mark Delivered' },
  { id: 'DL005', crop: 'Wheat', pickup: 'Nagpur', destination: 'Kolkata', quantity: '5,000 kg', status: 'Assigned', action: 'Start Pickup' },
];

const statusClasses: Record<string, string> = {
  Assigned: 'bg-[#eef6ff] text-[#3b82f6]',
  'Picked Up': 'bg-[#fff4d7] text-[#b7791f]',
  'In Transit': 'bg-[#eaf7ee] text-[#0f7b4a]',
};

export function AssignedDeliveriesTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Assigned Deliveries</div>
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
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(({ id, crop, pickup, destination, quantity, status, action }) => (
              <tr key={id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="px-4 py-3 font-medium text-[#123a2d]">{id}</td>
                <td className="px-4 py-3">{crop}</td>
                <td className="px-4 py-3">{pickup}</td>
                <td className="px-4 py-3">{destination}</td>
                <td className="px-4 py-3">{quantity}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-[0.7rem] font-semibold ${statusClasses[status]}`}>
                    {status}
                  </span>
                </td>
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
