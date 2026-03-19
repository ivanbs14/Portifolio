import {
  BackgroundEffects,
  BottomHudNav,
  ExperienceTimeline,
  HeroSection,
  HudHeader,
  LanguageProvider,
  ProjectGrid,
  StatusBar,
  TechMatrix,
} from "@/components/portfolio";

export default function Page() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-secondary text-foreground">
        <BackgroundEffects />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col border-x border-primary/10 bg-background/70 pb-24 backdrop-blur-sm lg:max-w-6xl lg:pb-8">
          <HudHeader />
          <StatusBar />
          <HeroSection />
          {/* <FeaturedMission /> */}
          <TechMatrix />
          <ExperienceTimeline />
          <ProjectGrid />
        </div>
        <BottomHudNav />
      </main>
    </LanguageProvider>
  );
}
