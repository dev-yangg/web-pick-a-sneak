import { createContext, useContext } from "react";

interface SortContextValue {
  isSortCollapsed: boolean;
  setIsSortCollapsed: (value: boolean) => void;
}

export const SortContext = createContext<SortContextValue | undefined>(
  undefined,
);

export const useSortProduct = () => {
  const ctx = useContext(SortContext);

  if (ctx === undefined)
    throw new Error(
      "useSortProduct should only be used within SortContext Provider",
    );

  return ctx;
};
