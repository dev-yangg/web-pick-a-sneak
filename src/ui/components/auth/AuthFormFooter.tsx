import { Link } from "react-router";

interface Props {
  isLoggingIn?: boolean;
}
export default function AuthFormFooter({ isLoggingIn = true }: Props) {
  return (
    <footer>
      <p className="text-small text-center text-balance">
        {`${isLoggingIn ? `Don't have an account yet?` : `Already registered?`}`}{" "}
        <Link
          to={`/auth/${isLoggingIn ? "register" : "login"}`}
          className="underline">
          {`${isLoggingIn ? "Register" : "Login"}`}
        </Link>
      </p>
    </footer>
  );
}
