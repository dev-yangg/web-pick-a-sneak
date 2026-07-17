import { registerContent } from "../content/auth/shared.content";
import AuthForm from "../ui/components/auth/AuthForm";
import AuthFormContainer from "../ui/components/auth/AuthFormContainer";
import AuthFormFooter from "../ui/components/auth/AuthFormFooter";
import AuthFormHeader from "../ui/components/auth/AuthFormHeader";
import GoogleAuthenticate from "../ui/components/auth/GoogleAuthenticate";

export default function Register() {
  const { subheadline, form } = registerContent;
  return (
    <AuthFormContainer>
      <AuthFormHeader subheadline={subheadline} />
      <AuthForm isLoggingIn={false} fields={form} />
      <GoogleAuthenticate isLoggingIn={false} />
      <AuthFormFooter isLoggingIn={false} />
    </AuthFormContainer>
  );
}
