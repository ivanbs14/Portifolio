import {
  BackgroundEffects,
  BottomHudNav,
  ExperienceTimeline,
  FeaturedMission,
  HeroSection,
  HudHeader,
  MetricsChips,
  ProfileBio,
  ProjectGrid,
  StatusBar,
  TechMatrix,
} from "@/components/portfolio";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-secondary text-foreground">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col border-x border-primary/10 bg-background/70 pb-24 backdrop-blur-sm">
        <HudHeader />
        <StatusBar />
        <HeroSection />
        <MetricsChips />
        <FeaturedMission />
        <ProjectGrid />
        <TechMatrix />
        <ExperienceTimeline />
        <ProfileBio />
      </div>
      <BottomHudNav />
    </main>
  );
}
