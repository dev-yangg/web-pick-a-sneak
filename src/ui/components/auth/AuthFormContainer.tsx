import { Link } from "react-router";
import TextLogo from "../svgs/TextLogo";

export default function AuthFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-dvh grid place-items-center px-8">
      <section className="w-fluid-width-xs text-foreground bg-background rounded-lg outline-5 px-5 py-4 flex flex-col gap-2">
        <Link
          to={"/"}
          className="flex items-center py-2 -translate-x-1.5 justify-center gap-1">
          <span className="inline-block w-45">
            <TextLogo />
          </span>
        </Link>
        {children}
      </section>
    </main>
  );
}
