import CatalogProviders from "../context/catalog/CatalogProviders";
import Aside from "../ui/components/catalog/Aside";
import ProductCatalog from "../ui/components/catalog/ProductCatalog";

export default function CatalogLayout() {
  return (
    <CatalogProviders>
      <main className="flex">
        <Aside />
        <ProductCatalog />
      </main>
    </CatalogProviders>
  );
}
