import { AuthLayout } from '../../../../components/auth/AuthLayout';
import { GovernmentRegistration } from '../../../../components/auth/GovernmentRegistration';

export default function GovernmentRegisterPage() {
  return (
    <AuthLayout
      title="Government Registration"
      subtitle="Create your account to monitor and support a transparent agriculture ecosystem"
      slogan="Monitoring Growth. Enforcing Trust."
      highlight="Public Oversight"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <GovernmentRegistration />
    </AuthLayout>
  );
}
