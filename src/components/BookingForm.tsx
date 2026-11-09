import React, { useState, useEffect } from 'react';
import { BRANCHES, SERVICES_CATALOG, Branch } from '../data/salonData';
import { CheckCircle2, MessageCircle, Phone, Calendar, Clock, MapPin, Sparkles, AlertCircle } from 'lucide-react';

interface BookingFormProps {
  initialBranchId?: string;
  initialServiceId?: string;
  className?: string;
}

export default function BookingForm({ initialBranchId, initialServiceId, className = '' }: BookingFormProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(initialBranchId || 'hoora');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || 'balayage-ombre');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('11:00 AM');
  const [notes, setNotes] = useState<string>('');
  
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialBranchId) setSelectedBranchId(initialBranchId);
    if (initialServiceId) setSelectedServiceId(initialServiceId);
  }, [initialBranchId, initialServiceId]);

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  const currentBranch: Branch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];
  const currentService = SERVICES_CATALOG.find(s => s.id === selectedServiceId) || SERVICES_CATALOG[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.trim().length < 8) {
      setErrorMsg('Please enter a valid Bahrain or international phone/WhatsApp number.');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please choose your preferred appointment date.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hello Flawless Beauty Salon (${currentBranch.name}), I would like to request an appointment:\n\n• Name: ${clientName}\n• Phone: ${clientPhone}\n• Service: ${currentService.title}\n• Branch: ${currentBranch.name} (${currentBranch.neighborhood})\n• Preferred Date: ${preferredDate}\n• Preferred Time: ${preferredTime}${notes ? `\n• Notes: ${notes}` : ''}\n\nPlease confirm availability. Thank you!`;
    return encodeURIComponent(text);
  };

  const whatsAppUrl = `https://wa.me/${currentBranch.whatsapp}?text=${getWhatsAppMessage()}`;

  const resetForm = () => {
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div className={`bg-white border border-[#E11D48]/15 shadow-sm p-6 sm:p-8 lg:p-10 ${className}`}>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#C81E3D] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Inline Reservation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
              Request Your Appointment
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Choose your preferred branch in Bahrain, select your service, and receive instant confirmation directly with our reception team.
            </p>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-3 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Branch Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              1. Select Branch <span className="text-[#C81E3D]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {BRANCHES.map(branch => {
                const isSelected = selectedBranchId === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`text-left p-3.5 border transition-all ${
                      isSelected
                        ? 'border-[#C81E3D] bg-[#FFF1F2] ring-1 ring-[#C81E3D]'
                        : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-[#C81E3D]' : 'text-stone-900'}`}>
                        {branch.name}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C81E3D]" />}
                    </div>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">{branch.neighborhood}</p>
                    <p className="text-[11px] font-mono text-stone-600 mt-1.5">{branch.displayPhone}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              2. Select Service <span className="text-[#C81E3D]">*</span>
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-white border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
            >
              {SERVICES_CATALOG.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.categoryLabel}) — from {s.startingPrice} · ~{s.duration}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Contact Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Full Name <span className="text-[#C81E3D]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Fatima Al-Noor"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="w-full bg-white border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Phone / WhatsApp Number <span className="text-[#C81E3D]">*</span>
              </label>
              <input
                type="tel"
                placeholder="+973 3XXXXXXX"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                required
                className="w-full bg-white border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
              />
            </div>
          </div>

          {/* Date & Preferred Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                Preferred Date <span className="text-[#C81E3D]">*</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
                className="w-full bg-white border border-stone-200 px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                Preferred Time Slot
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-white border border-stone-200 px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
              >
                <option value="10:00 AM">10:00 AM (Opening slot)</option>
                <option value="11:30 AM">11:30 AM (Morning)</option>
                <option value="01:00 PM">01:00 PM (Early Afternoon)</option>
                <option value="03:00 PM">03:00 PM (Afternoon)</option>
                <option value="05:00 PM">05:00 PM (Late Afternoon)</option>
                <option value="07:00 PM">07:00 PM (Evening)</option>
                <option value="08:30 PM">08:30 PM (Night slot)</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              Special Requests or Hair History (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Previous bleach history, desired blonde tone, or nail design preference..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#C81E3D] hover:bg-[#A91431] text-white font-semibold text-sm tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Appointment Request</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <p className="text-[12px] text-stone-500 text-center mt-2.5">
              Guaranteed ladies-only sanctuary. No prepayment required.
            </p>
          </div>
        </form>
      ) : (
        /* Inline Success State — ZERO POPUP */
        <div className="space-y-6 py-4 animate-fadeIn">
          <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C81E3D]">
              Request Received
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
              Thank You, {clientName}!
            </h3>
            <p className="text-sm text-stone-600">
              Your appointment request has been recorded for <strong className="text-stone-900">{currentBranch.name}</strong>.
            </p>
          </div>

          {/* Summary Box */}
          <div className="bg-[#FAF6F0] border border-stone-200 p-5 space-y-3 text-sm">
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Service</span>
              <span className="font-semibold text-stone-900">{currentService.title}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Branch Location</span>
              <span className="font-semibold text-stone-900">{currentBranch.name} ({currentBranch.neighborhood})</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Scheduled Date & Time</span>
              <span className="font-semibold text-stone-900">{preferredDate} at {preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Client Contact</span>
              <span className="font-mono text-stone-900">{clientPhone}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2.5 shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant WhatsApp Confirmation with Branch</span>
            </a>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${currentBranch.phone}`}
                className="flex-1 py-3 px-4 border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C81E3D]" />
                <span>Call Branch ({currentBranch.displayPhone})</span>
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
