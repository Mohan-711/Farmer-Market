import { AuthLayout } from '../../../components/auth/AuthLayout';
import { ResetPassword } from '../../../components/auth/ResetPassword';

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new secure password"
      slogan="Protect your account. Grow confidently."
      highlight="Secure"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <ResetPassword />
    </AuthLayout>
  );
}
