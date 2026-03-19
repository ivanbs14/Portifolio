import { Cpu, MapPin, Wifi } from "lucide-react";

const STATUS_ITEMS = [
  { icon: Wifi, text: "Uplink: Active" },
  { icon: Cpu, text: "CPU: 12%" },
  { icon: MapPin, text: "Lat: 24ms" },
] as const;

export function StatusBar() {
  return (
    <div className="flex gap-4 overflow-x-auto border-b border-primary/10 px-4 py-2">
      {STATUS_ITEMS.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex flex-none items-center gap-1 text-[10px] tracking-tighter text-primary/60 uppercase"
        >
          <Icon className="h-3 w-3" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
