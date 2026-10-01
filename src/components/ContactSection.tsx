import React, { useState } from 'react';
import { Send, Mail, MapPin, QrCode, Github, Instagram, Globe, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      {/* Contact Header */}
      <div className="bg-[#FFE600] border-4 border-black p-6 shadow-brutal flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="font-mono text-xs font-black uppercase bg-black text-[#FFE600] px-3 py-1 mb-2 inline-block">
            // GET_IN_TOUCH
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-black uppercase text-black">
            HUBUNGI SAYA
          </h2>
        </div>
        <p className="font-mono text-sm font-bold text-black bg-white border-2 border-black p-3">
          Mari terhubung untuk kolaborasi proyek web & 3D artist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border-4 border-black p-8 shadow-brutal space-y-6">
          <h3 className="font-mono text-2xl font-black uppercase text-black border-b-3 border-black pb-3">
            KIRIM PESAN LANGSUNG
          </h3>

          {submitted ? (
            <div className="bg-[#A3E635] border-3 border-black p-6 text-black space-y-3 shadow-brutal">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-black" />
                <h4 className="font-mono text-xl font-black uppercase">Pesan Terkirim!</h4>
              </div>
              <p className="font-sans font-bold text-sm">
                Terima kasih, <strong>{formData.name}</strong>! Pesan Anda telah diterima. Saya akan merespon secepat mungkin.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                className="bg-black text-white font-mono text-xs font-black uppercase px-4 py-2 border-2 border-black shadow-brutal-sm"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs font-black uppercase mb-1 text-black">
                  NAMA LENGKAP *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full font-mono text-sm p-3 border-3 border-black bg-[#FFFBEA] focus:outline-none focus:bg-white focus:shadow-brutal transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-black uppercase mb-1 text-black">
                  ALAMAT EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full font-mono text-sm p-3 border-3 border-black bg-[#FFFBEA] focus:outline-none focus:bg-white focus:shadow-brutal transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-black uppercase mb-1 text-black">
                  PESAN ATAU PERTANYAAN *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan detail ide atau pertanyaan proyek Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full font-mono text-sm p-3 border-3 border-black bg-[#FFFBEA] focus:outline-none focus:bg-white focus:shadow-brutal transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5722] text-white border-3 border-black font-mono font-black text-base uppercase py-4 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg flex items-center justify-center gap-3 transition-all"
              >
                Kirim Pesan Sekarang <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar: Social Links & QR Code */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Info Box */}
          <div className="bg-[#00E5FF] border-4 border-black p-6 shadow-brutal space-y-4">
            <h3 className="font-mono text-2xl font-black uppercase text-black border-b-3 border-black pb-2">
              LOKASI & KONTAK
            </h3>

            <div className="space-y-3 font-mono text-xs font-bold">
              <div className="flex items-center gap-3 bg-white border-2 border-black p-3">
                <MapPin className="h-5 w-5 text-[#FF5722] shrink-0" />
                <div>
                  <span className="text-gray-500 uppercase block">LOKASI:</span>
                  <span className="text-black text-sm">SMK Telkom Medan, Indonesia</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white border-2 border-black p-3">
                <Mail className="h-5 w-5 text-[#FF2E93] shrink-0" />
                <div>
                  <span className="text-gray-500 uppercase block">GITHUB ID:</span>
                  <span className="text-black text-sm">github.com/Jayy227</span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="bg-[#FF2E93] border-4 border-black p-6 shadow-brutal text-white text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-black text-[#FFE600] border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase">
              <QrCode className="h-4 w-4" /> SCAN QR CODE
            </div>
            
            <div className="bg-white border-4 border-black p-3 mx-auto w-fit shadow-brutal-sm">
              <img
                src="./anugrahjayy__qr.png"
                alt="Anugrah Jayanta QR Code"
                className="w-48 h-48 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/Jayy227');
                }}
              />
            </div>
            <p className="font-mono text-xs font-bold bg-black text-white p-2 border border-black">
              Scan QR code di atas untuk langsung membuka profil sosial & portofolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
