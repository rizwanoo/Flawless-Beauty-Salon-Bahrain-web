import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, anchorId?: string) => void;
  isHome: boolean;
}

export default function Navbar({ currentPage, onNavigate, isHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', pageId: 'home' },
    { label: 'Services', pageId: 'services' },
    { label: 'About & Team', pageId: 'about' },
    { label: 'Gallery & Branches', pageId: 'branches' },
  ];

  const handleNavClick = (pageId: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId, anchorId);
  };

  // Determine navbar appearance:
  // If on Home and not scrolled: transparent over hero
  // Otherwise: luminous frosted ivory/champagne background with crisp dark text & fine border
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
            : 'bg-[#FFFDFB]/95 backdrop-blur-md text-stone-900 shadow-sm border-b border-stone-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Zone: Original Logo & Identity */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
              aria-label="Flawless Beauty Salon Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden rounded-full ring-2 ring-[#C81E3D]/30 shadow-sm shrink-0 bg-white p-0.5">
                <img
                  src="/logo.png"
                  alt="Flawless Beauty Salon Official Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to text initials if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-display text-lg sm:text-xl font-bold tracking-tight uppercase leading-none ${
                  isTransparent ? 'text-white' : 'text-stone-900'
                }`}>
                  Flawless
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-medium mt-1 ${
                  isTransparent ? 'text-stone-200' : 'text-[#C81E3D]'
                }`}>
                  Beauty Salon · Bahrain
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.pageId;
                return (
                  <button
                    key={item.pageId}
                    onClick={() => handleNavClick(item.pageId)}
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer focus:outline-none ${
                      isActive
                        ? isTransparent ? 'text-white font-bold' : 'text-[#C81E3D] font-bold'
                        : isTransparent
                        ? 'text-stone-200 hover:text-white'
                        : 'text-stone-700 hover:text-[#C81E3D]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                          isTransparent ? 'bg-white' : 'bg-[#C81E3D]'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Direct Inline Booking CTA & Phone */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+97338965330"
                className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  isTransparent ? 'text-stone-200 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Call Hoora Branch"
              >
                <Phone className="w-3.5 h-3.5 text-[#C81E3D]" />
                <span className="font-mono">+973 3896 5330</span>
              </a>

              <button
                onClick={() => handleNavClick('branches', 'booking-section')}
                className={`px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm ${
                  isTransparent
                    ? 'bg-[#C81E3D] hover:bg-[#A91431] text-white ring-1 ring-white/20'
                    : 'bg-[#C81E3D] hover:bg-[#A91431] text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('branches', 'booking-section')}
                className="px-3 py-1.5 bg-[#C81E3D] text-white text-[11px] font-bold uppercase tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 focus:outline-none cursor-pointer ${
                  isTransparent ? 'text-white' : 'text-stone-900'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean inline slide drawer, NOT a modal/popup) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 bg-[#FFFDFB] border-b border-stone-200 shadow-xl md:hidden py-6 px-6 space-y-6">
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.pageId;
              return (
                <button
                  key={item.pageId}
                  onClick={() => handleNavClick(item.pageId)}
                  className={`w-full text-left py-2.5 px-3 flex items-center justify-between text-sm font-semibold tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'bg-[#FFF1F2] text-[#C81E3D] font-bold'
                      : 'text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-200 space-y-3">
            <button
              onClick={() => handleNavClick('branches', 'booking-section')}
              className="w-full py-3.5 bg-[#C81E3D] text-white text-xs font-bold uppercase tracking-wider text-center"
            >
              Book Your Appointment
            </button>
            <div className="text-center text-xs text-stone-600 space-y-1">
              <p>Hoora: <a href="tel:+97338965330" className="font-mono text-[#C81E3D]">+973 3896 5330</a></p>
              <p>Gudaibiya: <a href="tel:+97332019847" className="font-mono text-[#C81E3D]">+973 3201 9847</a></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
