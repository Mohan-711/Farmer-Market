import { AuthLayout } from '../../../components/auth/AuthLayout';
import { LoginForm } from '../../../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Access your agricultural marketplace account"
      slogan="Better Markets. Stronger Farmers. A Brighter India."
      highlight="Secure Access"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <LoginForm />
    </AuthLayout>
  );
}
