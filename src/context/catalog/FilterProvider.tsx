import { type ReactNode, useState, useMemo } from "react";
import { FilterContext } from "./filter.context";

export default function FilterContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true);

  const value = useMemo(
    () => ({
      isFilterCollapsed,
      setIsFilterCollapsed,
    }),
    [isFilterCollapsed],
  );
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
