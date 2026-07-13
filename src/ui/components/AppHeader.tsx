import { Link, NavLink } from "react-router";
import Logo from "./svgs/Logo";
import TextLogo from "./svgs/TextLogo";
import { mainLinks } from "../../content/shared";
import UserIcon from "./svgs/UserIcon";
import BagIcon from "./svgs/BagIcon";
import SearchIcon from "./svgs/SearchIcon";

export default function AppHeader() {
  return (
    <header className="p-4 grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center gap-y-4 relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground after:origin-center">
      <Link to={"/"} className="block w-12 sm:w-44">
        <Logo className="sm:hidden" />
        <TextLogo className="hidden sm:block" />
      </Link>
      <nav className="max-lg:col-start-1 max-lg:col-end-3">
        <ul className="flex overflow-x-auto flex-nowrap gap-8 lg:gap-0 lg:justify-evenly scrollbar-none lg:w-fluid-width-md mx-auto">
          {mainLinks.map((link) => (
            <li key={link.label} className="text-nowrap">
              <NavLink to={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        role="group"
        aria-label="Header Actions"
        className="max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-1 flex items-center gap-6 ml-auto">
        <button className="flex items-center gap-2 sm:outline-1 sm:pl-2 sm:pr-3 sm:py-1 rounded-md">
          <span className="inline-block header-actions-icon">
            <SearchIcon />
          </span>
          <span className="hidden sm:inline-block">Search</span>
        </button>
        <button className="header-actions-icon">
          <BagIcon />
        </button>
        <button className="header-actions-icon">
          <UserIcon />
        </button>
      </div>
    </header>
  );
}
