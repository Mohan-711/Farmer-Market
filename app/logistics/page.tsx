import { AssignedDeliveriesTable } from '../../components/logistics/AssignedDeliveriesTable';
import { AvailableDeliveriesTable } from '../../components/logistics/AvailableDeliveriesTable';
import { CompletedDeliveriesTable } from '../../components/logistics/CompletedDeliveriesTable';
import { DeliveryDetails } from '../../components/logistics/DeliveryDetails';
import { DeliveryStatusTracker } from '../../components/logistics/DeliveryStatusTracker';
import { Header } from '../../components/logistics/Header';
import { LiveTrackingMap } from '../../components/logistics/LiveTrackingMap';
import { Sidebar } from '../../components/logistics/Sidebar';
import { StatsCards } from '../../components/logistics/StatsCards';
import { TransactionsTable } from '../../components/logistics/TransactionsTable';
import { WelcomeBanner } from '../../components/logistics/WelcomeBanner';

export default function LogisticsDashboardPage() {
  return (
    <main className="min-h-screen bg-[#edf4ef] text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-0 bg-[#f2f7f3]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />

          <div className="space-y-5 p-5 lg:p-6">
            <WelcomeBanner />
            <StatsCards />

            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <AvailableDeliveriesTable />
                <AssignedDeliveriesTable />
              </div>

              <div className="space-y-5">
                <DeliveryStatusTracker />
                <LiveTrackingMap />
                <DeliveryDetails />
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              <CompletedDeliveriesTable />
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
