import { useEffect } from "react";

export default function useBreakpoint(breakpoint: string, onMatch: () => void) {
  useEffect(() => {
    const media = window.matchMedia(breakpoint);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) onMatch();
    };

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [breakpoint, onMatch]);
}
