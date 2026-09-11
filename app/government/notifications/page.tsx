'use client';

import { useState } from 'react';
import { Eye, Send } from 'lucide-react';
import { GovernmentPageLayout } from '../../../components/government/GovernmentPageLayout';
import { notifications as initialNotifications } from '../../../components/government/mockGovernmentData';

type NotificationItem = (typeof initialNotifications)[number];

export default function GovernmentNotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [selected, setSelected] = useState<NotificationItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openNotification = (notification: NotificationItem) => {
    const updated: NotificationItem[] = notifications.map((item) =>
      item.id === notification.id ? { ...item, status: 'Read' } : item,
    );
    setNotifications(updated);
    setSelected(updated.find((item) => item.id === notification.id) ?? null);
  };

  return (
    <GovernmentPageLayout>
      <div className="rounded-[24px] border border-[#dfe6df] bg-white p-5 shadow-[0_12px_24px_rgba(31,75,51,0.04)]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Notifications</div>
            <h2 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">Notifications</h2>
          </div>
          <button type="button" onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 rounded-xl bg-[#0f7b4a] px-4 py-2.5 text-sm font-semibold text-white">
            <Send className="h-4 w-4" />
            Create Notification
          </button>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#edf0ed]">
          <table className="min-w-full text-left">
            <thead className="bg-[#f5faf6] text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Notification ID</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.id} className="border-t border-[#edf1ee] text-sm text-slate-700">
                  <td className="px-4 py-3 font-semibold text-[#113f35]">{notification.id}</td>
                  <td className="px-4 py-3">{notification.title}</td>
                  <td className="px-4 py-3">{notification.type}</td>
                  <td className="px-4 py-3">{notification.date}</td>
                  <td className="px-4 py-3">
                    <span className={[
                      'inline-flex rounded-full px-2.5 py-1.5 text-[0.68rem] font-semibold',
                      notification.status === 'Unread'
                        ? 'bg-[#fef3c7] text-[#b45309]'
                        : 'bg-[#ebfff1] text-[#1b7b51]',
                    ].join(' ')}>
                      {notification.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button type="button" onClick={() => openNotification(notification)} className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
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
          <div className="w-full max-w-xl rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Notification details</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">{selected.title}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div>ID: {selected.id}</div>
              <div>Type: {selected.type}</div>
              <div>Date: {selected.date}</div>
              <div>Status: {selected.status}</div>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-[24px] border border-[#dfe6df] bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Create notification</div>
                <h3 className="mt-2 text-[1.8rem] font-black tracking-[-0.06em] text-[#123d2d]">Send Notification</h3>
              </div>
              <button type="button" onClick={() => setShowForm(false)} className="rounded-full bg-[#f2f7f3] px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
                <input className="h-11 w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a]" placeholder="Title" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea className="min-h-[120px] w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 py-2 text-sm outline-none focus:border-[#0f7b4a]" placeholder="Message" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Notification Type</label>
                <select className="h-11 w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a]">
                  <option>Price Alert</option>
                  <option>Policy Update</option>
                  <option>Warning Notice</option>
                  <option>Company Verification Update</option>
                  <option>Complaint Update</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Recipients</label>
                <select className="h-11 w-full rounded-xl border border-[#dfe6df] bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a]">
                  <option>All Users</option>
                  <option>Farmers</option>
                  <option>Companies</option>
                  <option>Logistics</option>
                  <option>Buyers</option>
                </select>
              </div>
              <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f7b4a] text-base font-semibold text-white">Send Notification</button>
            </div>
          </div>
        </div>
      )}
    </GovernmentPageLayout>
  );
}
