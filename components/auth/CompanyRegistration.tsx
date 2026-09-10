'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building2, Lock, Mail, Phone, User } from 'lucide-react';
import { mockRegister } from './mockAuth';

const companySchema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Enter a valid email'),
    phone: z.string().min(10, 'Phone number is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
    companyName: z.string().min(2, 'Company name is required'),
    companyType: z.string().min(2, 'Select a company type'),
    licenseNumber: z.string().min(2, 'License number is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type CompanyRegistrationValues = z.infer<typeof companySchema>;

export function CompanyRegistration() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CompanyRegistrationValues>({
    resolver: zodResolver(companySchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: CompanyRegistrationValues) => {
    const result = await mockRegister('company', values);
    if (result.ok) router.push('/auth/redirect');
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-2xl font-black tracking-[-0.05em] text-[#123a2d]">Company Registration</div>
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
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input {...register('fullName')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Company Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input {...register('companyName')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input {...register('email')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input {...register('phone')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Company Type</label>
            <select {...register('companyType')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10">
              <option value="">Select company type</option>
              <option value="Organic Company">Organic Company</option>
              <option value="Hotel">Hotel</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Food Processor">Food Processor</option>
              <option value="Supermarket">Supermarket</option>
            </select>
            {errors.companyType && <p className="mt-1 text-xs text-red-500">{errors.companyType.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">License Number</label>
            <input {...register('licenseNumber')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            {errors.licenseNumber && <p className="mt-1 text-xs text-red-500">{errors.licenseNumber.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="password" {...register('password')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="password" {...register('confirmPassword')} className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] pl-10 pr-3 text-sm outline-none focus:border-[#0f7b4a] focus:ring-2 focus:ring-[#0f7b4a]/10" />
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-3">
          <Link href="/auth/register" className="text-sm font-medium text-slate-500 hover:text-[#0f7b4a]">Back</Link>
          <button type="submit" disabled={!isValid} className="rounded-xl bg-[#0f7b4a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-[#0b5d3d] disabled:cursor-not-allowed disabled:opacity-50">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
