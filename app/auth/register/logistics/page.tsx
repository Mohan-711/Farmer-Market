import { AuthLayout } from '../../../../components/auth/AuthLayout';
import { LogisticsRegistration } from '../../../../components/auth/LogisticsRegistration';

export default function LogisticsRegisterPage() {
  return (
    <AuthLayout
      title="Logistics Registration"
      subtitle="Create your logistics account to connect farms to markets"
      slogan="On Time. Every Time."
      highlight="Connected Delivery"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <LogisticsRegistration />
    </AuthLayout>
  );
}
