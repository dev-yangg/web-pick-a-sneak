import { useEffect, useRef, useState } from "react";
import PickASneak from "./svgs/PickASneak";
import SneakAPick from "./svgs/SneakAPick";
import PeekASneak from "./svgs/PeekASneak";
import Logo from "./svgs/Logo";

function BannerGroup() {
  return (
    <>
      <div className="text-logo-scroller shrink-0">
        <PickASneak />
      </div>
      <div className="logo-scroller shrink-0">
        <Logo />
      </div>
      <div className="text-logo-scroller shrink-0">
        <SneakAPick />
      </div>
      <div className="logo-scroller shrink-0">
        <Logo />
      </div>
      <div className="text-logo-scroller shrink-0">
        <PeekASneak />
      </div>
      <div className="logo-scroller shrink-0">
        <Logo />
      </div>
    </>
  );
}

export default function ScrollingBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    const recalculate = () => {
      const containerWidth = container.offsetWidth;
      const singleGroupWidth = group.scrollWidth;
      if (singleGroupWidth === 0) return;

      setGroupWidth(singleGroupWidth);
      // Enough copies to cover the viewport twice over, plus a safety copy
      const needed = Math.ceil((containerWidth * 2) / singleGroupWidth) + 1;
      setRepeatCount(needed);
    };

    recalculate();

    const observer = new ResizeObserver(recalculate);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full overflow-hidden">
      <div
        className="flex items-center w-max py-2 gap-4 border-2 banner-scroll "
        style={{ "--group-width": `${groupWidth}px` } as React.CSSProperties}>
        {/* Hidden reference copy, used only to measure one group's real width */}
        <div ref={groupRef} className="flex items-center gap-4 shrink-0">
          <BannerGroup />
        </div>
        {Array.from({ length: repeatCount - 1 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <BannerGroup />
          </div>
        ))}
      </div>
    </div>
  );
}
