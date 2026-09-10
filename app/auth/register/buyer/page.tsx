import { AuthLayout } from '../../../../components/auth/AuthLayout';
import { BuyerRegistration } from '../../../../components/auth/BuyerRegistration';

export default function BuyerRegisterPage() {
  return (
    <AuthLayout
      title="Buyer Registration"
      subtitle="Create your account to source quality produce securely"
      slogan="Better Produce For A Healthier India."
      highlight="Trusted Buyer"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <BuyerRegistration />
    </AuthLayout>
  );
}
