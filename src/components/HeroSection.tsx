import React from 'react';
import { ArrowRight, Code2, Box, Palette, Terminal, Zap, Sparkles, Star, ShieldCheck, Flame, Compass } from 'lucide-react';
import profileImg from '../assets/profile.png';

interface HeroProps {
  onExploreGallery: () => void;
  onContactMe: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreGallery, onContactMe }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4">
      {/* Marquee Ticker */}
      <div className="bg-[#0D0D0D] text-[#FFE600] border-y-4 border-black py-2 overflow-hidden mb-12 transform -rotate-1 shadow-brutal">
        <div className="whitespace-nowrap animate-marquee flex gap-8 font-mono font-black text-sm uppercase tracking-widest">
          <span>★ WEB DEVELOPMENT ★ UI/UX DESIGN ★ 3D ARTIST ★ SMK TELKOM MEDAN ★ REACT & TS ★ BLENDER ★ ZBRUSH ★ ANUGRAH JAYANTA ★</span>
          <span>★ WEB DEVELOPMENT ★ UI/UX DESIGN ★ 3D ARTIST ★ SMK TELKOM MEDAN ★ REACT & TS ★ BLENDER ★ ZBRUSH ★ ANUGRAH JAYANTA ★</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Brutalist Typography Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FF2E93] text-white border-3 border-black px-4 py-1.5 font-mono text-xs font-black tracking-widest uppercase shadow-brutal-sm">
            <Zap className="h-4 w-4 fill-white text-white" /> PORTFOLIO & KREATIVITAS 2026
          </div>

          <h1 className="font-mono text-5xl md:text-7xl font-black uppercase tracking-tight text-black leading-none">
            Membangun <span className="bg-[#FFE600] px-3 py-0.5 border-3 border-black shadow-brutal inline-block my-1">Solusi Digital</span> Lewat Desain & Kode.
          </h1>

          <p className="font-sans text-lg md:text-xl font-bold text-[#0D0D0D] bg-white border-3 border-black p-5 shadow-brutal leading-relaxed">
            Halo! Saya <strong className="underline decoration-[#FF5722] decoration-4">Anugrah Jayanta Bukit</strong>, siswa SMK Telkom Medan & Pengembang Web/3D Artist. Berfokus menciptakan pengalaman digital yang bersih, responsif, dan mencolok.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreGallery}
              className="bg-[#00E5FF] text-black border-3 border-black font-mono font-black text-base uppercase px-8 py-4 shadow-brutal hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg transition-all flex items-center gap-3"
            >
              Lihat Galeri Karya <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={onContactMe}
              className="bg-[#FFE600] text-black border-3 border-black font-mono font-black text-base uppercase px-8 py-4 shadow-brutal hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg transition-all"
            >
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Enhanced Neo-Brutalist Profile Display Column */}
        <div className="lg:col-span-5">
          <div className="bg-[#FF5722] border-4 border-black p-6 shadow-brutal-xl relative transform rotate-1 hover:rotate-0 transition-transform">
            {/* Header Tag */}
            <div className="bg-white border-3 border-black p-3 shadow-brutal mb-4 flex items-center justify-between">
              <span className="font-mono font-black text-xs uppercase bg-[#FFE600] border-2 border-black px-3 py-1 shadow-brutal-sm">
                SYS_ADMIN // JAYY227
              </span>
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 bg-[#FF2E93] border border-black rounded-full inline-block"></span>
                <span className="h-3 w-3 bg-[#FFE600] border border-black rounded-full inline-block"></span>
                <span className="h-3 w-3 bg-[#00E5FF] border border-black rounded-full inline-block"></span>
              </div>
            </div>

            {/* Main Photo Container with Dynamic Neo-Brutalist Background & Elements */}
            <div className="relative border-4 border-black overflow-hidden aspect-[4/5] shadow-brutal bg-[#FFFBEA]">
              
              {/* Layer 1: Vibrant Neo-Brutalist Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE600] via-[#FF2E93] to-[#00E5FF] opacity-90"></div>
              
              {/* Layer 2: Halftone Dot Grid & Diagonal Stripe Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#0D0D0D_2px,transparent_2px)] [background-size:14px_14px] opacity-35"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFE600] border-b-4 border-l-4 border-black transform rotate-45 translate-x-24 -translate-y-24 opacity-80"></div>
              
              {/* Layer 3: Sunburst Laser Rays / Geometric Accents behind Silhouette */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-black bg-[#FFE600]/80 rounded-full animate-spin-slow opacity-35 blur-none border-dashed"></div>
              <div className="absolute bottom-10 left-4 w-36 h-36 bg-[#00E5FF] border-3 border-black transform -rotate-12 opacity-40"></div>

              {/* Layer 4: Corner Crosshairs (+) */}
              <span className="absolute top-2 left-2 font-mono font-black text-lg text-black z-10 select-none">+</span>
              <span className="absolute top-2 right-2 font-mono font-black text-lg text-black z-10 select-none">+</span>
              <span className="absolute bottom-2 left-2 font-mono font-black text-lg text-black z-10 select-none">+</span>
              <span className="absolute bottom-2 right-2 font-mono font-black text-lg text-black z-10 select-none">+</span>

              {/* Layer 5: User Photo Subject Cutout */}
              <img
                src={profileImg}
                alt="Anugrah Jayanta Bukit Profile"
                className="relative z-10 w-full h-full object-contain object-bottom filter contrast-105 saturate-110 drop-shadow-[6px_6px_0px_rgba(13,13,13,1)] hover:scale-105 transition-transform duration-300"
              />

              {/* Layer 6: Floating Neo-Brutalist Stickers & Badges Over Photo */}
              
              {/* Sticker 1: Top Left Floating Tag */}
              <div className="absolute top-4 left-4 z-20 bg-[#FF2E93] text-white border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 shadow-brutal-sm transform -rotate-6 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#FFE600]" />
                <span>CREATIVE DEV</span>
              </div>

              {/* Sticker 2: Top Right Tilted Badge */}
              <div className="absolute top-5 right-4 z-20 bg-[#00E5FF] text-black border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 shadow-brutal-sm transform rotate-6 flex items-center gap-1">
                <Box className="h-3.5 w-3.5 text-black" />
                <span>3D ARTIST</span>
              </div>

              {/* Sticker 3: Floating Middle Right Tech Stamp */}
              <div className="absolute top-1/3 right-3 z-20 bg-[#FFE600] text-black border-2 border-black font-mono font-black text-[10px] uppercase px-2.5 py-1 shadow-brutal-sm transform rotate-12 flex items-center gap-1">
                <Flame className="h-3.5 w-3.5 text-[#FF5722]" />
                <span>PRO CREATOR</span>
              </div>

              {/* Sticker 4: Bottom Left SMK Telkom Pill */}
              <div className="absolute bottom-3 left-3 z-20 bg-[#FFE600] border-3 border-black font-mono text-xs font-black px-3 py-1 uppercase text-black shadow-brutal-sm flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#FF5722]" />
                <span>SMK TELKOM MEDAN</span>
              </div>

              {/* Sticker 5: Bottom Right Barcode Accent */}
              <div className="absolute bottom-3 right-3 z-20 bg-black text-[#FFE600] border-2 border-black font-mono text-[9px] font-black px-2 py-1 uppercase tracking-widest shadow-brutal-sm flex flex-col items-center">
                <span>|||| ||||| |||</span>
                <span className="text-[8px] text-white">ID: 2026_AGY</span>
              </div>
            </div>

            {/* Bottom Status Info */}
            <div className="mt-4 space-y-2 font-mono text-xs font-bold text-white bg-black border-3 border-black p-3 shadow-brutal">
              <div className="flex justify-between border-b border-gray-700 pb-1">
                <span>STATUS:</span>
                <span className="text-[#A3E635]">● ACTIVE DEVELOPER</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-1">
                <span>FOCUS:</span>
                <span className="text-[#FFE600]">FRONTEND & 3D ART</span>
              </div>
              <div className="flex justify-between">
                <span>GITHUB:</span>
                <span className="text-[#00E5FF]">github.com/Jayy227</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Skill Pillar Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="bg-[#FFE600] border-4 border-black p-6 shadow-brutal hover:-translate-y-1 transition-transform">
          <div className="bg-black text-white p-3 w-fit border-2 border-black mb-4 shadow-brutal-sm">
            <Code2 className="h-8 w-8 text-[#FFE600]" />
          </div>
          <h3 className="font-mono text-2xl font-black uppercase text-black mb-2">Web Development</h3>
          <p className="font-sans font-bold text-sm text-black leading-relaxed">
            Merancang dan merakit aplikasi web modern yang cepat, aman, dan siap dipakai di berbagai perangkat dengan Tailwind & TypeScript.
          </p>
        </div>

        <div className="bg-[#FF2E93] border-4 border-black p-6 shadow-brutal hover:-translate-y-1 transition-transform text-white">
          <div className="bg-black text-white p-3 w-fit border-2 border-black mb-4 shadow-brutal-sm">
            <Palette className="h-8 w-8 text-[#FF2E93]" />
          </div>
          <h3 className="font-mono text-2xl font-black uppercase text-white mb-2">UI/UX Design</h3>
          <p className="font-sans font-bold text-sm text-white leading-relaxed">
            Membuat antarmuka berani, bersih, dan memikat pengguna dengan penekanan pada kenyamanan sistem navigasi.
          </p>
        </div>

        <div className="bg-[#00E5FF] border-4 border-black p-6 shadow-brutal hover:-translate-y-1 transition-transform">
          <div className="bg-black text-white p-3 w-fit border-2 border-black mb-4 shadow-brutal-sm">
            <Box className="h-8 w-8 text-[#00E5FF]" />
          </div>
          <h3 className="font-mono text-2xl font-black uppercase text-black mb-2">3D Artist</h3>
          <p className="font-sans font-bold text-sm text-black leading-relaxed">
            Pemodelan aset 2D menjadi bentuk 3D realistis & gaya stylized menggunakan software Blender & ZBrush.
          </p>
        </div>
      </div>
    </section>
  );
};
