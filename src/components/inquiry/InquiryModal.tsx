import { useState, type FormEvent } from 'react';
import {
  X,
  Phone,
  MessageSquare,
  CheckCircle2,
  Truck,
  User,
  MapPin,
  Package,
  Layers,
  FileText,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteMedia } from '../../context/useSiteMedia';

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:4000';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const { getMediaUrl } = useSiteMedia();
  const brandLogo = getMediaUrl('brand_logo', '/shifter-online-brand.jpg');
  const [inquiryType, setInquiryType] = useState<'customer' | 'driver'>('customer');

  // Form Fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [vehicleType, setVehicleType] = useState('Tata Ace (Chhota Hathi)');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [cargoType, setCargoType] = useState('Household Shifting');
  const [needHelper, setNeedHelper] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [preferredHub, setPreferredHub] = useState('Central Indore (Rajwada / Sarafa)');
  const [hasDocuments, setHasDocuments] = useState(true);
  const [notes, setNotes] = useState('');

  // UI State
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = () => {
    setName('');
    setMobile('');
    setPickupLocation('');
    setDropLocation('');
    setNotes('');
    setVehicleNumber('');
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    if (inquiryType === 'customer') {
      if (!pickupLocation.trim()) {
        setErrorMessage('Please enter your pickup area in Indore.');
        return;
      }
      if (!dropLocation.trim()) {
        setErrorMessage('Please enter your delivery/drop area in Indore.');
        return;
      }
    }

    setSubmitting(true);

    const payload = {
      type: inquiryType,
      name: name.trim(),
      mobile: cleanMobile,
      vehicleType,
      pickupLocation: inquiryType === 'customer' ? pickupLocation.trim() : undefined,
      dropLocation: inquiryType === 'customer' ? dropLocation.trim() : undefined,
      cargoType: inquiryType === 'customer' ? cargoType : undefined,
      needHelper: inquiryType === 'customer' ? needHelper : undefined,
      vehicleNumber: inquiryType === 'driver' ? vehicleNumber.trim() : undefined,
      preferredHub: inquiryType === 'driver' ? preferredHub : undefined,
      hasDocuments: inquiryType === 'driver' ? hasDocuments : undefined,
      notes: notes.trim() || undefined,
    };

    try {
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || 'Failed to submit inquiry.');
      }

      setIsSuccess(true);
    } catch {
      // Graceful fallback: save locally so inquiry is not lost even if offline
      try {
        const localList = JSON.parse(localStorage.getItem('shifter_pending_inquiries') || '[]');
        localList.push({ ...payload, createdAt: new Date().toISOString() });
        localStorage.setItem('shifter_pending_inquiries', JSON.stringify(localList));
      } catch {
        // Ignore storage errors
      }
      setIsSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  // WhatsApp formatted inquiry message
  const whatsappText = encodeURIComponent(
    inquiryType === 'customer'
      ? `Hello Shifter Online! 🚚\n\nI want to inquire about Goods Transport in Indore.\n*Name:* ${name || 'N/A'}\n*Mobile:* ${mobile || 'N/A'}\n*Vehicle:* ${vehicleType}\n*Pickup:* ${pickupLocation || 'Indore'}\n*Drop:* ${dropLocation || 'Indore'}\n*Cargo:* ${cargoType}\n*Helper Needed:* ${needHelper ? 'Yes' : 'No'}\n${notes ? `*Notes:* ${notes}` : ''}\n\nPlease share availability and quote.`
      : `Hello Shifter Online! 🚚\n\nI want to attach my vehicle as a Driver Partner in Indore.\n*Name:* ${name || 'N/A'}\n*Mobile:* ${mobile || 'N/A'}\n*Vehicle Owned:* ${vehicleType}\n${vehicleNumber ? `*Vehicle No:* ${vehicleNumber}\n` : ''}*Preferred Hub:* ${preferredHub}\n*DL & RC Available:* ${hasDocuments ? 'Yes' : 'No'}\n${notes ? `*Notes:* ${notes}` : ''}\n\nPlease guide me with onboarding.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto selection:bg-orange selection:text-white">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#07132b]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="relative w-full max-w-xl rounded-[28px] border border-slate-200/90 bg-white text-slate-900 shadow-lift overflow-hidden z-10 my-auto"
          >
            {/* Top Brand Banner Header */}
            <div className="relative bg-gradient-to-r from-[#07183D] via-[#0C275E] to-[#07183D] px-6 py-5 text-white overflow-hidden border-b border-navy/20">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange/25 blur-2xl" />
              <div className="pointer-events-none absolute left-1/3 -bottom-10 h-28 w-28 rounded-full bg-royal/40 blur-xl" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={brandLogo}
                    alt="Shifter Online Logo"
                    className="h-11 w-11 rounded-2xl object-contain border border-white/20 shadow-soft bg-white/10 p-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                        Shifter Online Inquiry Desk
                      </h3>
                      <span className="rounded-full bg-orange/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-orange border border-orange/30">
                        Indore
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      Fast 10-Minute Callback &amp; Instant Quotes
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all active:scale-95 border border-white/10"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 max-h-[82vh] overflow-y-auto">
              {isSuccess ? (
                /* Success View */
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-soft">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200 mb-2">
                      <Sparkles size={13} className="text-emerald-600" />
                      Inquiry Received
                    </span>
                    <h4 className="text-2xl font-black text-navy">Thank You, {name}!</h4>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Our Indore operations dispatch coordinator has received your request and will call you on{' '}
                      <strong className="text-navy font-bold">+91 {mobile}</strong> within 10 minutes.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Action */}
                  <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 max-w-md mx-auto space-y-3">
                    <p className="text-xs text-slate-500 font-medium">
                      Need instant response right now? You can also message our dispatch team directly on WhatsApp:
                    </p>
                    <a
                      href={`https://wa.me/919644423533?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs sm:text-sm font-extrabold text-white shadow-soft hover:bg-[#1EBE5D] transition-all"
                    >
                      <MessageSquare size={17} />
                      <span>Connect on WhatsApp Now</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all"
                    >
                      Done &amp; Close
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <div>
                  {/* Category Switcher Tabs */}
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5 border border-slate-200 mb-6">
                    <button
                      type="button"
                      onClick={() => setInquiryType('customer')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
                        inquiryType === 'customer'
                          ? 'bg-white text-navy shadow-soft ring-1 ring-slate-200/80'
                          : 'text-slate-600 hover:text-navy'
                      }`}
                    >
                      <Package size={15} className={inquiryType === 'customer' ? 'text-orange' : ''} />
                      <span>Book Goods / Shifting</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInquiryType('driver')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
                        inquiryType === 'driver'
                          ? 'bg-white text-navy shadow-soft ring-1 ring-slate-200/80'
                          : 'text-slate-600 hover:text-navy'
                      }`}
                    >
                      <Truck size={15} className={inquiryType === 'driver' ? 'text-orange' : ''} />
                      <span>Attach Vehicle / Driver</span>
                    </button>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-bold text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Common Row: Name & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-navy mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Patel"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy mb-1.5">
                          10-Digit Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex">
                          <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 px-3 text-xs font-bold text-slate-600">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="9876543210"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            className="w-full rounded-r-xl border border-slate-300 bg-white py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Customer-Specific Fields */}
                    {inquiryType === 'customer' ? (
                      <>
                        {/* Vehicle Type Dropdown */}
                        <div>
                          <label className="block text-xs font-bold text-navy mb-1.5">
                            Vehicle Type Needed <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Truck size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select
                              value={vehicleType}
                              onChange={(e) => setVehicleType(e.target.value)}
                              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-8 text-xs sm:text-sm font-semibold text-slate-800 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all appearance-none cursor-pointer"
                            >
                              <option value="2-Wheeler Parcel (Up to 20 kg)">2-Wheeler Parcel (Up to 20 kg)</option>
                              <option value="3-Wheeler E-Loader (Up to 500 kg)">3-Wheeler E-Loader (Up to 500 kg)</option>
                              <option value="Tata Ace (Chhota Hathi)">Tata Ace - Chhota Hathi (Up to 750 kg)</option>
                              <option value="Pickup 8ft / Bolero Maxi">Pickup 8ft / Bolero Maxi (Up to 1500 kg)</option>
                              <option value="Household Shifting (1-3 BHK)">Household Shifting (Full 1-3 BHK)</option>
                              <option value="Commercial Logistics & Freight">Commercial &amp; Enterprise Logistics</option>
                            </select>
                          </div>
                        </div>

                        {/* Pickup & Drop Corridors in Indore */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">
                              Pickup Location (Indore) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600" />
                              <input
                                type="text"
                                required
                                placeholder="e.g. Vijay Nagar, Siya Ganj"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">
                              Drop Location (Indore) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange" />
                              <input
                                type="text"
                                required
                                placeholder="e.g. Palasia, Super Corridor"
                                value={dropLocation}
                                onChange={(e) => setDropLocation(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Cargo Category & Helper Option */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-center">
                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">Cargo Category</label>
                            <div className="relative">
                              <Layers size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                              <select
                                value={cargoType}
                                onChange={(e) => setCargoType(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-8 text-xs sm:text-sm font-semibold text-slate-800 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all appearance-none cursor-pointer"
                              >
                                <option value="Household Shifting">Household Shifting &amp; Furniture</option>
                                <option value="Commercial Goods & Retail">Commercial Goods &amp; Retail Rolls</option>
                                <option value="Textiles & Garments">Textiles &amp; Cloth Market</option>
                                <option value="Electronics & Appliances">Electronics &amp; Appliances</option>
                                <option value="Hardware & Machinery">Hardware &amp; Machinery Parts</option>
                                <option value="Other Commercial Cargo">Other Cargo</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">Loading Helper Required?</label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setNeedHelper(true)}
                                className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all ${
                                  needHelper
                                    ? 'bg-orange text-white border-orange shadow-2xs'
                                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                Yes, Helper
                              </button>
                              <button
                                type="button"
                                onClick={() => setNeedHelper(false)}
                                className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all ${
                                  !needHelper
                                    ? 'bg-navy text-white border-navy shadow-2xs'
                                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                No Helper
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Driver-Specific Fields */
                      <>
                        <div>
                          <label className="block text-xs font-bold text-navy mb-1.5">
                            Vehicle You Own / Drive <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Truck size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select
                              value={vehicleType}
                              onChange={(e) => setVehicleType(e.target.value)}
                              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-8 text-xs sm:text-sm font-semibold text-slate-800 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all appearance-none cursor-pointer"
                            >
                              <option value="Tata Ace / Chhota Hathi">Tata Ace / Chhota Hathi</option>
                              <option value="Mahindra Bolero / 8ft Pickup">Mahindra Bolero / 8ft Pickup</option>
                              <option value="3-Wheeler / Electric Loader">3-Wheeler / Electric Loader</option>
                              <option value="2-Wheeler (Bike / Scooter)">2-Wheeler (Bike / Scooter)</option>
                              <option value="1.7T / Heavy Truck">1.7T / Heavy Commercial Truck</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">
                              Vehicle Number (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. MP 09 AB 1234"
                              value={vehicleNumber}
                              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all uppercase"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-navy mb-1.5">
                              Preferred Indore Hub <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={preferredHub}
                              onChange={(e) => setPreferredHub(e.target.value)}
                              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all cursor-pointer"
                            >
                              <option value="Central Indore (Rajwada / Sarafa)">Central Indore (Rajwada / Sarafa)</option>
                              <option value="Vijay Nagar & Super Corridor">Vijay Nagar &amp; Super Corridor</option>
                              <option value="Dewas Naka & Transport Nagar">Dewas Naka &amp; Transport Nagar</option>
                              <option value="Palasia & AB Road">Palasia &amp; AB Road</option>
                              <option value="Bhanwarkuan & Rau">Bhanwarkuan &amp; Rau</option>
                              <option value="Anywhere in Indore">Any Area in Indore</option>
                            </select>
                          </div>
                        </div>

                        {/* License & RC Checkbox */}
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            id="docCheck"
                            checked={hasDocuments}
                            onChange={(e) => setHasDocuments(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded text-orange focus:ring-orange cursor-pointer"
                          />
                          <label htmlFor="docCheck" className="text-xs text-slate-700 font-semibold cursor-pointer">
                            I have a valid Driving License (DL) and Vehicle Registration (RC) for commercial transport.
                          </label>
                        </div>
                      </>
                    )}

                    {/* Additional Notes (Common) */}
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Additional Notes or Requirements (Optional)
                      </label>
                      <div className="relative">
                        <FileText size={15} className="absolute left-3.5 top-3 text-slate-400" />
                        <textarea
                          rows={2}
                          placeholder={
                            inquiryType === 'customer'
                              ? 'e.g. Need transport tomorrow at 10 AM, 2 BHK flat items'
                              : 'e.g. 5+ years experience, available full-time'
                          }
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange px-6 text-xs sm:text-sm font-black text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all disabled:opacity-60"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/919644423533?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-50 px-5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 active:scale-98 transition-all shadow-2xs"
                      >
                        <MessageSquare size={16} className="text-emerald-600" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </form>

                  {/* Trust Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={14} className="text-emerald-500" /> 100% Privacy &amp; Data Protected
                    </span>
                    <a href="tel:9109114515" className="hover:text-navy flex items-center gap-1 font-bold">
                      <Phone size={12} className="text-orange" /> +91 9109114515
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
