import { FilterContextProvider } from "../context/catalog/FilterProvider";
import Aside from "../ui/components/catalog/Aside";
import ProductCatalog from "../ui/components/catalog/ProductCatalog";

export default function CatalogLayout() {
  return (
    <FilterContextProvider>
      <main className="flex">
        <Aside />
        <ProductCatalog />
      </main>
    </FilterContextProvider>
  );
}
