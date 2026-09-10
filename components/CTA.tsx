import Link from 'next/link';
import { ArrowRight, Leaf } from 'lucide-react';

export function CTA() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-12 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[30px] border border-[#0b5d3d]/10 bg-[#0b5d3d] p-8 shadow-soft md:p-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464226184884-fa52ac9c5ed5?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b5d3d]/95 via-[#0d6b4d]/85 to-[#0e563e]/80" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[700px]">
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Be Part of a Sustainable Agricultural Future
            </h2>
            <p className="mt-4 max-w-[650px] text-base leading-8 text-white/85 md:text-lg">
              Join AgriLink today and help build a transparent, efficient and prosperous agricultural ecosystem for a better India.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/auth/register" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0d4635] shadow-lg hover:-translate-y-0.5">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/auth/login" className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
