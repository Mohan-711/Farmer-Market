const crops = [
  { crop: 'Tomato', farmer: 'Ramesh', location: 'Pune, MH', quantity: '1,000 kg', price: '₹25 / kg' },
  { crop: 'Onion', farmer: 'Savitri', location: 'Nashik, MH', quantity: '500 kg', price: '₹18 / kg' },
  { crop: 'Potato', farmer: 'Mahesh', location: 'Indore, MP', quantity: '2,000 kg', price: '₹16 / kg' },
  { crop: 'Green Chilli', farmer: 'Latha', location: 'Bangalore, KA', quantity: '800 kg', price: '₹38 / kg' },
  { crop: 'Wheat', farmer: 'Suresh', location: 'Nagpur, MH', quantity: '5,000 kg', price: '₹22 / kg' },
];

export function AvailableCropsTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#e7ebe7] bg-white">
      <div className="flex items-center justify-between border-b border-[#edf1ee] px-4 py-3">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Available Crops from Farmers</div>
        <button className="text-sm font-semibold text-[#0f7b4a] hover:text-[#0b5d3d]">View All →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f8faf8] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Farmer</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Expected Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {crops.map(({ crop, farmer, location, quantity, price }) => (
              <tr key={crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                <td className="flex items-center gap-2 px-4 py-3 font-medium text-[#123a2d]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef9f2] text-[0.7rem] font-bold text-[#0f7b4a]">
                    {crop.slice(0, 1)}
                  </span>
                  {crop}
                </td>
                <td className="px-4 py-3">{farmer}</td>
                <td className="px-4 py-3">{location}</td>
                <td className="px-4 py-3">{quantity}</td>
                <td className="px-4 py-3">{price}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="rounded-md bg-[#edf9f1] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#0f7b4a] hover:bg-[#dff3e4]">View</button>
                    <button className="rounded-md bg-[#0f7b4a] px-2.5 py-1.5 text-[0.68rem] font-semibold text-white hover:bg-[#0b5d3d]">Make Offer</button>
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
