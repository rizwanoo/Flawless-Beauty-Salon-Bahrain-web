import React, { useState, useEffect } from 'react';
import { BRANCHES, GALLERY_ITEMS, SALON_INFO } from '../data/salonData';
import BookingForm from '../components/BookingForm';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, ExternalLink, Calendar, Check, Compass } from 'lucide-react';

interface GalleryBranchesBookingPageProps {
  initialBranchId?: string;
  initialServiceId?: string;
  anchorId?: string;
}

export default function GalleryBranchesBookingPage({ initialBranchId, initialServiceId, anchorId }: GalleryBranchesBookingPageProps) {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('all');
  const [selectedBranchForBooking, setSelectedBranchForBooking] = useState<string>(initialBranchId || 'hoora');

  useEffect(() => {
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [anchorId]);

  const galleryFilters = [
    { id: 'all', label: 'All Showcase' },
    { id: 'hair-color', label: 'Hair Colour & Balayage' },
    { id: 'hair-treatments', label: 'Keratin & Smoothing' },
    { id: 'nails', label: 'Nail Art & Manicure' },
    { id: 'interior', label: 'Salon Interior & Spaces' },
  ];

  const filteredGallery = activeGalleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeGalleryFilter);

  return (
    <div className="w-full pt-28 pb-24 bg-[#FFFDFB]">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio, Directory & Appointments · Bahrain</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-stone-900">
            Gallery, Bahrain Branches & Booking
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Explore our visual portfolio, locate your nearest salon in Manama, and reserve your personalized beauty experience via our inline appointment system.
          </p>
        </div>
      </section>

      {/* 01. EDITORIAL GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Visual Showcase
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              The Flawless Portfolio
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {galleryFilters.map(filter => {
              const isActive = activeGalleryFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveGalleryFilter(filter.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#C81E3D] text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 p-2 shadow-sm group hover:border-[#C81E3D] transition-colors"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                  {item.categoryLabel}
                </div>
              </div>
              <div className="pt-3 pb-1 px-1">
                <h3 className="font-display text-sm font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Flawless Beauty Salon · Manama
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 02. VERIFIED BRANCH DIRECTORY */}
      <section className="py-20 bg-[#FAF6F0] border-t border-b border-stone-200 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Verified Locations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
              Our Bahrain Branches & Direct Contacts
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Find contact numbers, verified opening hours, and direct Google Maps navigation for each of our Manama branches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRANCHES.map(branch => (
              <div
                key={branch.id}
                className={`bg-white border p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all ${
                  branch.featured ? 'border-[#C81E3D] ring-1 ring-[#C81E3D]/30' : 'border-stone-200'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
                      {branch.neighborhood}
                    </span>
                    {branch.featured && (
                      <span className="text-[10px] bg-[#FFF1F2] text-[#C81E3D] px-2 py-0.5 font-bold uppercase">
                        Primary Hub
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-stone-900">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C81E3D] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="bg-[#FAF6F0] p-4 text-xs space-y-2 border border-stone-200">
                    <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C81E3D]" />
                      <span>Branch Hours:</span>
                    </div>
                    <div className="text-stone-600 space-y-1">
                      <p>{branch.hoursWeekday}</p>
                      <p>{branch.hoursWeekend}</p>
                    </div>
                  </div>

                  {/* Contact Numbers */}
                  <div className="space-y-2 pt-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Mobile & WhatsApp:</span>
                      <a href={`tel:${branch.phone}`} className="font-mono font-bold text-stone-900 hover:text-[#C81E3D]">
                        {branch.displayPhone}
                      </a>
                    </div>
                    {branch.landline && (
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Landline:</span>
                        <a href={`tel:${branch.landline}`} className="font-mono text-stone-700 hover:text-[#C81E3D]">
                          {branch.landline}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-stone-100 space-y-2.5">
                  <button
                    onClick={() => {
                      setSelectedBranchForBooking(branch.id);
                      const el = document.getElementById('booking-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Select This Branch to Book
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${branch.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03. PROFESSIONAL INLINE APPOINTMENT REQUEST FORM (ZERO POPUPS) */}
      <section id="booking-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm
          initialBranchId={selectedBranchForBooking}
          initialServiceId={initialServiceId}
        />
      </section>

    </div>
  );
}
