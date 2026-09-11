'use client';

import { useMemo, useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { transactions as transactionData } from '../../../components/government/mockGovernmentData';

const tabs = ['All', 'In Transit', 'Processing', 'Completed'] as const;

export default function GovernmentTransactionsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<(typeof transactionData)[number] | null>(null);

  const filtered = useMemo(() => {
    return transactionData.filter((txn) => {
      const matchesTab = activeTab === 'All' || txn.status === activeTab;
      const matchesSearch = txn.id.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Transactions</div>
            <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Transactions</h2>
          </div>

          <div className="relative w-full max-w-[260px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by transaction ID"
              className="h-11 w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] pl-10 pr-3 text-sm text-slate-700 outline-none focus:border-[#0f7b4a]"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                activeTab === tab ? 'bg-[#0f7b4a] text-white' : 'bg-[#f3f7f3] text-slate-600',
              ].join(' ')}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#edf0ed]">
          <table className="min-w-full text-left">
            <thead className="bg-[#f5faf6] text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Transaction ID</th>
                <th className="px-4 py-3 font-semibold">Farmer</th>
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Crop</th>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((txn) => (
                <tr key={txn.id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{txn.id}</td>
                  <td className="px-4 py-3">{txn.farmer}</td>
                  <td className="px-4 py-3">{txn.company}</td>
                  <td className="px-4 py-3">{txn.crop}</td>
                  <td className="px-4 py-3 font-semibold text-[#123d2d]">{txn.amount}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full bg-[#ebfff1] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#1b7b51]">
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{txn.date}</td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setSelected(txn)}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Transaction details</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selected.id}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Farmer details</div>
                <div className="mt-3 text-base font-bold text-[#123d2d]">{selected.farmer}</div>
                <div className="mt-1 text-sm text-slate-600">{selected.farmerDetails}</div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Company details</div>
                <div className="mt-3 text-base font-bold text-[#123d2d]">{selected.company}</div>
                <div className="mt-1 text-sm text-slate-600">{selected.companyDetails}</div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Crop</div>
                <div className="mt-2 text-lg font-black text-[#123d2d]">{selected.crop}</div>
                <div className="mt-2 text-sm text-slate-600">Crop Quantity: {selected.quantity}</div>
                <div className="mt-1 text-sm text-slate-600">Purchase Price: {selected.purchasePrice}</div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Payment</div>
                <div className="mt-2 text-lg font-black text-[#123d2d]">{selected.amount}</div>
                <div className="mt-2 text-sm text-slate-600">Created Date: {selected.date}</div>
                <div className="mt-1 text-sm text-slate-600">Current Status: {selected.status}</div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Logistics</div>
                <div className="mt-2 text-sm text-slate-600">Carrier: {selected.logistics}</div>
                <div className="mt-1 text-sm text-slate-600">Pickup: {selected.pickupLocation}</div>
                <div className="mt-1 text-sm text-slate-600">Destination: {selected.destinationLocation}</div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Status flow</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Processing', 'In Transit', 'Completed'].map((step) => (
                    <span
                      key={step}
                      className={[
                        'rounded-full px-3 py-1.5 text-xs font-semibold',
                        selected.status === step ? 'bg-[#0f7b4a] text-white' : 'bg-[#f3f7f3] text-slate-600',
                      ].join(' ')}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
