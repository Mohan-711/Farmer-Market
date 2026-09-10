'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building2, Lock, Mail, Phone, User } from 'lucide-react';
import { mockRegister } from './mockAuth';

const governmentSchema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Enter a valid email'),
    phone: z.string().min(10, 'Phone number is required'),
    department: z.string().min(2, 'Department is required'),
    designation: z.string().min(2, 'Designation is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type GovernmentRegistrationValues = z.infer<typeof governmentSchema>;

export function GovernmentRegistration() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<GovernmentRegistrationValues>({
    resolver: zodResolver(governmentSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: GovernmentRegistrationValues) => {
    const result = await mockRegister('government', values);
    if (result.ok) router.push('/auth/redirect');
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-2xl font-black tracking-[-0.05em] text-[#123a2d]">Government Registration</div>
      <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf7ee] text-[#0f7b4a]">1</span>
        <span>Basic Details</span>
        <span className="text-slate-300">•</span>
        <span className="opacity-80">2 Additional Details</span>
        <span className="text-slate-300">•</span>
        <span className="opacity-60">3 Complete</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
            <div className="relative"><User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input {...register('fullName')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Department</label>
            <div className="relative"><Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input {...register('department')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.department && <p className="mt-1 text-xs text-red-500">{errors.department.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <div className="relative"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input {...register('email')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Designation</label>
            <input {...register('designation')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            {errors.designation && <p className="mt-1 text-xs text-red-500">{errors.designation.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
            <div className="relative"><Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input {...register('phone')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative"><Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input type="password" {...register('password')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="relative"><Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input type="password" {...register('confirmPassword')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" /></div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-3">
          <Link href="/auth/register" className="text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">Back</Link>
          <button type="submit" disabled={!isValid} className="rounded-xl bg-[#0f7b4a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-50">Register</button>
        </div>
      </form>
    </div>
  );
}
