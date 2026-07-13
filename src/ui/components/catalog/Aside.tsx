import { X } from "lucide-react";
import AsideFilters from "./AsideFilters";
import { useFilter } from "../../../context/catalog/filter.context";

export default function Aside() {
  const { isFilterCollapsed, setIsFilterCollapsed } = useFilter();
  return (
    <aside
      id="filters-modal"
      className={`w-fluid-width-xxs border-r border-b-foreground fixed inset-0 bg-background max-md:z-modal ${isFilterCollapsed ? "-translate-x-full" : "translate-x-0"} transition-transform duration-300 ease-cubic md:translate-x-0 md:border-0 md:sticky md:top-0 md:self-start`}>
      <header className="flex items-baseline justify-between px-2 py-2.5">
        <small>Filters</small>
        <button className="hidden md:inline-block text-small text-foreground-muted hover:text-foreground-secondary">
          Reset All
        </button>
        <button
          aria-label="close filters"
          onClick={() => setIsFilterCollapsed(true)}
          className="inline-block md:hidden text-small text-foreground-muted hover:text-foreground-secondary">
          <X size={14} />
        </button>
      </header>
      <section aria-label="filter options" className="px-1 flex flex-col">
        <AsideFilters />
      </section>
      <div role="group" aria-label="filter actions">
        <button></button>
        <button></button>
      </div>
    </aside>
  );
}
