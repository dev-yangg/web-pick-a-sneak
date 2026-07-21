import { NavLink, type NavLinkRenderProps } from "react-router";
import { mainLinks } from "../../content/shared.content";

export default function MainNav() {
  return (
    <nav className="max-lg:col-start-1 max-lg:col-end-3 relative">
      <ul className="flex overflow-x-auto flex-nowrap gap-4 lg:justify-evenly scrollbar-none lg:w-fit mx-auto relative pt-4 pb-2 lg:px-4">
        {mainLinks.map((link) => (
          <li key={link.label} className="text-nowrap">
            <NavLink
              to={link.href}
              className={({ isActive }: NavLinkRenderProps) =>
                `p-2 lg:px-3 lg:py-1 rounded-md lg:rounded-none relative group lg:hocus:text-shadow-[0_0_1px] text-shadow-foreground transition-[text-shadow] duration-400 ease-cubic will-change-transform max-lg:focus-within:text-background ${
                  isActive
                    ? "max-lg:bg-foreground max-lg:focus-within:bg-foreground max-lg:text-background lg:text-shadow-[0_0_1px]"
                    : "max-lg:focus-within:bg-foreground/85"
                }`
              }>
              {({ isActive }: NavLinkRenderProps) => (
                <>
                  {link.label}
                  <div
                    aria-hidden="true"
                    className={`hidden lg:block absolute inset-0  -z-10 before:absolute before:inset-1 before:bg-background after:absolute after:inset-y-0 after:inset-x-2 after:bg-background transition-[transform_opacity] duration-400 ease-cubic pointer-events-none ${
                      isActive
                        ? "opacity-100 scale-100 bg-foreground"
                        : "opacity-0 scale-85 group-hocus:opacity-100 group-hocus:scale-100 bg-foreground/55"
                    }`}>
                    <div className="absolute inset-y-2 inset-x-0 bg-background"></div>
                  </div>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
