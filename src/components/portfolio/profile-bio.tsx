import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PROFILE_BIO } from "@/data/portfolio";

export function ProfileBio() {
  return (
    <section className="px-6 pb-12" aria-labelledby="profile-bio-title">
      <div className="border-l-2 border-primary bg-primary/5 p-6">
        <div className="mb-4 flex items-start gap-4">
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

          <div className="min-w-0">
            <h2
              id="profile-bio-title"
              className="text-base font-bold leading-tight text-foreground sm:text-lg"
            >
              {PROFILE_BIO.name}
            </h2>
            <p className="text-[10px] font-mono tracking-tight text-primary uppercase">
              {PROFILE_BIO.location}
            </p>
          </div>
        </div>

        <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
          {PROFILE_BIO.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {PROFILE_BIO.principles.map((principle) => (
            <Badge
              key={principle}
              variant="outline"
              className="max-w-full justify-start rounded-sm border-primary/20 bg-transparent px-2 py-1 text-[10px] leading-snug text-primary/70 whitespace-normal break-words"
            >
              {`● ${principle}`}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
