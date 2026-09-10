import { AcceptedPurchasesTable } from '../../components/company/AcceptedPurchasesTable';
import { AvailableCropsTable } from '../../components/company/AvailableCropsTable';
import { ComplaintsTable } from '../../components/company/ComplaintsTable';
import { Header } from '../../components/company/Header';
import { InventoryTable } from '../../components/company/InventoryTable';
import { MakeOfferCard } from '../../components/company/MakeOfferCard';
import { MyOffersTable } from '../../components/company/MyOffersTable';
import { QuickActions } from '../../components/company/QuickActions';
import { SellToBuyersTable } from '../../components/company/SellToBuyersTable';
import { Sidebar } from '../../components/company/Sidebar';
import { StatsCards } from '../../components/company/StatsCards';
import { TransactionsTable } from '../../components/company/TransactionsTable';
import { WelcomeBanner } from '../../components/company/WelcomeBanner';

export default function CompanyDashboardPage() {
  return (
    <main className="min-h-screen bg-[#edf4ef] text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-0 bg-[#f2f7f3]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />

          <div className="space-y-5 p-5 lg:p-6">
            <WelcomeBanner />
            <StatsCards />

            <div className="grid gap-5 xl:grid-cols-[1.55fr_0.9fr]">
              <AvailableCropsTable />
              <MakeOfferCard />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.35fr_1.15fr_0.9fr]">
              <MyOffersTable />
              <AcceptedPurchasesTable />
              <QuickActions />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.1fr_1.1fr_1.1fr]">
              <InventoryTable />
              <SellToBuyersTable />
              <ComplaintsTable />
            </div>

            <TransactionsTable />
          </div>
        </div>
      </div>
    </main>
  );
}
