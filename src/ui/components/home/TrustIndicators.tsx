import { trustIndicators } from "../../../content/home.content";

export default function TrustIndicators() {
  return (
    <section className="bg-foreground text-background grid place-items-center">
      <div
        role="group"
        aria-label="trust indicators"
        className="w-app-content-boundary flex max-md:flex-wrap md:grid grid-cols-1 p-4 md:p-0 md:grid-cols-3">
        {trustIndicators.map(({ label, description, icon: Icon }, index) => (
          <article
            key={label}
            className={`flex max-md:grow max-md:shrink max-md:basis-[min(380px,100%)] md:w-full items-center gap-4 py-4 md:py-8 px-4 lg:px-10 $  ${index === 1 && "md:relative before:left-0 [&::before,&::after]:hidden lg:[&::before,&::after]:block [&::before,&::after]:text-background/45 [&::before,&::after]:h-[80%] [&::before,&::after]:vertical-divider-line-pseudo after:right-0"}`}>
            <span
              aria-hidden="true"
              className="inline-block w-16 col-start-1 col-end-2 row-start-1">
              <Icon strokeWidth={1} />
            </span>
            <div className="uppercase text-balance">
              <p className="font-semibold">{label}</p>
              <p className="text-small font-light leading-tight">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
