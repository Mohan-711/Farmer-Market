import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#f4f8f2]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-[#0d4635]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff3e4] shadow-sm ring-1 ring-green-700/20">
            <Leaf className="h-5 w-5 text-[#0f7b4a]" />
          </div>
          <div>
            <div className="text-[2rem] font-black leading-none tracking-[-0.06em]">AgriLink</div>
            <div className="text-[0.58rem] font-medium uppercase tracking-[0.08em] text-slate-500">
              Connecting Today. Growing Tomorrow.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? 'relative font-medium text-[#0d4635] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#0f7b4a]'
                  : 'font-medium text-slate-700 hover:text-[#0f7b4a]'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth/login"
            className="rounded-xl border border-[#0f7b4a] bg-white px-5 py-3 text-sm font-semibold text-[#0f7b4a] shadow-sm hover:-translate-y-0.5 hover:bg-[#f2faf4]"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="rounded-xl bg-[#0f7b4a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 hover:-translate-y-0.5 hover:bg-[#0b5d3d]"
          >
            Get Started →
          </Link>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  );
}
