export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="scanline absolute inset-0" />
      <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] rounded-full bg-fuchsia-500/10 blur-[120px]" />
    </div>
  );
}
