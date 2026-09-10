import { ComplaintForm } from '../../components/buyer/ComplaintForm';
import { Header } from '../../components/buyer/Header';
import { MarketplaceTable } from '../../components/buyer/MarketplaceTable';
import { OrderTracking } from '../../components/buyer/OrderTracking';
import { OrdersTable } from '../../components/buyer/OrdersTable';
import { ProductDetailsCard } from '../../components/buyer/ProductDetailsCard';
import { QuickActions } from '../../components/buyer/QuickActions';
import { Sidebar } from '../../components/buyer/Sidebar';
import { StatsCards } from '../../components/buyer/StatsCards';
import { TransactionsTable } from '../../components/buyer/TransactionsTable';
import { WelcomeBanner } from '../../components/buyer/WelcomeBanner';

export default function BuyerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#edf4ef] text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-0 bg-[#f2f7f3]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />

          <div className="space-y-5 p-5 lg:p-6">
            <WelcomeBanner />
            <StatsCards />

            <div className="grid gap-5 xl:grid-cols-[1.65fr_0.95fr]">
              <MarketplaceTable />
              <ProductDetailsCard />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.5fr_0.9fr]">
              <OrdersTable />
              <OrderTracking />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.5fr_0.9fr]">
              <TransactionsTable />
              <QuickActions />
            </div>

            <ComplaintForm />
          </div>
        </div>
      </div>
    </main>
  );
}
