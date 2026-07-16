import { X } from "lucide-react";
import { sort } from "../../../content/catalog/shared.content";
import { useEffect } from "react";
import DimOverlay from "../DimOverlay";

interface Props {
  isSortActive: boolean;
  closeSort: () => void;
}

export default function SortModal({ isSortActive, closeSort }: Props) {
  useEffect(() => {
    const handleResize = () => closeSort();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [closeSort]);

  const collapseSortModal = () => closeSort();

  return (
    <>
      <DimOverlay isDimmed={isSortActive} onClick={collapseSortModal} />
      <section
        className={`z-modal fixed max-md:inset-x-0 md:inset-y-0 max-md:bottom-0 md:right-0 bg-background h-fit md:h-full w-full md:w-fluid-width-xxs before:absolute before:left-0 max-md:before:right-0 max-md:before:top-0 md:before:inset-y-0 max-md:before:h-px md:before:w-px before:bg-foreground max-md:pb-14 p-1 ${!isSortActive ? "max-md:translate-y-full md:translate-x-full" : "translate-0"} transition-transform duration-300 ease-cubic`}>
        <header className="flex items-center justify-between relative after:hidden md:after:block after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground-muted px-4 py-2">
          <p className="uppercase text-small">sort</p>
          <button
            aria-label="close sort"
            onClick={collapseSortModal}
            className="text-foreground-muted hover:text-foreground-secondary">
            <X size={16} />
          </button>
        </header>
        <fieldset className="flex flex-col px-4 md:p-4">
          {sort.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="radio" name="sort" id={option} value={option} />
              {option}
            </label>
          ))}
        </fieldset>
      </section>
    </>
  );
}
