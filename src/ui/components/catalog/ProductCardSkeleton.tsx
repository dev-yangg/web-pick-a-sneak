export default function ProductCardSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="flex flex-col aspect-square gap-2">
      <div
        aria-hidden="true"
        className="rounded-sm w-full aspect-square grow skeleton"></div>
      <p
        aria-hidden="true"
        className="rounded-sm h-(--text-subtitle) w-2/3 skeleton"></p>
      <p
        aria-hidden="true"
        className="rounded-sm h-(--text-small) w-1/3 skeleton"></p>
    </div>
  );
}
