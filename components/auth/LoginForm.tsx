'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Mail, ShieldCheck } from 'lucide-react';
import { mockLogin } from './mockAuth';

const loginSchema = z.object({
  email: z.string().min(1, 'Email or phone is required').email('Enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: { remember: true },
  });

  const onSubmit = async (values: LoginValues) => {
    setIsSubmitting(true);
    const result = await mockLogin(values.email, values.password);
    setIsSubmitting(false);
    if (result.ok) {
      router.push(result.redirectTo);
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex gap-3 text-sm font-semibold">
          <button type="button" className="rounded-full bg-[#eaf7ee] px-4 py-2 text-[#0f7b4a] shadow-sm ring-1 ring-green-600/10">
            Login
          </button>
          <Link href="/auth/register" className="rounded-full px-4 py-2 text-slate-500 hover:text-[#0f7b4a]">
            Register
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-black tracking-[-0.06em] text-[#123a2d]">Welcome Back!</h1>
        <p className="mt-2 text-sm text-slate-500">Login to your AgriLink account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email or Phone</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              {...register('email')}
              placeholder="farmer@gmail.com"
              className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none transition focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            />
          </div>
          {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
          <div className="relative">
            <ShieldCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-10 text-sm outline-none transition focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" {...register('remember')} className="h-4 w-4 accent-[#0f7b4a]" />
            Remember me
          </label>
          <Link href="/auth/forgot-password" className="font-medium text-[#0f7b4a] hover:text-[#0b5d3d]">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f7b4a] text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        <div className="relative my-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
          <span className="bg-white px-3">OR</span>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-slate-200" />
        </div>

        <Link
          href="/auth/register"
          className="flex h-12 w-full items-center justify-center rounded-xl border border-[#0f7b4a] bg-white text-base font-semibold text-[#0f7b4a] transition hover:bg-[#f2faf4]"
        >
          Register Now
        </Link>
      </form>
    </div>
  );
}
