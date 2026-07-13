import { Filter, SortDesc } from "lucide-react";
import { useFilter } from "../../../context/catalog/filter.context";
import { useSortProduct } from "../../../context/catalog/sort.context";
import SortModal from "./SortModal";

export default function ProductCatalog() {
  const { isFilterCollapsed, setIsFilterCollapsed } = useFilter();
  const { isSortCollapsed, setIsSortCollapsed } = useSortProduct();
  return (
    <section
      aria-label="Product catalog"
      className="grow flex flex-col gap-4 relative before:absolute before:inset-y-0 before:left-0 before:bg-foreground before:w-px before:z-10 p-4">
      <header className="uppercase flex justify-between">
        <p aria-label="Total products" className="text-small">
          10 Products
        </p>
        <div
          role="group"
          aria-label="Catalog header actions"
          className="flex gap-x-4">
          <button
            onClick={() => setIsFilterCollapsed(false)}
            aria-expanded={!isFilterCollapsed}
            className="inline-flex md:hidden uppercase text-small  items-stretch gap-px">
            Filters
            <span className="w-5 h-full grid place-items-center">
              <Filter />
            </span>
          </button>
          <button
            onClick={() => setIsSortCollapsed(false)}
            aria-expanded={!isSortCollapsed}
            aria-haspopup="dialog"
            className="uppercase text-small inline-flex items-stretch gap-px">
            Sort
            <span className="w-5 h-full grid place-items-center">
              <SortDesc />
            </span>
          </button>
        </div>
      </header>
      <ul className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="block aspect-square outline"></li>
        ))}
      </ul>
      <SortModal />
    </section>
  );
}
