import Link from 'next/link';
import { BriefcaseBusiness, Globe, Leaf, Play, Send } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Government Partnership', href: '#government' },
];

const socialLinks = [
  { label: 'Facebook', icon: Globe, href: '#' },
  { label: 'Twitter/X', icon: Send, href: '#' },
  { label: 'LinkedIn', icon: BriefcaseBusiness, href: '#' },
  { label: 'YouTube', icon: Play, href: '#' },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-[#f5f7f3]">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff3e4] text-[#0f7b4a]">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[2rem] font-black leading-none tracking-[-0.05em] text-[#0d4635]">AgriLink</div>
              <div className="text-sm text-slate-500">Connecting Today. Growing Tomorrow.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[#0f7b4a]">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-[#0f7b4a]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© AgriLink 2026</div>
          <div>Growing Together for a Better India.</div>
        </div>
      </div>
    </footer>
  );
}
