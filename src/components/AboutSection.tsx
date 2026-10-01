import React from 'react';
import { GraduationCap, Award, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skills = [
    { name: 'HTML5', bg: 'bg-[#FF5722]', text: 'text-white' },
    { name: 'CSS3 / Tailwind', bg: 'bg-[#FFE600]', text: 'text-black' },
    { name: 'JavaScript', bg: 'bg-[#00E5FF]', text: 'text-black' },
    { name: 'TypeScript', bg: 'bg-[#9D00FF]', text: 'text-white' },
    { name: 'React.js', bg: 'bg-[#FF2E93]', text: 'text-white' },
    { name: 'Blender 3D', bg: 'bg-[#A3E635]', text: 'text-black' },
    { name: 'ZBrush', bg: 'bg-[#0D0D0D]', text: 'text-white' },
    { name: 'Git & GitHub', bg: 'bg-white', text: 'text-black' },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      {/* Title Header */}
      <div className="bg-[#00E5FF] border-4 border-black p-6 shadow-brutal flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="font-mono text-xs font-black uppercase bg-black text-[#00E5FF] px-3 py-1 mb-2 inline-block">
            // PROFILE_OVERVIEW
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-black uppercase text-black">
            TENTANG SAYA
          </h2>
        </div>
        <p className="font-mono text-sm font-bold text-black max-w-md bg-white border-2 border-black p-3">
          Student at SMK Telkom Medan | Web Developer Enthusiast & 3D Modeling Explorer.
        </p>
      </div>

      {/* Main Bio & Education Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bio Card */}
        <div className="lg:col-span-7 bg-white border-4 border-black p-8 shadow-brutal space-y-6">
          <div className="flex items-center gap-3 bg-[#FFE600] border-3 border-black p-4 shadow-brutal-sm">
            <Sparkles className="h-8 w-8 text-black shrink-0" />
            <div>
              <h3 className="font-mono text-2xl font-black uppercase">Halo! Saya Anugrah Jayanta Bukit</h3>
              <p className="font-mono text-xs font-bold text-[#FF5722]">Dipublikasikan pada 14 September 2026</p>
            </div>
          </div>

          <p className="font-sans text-base md:text-lg font-bold text-black leading-relaxed">
            Saya adalah seorang siswa di <strong className="bg-[#FFE600] px-1 border border-black">SMK Telkom Medan</strong> yang memiliki ketertarikan tinggi di bidang pemrograman dan eksplorasi teknologi digital. Saya senang mempelajari hal-hal baru seputar pengembangan web, mulai dari merancang tampilan user interface (UI) hingga mengeksekusi kode program di bagian front-end maupun back-end.
          </p>

          <p className="font-sans text-base font-bold text-black leading-relaxed bg-[#FFFBEA] border-2 border-black p-4">
            Saat ini saya aktif mengembangkan proyek-proyek mini berbasis web dan eksperimen coding di profil GitHub saya (<strong className="text-[#FF2E93]">Jayy227</strong>). Fokus utama saya adalah membangun aplikasi web yang responsif, rapi secara struktur, dan nyaman digunakan oleh pengguna.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-[#FFFBEA] border-2 border-black p-3">
              <CheckCircle2 className="h-6 w-6 text-[#FF5722] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono font-black text-sm uppercase">Clean Code</h4>
                <p className="font-sans text-xs font-bold text-gray-700">Struktur kode modular dan teruji</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FFFBEA] border-2 border-black p-3">
              <CheckCircle2 className="h-6 w-6 text-[#00E5FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono font-black text-sm uppercase">Responsif UI</h4>
                <p className="font-sans text-xs font-bold text-gray-700">Tampilan optimal di perangkat mobile & desktop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info: Education & Tech Tags */}
        <div className="lg:col-span-5 space-y-8">
          {/* Education Box */}
          <div className="bg-[#FF5722] border-4 border-black p-6 shadow-brutal text-white">
            <div className="flex items-center gap-3 bg-black text-[#FFE600] border-2 border-black p-3 mb-4 shadow-brutal-sm">
              <GraduationCap className="h-7 w-7" />
              <h3 className="font-mono text-xl font-black uppercase">PENDIDIKAN</h3>
            </div>
            
            <div className="bg-white text-black border-3 border-black p-4 shadow-brutal-sm space-y-2">
              <h4 className="font-mono text-lg font-black uppercase text-[#FF5722]">SMK Telkom Medan</h4>
              <p className="font-mono text-xs font-bold bg-[#FFE600] border border-black px-2 py-1 w-fit">
                Siswa Aktif — Rekayasa Perangkat Lunak / IT
              </p>
              <p className="font-sans text-xs font-bold text-gray-800 pt-1">
                Fokus mendalam pada dasar pemutakhiran perangkat lunak, algoritma, basis data, serta desain antarmuka digital.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-[#FFE600] border-4 border-black p-6 shadow-brutal">
            <div className="flex items-center gap-3 bg-black text-white border-2 border-black p-3 mb-4 shadow-brutal-sm">
              <Cpu className="h-7 w-7 text-[#00E5FF]" />
              <h3 className="font-mono text-xl font-black uppercase">KEAHLIAN & TEKNOLOGI</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className={`font-mono text-sm font-black uppercase px-3 py-1.5 border-2 border-black shadow-brutal-sm ${skill.bg} ${skill.text} hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
