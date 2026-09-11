import { BellRing, Building2, ChartColumnBig, FileBarChart2, Flag, House, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { ComplaintsTable } from '../../components/government/ComplaintsTable';
import { CompanyMonitoring } from '../../components/government/CompanyMonitoring';
import { CompanyVerification } from '../../components/government/CompanyVerification';
import { FarmerMonitoring } from '../../components/government/FarmerMonitoring';
import { GovernmentPageLayout } from '../../components/government/GovernmentPageLayout';
import { NotificationPanel } from '../../components/government/NotificationPanel';
import { PriceMonitoringTable } from '../../components/government/PriceMonitoringTable';
import { RecentTransactions } from '../../components/government/RecentTransactions';
import { TopCropsWidget } from '../../components/government/TopCropsWidget';
import { WelcomeBanner } from '../../components/government/WelcomeBanner';

const metricCards = [
  { label: 'Total Farmers', value: '1,240', change: '+12%', icon: Users, tone: 'bg-[#e8f7ee]' },
  { label: 'Total Companies', value: '78', change: '+8%', icon: Building2, tone: 'bg-[#edf5ff]' },
  { label: 'Total Complaints', value: '12', change: '-20%', icon: Flag, tone: 'bg-[#ffe7ee]' },
];

export default function GovernmentDashboardPage() {
  return (
    <GovernmentPageLayout>
      <WelcomeBanner />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metricCards.map(({ label, value, change, icon: Icon, tone }) => (
          <div key={label} className={`${tone} rounded-[20px] border border-[#e7ebe7] p-4 shadow-[0_12px_24px_rgba(31,75,51,0.04)]`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                <Icon className="h-5 w-5 text-[#0f7b4a]" />
              </div>
              <div className="rounded-full bg-white/80 px-2 py-1 text-[0.7rem] font-semibold text-[#0f7b4a]">
                {change}
              </div>
            </div>
            <div className="mt-5 text-sm text-slate-600">{label}</div>
            <div className="mt-2 text-[2rem] font-black leading-none tracking-[-0.06em] text-[#132d2a]">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.6fr_0.8fr]">
        <PriceMonitoringTable />
        <TopCropsWidget />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_0.9fr]">
        <RecentTransactions />
        <NotificationPanel />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <ComplaintsTable />
        <RecentTransactions />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <CompanyMonitoring />
        <FarmerMonitoring />
      </div>

      <div className="grid gap-5 xl:grid-cols-1">
        <CompanyVerification />
      </div>
    </GovernmentPageLayout>
  );
}
