import { ArrowRight, Leaf } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[#dfeae7] p-6 shadow-[0_20px_40px_rgba(17,50,39,0.06)]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06)),url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0d4635] backdrop-blur-sm">
            <Leaf className="h-3.5 w-3.5" />
            Quality Supply
          </div>
          <h1 className="text-[2.2rem] font-black leading-[1.05] tracking-[-0.06em] text-[#112d26] sm:text-[3rem]">
            Welcome back, GreenFresh!
          </h1>
          <p className="mt-2 text-lg text-[#173f35]">Discover quality produce, build strong partnerships, and grow your business.</p>
        </div>

        <div className="rounded-[22px] border border-white/50 bg-white/15 px-4 py-3 text-right shadow-lg backdrop-blur-sm">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#1a4d3f]">Good Food</div>
          <div className="mt-1 text-xl font-black tracking-[-0.05em] text-[#113f35]">Builds a Better Tomorrow</div>
        </div>
      </div>
    </section>
  );
}
