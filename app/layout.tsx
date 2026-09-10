import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgriLink | Transparent Agricultural Marketplace',
  description:
    'A government-monitored agricultural marketplace connecting farmers, companies, buyers, and logistics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
