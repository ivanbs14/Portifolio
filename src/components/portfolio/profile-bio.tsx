import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PROFILE_BIO } from "@/data/portfolio";

export function ProfileBio() {
  return (
    <section className="px-6 pb-12" aria-labelledby="profile-bio-title">
      <div className="border-l-2 border-primary bg-primary/5 p-6">
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="size-16 rounded-none border border-primary/40">
            <AvatarImage
              src={PROFILE_BIO.avatar.src}
              alt={PROFILE_BIO.avatar.alt}
              className="grayscale"
            />
            <AvatarFallback className="rounded-none bg-primary/10 font-bold text-primary">
              M
            </AvatarFallback>
          </Avatar>

          <div>
            <h2 id="profile-bio-title" className="text-lg font-bold text-foreground">
              {PROFILE_BIO.name}
            </h2>
            <p className="text-[10px] font-mono tracking-tight text-primary uppercase">
              {PROFILE_BIO.location}
            </p>
          </div>
        </div>

        <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
          {PROFILE_BIO.summary}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {PROFILE_BIO.principles.map((principle) => (
            <Badge
              key={principle}
              variant="outline"
              className="justify-start rounded-sm border-primary/20 bg-transparent px-2 py-1 text-[9px] text-primary/60 uppercase"
            >
              {`● ${principle}`}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
