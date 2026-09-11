'use client';

import { useMemo, useState } from 'react';
import { Eye, Search } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { complaints as complaintData } from '../../../components/government/mockGovernmentData';

const tabs = ['All', 'Pending', 'In Progress', 'Resolved', 'Closed', 'Rejected'] as const;
const initialComplaints = [...complaintData];

export default function GovernmentComplaintsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('All');
  const [query, setQuery] = useState('');
  const [complaints, setComplaints] = useState(initialComplaints);
  const [selected, setSelected] = useState<(typeof complaints)[number] | null>(null);

  const filteredComplaints = useMemo(() => {
    const lower = query.toLowerCase();
    return complaints.filter((item) => {
      const matchesTab = activeTab === 'All' || item.status === activeTab;
      const matchesSearch = item.id.toLowerCase().includes(lower);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, complaints, query]);

  const updateComplaintStatus = (status: 'Resolved' | 'Closed' | 'Rejected') => {
    if (!selected) return;
    const updated = complaints.map((complaint) =>
      complaint.id === selected.id ? { ...complaint, status } : complaint,
    );
    setComplaints(updated);
    setSelected(updated.find((complaint) => complaint.id === selected.id) ?? null);
  };

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Complaints</div>
            <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Complaints Management</h2>
          </div>

          <div className="relative w-full max-w-[260px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search complaint ID"
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
                <th className="px-4 py-3 font-semibold">Complaint ID</th>
                <th className="px-4 py-3 font-semibold">Raised By</th>
                <th className="px-4 py-3 font-semibold">Against</th>
                <th className="px-4 py-3 font-semibold">Complaint Type</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{complaint.id}</td>
                  <td className="px-4 py-3">{complaint.raisedBy}</td>
                  <td className="px-4 py-3">{complaint.against}</td>
                  <td className="px-4 py-3">{complaint.type}</td>
                  <td className="px-4 py-3">{complaint.date}</td>
                  <td className="px-4 py-3">
                    <span className={[
                      'inline-flex rounded-full px-2.5 py-1.5 text-[0.68rem] font-semibold',
                      complaint.status === 'Rejected'
                        ? 'bg-red-100 text-red-700'
                        : complaint.status === 'Closed'
                          ? 'bg-slate-100 text-slate-700'
                          : complaint.status === 'Resolved'
                            ? 'bg-[#ebfff1] text-[#1b7b51]'
                            : 'bg-amber-100 text-amber-700',
                    ].join(' ')}>
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button type="button" onClick={() => setSelected(complaint)} className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                      <Eye className="h-4 w-4" />
                      View Complaint
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
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Complaint details</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selected.id}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Reason</div>
                <div className="mt-2 text-sm text-slate-600">{selected.description}</div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Evidence</div>
                <div className="mt-2 text-sm text-slate-600">Receipt and shipment log attached.</div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Farmer details</div>
                <div className="mt-2 text-sm text-slate-600">Rahul Verma · Mysuru, Karnataka</div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Company details</div>
                <div className="mt-2 text-sm text-slate-600">GreenFresh Foods · Bengaluru</div>
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#edf0ed] bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Government actions</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={() => updateComplaintStatus('Resolved')} className="rounded-xl bg-[#0f7b4a] px-4 py-2 text-sm font-semibold text-white">Resolve Complaint</button>
                <button type="button" onClick={() => updateComplaintStatus('Closed')} className="rounded-xl border border-[#dfe6df] bg-white px-4 py-2 text-sm font-semibold text-slate-600">Close Complaint</button>
                <button type="button" onClick={() => updateComplaintStatus('Rejected')} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Reject Complaint</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
