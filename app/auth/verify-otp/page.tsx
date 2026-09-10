import { AuthLayout } from '../../../components/auth/AuthLayout';
import { OTPVerification } from '../../../components/auth/OTPVerification';

export default function VerifyOTPPage() {
  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the code sent to your email"
      slogan="Security First. Always." 
      highlight="Verification"
      features={['Fair Prices', 'Direct Markets', 'Sustainable Growth']}
    >
      <OTPVerification />
    </AuthLayout>
  );
}
