import { createContext, useContext } from "react";

interface FilterContextValue {
  isFilterCollapsed: boolean;
  setIsFilterCollapsed: (value: boolean) => void;
}

export const FilterContext = createContext<FilterContextValue | undefined>(
  undefined,
);

export const useFilter = () => {
  const ctx = useContext(FilterContext);

  if (ctx === undefined)
    throw new Error(
      "useFilter should only be used within the FilterContext Provider",
    );

  return ctx;
};
