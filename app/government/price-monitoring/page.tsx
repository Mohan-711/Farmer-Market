'use client';

import { useState } from 'react';
import { Eye } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { priceMonitoring } from '../../../components/government/mockGovernmentData';

export default function GovernmentPriceMonitoringPage() {
  const [selectedCrop, setSelectedCrop] = useState<(typeof priceMonitoring)[number] | null>(null);

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Price Monitoring</div>
          <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Monitored Crop Pricing</h2>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#edf0ed]">
          <table className="min-w-full text-left">
            <thead className="bg-[#f5faf6] text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Crop</th>
                <th className="px-4 py-3 font-semibold">Farmer Price</th>
                <th className="px-4 py-3 font-semibold">Company Purchase</th>
                <th className="px-4 py-3 font-semibold">Company Selling</th>
                <th className="px-4 py-3 font-semibold">Difference</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {priceMonitoring.map((crop) => (
                <tr key={crop.crop} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{crop.crop}</td>
                  <td className="px-4 py-3">₹{crop.farmerPrice}</td>
                  <td className="px-4 py-3">₹{crop.companyPurchase}</td>
                  <td className="px-4 py-3">₹{crop.companySelling}</td>
                  <td className="px-4 py-3 font-semibold text-[#1b7b51]">{crop.difference}</td>
                  <td className="px-4 py-3">
                    <button type="button" onClick={() => setSelectedCrop(crop)} className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Price breakdown</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selectedCrop.crop}</h3>
              </div>
              <button type="button" onClick={() => setSelectedCrop(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Farmer details</div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <div>Farmer Name: {selectedCrop.farmerName}</div>
                  <div>Location: {selectedCrop.farmerLocation}</div>
                </div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Company details</div>
                <div className="mt-2 text-sm text-slate-600">Company Name: {selectedCrop.companyName}</div>
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#edf0ed] bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Price increase chain</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>Farmer Selling Price</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.farmerPrice}</span></div>
                <div className="flex items-center justify-between"><span>Transportation Cost</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.transportation}</span></div>
                <div className="flex items-center justify-between"><span>Cleaning Cost</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.cleaning}</span></div>
                <div className="flex items-center justify-between"><span>Packaging Cost</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.packaging}</span></div>
                <div className="flex items-center justify-between"><span>Storage Cost</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.storage}</span></div>
                <div className="flex items-center justify-between"><span>Other Charges</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.otherCharges}</span></div>
                <div className="flex items-center justify-between"><span>Company Profit Margin</span><span className="font-semibold text-[#123d2d]">₹{selectedCrop.profitMargin}</span></div>
                <div className="mt-4 border-t border-[#edf0ed] pt-4 flex items-center justify-between text-base font-black text-[#123d2d]"><span>Final Selling Price</span><span>₹{selectedCrop.companySelling}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
