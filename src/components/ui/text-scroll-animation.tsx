"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block text-[#FF5722] drop-shadow-[3px_3px_0px_#0D0D0D]", isSpace && "w-6")}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      alt="Tech Icon"
      className="h-16 w-16 shrink-0 object-contain will-change-transform bg-white border-3 border-black p-2 shadow-[4px_4px_0px_0px_#0D0D0D] rounded-none"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="Tech Icon Rotated"
      className="h-16 w-16 shrink-0 object-contain will-change-transform bg-[#FFE600] border-3 border-black p-2 shadow-[4px_4px_0px_0px_#0D0D0D] rounded-none"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
};

const Skiper31 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "see more from ";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const macIcon = [
    "https://cdn.21st.dev/assets/mirror/1d/1d364b72c9eaf1fe37d17ca88cd8fb541308dc0f3b09e2ab3b824f380b3493d5.svg",
    "https://cdn.21st.dev/assets/mirror/2f/2f86fca501dfed321a62f28743f29d9dd738dac91668eac5260ab746d1ef8840.svg",
    "https://cdn.21st.dev/assets/mirror/c6/c6c80c9ba890e199e94d35340fb4cf2d5790f339d9846800d68283e3e58e6031.svg",
    "https://cdn.21st.dev/assets/mirror/3b/3bf8cceead820aec50d4ee825a3fd02c5a1cd6665cc9cf4cbf3d9c8861a204bb.svg",
    "https://cdn.21st.dev/assets/mirror/66/6698757ee85997e8167b2eacaff8395d6987954185488f2e90b88ef387fec6c7.svg",
    "https://cdn.21st.dev/assets/mirror/b1/b17d2a2b592a06252efef522d5205f0c7a958f748d40df1011ed081417e42f85.svg",
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);

  return (
    <ReactLenis root>
      <section className="w-full bg-[#FFFBEA] border-y-4 border-black relative my-16">
        {/* Banner Brutalist Header */}
        <div className="absolute top-10 left-1/2 z-20 grid -translate-x-1/2 content-start justify-items-center gap-2 text-center text-black">
          <span className="bg-[#FFE600] border-2 border-black font-mono font-bold text-xs uppercase px-4 py-1 tracking-widest shadow-[3px_3px_0px_0px_#0D0D0D]">
            ↓ SCROLL DOWN TO UNLOCK EXPERIENCE ↓
          </span>
        </div>

        {/* Block 1 — Kinetic Text Scroll */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[180vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#FFFBEA] p-[2vw]"
        >
          <div
            className="font-mono w-full max-w-5xl text-center text-6xl md:text-8xl font-black uppercase tracking-tighter text-black"
            style={{ perspective: "500px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
            <span className="text-[#0D0D0D] underline decoration-[#FFE600] decoration-wavy">JAYY</span>
          </div>
        </div>

        {/* Block 2 — Tech Icons Convergence */}
        <div
          ref={targetRef2}
          className="relative -mt-[80vh] box-border flex h-[180vh] flex-col items-center justify-center gap-[3vw] overflow-hidden bg-[#0D0D0D] p-[2vw] text-white border-t-4 border-black"
        >
          <div className="font-mono flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold tracking-tight text-white bg-[#FF5722] border-3 border-black px-6 py-3 shadow-[6px_6px_0px_0px_#FFFBEA]">
            <Bracket className="h-10 text-white" />
            <span className="font-mono uppercase font-black">Integrate with my fav tech stack</span>
            <Bracket className="h-10 scale-x-[-1] text-white" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl pt-4">
            {macIcon.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Block 3 — Rotated Tech Stack Convergence */}
        <div
          ref={targetRef3}
          className="relative -mt-[75vh] box-border flex h-[180vh] flex-col items-center justify-center gap-[3vw] overflow-hidden bg-[#00E5FF] p-[2vw] border-t-4 border-black"
        >
          <div className="font-mono flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold tracking-tight text-black bg-[#FFE600] border-3 border-black px-6 py-3 shadow-[6px_6px_0px_0px_#0D0D0D]">
            <Bracket className="h-10 text-black" />
            <span className="font-mono uppercase font-black">Interactive 3D & Web Toolset</span>
            <Bracket className="h-10 scale-x-[-1] text-black" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl pt-4" style={{ perspective: "500px" }}>
            {macIcon.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};
