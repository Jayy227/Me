import React, { useState } from 'react';
import { ExternalLink, Filter, Sparkles, Layers } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'web' | 'ui' | 'photo';
  categoryLabel: string;
  description: string;
  image: string;
  color: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "web",
      categoryLabel: "Web Design",
      description: "Desain toko online modern dengan tata letak minimalis, responsif, dan performa super cepat.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#FFE600]",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "ui",
      categoryLabel: "UI/UX",
      description: "Prototip aplikasi keuangan kontemporer dengan fokus pada kemudahan navigasi pengguna.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#FF2E93]",
    },
    {
      id: 3,
      title: "Pemandangan Pegunungan",
      category: "photo",
      categoryLabel: "Fotografi & 3D",
      description: "Dokumentasi foto ekspedisi perjalanan alam terbuka & eksplorasi pencahayaan lanskap.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#00E5FF]",
    },
    {
      id: 4,
      title: "Personal Blog Theme",
      category: "web",
      categoryLabel: "Web Design",
      description: "Tema blog kustom dengan pendekatan kontras tinggi, typography bold, dan mode brutalist.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#FF5722]",
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "ui",
      categoryLabel: "UI/UX",
      description: "Tampilan analitik data komprehensif dengan chart interaktif dan sistem UI berorientasi gelap.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#A3E635]",
    },
    {
      id: 6,
      title: "3D Character Asset",
      category: "photo",
      categoryLabel: "Fotografi & 3D",
      description: "Pemodelan 3D karakter realistis menggunakan software Blender & ZBrush dengan material PBR.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#9D00FF]",
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-10">
      {/* Gallery Header */}
      <div className="bg-[#FF2E93] border-4 border-black p-6 shadow-brutal text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="font-mono text-xs font-black uppercase bg-black text-[#FFE600] px-3 py-1 mb-2 inline-block">
            // SHOWCASE_GALLERY
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-black uppercase">
            GALERI KARYA & PROYEK
          </h2>
        </div>
        <p className="font-mono text-sm font-bold text-black bg-white border-2 border-black p-3">
          Kumpulan hasil karya desain, pemrograman web, dan aset 3D.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 bg-white border-4 border-black p-4 shadow-brutal">
        <div className="flex items-center gap-2 font-mono text-xs font-black uppercase mr-2 text-black">
          <Filter className="h-4 w-4 text-[#FF5722]" /> FILTER:
        </div>
        
        {[
          { id: 'all', label: 'SEMUA KARYA', color: 'bg-[#FFE600]' },
          { id: 'web', label: 'WEB DESIGN', color: 'bg-[#FF5722]' },
          { id: 'ui', label: 'UI / UX', color: 'bg-[#00E5FF]' },
          { id: 'photo', label: 'FOTOGRAFI & 3D', color: 'bg-[#A3E635]' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`font-mono text-xs font-black uppercase px-4 py-2 border-2 border-black transition-all ${
              activeFilter === btn.id
                ? `${btn.color} text-black shadow-brutal-sm translate-x-[-2px] translate-y-[-2px]`
                : 'bg-[#FFFBEA] text-black hover:bg-gray-100'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="brutal-card flex flex-col justify-between overflow-hidden group"
          >
            <div>
              {/* Image Container with Neo-Brutalist Frame */}
              <div className="relative border-b-4 border-black overflow-hidden aspect-[4/3] bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 filter saturate-125"
                />
                <span className={`absolute top-3 left-3 font-mono text-xs font-black uppercase px-3 py-1 border-2 border-black ${item.color} text-black shadow-brutal-sm`}>
                  {item.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-mono text-2xl font-black uppercase text-black">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-bold text-gray-800 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => alert(`Detail proyek "${item.title}" sedang disiapkan.`)}
                className="w-full bg-[#FFFBEA] hover:bg-[#FFE600] text-black border-2 border-black font-mono text-xs font-black uppercase py-2.5 px-4 shadow-brutal-sm flex items-center justify-center gap-2 transition-colors"
              >
                Lihat Detail <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
