import { Link } from "react-router";
import Logo from "./svgs/Logo";
import TextLogo from "./svgs/TextLogo";
import { footerLinks, newsLetter } from "../../content/shared.content";
import { ArrowRight } from "lucide-react";
import FooterBottomBar from "./FooterBottomBar";

export default function AppFooter() {
  return (
    <footer className="bg-foreground text-background flex flex-col">
      <div className="w-app-content-boundary mx-auto page-padded-section  grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <Link
          to={"/"}
          aria-label="Go Home"
          className="lg:justify-self-start inline-flex gap-2 items-center lg:bg-background rounded-lg p-2 text-background lg:text-foreground">
          <div className="w-12 text-foreground hidden lg:block">
            <Logo />
          </div>
          <div className="w-full">
            <TextLogo />
          </div>
        </Link>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
          {footerLinks.map(({ category, links }) => (
            <nav
              key={category}
              aria-labelledby={category}
              className="lg:mx-auto">
              <strong id={category} className="underline">
                {category}
              </strong>
              <ul>
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link to={href} className="text-background/65">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </ul>
        <article className="uppercase lg:justify-self-end">
          <strong>{newsLetter.headline}</strong>
          <p className="text-small text-balance text-background/65">
            {newsLetter.subheadline}
          </p>
          <form action="" className="mt-4 flex">
            <input
              type="email"
              id="newsletter-email"
              name="email"
              className="outline rounded-tl-sm rounded-bl-sm outline-background/65 py-1 px-3 w-full max-w-full xs:w-fit shrink"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-background text-foreground grid place-content-center pl-1 pr-2 outline outline-background rounded-tr-sm rounded-br-sm group">
              <span className="inline-block w-6 group-hover:translate-x-1 transition-[transform_colors] duration-150 ease-cubic text-foreground/55 group-hover:text-foreground">
                <ArrowRight />
              </span>
            </button>
          </form>
        </article>
      </div>
      <FooterBottomBar />
    </footer>
  );
}
