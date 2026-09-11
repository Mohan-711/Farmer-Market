'use client';

import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';

const cards = [
  { label: 'Most Demanded Crop', value: 'Basmati Rice', accent: 'bg-[#e8f7ee]' },
  { label: 'Highest Selling Crop', value: 'Maize', accent: 'bg-[#edf5ff]' },
  { label: 'Top Farmer', value: 'Rahul Verma', accent: 'bg-[#fff1dc]' },
  { label: 'Top Company', value: 'GreenFresh Foods', accent: 'bg-[#ffe7ee]' },
  { label: 'Highest Revenue District', value: 'Mysuru', accent: 'bg-[#eefaf5]' },
];

const chartBars = [52, 76, 68, 88, 74, 92, 81];
const cropBars = [45, 58, 74, 88, 63];
const farmerBars = [70, 82, 60, 75, 96];
const companyBars = [68, 80, 72, 90, 54];
const districtBars = [40, 62, 58, 84, 70];

export default function GovernmentAnalyticsPage() {
  return (
    <GovernmentPageLayout>
      <div className="space-y-5">
        <div>
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Analytics</div>
          <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Market Analytics Dashboard</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {cards.map(({ label, value, accent }) => (
            <div key={label} className={`${accent} rounded-[20px] border border-[#e7ebe7] p-4 shadow-[0_12px_24px_rgba(31,75,51,0.04)]`}>
              <div className="text-sm text-slate-600">{label}</div>
              <div className="mt-3 text-xl font-black tracking-[-0.05em] text-[#132d2a]">{value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
            <div className="mb-4 text-[1.1rem] font-black tracking-[-0.04em] text-[#123d2d]">Transactions Per Month</div>
            <div className="flex h-40 items-end gap-3">
              {chartBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#0f7b4a] to-[#7dd3a3]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
            <div className="mb-4 text-[1.1rem] font-black tracking-[-0.04em] text-[#123d2d]">Top Crops</div>
            <div className="flex h-40 items-end gap-3">
              {cropBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#1d7d52] to-[#a9e3bd]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
            <div className="mb-4 text-[1.1rem] font-black tracking-[-0.04em] text-[#123d2d]">Top Farmers</div>
            <div className="flex h-40 items-end gap-3">
              {farmerBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#2f8d67] to-[#a8dac0]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
            <div className="mb-4 text-[1.1rem] font-black tracking-[-0.04em] text-[#123d2d]">Top Companies</div>
            <div className="flex h-40 items-end gap-3">
              {companyBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#1f7ad1] to-[#a7d3ff]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
          <div className="mb-4 text-[1.1rem] font-black tracking-[-0.04em] text-[#123d2d]">District-wise Sales</div>
          <div className="flex h-40 items-end gap-3">
            {districtBars.map((height, index) => (
              <div key={index} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#7b9f64] to-[#d9e7b1]" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </GovernmentPageLayout>
  );
}
