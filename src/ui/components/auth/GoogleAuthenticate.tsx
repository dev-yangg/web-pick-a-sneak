import GoogleIcon from "../svgs/GoogleIcon";

interface Props {
  isLoggingIn?: boolean;
  googleOnClick?: () => void;
}

export default function GoogleAuthenticate({
  isLoggingIn = true,
  googleOnClick,
}: Props) {
  return (
    <>
      <div
        role="separator"
        aria-label="Or continue with"
        className="flex justify-center items-center gap-4 relative">
        <div
          className="absolute bg-foreground/45 h-px top-1/2 -translate-y-1/2 rounded-md inset-x-0"
          aria-hidden="true"
        />
        <span className="text-tiny uppercase tracking-wide bg-background z-10 px-2">
          Or {isLoggingIn ? "continue" : "sign-up"} with
        </span>
      </div>
      <button
        onClick={googleOnClick}
        className="flex justify-center items-baseline outline outline-foreground-muted rounded-sm py-2">
        <span aria-hidden="true" className="inline-block w-4 -ml-1 mt-1">
          <GoogleIcon />
        </span>
        <span className="inline-block uppercase font-bold scale-75">
          Google
        </span>
      </button>
    </>
  );
}
