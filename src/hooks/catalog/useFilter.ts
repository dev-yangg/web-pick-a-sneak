import { useState } from "react";

export default function useFilter() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const openFilter = () => setIsFilterActive(true);
  const closeFilter = () => setIsFilterActive(false);

  return { isFilterActive, openFilter, closeFilter };
}
