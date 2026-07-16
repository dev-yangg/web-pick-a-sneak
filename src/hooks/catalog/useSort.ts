import { useEffect, useState } from "react";

export default function useSort() {
  const [isSortActive, setIsSortActive] = useState(false);

  const openSort = () => setIsSortActive(true);
  const closeSort = () => setIsSortActive(false);

  useEffect(() => {
    console.log(`Sort State: ${isSortActive}`);
  }, [isSortActive]);

  return { isSortActive, setIsSortActive, openSort, closeSort };
}
