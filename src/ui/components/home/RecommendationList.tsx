import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import ProductCardSkeleton from "../catalog/ProductCardSkeleton";

export default function RecommendationList() {
  return (
    <section>
      <div className="w-app-content-boundary mx-auto page-padded-section grid grid-cols-1 xs:grid-cols-2 gap-y-4">
        <h3 className="font-bold lg:text-title uppercase">just for you</h3>
        <Link
          to={"/products"}
          className="inline-flex items-center gap-2 uppercase justify-end max-xs:order-3">
          <span className="underline">View All</span>
          <span className="inline-block w-6">
            <ArrowRight />
          </span>
        </Link>
        <ul className="flex flex-nowrap overflow-scroll col-start-1 col-end-3 lg:grid lg:grid-cols-5 gap-4 scrollbar-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="min-w-50 md:min-w-70 lg:min-w-0">
              <ProductCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
