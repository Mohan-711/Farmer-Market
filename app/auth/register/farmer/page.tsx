import { AuthLayout } from '../../../../components/auth/AuthLayout';
import { FarmerRegistration } from '../../../../components/auth/FarmerRegistration';

export default function FarmerRegisterPage() {
  return (
    <AuthLayout
      title="Farmer Registration"
      subtitle="Create your account to start selling your produce"
      slogan="Your Harvest. Our Support. A Brighter Tomorrow."
      highlight="Farm-to-Market"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <FarmerRegistration />
    </AuthLayout>
  );
}
