'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(30);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => (value > 0 ? value - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/\d/.test(value) && value !== '') return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length === 6) {
      router.push('/auth/reset-password');
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-3xl font-black tracking-[-0.06em] text-[#123a2d]">Verify OTP</div>
      <p className="mb-6 text-sm text-slate-500">Enter the 6-digit code sent to your email</p>

      <div className="mb-6 flex justify-center gap-3">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={value}
            onChange={(event) => handleChange(event.target.value, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            maxLength={1}
            className="h-12 w-12 rounded-xl border border-slate-200 bg-[#f8faf8] text-center text-lg font-semibold text-slate-700 outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
          />
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-slate-500">
        <p>Resend OTP in {seconds}s</p>
        <button type="button" className="font-medium text-[#0f7b4a] hover:text-[#0b5d3d]">
          Resend OTP
        </button>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={otp.join('').length !== 6}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f7b4a] text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        Verify OTP
      </button>

      <Link href="/auth/login" className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">
        Back to Login
      </Link>
    </div>
  );
}
