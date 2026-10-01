import React from 'react';
import { Heart, Sparkles, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white border-t-4 border-black py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#FFE600] text-black p-2 border-2 border-white">
            <Terminal className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-mono text-lg font-black uppercase text-[#FFE600]">
              ANUGRAH JAYANTA BUKIT
            </h4>
            <p className="font-mono text-xs text-gray-400">
              SMK Telkom Medan — Web Developer & 3D Artist
            </p>
          </div>
        </div>

        <div className="font-mono text-xs font-bold text-center md:text-right bg-white text-black border-2 border-black px-4 py-2 shadow-brutal-yellow">
          Copyright © 2026 with <Heart className="h-4 w-4 text-[#FF5722] inline fill-[#FF5722]" /> - Anugrah Jayanta Bukit
        </div>
      </div>
    </footer>
  );
};
