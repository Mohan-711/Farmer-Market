export default function CompanyDashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8f2] p-8 text-slate-800">
      <div className="w-full max-w-2xl rounded-[28px] border border-[#dfe7df] bg-white p-10 text-center shadow-[0_20px_40px_rgba(17,50,39,0.08)]">
        <div className="mb-4 inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#3759b8]">
          Company Portal
        </div>
        <h1 className="text-4xl font-black tracking-[-0.06em] text-[#123a2d]">Company Dashboard</h1>
        <p className="mt-3 text-base text-slate-600">This role dashboard is ready for supply chain coordination, orders, and vendor relationships.</p>
      </div>
    </main>
  );
}
