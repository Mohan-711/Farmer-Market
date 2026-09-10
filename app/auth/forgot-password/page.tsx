import { AuthLayout } from '../../../components/auth/AuthLayout';
import { ForgotPasswordForm } from '../../../components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Reset your password securely"
      slogan="Secure Access Always."
      highlight="Recovery"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
