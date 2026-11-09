import React from 'react';
import { SALON_INFO, TEAM_MEMBERS, BRANCHES } from '../data/salonData';
import { Sparkles, Heart, Award, Shield, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string, anchorId?: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="w-full pt-28 pb-24 bg-[#FFFDFB]">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Story & Specialists · Manama, Bahrain</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-stone-900">
            About Flawless & Our Artisans
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Founded with an unwavering dedication to luxury ladies' personal care in the Kingdom of Bahrain. We blend bespoke European techniques with Middle Eastern hospitality.
          </p>
        </div>
      </section>

      {/* 01. OUR STORY & BRAND PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Chapter 01 · The Genesis
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
              Creating a sanctuary where women leave feeling undeniably radiant.
            </h2>
            <div className="editorial-divider" />
            
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              In a region characterized by intense seasonal heat and high humidity, hair and skin demand extraordinary care and scientifically sound formulations. Flawless Beauty Salon was established in Manama to bridge the gap between high-fashion styling and long-term hair health.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Operating across strategic hubs in Hoora (Road 1805) and Gudaibiya (Qudaibiya Avenue), our salons provide a safe, 100% private ladies-only sanctuary where our clients can completely disconnect from the rush of daily life while receiving world-class beauty rituals.
            </p>

            <div className="bg-[#FAF6F0] border border-stone-200 p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                The Three Pillars of Flawless:
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#C81E3D] font-bold">01.</span>
                  <span><strong>Zero Compromise on Hair Health:</strong> We refuse aggressive bleaches or counterfeit straightening agents that weaken strands.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C81E3D] font-bold">02.</span>
                  <span><strong>Artisanal Customization:</strong> Every balayage formula, nail shape, and facial ritual is bespoke to your unique features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C81E3D] font-bold">03.</span>
                  <span><strong>Immaculate Hygiene Standards:</strong> Strict autoclaving, single-use buffers, and spotless workstations at all branches.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative border border-stone-200 bg-white p-3 shadow-md">
              <img
                src="/images/hero.jpg"
                alt="Flawless Salon Interior in Bahrain"
                className="w-full h-[460px] object-cover"
              />
              <div className="p-3 text-xs text-stone-500 flex justify-between">
                <span className="font-semibold text-stone-800">Manama Salon Interior</span>
                <span>Dedicated Ladies Haven</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02. OUR PROFESSIONAL ARTISANS & TEAM */}
      <section className="py-20 bg-[#FAF6F0] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
              Chapter 02 · The Artisans
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
              Meet Our Specialists & Master Stylists
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Our team consists of certified colorists, texture chemists, and precision nail artists with years of hands-on salon experience in the Gulf and Europe.
            </p>
          </div>

          {/* Editorial Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200 p-8 flex flex-col justify-between hover:border-[#C81E3D]/50 transition-colors shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C81E3D]">
                      {member.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {member.experience}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-stone-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-stone-700 mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="bg-[#FFF1F2] px-3.5 py-2 border-l-2 border-[#C81E3D]">
                    <p className="text-xs text-[#C81E3D] font-medium">
                      Specialty: {member.specialty}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400">
                    Available at Hoora & Gudaibiya
                  </span>
                  <button
                    onClick={() => onNavigate('branches', 'booking-section')}
                    className="text-xs font-bold uppercase tracking-wider text-[#C81E3D] hover:text-[#A91431] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request In Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03. THE SALON EXPERIENCE & GUEST JOURNEY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81E3D]">
            Chapter 03 · The Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
            What You Can Expect at Flawless
          </h2>
          <p className="text-sm text-stone-600">
            From the moment you step through our doors in Manama, your appointment is an unhurried, serene experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#FAF6F0] border border-stone-200 space-y-3">
            <span className="font-display text-3xl font-bold text-[#C81E3D]">01</span>
            <h3 className="font-display text-base font-bold text-stone-900">Diagnostic Welcome</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Warm hospitality and refreshment accompanied by an honest diagnostic discussion of your goals and hair condition.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-stone-200 space-y-3">
            <span className="font-display text-3xl font-bold text-[#C81E3D]">02</span>
            <h3 className="font-display text-base font-bold text-stone-900">Bespoke Formulation</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Custom color ratios, Olaplex bonding additives, or organic keratin blends prepared fresh before your eyes.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-stone-200 space-y-3">
            <span className="font-display text-3xl font-bold text-[#C81E3D]">03</span>
            <h3 className="font-display text-base font-bold text-stone-900">Tranquil Execution</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ergonomic wash loungers, calming ambient music, and attentive professionals focused solely on your comfort.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-stone-200 space-y-3">
            <span className="font-display text-3xl font-bold text-[#C81E3D]">04</span>
            <h3 className="font-display text-base font-bold text-stone-900">At-Home Maintenance</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Clear, practical advice on sulfate-free maintenance, heat-styling protection, and maximizing your results.
            </p>
          </div>
        </div>

        {/* CTA to Book */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('branches', 'booking-section')}
            className="px-8 py-4 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book With Our Master Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
