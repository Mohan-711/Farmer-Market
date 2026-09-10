import type { ComponentProps } from 'react';
import {
  ArrowUpRight,
  BellDot,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheckBig,
  Download,
  Droplets,
  Factory,
  FileClock,
  HandCoins,
  Leaf,
  MapPinned,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Wallet,
  Wheat,
} from 'lucide-react';
import { Sidebar } from '@/components/farmer/Sidebar';

const cropData = [
  { name: 'Basmati Rice', qty: '1200 kg', status: 'Ready', price: '₹64/kg', quality: 'Premium', risk: 'Low' },
  { name: 'Wheat', qty: '860 kg', status: 'In Transit', price: '₹38/kg', quality: 'Grade A', risk: 'Medium' },
  { name: 'Tomatoes', qty: '540 kg', status: 'Harvested', price: '₹28/kg', quality: 'Fresh', risk: 'Low' },
  { name: 'Maize', qty: '980 kg', status: 'Ready', price: '₹31/kg', quality: 'Dry', risk: 'Low' },
];

const offerData = [
  { buyer: 'GreenFresh Foods', qty: '950 kg', price: '₹66/kg', delta: '+₹1.5/kg', eta: '2 days' },
  { buyer: 'AgroMitra Co.', qty: '700 kg', price: '₹63/kg', delta: '+₹0.8/kg', eta: '3 days' },
  { buyer: 'FarmTrade Pvt.', qty: '820 kg', price: '₹65/kg', delta: '+₹1.2/kg', eta: '4 days' },
];

const acceptedDeals = [
  { buyer: 'Horizon Organics', crop: 'Basmati Rice', amount: '₹81,000', status: 'Scheduled', badge: 'Confirmed' },
  { buyer: 'Delta Supply', crop: 'Tomatoes', amount: '₹16,200', status: 'Packed', badge: 'In Progress' },
  { buyer: 'Bharat Agro', crop: 'Maize', amount: '₹28,700', status: 'Dispatched', badge: 'Shipped' },
];

const paymentData = [
  { item: 'Basmati Rice', date: '23 Aug', amount: '₹72,000', status: 'Paid' },
  { item: 'Wheat', date: '19 Aug', amount: '₹24,500', status: 'Pending' },
  { item: 'Tomatoes', date: '14 Aug', amount: '₹18,200', status: 'Paid' },
];

const quickStats = [
  { label: 'Total Yield', value: '3,420 kg', change: '+12.5%', icon: Wheat, tone: 'bg-[#edf7ef] text-[#1f7a46]' },
  { label: 'Revenue', value: '₹2,18,400', change: '+8.2%', icon: HandCoins, tone: 'bg-[#eef5ff] text-[#2d5bdb]' },
  { label: 'Water Saved', value: '17.4%', change: '+3.1%', icon: Droplets, tone: 'bg-[#eefaf5] text-[#0f7b4a]' },
  { label: 'On-Time Rate', value: '96%', change: '+4.2%', icon: TrendingUp, tone: 'bg-[#fff7e8] text-[#d28a00]' },
];

const navCards = [
  { title: 'Harvest Overview', value: '89%', subtitle: 'Healthy crop index', icon: Leaf },
  { title: 'Buyer Rate', value: '₹60.4/kg', subtitle: 'Avg. current market rate', icon: Star },
  { title: 'Storage', value: '24°C', subtitle: 'Warehouse climate', icon: WarehouseIcon },
];

function WarehouseIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21V8.5L12 3l9 5.5V21" />
      <path d="M3 11h18" />
      <path d="M8 14h8v7H8z" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export default function FarmerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f5] text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 p-6 lg:p-7">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#1d7d52]">Farmer dashboard</p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.06em] text-[#123d2d]">Good morning, Ramesh</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search crops, buyers"
                  className="h-11 w-[270px] rounded-xl border border-[#dfe8df] bg-white pl-10 pr-4 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400"
                />
              </div>
              <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe8df] bg-white text-slate-600 shadow-sm">
                <BellDot className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#ff6a3d] ring-2 ring-white" />
              </button>
            </div>
          </div>

          <section className="mb-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] bg-gradient-to-r from-[#0e6941] via-[#135f3a] to-[#143d2f] p-6 text-white shadow-[0_18px_40px_rgba(16,85,51,0.22)]">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#d9f4e4]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Smart planning
                  </div>
                  <h2 className="mt-5 max-w-[500px] text-[2.2rem] font-black leading-tight tracking-[-0.06em]">
                    Current demand is strong for premium rice.
                  </h2>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="text-[0.62rem] uppercase tracking-[0.15em] text-[#d5f3df]">Market pulse</div>
                  <div className="mt-2 text-2xl font-black tracking-[-0.05em]">+18.6%</div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-[#dff5e9]">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                  <CalendarDays className="h-4 w-4" />
                  Harvest window: 12–18 Oct
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                  <MapPinned className="h-4 w-4" />
                  Village: Pooja Mandap
                </span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              {navCards.map(({ title, value, subtitle, icon: Icon }) => (
                <div key={title} className="rounded-[22px] border border-[#dfe7df] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-[#edf7ef] p-2 text-[#0d7646]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#ebfff0] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#1d7d52]">Live</span>
                  </div>
                  <div className="mt-5 text-[0.72rem] uppercase tracking-[0.12em] text-slate-400">{title}</div>
                  <div className="mt-2 text-2xl font-black tracking-[-0.06em] text-[#123d2d]">{value}</div>
                  <div className="mt-1 text-sm text-slate-500">{subtitle}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickStats.map(({ label, value, change, icon: Icon, tone }) => (
              <div key={label} className="rounded-[22px] border border-[#e0e7e1] bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-2 ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0f7b4a]">{change}</span>
                </div>
                <div className="mt-5 text-[0.7rem] uppercase tracking-[0.12em] text-slate-400">{label}</div>
                <div className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#123d2d]">{value}</div>
              </div>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6">
              <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">My crops</div>
                    <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Inventory & crop status</h3>
                  </div>
                  <button className="flex items-center gap-2 rounded-xl border border-[#dfe8df] bg-[#f4faf5] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                    Export
                    <Download className="h-4 w-4" />
                  </button>
                </div>

                <div className="overflow-hidden rounded-[18px] border border-[#e6eee7]">
                  <table className="min-w-full text-left">
                    <thead className="bg-[#f5faf6] text-[0.7rem] uppercase tracking-[0.12em] text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Crop</th>
                        <th className="px-4 py-3 font-semibold">Quantity</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                        <th className="px-4 py-3 font-semibold">Price</th>
                        <th className="px-4 py-3 font-semibold">Quality</th>
                        <th className="px-4 py-3 font-semibold">Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cropData.map((crop) => (
                        <tr key={crop.name} className="border-t border-[#edf1ee] text-sm text-slate-700">
                          <td className="px-4 py-3 font-semibold text-[#113f35]">{crop.name}</td>
                          <td className="px-4 py-3">{crop.qty}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex rounded-full bg-[#ebfff1] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#1b7b51]">
                              {crop.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-[#113f35]">{crop.price}</td>
                          <td className="px-4 py-3">{crop.quality}</td>
                          <td className="px-4 py-3">
                            <span className={crop.risk === 'Low' ? 'text-[#178b5f] font-semibold' : 'text-[#b68617] font-semibold'}>{crop.risk}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Offers</div>
                    <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Offers received</h3>
                  </div>
                  <button className="rounded-xl border border-[#dfe8df] bg-[#eef7f0] px-3 py-2 text-sm font-semibold text-[#0f7b4a]">
                    View all
                  </button>
                </div>

                <div className="space-y-3">
                  {offerData.map((offer) => (
                    <div key={offer.buyer} className="flex items-center justify-between gap-4 rounded-[18px] border border-[#e8efe9] bg-[#fbfdfb] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eafbf0] text-[#0e7a4d]">
                          <Factory className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#163d34]">{offer.buyer}</div>
                          <div className="text-sm text-slate-500">{offer.qty} · ETA {offer.eta}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xl font-black tracking-[-0.05em] text-[#0f7b4a]">{offer.price}</div>
                          <div className="text-sm font-medium text-[#1d7d52]">{offer.delta}</div>
                        </div>
                        <button className="rounded-xl bg-[#0f7b4a] px-3 py-2 text-sm font-semibold text-white">
                          Accept
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">AI Assistant</div>
                    <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Crop advisor</h3>
                  </div>
                  <div className="rounded-full bg-[#edf9f0] p-2 text-[#168a54]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-[18px] bg-[#f4faf5] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#113f35]">Market recommendation</span>
                      <span className="rounded-full bg-[#dff5e6] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#15774d]">AI</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Your current rice lot is expected to fetch a 5–7% better return if sold within the next 3 days amid strong buyer demand.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-[#e7efe8] p-4">
                    <div className="mb-2 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <ShieldCheck className="h-4 w-4 text-[#1d7d52]" />
                      Risk check
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Weather risk</span>
                      <span className="font-semibold text-[#139a58]">Low</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf3ee]">
                      <div className="h-full w-[82%] rounded-full bg-[#1d7d52]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Payments</div>
                    <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Payment tracking</h3>
                  </div>
                  <Wallet className="h-5 w-5 text-[#0f7b4a]" />
                </div>

                <div className="space-y-3">
                  {paymentData.map((payment) => (
                    <div key={payment.item} className="flex items-center justify-between rounded-[16px] border border-[#edf1ee] bg-[#fbfdfb] p-3">
                      <div>
                        <div className="font-semibold text-[#113f35]">{payment.item}</div>
                        <div className="text-xs text-slate-500">{payment.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#123d2d]">{payment.amount}</div>
                        <div className={payment.status === 'Paid' ? 'text-[#0f7b4a] text-xs font-semibold' : 'text-[#b77d00] text-xs font-semibold'}>{payment.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Deals</div>
                  <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Accepted deals</h3>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#0f7b4a]">
                  Manage <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                {acceptedDeals.map((deal) => (
                  <div key={deal.buyer} className="rounded-[18px] border border-[#e8efe9] bg-[#fbfdfb] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-lg font-bold text-[#113f35]">{deal.buyer}</div>
                        <div className="mt-1 text-sm text-slate-500">{deal.crop}</div>
                      </div>
                      <span className="rounded-full bg-[#ebfff3] px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[#15774d]">
                        {deal.badge}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-[0.66rem] uppercase tracking-[0.12em] text-slate-400">Amount</div>
                        <div className="mt-1 text-xl font-black tracking-[-0.05em] text-[#123d2d]">{deal.amount}</div>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#eefaf2] px-3 py-1.5 text-sm font-semibold text-[#0f7b4a]">
                        <CircleCheckBig className="h-4 w-4" />
                        {deal.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-[#e4ebdf] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Logistics</div>
                  <h3 className="mt-2 text-[1.65rem] font-black tracking-[-0.06em] text-[#123d2d]">Dispatch status</h3>
                </div>
                <Truck className="h-5 w-5 text-[#0f7b4a]" />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-[18px] bg-[#f4faf5] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">UPL Logistics</span>
                    <span className="rounded-full bg-[#dff5e6] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#15774d]">On route</span>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0f7b4a]">
                      <PackageCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[1.4rem] font-black tracking-[-0.05em] text-[#123d2d]">12 boxes</div>
                      <div className="text-sm text-slate-500">Delivery window 2:30 PM</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[18px] bg-[#eef6ff] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">Cold Storage</span>
                    <span className="rounded-full bg-[#dfeeff] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#3567d8]">Stable</span>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2d5bdb]">
                      <FileClock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[1.4rem] font-black tracking-[-0.05em] text-[#123d2d]">18 hrs</div>
                      <div className="text-sm text-slate-500">Avg. storage duration</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[20px] bg-[#f8faf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-700">Daily productivity</div>
                  <div className="text-sm font-semibold text-[#0f7b4a]">+12%</div>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[42, 57, 48, 65, 72, 81, 88].map((height, idx) => (
                    <div key={idx} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#0f7b4a] to-[#66c98d]" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
