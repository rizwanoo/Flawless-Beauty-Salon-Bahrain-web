import React from 'react';
import { SALON_INFO, BRANCHES, SERVICES_CATALOG, TESTIMONIALS } from '../data/salonData';
import { Sparkles, ArrowRight, Star, Clock, MapPin, Phone, Instagram, Check, ShieldCheck, Heart } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, anchorId?: string) => void;
  onBookService?: (serviceId: string) => void;
}

export default function HomePage({ onNavigate, onBookService }: HomePageProps) {
  const featuredHair = SERVICES_CATALOG.filter(s => s.category === 'hair').slice(0, 3);
  const featuredBeauty = SERVICES_CATALOG.filter(s => s.category !== 'hair').slice(0, 3);

  return (
    <div className="w-full">
      
      {/* 01. CINEMATIC FULL-WIDTH PHOTOGRAPHIC HERO (EXTENDS BEHIND NAVBAR) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_salon_editorial_1794216861127.jpg"
            alt="Flawless Beauty Salon Luxury Interior in Manama, Bahrain"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered luxury editorial scrim: dark base on top for navbar legibility, warm center, rich bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-[#C81E3D]/10 mix-blend-multiply" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center text-white">
          
          {/* Subtle Tagline / Trust marker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Kingdom of Bahrain · Hoora & Gudaibiya</span>
          </div>

          {/* Bold Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight leading-[1.08] text-balance max-w-4xl mx-auto text-white drop-shadow-sm">
            Beauty Without Limits. <br />
            <span className="font-editorial italic font-normal text-rose-200">Perfection</span> Without Compromise.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Discover your highest beauty at Flawless. From specialized balayage and mirror-shine keratin transformations to bespoke nails and Moroccan hammam rituals in Manama.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('branches', 'booking-section')}
              className="w-full sm:w-auto px-8 py-4 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>

          {/* Verified Trust Strip */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-white">2 Branches</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Hoora & Gudaibiya</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-white">4.1 ★</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">200+ Verified Reviews</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-white">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Ladies Sanctuary</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-white">Master</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Hair & Color Specialists</p>
            </div>
          </div>

        </div>

      </section>

      {/* 02. BOLD BRAND INTRODUCTION & PHILOSOPHY */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bold Typography & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
                <span>Our Philosophy</span>
                <span>·</span>
                <span>The Flawless Standard</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.15] text-balance">
                Elevating personal beauty into an uncompromising art form.
              </h2>

              <div className="editorial-divider" />

              <p className="text-base text-stone-700 leading-relaxed">
                Flawless Beauty Salon was born in the heart of Manama with a clear commitment: to provide Bahraini women and international guests with a world-class beauty destination where technical mastery, immaculate hygiene, and genuine warmth converge.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                We believe exceptional hair styling shouldn’t come at the cost of hair integrity. Whether you seek multi-dimensional sun-kissed balayage, intensive nanoplastia smoothing to combat Bahrain’s summer humidity, or an immaculate Russian gel manicure, every ritual is executed by passionate professionals who understand texture, tone, and individualized care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFF1F2] text-[#C81E3D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Custom Texture Diagnostic</h3>
                    <p className="text-xs text-stone-500 mt-0.5">Every hair appointment starts with a personalized strand assessment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFF1F2] text-[#C81E3D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Hospital-Grade Sterilization</h3>
                    <p className="text-xs text-stone-500 mt-0.5">Autoclaved manicure instruments and single-use hygienic buffers.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-bold uppercase tracking-widest text-[#C81E3D] hover:text-[#A91431] flex items-center gap-2 cursor-pointer group"
                >
                  <span>Learn more about our team and story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Salon Interior Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-stone-200 bg-white p-3 shadow-md">
                <img
                  src="/src/assets/images/salon_interior_lounge_1794216863632.jpg"
                  alt="Flawless Beauty Salon Reception & Lounge in Bahrain"
                  className="w-full h-[440px] object-cover"
                />
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-stone-800">Flawless Reception & Lounge</span>
                  <span>Manama, Bahrain</span>
                </div>
              </div>

              {/* Accent Quote Box */}
              <div className="absolute -bottom-6 -left-6 bg-[#C81E3D] text-white p-5 max-w-xs shadow-xl hidden sm:block">
                <p className="font-editorial italic text-base leading-snug">
                  "A tranquil haven designed exclusively for ladies to unwind, restore and feel flawless."
                </p>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-rose-200 mt-2">
                  — Flawless Team
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 03. FEATURED HAIR SERVICES & TRANSFORMATION SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
                Signature Hair Artistry
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-2 tracking-tight">
                Specialized Hair Transformations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#C81E3D] flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>View All Hair & Beauty Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Editorial Hair Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHair.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-stone-200 flex flex-col justify-between group hover:border-[#C81E3D]/50 transition-colors duration-200 shadow-sm"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C81E3D]">
                      0{index + 1} · {service.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span>Duration: {service.duration}</span>
                      <span className="font-semibold text-stone-900">from {service.startingPrice}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-[#C81E3D] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-stone-600">
                          <span className="w-1.5 h-1.5 bg-[#C81E3D] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      if (onBookService) onBookService(service.id);
                      onNavigate('branches', 'booking-section');
                    }}
                    className="w-full py-3 bg-[#FAF6F0] hover:bg-[#C81E3D] text-stone-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Reserve Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Transformation Spotlight Feature */}
          <div className="mt-16 bg-[#FFF1F2] border border-[#E11D48]/20 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
                  Spotlight Result
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                  Nanoplastia Keratin & High-Humidity Defense
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Struggling with unmanageable curls, frizzy edges, or styling fatigue in the Gulf climate? Our formaldeyde-free Nanoplastia infusion deeply seals the hair cuticle, producing mirror-smooth, featherweight strands that stay sleek for up to 5 months with zero damage.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="text-xs text-stone-700 font-medium">
                    ✓ 100% Formaldehyde-Free
                  </div>
                  <div className="text-xs text-stone-700 font-medium">
                    ✓ Safe for Bleached & Colored Hair
                  </div>
                  <div className="text-xs text-stone-700 font-medium">
                    ✓ Wash Out Same Day
                  </div>
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      if (onBookService) onBookService('keratin-smoothing');
                      onNavigate('branches', 'booking-section');
                    }}
                    className="px-6 py-3 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-widest cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Book Keratin Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-stone-200 bg-white p-2">
                  <img
                    src="/src/assets/images/hair_treatment_keratin_1794216863531.jpg"
                    alt="Glass hair keratin result at Flawless Beauty Salon"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="text-[11px] text-stone-500 pt-2 px-1 text-center font-mono">
                    Post-Treatment Glass Shine · Verified Client Transformation
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 04. SIGNATURE BEAUTY, NAILS & WELLNESS */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Beyond Hair
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-2 tracking-tight">
              Bespoke Nails, Face & Hammam Rituals
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Complete head-to-toe beauty care performed with surgical precision, luxury skincare, and time-honored Moroccan bath techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBeauty.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-stone-200 p-6 flex flex-col justify-between group hover:border-[#C81E3D] transition-colors"
              >
                <div className="space-y-4">
                  <div className="h-48 overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[#C81E3D]">
                      {service.categoryLabel}
                    </span>
                    <h3 className="font-display text-lg font-bold text-stone-900 mt-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-2 text-xs text-stone-500 flex justify-between border-t border-stone-100">
                    <span>Duration: {service.duration}</span>
                    <span className="font-semibold text-stone-900">from {service.startingPrice}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      if (onBookService) onBookService(service.id);
                      onNavigate('branches', 'booking-section');
                    }}
                    className="w-full py-2.5 bg-stone-100 hover:bg-[#C81E3D] hover:text-white text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Select & Book
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05. AUTHENTIC CLIENT REVIEWS & VERIFIED SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Verified Client Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Loved by Bahrain’s Discerning Women
            </h2>
            <div className="flex items-center justify-center gap-1 text-amber-500 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-stone-700 ml-2">4.1 / 5.0 (200+ Reviews on Fresha & Google)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#FAF6F0] border border-stone-200 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-editorial italic text-stone-800 text-sm leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80">
                  <p className="text-xs font-bold text-stone-900">{t.clientName}</p>
                  <p className="text-[11px] text-[#C81E3D] font-medium">{t.service} · {t.branch}</p>
                  <p className="text-[10px] text-stone-400 font-mono mt-0.5">{t.date}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. EDITORIAL INSTAGRAM FEED & COMMUNITY SPOTLIGHT */}
      <section className="py-16 bg-[#FAF6F0] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D] flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" />
                Follow On Instagram
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                @flawlessbeautysalon.bh
              </h3>
            </div>
            <a
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-stone-900 hover:bg-[#C81E3D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Visit Official Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden bg-stone-200 h-64 border border-stone-200">
              <img
                src="/src/assets/images/hair_transformation_balayage_1794216862567.jpg"
                alt="Balayage transformation by Flawless"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                <span>View On Instagram</span>
              </div>
            </div>

            <div className="relative group overflow-hidden bg-stone-200 h-64 border border-stone-200">
              <img
                src="/src/assets/images/beauty_nail_artistry_1794216864402.jpg"
                alt="Nail artistry by Flawless"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                <span>View On Instagram</span>
              </div>
            </div>

            <div className="relative group overflow-hidden bg-stone-200 h-64 border border-stone-200">
              <img
                src="/src/assets/images/hair_treatment_keratin_1794216863531.jpg"
                alt="Keratin smoothing by Flawless"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                <span>View On Instagram</span>
              </div>
            </div>

            <div className="relative group overflow-hidden bg-stone-200 h-64 border border-stone-200">
              <img
                src="/src/assets/images/hero_salon_editorial_1794216861127.jpg"
                alt="Salon atmosphere by Flawless"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                <span>View On Instagram</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 07. INLINE APPOINTMENT CALL-TO-ACTION */}
      <section className="py-20 lg:py-24 bg-[#C81E3D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-200">
            Book Your Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Ready to Experience Perfection?
          </h2>
          <p className="text-base text-rose-100 max-w-xl mx-auto leading-relaxed">
            Select your preferred branch in Hoora or Gudaibiya. Our reception coordinators are ready to welcome you into our tranquil ladies sanctuary.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('branches', 'booking-section')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#C81E3D] hover:bg-stone-100 text-xs font-bold uppercase tracking-widest transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Go to Appointment Request Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+97338965330"
              className="w-full sm:w-auto px-8 py-4 bg-black/20 hover:bg-black/30 text-white border border-white/30 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-300" />
              <span>Call Hoora Branch (+973 3896 5330)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
