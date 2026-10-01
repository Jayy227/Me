import React from 'react';
import { Terminal, Sparkles, FolderGit2, Mail, User } from 'lucide-react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BrutalistNav: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Terminal, color: 'bg-[#FFE600]' },
    { id: 'about', label: 'ABOUT ME', icon: User, color: 'bg-[#FF5722]' },
    { id: 'gallery', label: 'GALLERY', icon: FolderGit2, color: 'bg-[#00E5FF]' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: 'bg-[#FF2E93]' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFBEA] border-b-4 border-black px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Brand Header */}
        <div 
          onClick={() => setActiveTab('home')}
          className="cursor-pointer flex items-center gap-3 bg-[#FFE600] border-3 border-black px-4 py-2 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
        >
          <div className="bg-black text-white p-1">
            <Sparkles className="h-6 w-6 text-[#FFE600]" />
          </div>
          <div>
            <h1 className="font-mono font-black text-xl leading-none text-black tracking-tighter">
              ANUGRAH JAYANTA
            </h1>
            <p className="font-mono text-xs font-bold text-[#FF5722] tracking-wider uppercase">
              // SMK TELKOM MEDAN
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`font-mono text-sm font-black uppercase px-4 py-2 border-3 border-black flex items-center gap-2 transition-all ${
                  isActive
                    ? `${item.color} text-black shadow-brutal translate-x-[-2px] translate-y-[-2px]`
                    : 'bg-white text-black hover:bg-[#FFFBEA] hover:shadow-brutal-sm'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
