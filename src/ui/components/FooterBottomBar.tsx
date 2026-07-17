import { Link } from "react-router";
import { socialsLinks } from "../../content/shared.content";

const currentYear = new Date().getFullYear();

export default function FooterBottomBar() {
  return (
    <div className="w-full relative before:absolute before:inset-x-0 before:top-0 before:bg-background/45 before:h-px">
      <div className="mx-auto w-app-content-boundary page-padded-section-x py-3 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 ">
        <p className="text-background/65 text-balance leading-tight">
          &copy; {currentYear} Pick a Sneak. All rights reserved.
        </p>
        <nav aria-label="Legal">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <li className="lg:mx-auto">
              <Link
                to="/privacy"
                className="text-background/65 hover:text-background transition-colors duration-300 ease-cubic">
                Privacy Policy
              </Link>
            </li>
            <li className="lg:mx-auto">
              <Link
                to="/terms"
                className="text-background/65 hover:text-background transition-colors duration-300 ease-cubic">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="lg:justify-self-end">
          <ul className="flex items-center gap-4">
            {socialsLinks.map(({ customIcon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-6">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
