'use client';

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 150 },
  { month: 'Mar', value: 180 },
  { month: 'Apr', value: 210 },
  { month: 'May', value: 260 },
  { month: 'Jun', value: 240 },
];

export function TransactionsChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: 'rgba(15,123,74,0.06)' }}
            contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', boxShadow: '0 16px 30px rgba(0,0,0,0.06)' }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={entry.month} fill={index === 4 ? '#2fa067' : '#9fd5b8'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
