'use client';

import { useState } from 'react';
import { Eye, Check, X } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { verificationRequests as initialVerificationRequests } from '../../../components/government/mockGovernmentData';

export default function GovernmentCompanyVerificationPage() {
  const [verificationRequests, setVerificationRequests] = useState(initialVerificationRequests);
  const [selected, setSelected] = useState<(typeof verificationRequests)[number] | null>(null);
  const [approveTarget, setApproveTarget] = useState<string | null>(null);
  const [rejectTarget, setRejectTarget] = useState<string | null>(null);

  const updateVerificationStatus = (id: string, status: 'Approved' | 'Rejected') => {
    const updated = verificationRequests.map((item) =>
      item.id === id ? { ...item, status } : item,
    );
    setVerificationRequests(updated);
    setSelected(updated.find((item) => item.id === id) ?? null);
  };

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Company Verification</div>
          <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Newly Registered Companies</h2>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#edf0ed]">
          <table className="min-w-full text-left">
            <thead className="bg-[#f5faf6] text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Company Name</th>
                <th className="px-4 py-3 font-semibold">Company Type</th>
                <th className="px-4 py-3 font-semibold">Registration Date</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {verificationRequests.map((company) => (
                <tr key={company.id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{company.name}</td>
                  <td className="px-4 py-3">{company.type}</td>
                  <td className="px-4 py-3">{company.registrationDate}</td>
                  <td className="px-4 py-3">
                    <span className={[
                      'inline-flex rounded-full px-2.5 py-1.5 text-[0.68rem] font-semibold',
                      company.status === 'Approved'
                        ? 'bg-[#ebfff1] text-[#1b7b51]'
                        : company.status === 'Rejected'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700',
                    ].join(' ')}>
                      {company.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setSelected(company)} className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                        <Eye className="h-4 w-4" />
                        View Details
                      </button>
                      <button type="button" onClick={() => setApproveTarget(company.id)} className="inline-flex items-center gap-2 rounded-lg bg-[#0f7b4a] px-3 py-2 text-sm font-semibold text-white">
                        <Check className="h-4 w-4" />
                        Approve
                      </button>
                      <button type="button" onClick={() => setRejectTarget(company.id)} className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white">
                        <X className="h-4 w-4" />
                        Reject
                      </button>
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
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Verification detail</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selected.name}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Basic information</div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <div>Owner Name: {selected.owner}</div>
                  <div>License Number: {selected.licenseNumber}</div>
                  <div>Company Type: {selected.type}</div>
                  <div>Address: {selected.address}</div>
                </div>
              </div>
              <div className="rounded-[18px] border border-[#edf0ed] bg-[#f8faf8] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Contact</div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <div>Phone: {selected.phone}</div>
                  <div>Email: {selected.email}</div>
                  <div>Registration Date: {selected.registrationDate}</div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#edf0ed] bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Registration documents</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selected.documents.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {approveTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Approval</div>
            <h3 className="mt-2 text-[1.6rem] font-black tracking-[-0.06em] text-[#123d2d]">Approve company?</h3>
            <p className="mt-3 text-sm text-slate-600">This will allow the company to access the dashboard.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setApproveTarget(null)} className="rounded-xl border border-[#dfe6df] bg-white px-4 py-2 text-sm font-semibold text-slate-600">Cancel</button>
              <button type="button" onClick={() => {
                updateVerificationStatus(approveTarget, 'Approved');
                setApproveTarget(null);
              }} className="rounded-xl bg-[#0f7b4a] px-4 py-2 text-sm font-semibold text-white">Approve</button>
            </div>
          </div>
        </div>
      )}

      {rejectTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Rejection</div>
            <h3 className="mt-2 text-[1.6rem] font-black tracking-[-0.06em] text-[#123d2d]">Reject company?</h3>
            <p className="mt-3 text-sm text-slate-600">A rejection reason will be stored and the company will be notified.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setRejectTarget(null)} className="rounded-xl border border-[#dfe6df] bg-white px-4 py-2 text-sm font-semibold text-slate-600">Cancel</button>
              <button type="button" onClick={() => {
                updateVerificationStatus(rejectTarget, 'Rejected');
                setRejectTarget(null);
              }} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Reject</button>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
