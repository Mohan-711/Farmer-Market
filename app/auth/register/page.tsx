import { RoleSelection } from '../../../components/auth/RoleSelection';
import { AuthLayout } from '../../../components/auth/AuthLayout';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join AgriLink and be part of a transparent agriculture ecosystem" 
      slogan="One Platform. Many Opportunities for a Greener India."
      highlight="Verified Network"
      features={['Connect', 'Trade', 'Grow', 'Prosper']}
    >
      <RoleSelection />
    </AuthLayout>
  );
}
