'use client';

import { useMemo, useState } from 'react';
import { Ban, Eye, Search } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { farmers as farmerData } from '../../../components/government/mockGovernmentData';

const initialFarmers = [...farmerData];

const sortOptions = ['Name', 'Location', 'Farmer ID'] as const;

export default function GovernmentFarmersPage() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]>('Name');
  const [farmers, setFarmers] = useState(initialFarmers);
  const [selected, setSelected] = useState<(typeof farmers)[number] | null>(null);
  const [banPending, setBanPending] = useState<string | null>(null);

  const filteredFarmers = useMemo(() => {
    const lower = query.toLowerCase();
    const data = farmers.filter((farmer) => {
      return (
        farmer.id.toLowerCase().includes(lower) ||
        farmer.name.toLowerCase().includes(lower)
      );
    });

    return [...data].sort((a, b) => {
      if (sortBy === 'Location') return a.location.localeCompare(b.location);
      if (sortBy === 'Farmer ID') return a.id.localeCompare(b.id);
      return a.name.localeCompare(b.name);
    });
  }, [query, sortBy]);

  const confirmBan = (farmerId: string) => {
    setBanPending(farmerId);
  };

  const executeBan = () => {
    if (!banPending) return;
    const updated = farmers.map((farmer) =>
      farmer.id === banPending ? { ...farmer, status: 'Banned' } : farmer,
    );
    setFarmers(updated);
    setBanPending(null);
    setSelected(updated.find((farmer) => farmer.id === banPending) ?? null);
  };

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Farmers</div>
            <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Farmers Management</h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Farmer ID or Name"
                className="h-11 w-full min-w-[220px] rounded-xl border border-[#dfe6df] bg-[#f8faf8] pl-10 pr-3 text-sm text-slate-700 outline-none focus:border-[#0f7b4a] sm:w-[260px]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as (typeof sortOptions)[number])}
              className="h-11 rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 text-sm text-slate-700 outline-none focus:border-[#0f7b4a]"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#edf0ed]">
          <table className="min-w-full text-left">
            <thead className="bg-[#f5faf6] text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Farmer ID</th>
                <th className="px-4 py-3 font-semibold">Farmer Name</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Rating</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFarmers.map((farmer) => (
                <tr key={farmer.id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{farmer.id}</td>
                  <td className="px-4 py-3">{farmer.name}</td>
                  <td className="px-4 py-3">{farmer.location}</td>
                  <td className="px-4 py-3">{farmer.rating.toFixed(1)} / 5</td>
                  <td className="px-4 py-3">
                    <span className={[
                      'inline-flex rounded-full px-2.5 py-1.5 text-[0.68rem] font-semibold',
                      farmer.status === 'Banned' ? 'bg-red-100 text-red-700' : 'bg-[#ebfff1] text-[#1b7b51]',
                    ].join(' ')}>
                      {farmer.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setSelected(farmer)} className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      {farmer.status !== 'Banned' && (
                        <button type="button" onClick={() => confirmBan(farmer.id)} className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                          <Ban className="h-4 w-4" />
                          Ban
                        </button>
                      )}
                    </div>
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
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Farmer profile</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selected.name}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Farmer ID</div>
                <div className="mt-2 text-lg font-black text-[#123d2d]">{selected.id}</div>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <div>Village: {selected.village}</div>
                  <div>District: {selected.district}</div>
                  <div>State: {selected.state}</div>
                </div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Contact</div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <div>Phone: {selected.phone}</div>
                  <div>Email: {selected.email}</div>
                  <div>Rating: {selected.rating.toFixed(1)} / 5</div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Sales metrics</div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div>Total Earnings: <span className="font-semibold text-[#123d2d]">{selected.totalEarnings}</span></div>
                  <div>Total Crops Listed: <span className="font-semibold text-[#123d2d]">{selected.cropsListed}</span></div>
                  <div>Total Sales: <span className="font-semibold text-[#123d2d]">{selected.totalSales}</span></div>
                  <div>Crop Types Sold: <span className="font-semibold text-[#123d2d]">{selected.cropTypes.join(', ')}</span></div>
                  <div>Registration Date: <span className="font-semibold text-[#123d2d]">{selected.registrationDate}</span></div>
                </div>
              </div>

              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Actions</div>
                {selected.status !== 'Banned' ? (
                  <button type="button" onClick={() => confirmBan(selected.id)} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white">
                    <Ban className="h-4 w-4" />
                    BAN FARMER
                  </button>
                ) : (
                  <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">This farmer is already banned and cannot login.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {banPending && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Confirmation</div>
            <h3 className="mt-2 text-[1.6rem] font-black tracking-[-0.06em] text-[#123d2d]">Ban farmer?</h3>
            <p className="mt-3 text-sm text-slate-600">This will disable the farmer account and prevent them from logging in.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setBanPending(null)} className="rounded-xl border border-[#dfe6df] bg-white px-4 py-2 text-sm font-semibold text-slate-600">Cancel</button>
              <button type="button" onClick={executeBan} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Confirm Ban</button>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
