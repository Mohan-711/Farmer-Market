'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail } from 'lucide-react';
import { mockSendOtp } from './mockAuth';

const forgotSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});

export type ForgotPasswordValues = z.infer<typeof forgotSchema>;

export function ForgotPasswordForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: ForgotPasswordValues) => {
    await mockSendOtp(values.email);
    router.push('/auth/verify-otp');
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-3xl font-black tracking-[-0.06em] text-[#123a2d]">Reset Password</div>
      <p className="mb-6 text-sm text-slate-500">Enter your registered email address to receive a reset code</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              {...register('email')}
              placeholder="farmer@gmail.com"
              className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            />
          </div>
          {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f7b4a] text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send Reset Link
        </button>

        <Link href="/auth/login" className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">
          Back to Login
        </Link>
      </form>
    </div>
  );
}
