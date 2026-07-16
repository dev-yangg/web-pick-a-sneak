interface Props {
  isDimmed: boolean;
  onClick?: () => void;
}

export default function DimOverlay({ isDimmed, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      tabIndex={-1}
      className={`fixed inset-0 bg-black/45 backdrop-blur-sm z-overlay transition-opacity ${
        isDimmed
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}></div>
  );
}
