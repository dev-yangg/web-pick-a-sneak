import FilterContextProvider from "./FilterProvider";
import SortContextProvider from "./SortProvider";

export default function CatalogProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FilterContextProvider>
      <SortContextProvider>{children}</SortContextProvider>
    </FilterContextProvider>
  );
}
