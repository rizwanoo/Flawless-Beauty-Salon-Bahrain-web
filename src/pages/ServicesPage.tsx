import React, { useState } from 'react';
import { SERVICES_CATALOG, ServiceItem, SALON_INFO } from '../data/salonData';
import { Sparkles, ArrowRight, Clock, Check, Scissors, Droplets, Smile, Shield } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, anchorId?: string) => void;
  onBookService: (serviceId: string) => void;
}

export default function ServicesPage({ onNavigate, onBookService }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'nails' | 'beauty' | 'spa'>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hair', label: 'Hair Transformations & Styling' },
    { id: 'nails', label: 'Bespoke Nails & Care' },
    { id: 'beauty', label: 'Brows, Skincare & Glam' },
    { id: 'spa', label: 'Hammam & Relaxation' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category === activeCategory);

  const handleBook = (serviceId: string) => {
    onBookService(serviceId);
    onNavigate('branches', 'booking-section');
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#FFFDFB]">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Menu & Rituals · Bahrain</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-stone-900">
            Artisanal Hair & Luxury Beauty Catalog
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Every treatment at Flawless is an individualized experience. We use premium European color pigments, botanical hair bonding elixirs, and hospital-grade sterilization for our nail and spa rituals.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="mt-10 border-b border-stone-200">
          <div className="flex flex-wrap gap-2 sm:gap-4 -mb-px">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`py-3 px-4 sm:px-5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'border-[#C81E3D] text-[#C81E3D] bg-[#FFF1F2]'
                      : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Catalog - Editorial Asymmetrical List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`bg-white border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#C81E3D]/40 transition-colors ${
                  service.popular ? 'ring-1 ring-[#C81E3D]/20' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100 border border-stone-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {service.popular && (
                        <div className="absolute top-3 left-3 bg-[#C81E3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                          Most Requested
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-xs px-2.5 py-1 font-mono">
                        ~{service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
                        0{index + 1} · {service.categoryLabel}
                      </span>
                      <span className="text-sm font-semibold font-mono text-stone-900 bg-stone-100 px-3 py-1">
                        Starting from {service.startingPrice}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                      {service.title}
                    </h2>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                        What's Included in This Ritual:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                            <div className="w-4 h-4 rounded-full bg-[#FFF1F2] text-[#C81E3D] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3" />
                            </div>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => handleBook(service.id)}
                        className="py-3.5 px-6 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Book This Treatment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`https://wa.me/97338965330?text=${encodeURIComponent(`Hello Flawless, I would like to inquire about ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                      >
                        WhatsApp Inquiry
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Protocol Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#FAF6F0] border border-stone-200 p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Transparent Guidance
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              Not Sure Which Hair Treatment You Need?
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We offer complimentary strand consultations at both our Hoora and Gudaibiya branches. Our master stylists examine hair elasticity, porosity, previous chemical history, and recommend either Nanoplastia, Keratin, or customized Olaplex rebuilding before any service begins.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleBook('keratin-smoothing')}
                className="px-6 py-3 bg-stone-900 hover:bg-[#C81E3D] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Schedule Hair Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
