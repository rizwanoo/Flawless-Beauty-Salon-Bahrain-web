import React from 'react';
import { SALON_INFO, BRANCHES } from '../data/salonData';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, anchorId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Philosophy Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C81E3D] bg-white p-0.5 shrink-0">
                <img
                  src="/logo.png"
                  alt="Flawless Beauty Salon Bahrain"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  Flawless
                </h4>
                <p className="text-[11px] tracking-widest uppercase text-[#E11D48] font-medium">
                  Ladies Beauty Salon · Bahrain
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Manama’s premier destination for specialized hair transformations, bespoke balayage, keratin smoothing, and complete personal care rituals in a private, welcoming ladies sanctuary.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-stone-800 hover:bg-[#C81E3D] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram @flawlessbeautysalon.bh"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-stone-800 hover:bg-[#C81E3D] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook flawless.bh20"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SALON_INFO.email}`}
                className="w-9 h-9 bg-stone-800 hover:bg-[#C81E3D] text-white flex items-center justify-center transition-colors"
                aria-label="Email salon reception"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-100 font-display">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-stone-400"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-stone-400"
                >
                  Hair & Beauty Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-stone-400"
                >
                  About Flawless & Stylists
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('branches')}
                  className="hover:text-white transition-colors cursor-pointer text-stone-400"
                >
                  Portfolio & Bahrain Branches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('branches', 'booking-section')}
                  className="text-[#E11D48] hover:text-[#f43f5e] font-semibold transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Central Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-100 font-display flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
              Operating Hours
            </h5>
            <div className="text-xs text-stone-400 space-y-1.5">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Saturday – Wednesday:</span>
                <span className="text-stone-200 font-mono">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Thursday – Friday:</span>
                <span className="text-stone-200 font-mono">9:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              <p className="text-stone-300 font-semibold mb-1">Central Booking Email</p>
              <a
                href={`mailto:${SALON_INFO.email}`}
                className="text-stone-400 hover:text-white transition-colors underline break-all font-mono text-[11px]"
              >
                {SALON_INFO.email}
              </a>
            </div>
          </div>

        </div>

        {/* Branches Grid Strip */}
        <div className="py-8 border-b border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANCHES.map((b) => (
            <div key={b.id} className="p-4 bg-stone-900/60 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{b.name}</span>
                <span className="text-[10px] text-[#E11D48] uppercase tracking-widest font-mono">Manama</span>
              </div>
              <p className="text-xs text-stone-400 leading-snug">{b.address}</p>
              <div className="pt-1 flex items-center justify-between text-xs">
                <a
                  href={`tel:${b.phone}`}
                  className="text-stone-300 hover:text-white font-mono flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#E11D48]" />
                  <span>{b.displayPhone}</span>
                </a>
                <a
                  href={b.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-stone-400 hover:text-white underline"
                >
                  Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Quiet Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Flawless Beauty Salon Bahrain. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-stone-400">Ladies Beauty Sanctuary</span>
            <span>·</span>
            <span className="text-stone-400">Manama, Kingdom of Bahrain</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
