'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { mockResetPassword } from './mockAuth';

const resetSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ResetPasswordValues = z.infer<typeof resetSchema>;

export function ResetPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: ResetPasswordValues) => {
    await mockResetPassword(values.password);
    router.push('/auth/redirect');
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-3xl font-black tracking-[-0.06em] text-[#123a2d]">Create New Password</div>
      <p className="mb-6 text-sm text-slate-500">Set a new password for your AgriLink account</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">New Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-10 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-10 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" onClick={() => setShowConfirmPassword((v) => !v)}>
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="mt-2 text-xs text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f7b4a] text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Reset Password
        </button>

        <Link href="/auth/login" className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">
          Back to Login
        </Link>
      </form>
    </div>
  );
}
