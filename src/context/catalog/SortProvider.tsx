import { useMemo, useState, type ReactNode } from "react";
import { SortContext } from "./sort.context";

export default function SortContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // NOTE: name of this is changed from something like isSortCollapsed -> sortState to remove confusion (more ideal if it's the same name as the object below within useMemo to utilize shorthand)
  // written more explicitly than other context files, kept as a reference for how useState values flow into useMemo. Others use shorthand directly.
  const [sortState, setSortState] = useState(true);

  const value = useMemo(
    () => ({
      isSortCollapsed: sortState,
      setIsSortCollapsed: setSortState,
    }),
    [sortState],
  );
  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
}
