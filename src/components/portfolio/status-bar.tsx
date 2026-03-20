"use client";

import { useEffect, useState } from "react";
import { Cpu, MapPin, Wifi } from "lucide-react";

const randomDelta = (range: number) =>
  Math.floor(Math.random() * (range * 2 + 1)) - range;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const STATUS_UPDATE_INTERVAL_MS = 2200;

export function StatusBar() {
  const [cpu, setCpu] = useState(12);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const updateStatus = () => {
      setCpu((prev) => clamp(prev + randomDelta(4), 8, 28));
      setLatency((prev) => clamp(prev + randomDelta(5), 16, 46));
    };

    let intervalId: number | null = null;

    const stopInterval = () => {
      if (intervalId === null) {
        return;
      }

      window.clearInterval(intervalId);
      intervalId = null;
    };

    const startInterval = () => {
      if (intervalId !== null) {
        return;
      }

      intervalId = window.setInterval(updateStatus, STATUS_UPDATE_INTERVAL_MS);
    };

    updateStatus();
    startInterval();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
        return;
      }

      updateStatus();
      startInterval();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex gap-4 overflow-x-auto border-b border-primary/10 px-4 py-2">
      <div className="flex flex-none items-center gap-1 text-[10px] tracking-tighter uppercase">
        <Wifi className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
        <span className="text-black dark:text-primary/60">Uplink:</span>
        <span className="status-indicator text-emerald-700 dark:text-emerald-400 [text-shadow:0_0_10px_rgba(4,120,87,0.45)] dark:[text-shadow:0_0_10px_rgba(74,222,128,0.75)]">
          Active
        </span>
      </div>

      <div className="flex flex-none items-center gap-1 text-[10px] tracking-tighter uppercase">
        <Cpu className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
        <span className="text-black dark:text-primary/60">CPU:</span>
        <span className="tabular-nums text-emerald-700 dark:text-emerald-400 transition-colors duration-500 [text-shadow:0_0_8px_rgba(4,120,87,0.38)] dark:[text-shadow:0_0_8px_rgba(74,222,128,0.65)]">
          {cpu}%
        </span>
      </div>

      <div className="flex flex-none items-center gap-1 text-[10px] tracking-tighter uppercase">
        <MapPin className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
        <span className="text-black dark:text-primary/60">Lat:</span>
        <span className="tabular-nums text-emerald-700 dark:text-emerald-400 transition-colors duration-500 [text-shadow:0_0_8px_rgba(4,120,87,0.38)] dark:[text-shadow:0_0_8px_rgba(74,222,128,0.65)]">
          {latency}ms
        </span>
      </div>
    </div>
  );
}
