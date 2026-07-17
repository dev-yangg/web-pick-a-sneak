import { loginContent } from "../content/auth/shared.content";
import AuthForm from "../ui/components/auth/AuthForm";
import GoogleAuthenticate from "../ui/components/auth/GoogleAuthenticate";
import AuthFormHeader from "../ui/components/auth/AuthFormHeader";
import AuthFormFooter from "../ui/components/auth/AuthFormFooter";
import AuthFormContainer from "../ui/components/auth/AuthFormContainer";

export default function Login() {
  const { subheadline, form } = loginContent;
  return (
    <AuthFormContainer>
      <AuthFormHeader subheadline={subheadline} />
      <AuthForm fields={form} />
      <GoogleAuthenticate />
      <AuthFormFooter />
    </AuthFormContainer>
  );
}
