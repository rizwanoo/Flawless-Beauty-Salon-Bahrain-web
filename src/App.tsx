/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryBranchesBookingPage from './pages/GalleryBranchesBookingPage';
import { BRANCHES } from './data/salonData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'branches'>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('balayage-ombre');
  const [targetAnchorId, setTargetAnchorId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, anchorId?: string) => {
    setCurrentPage(page as any);
    setTargetAnchorId(anchorId);
    
    if (!anchorId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleBookService = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFB] text-[#1C1917] selection:bg-[#E11D48] selection:text-white">
      
      {/* Cinematic Navbar (transparent over Home hero, frosted elsewhere) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isHome={currentPage === 'home'}
      />

      {/* Main Four-Page Content Flow */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onBookService={handleBookService}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onBookService={handleBookService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'branches' && (
          <GalleryBranchesBookingPage
            initialBranchId="hoora"
            initialServiceId={selectedServiceForBooking}
            anchorId={targetAnchorId}
          />
        )}
      </main>

      {/* Fixed Quiet Floating Contact Action (Zero Popups - direct WhatsApp/call) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/97338965330"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Direct WhatsApp Hoora Branch"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
        <button
          onClick={() => handleNavigate('branches', 'booking-section')}
          className="px-4 py-2.5 bg-[#C81E3D] hover:bg-[#A91431] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Sophisticated Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
