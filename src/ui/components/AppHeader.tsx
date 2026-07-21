import { Link } from "react-router";
import Logo from "./svgs/Logo";
import TextLogo from "./svgs/TextLogo";
import MainNav from "./MainNav";
import AppHeaderUtilities from "./AppHeaderUtilities";

export default function AppHeader() {
  return (
    <header className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground after:origin-center">
      <div className="w-app-content-boundary mx-auto px-2 pt-4 pb-2 lg:p-4 grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center">
        <Link
          to={"/"}
          className="ml-2 lg:ml-0 block w-12 sm:w-44 focus:drop-shadow-[0_0_2px] drop-shadow-foreground transition-all duration-300 ease-cubic">
          <Logo className="sm:hidden" />
          <TextLogo className="hidden sm:block" />
        </Link>
        <MainNav />
        <AppHeaderUtilities />
      </div>
    </header>
  );
}
