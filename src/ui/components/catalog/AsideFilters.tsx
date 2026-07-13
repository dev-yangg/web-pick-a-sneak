import { commonFilters } from "../../../content/catalog/shared.content";

export default function AsideFilters() {
  return commonFilters.map((filter) => (
    <details
      key={filter.label}
      className="flex flex-col group relative after:absolute after:inset-x-0 after:bottom-0 after:bg-foreground-muted after:h-px open:py-2 transition-[padding] duration-150 ease-cubic">
      <summary className="cursor-pointer flex items-center justify-between py-1 px-2">
        <span className="text-foreground-muted group-hover:text-foreground group-open:text-foreground transition-colors duration-300 ease-in-out">
          {filter.label}
        </span>
        <span
          aria-hidden="true"
          className="block relative p-1 w-2.5 mx-2 aspect-square group-open:rotate-90 transition-transform duration-300 ease-in-out">
          <span className="block w-px h-full bg-foreground-secondary absolute inset-0 left-1/2 -translate-x-1/2"></span>
          <span className="block w-px h-full bg-foreground-secondary absolute inset-0 left-1/2 -translate-x-1/2 rotate-90 transition-opacity duration-300 ease-in-out group-open:opacity-0"></span>
        </span>
      </summary>
      <fieldset className="px-2 pt-1 pb-2">
        <legend className="sr-only">{filter.label}</legend>
        <div className="flex flex-wrap gap-1 items-start">
          {filter.options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-1 has-checked:bg-foreground has-checked:text-background px-1.5 py-px outline-1 outline-foreground-muted/75 rounded-sm">
              <input
                type="checkbox"
                name={filter.label}
                value={opt}
                className="hidden"
              />
              <small>{opt}</small>
            </label>
          ))}
        </div>
      </fieldset>
    </details>
  ));
}
