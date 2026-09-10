import { AuthLayout } from '../../../../components/auth/AuthLayout';
import { CompanyRegistration } from '../../../../components/auth/CompanyRegistration';

export default function CompanyRegisterPage() {
  return (
    <AuthLayout
      title="Company Registration"
      subtitle="Create your account to source produce and scale your operations"
      slogan="Trade. Grow. Prosper."
      highlight="Verified Partner"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <CompanyRegistration />
    </AuthLayout>
  );
}
