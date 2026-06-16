"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  sources: string[];
  poster?: string;
};

type Slot = { src: string; visible: boolean };

// Double-buffered hard cut: two stacked videos. The active one is visible and
// playing; the standby is preloaded and paused on its first frame. When a clip
// ends we instantly swap which is visible (no transition) so there is no reload
// flicker, then re-arm the hidden slot with the next clip.
export default function VideoReel({ sources, poster }: Props) {
  const n = sources.length;
  const [slots, setSlots] = useState<Slot[]>([
    { src: sources[0], visible: true },
    { src: sources[1 % n], visible: false },
  ]);
  const activeRef = useRef(0); // which slot (0/1) is on screen
  const clipRef = useRef(0); // index into sources currently playing
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const refs = [refA, refB];

  useEffect(() => {
    refs[0].current?.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnded = () => {
    const cur = activeRef.current;
    if (n < 2) {
      const v = refs[cur].current;
      if (v) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
      return;
    }
    const nxt = cur === 0 ? 1 : 0;
    clipRef.current = (clipRef.current + 1) % n;
    activeRef.current = nxt;

    // Instant cut: show the preloaded standby, hide the old one.
    setSlots((s) => {
      const c = [...s];
      c[cur] = { ...c[cur], visible: false };
      c[nxt] = { ...c[nxt], visible: true };
      return c;
    });

    const v = refs[nxt].current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }

    // Re-arm the now-hidden slot with the next-up clip so it is ready.
    const parkClip = (clipRef.current + 1) % n;
    setSlots((s) => {
      const c = [...s];
      c[cur] = { src: sources[parkClip], visible: false };
      return c;
    });
    const hidden = refs[cur].current;
    if (hidden) hidden.load();
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slots.map((slot, i) => (
        <video
          key={i}
          ref={refs[i]}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: slot.visible ? 1 : 0 }}
          muted
          playsInline
          preload="auto"
          poster={poster}
          onEnded={handleEnded}
        >
          <source src={slot.src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
