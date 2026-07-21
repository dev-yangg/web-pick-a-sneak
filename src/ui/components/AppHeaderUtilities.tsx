import { Handbag, SearchIcon, UserIcon } from "lucide-react";
import { Link } from "react-router";

export default function AppHeaderUtilities() {
  return (
    <div
      role="group"
      aria-label="Header Actions"
      className="max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-1 flex items-center gap-2 ml-auto">
      <button className="flex items-center gap-2 sm:outline-1 sm:pl-2 sm:pr-3 sm:py-1 rounded-md">
        <span
          aria-hidden="true"
          className="inline-block header-actions-icon pointer-events-none">
          <SearchIcon />
        </span>
        <span className="hidden sm:inline-block">Search</span>
      </button>
      <button className="header-actions-icon clip-spread group">
        <Handbag className="group-hocus:text-background transition-colors duration-500 ease-cubic" />
      </button>
      <Link
        to={"/auth/login"}
        className="header-actions-icon clip-spread group">
        <UserIcon className="group-hocus:text-background transition-colors duration-500 ease-cubic" />
      </Link>
    </div>
  );
}
