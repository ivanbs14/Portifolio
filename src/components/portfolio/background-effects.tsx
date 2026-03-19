export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="scanline absolute inset-0" />
      <div className="absolute top-[-8%] left-[-8%] h-[42%] w-[42%] rounded-full bg-primary/10 blur-[72px] md:h-[50%] md:w-[50%] md:blur-[120px]" />
      <div className="absolute right-[-8%] bottom-[-8%] h-[42%] w-[42%] rounded-full bg-fuchsia-500/10 blur-[72px] md:h-[50%] md:w-[50%] md:blur-[120px]" />
    </div>
  );
}
