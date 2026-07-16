import useFilter from "../hooks/catalog/useFilter";
import useSort from "../hooks/catalog/useSort";
import Aside from "../ui/components/catalog/Aside";
import ProductCatalog from "../ui/components/catalog/ProductCatalog";

export default function CatalogLayout() {
  const { isSortActive, openSort, closeSort } = useSort();
  const { isFilterActive, openFilter, closeFilter } = useFilter();
  return (
    <main className="flex">
      <Aside isFilterActive={isFilterActive} closeFilter={closeFilter} />
      <ProductCatalog
        isSortActive={isSortActive}
        openSort={openSort}
        closeSort={closeSort}
        isFilterActive={isFilterActive}
        openFilter={openFilter}
      />
    </main>
  );
}
