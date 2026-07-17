import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="">
      <div className="w-app-content-boundary mx-auto grid grid-cols-1 lg:grid-cols-4 isolate">
        <article className="lg:col-start-1 lg:col-end-3 row-start-1 leading-none flex flex-col gap-2 w-fluid-width-lg p-4 lg:px-8 self-center lg:mb-24">
          <h1 className="max-xs:text-title font-display leading-[.75] text-balance uppercase">
            Air Jordan 1 Low
          </h1>
          <Link
            to="/products"
            className="inline-flex font-bold uppercase mt-4 self-start group px-2">
            <span className="max-xs:text-small flex items-center gap-x-4">
              <span className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out will-change-transform">
                Shop Now
              </span>
              <span className="inline-block w-6 group-hover:translate-x-4 transition-transform duration-300 ease-in-out">
                <ArrowRight />
              </span>
            </span>
          </Link>
        </article>
        <figure className="relative  overflow-x-clip lg:col-start-2 lg:col-end-5 lg:row-start-1 pointer-events-none">
          <img
            src="/featured-sample.webp"
            alt="Featured sneaker"
            fetchPriority="high"
            decoding="async"
            width={1376}
            height={768}
            className="object-cover object-top scale-150 lg:scale-125"
          />
        </figure>
      </div>
    </section>
  );
}
