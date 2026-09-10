export type UserRole = 'farmer' | 'buyer' | 'company' | 'government' | 'logistics';

export interface MockRegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
  village?: string;
  district?: string;
  state?: string;
  companyName?: string;
  serviceArea?: string;
  contactPhone?: string;
}

export async function mockRegister(role: UserRole, payload: MockRegisterPayload) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    ok: true,
    role,
    user: {
      ...payload,
      id: `${role}-${Date.now()}`,
    },
  };
}

export async function mockLogin(
  email: string,
  password: string,
): Promise<{ ok: true; message: string; redirectTo: string } | { ok: false; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!email || !password) {
    return { ok: false, message: 'Missing credentials' };
  }

  const role = email.includes('farmer')
    ? 'farmer'
    : email.includes('buyer')
      ? 'buyer'
      : email.includes('company')
        ? 'company'
        : email.includes('gov')
          ? 'government'
          : 'logistics';

  return {
    ok: true,
    message: 'Login successful',
    redirectTo:
      role === 'farmer'
        ? '/dashboard/farmer'
        : role === 'buyer'
          ? '/dashboard/buyer'
          : role === 'company'
            ? '/dashboard/company'
            : role === 'government'
              ? '/dashboard/government'
              : '/dashboard/logistics',
  };
}

export async function mockSendOtp(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    ok: true,
    message: `OTP sent to ${email}`,
  };
}

export async function mockResetPassword(password: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    ok: true,
    message: 'Password reset successfully',
    password,
  };
}
