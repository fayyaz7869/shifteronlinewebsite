import { useState, useEffect, useCallback, type ChangeEvent } from 'react';
import {
  Search,
  RefreshCw,
  Download,
  Phone,
  MessageSquare,
  Trash2,
  Eye,
  AlertCircle,
  Truck,
  Package,
  Layers,
  X,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  adminApi,
  AdminApiError,
  type AdminInquiry,
  type InquiryType,
  type InquiryStatus,
} from '../../lib/adminApi';

interface AdminInquiriesManagerProps {
  onNewCountChange?: (count: number) => void;
}

export function AdminInquiriesManager({ onNewCountChange }: AdminInquiriesManagerProps) {
  const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    newCount: 0,
    customerCount: 0,
    driverCount: 0,
  });
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | InquiryType>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | InquiryStatus>('all');

  // Modals & Action States
  const [selectedInquiry, setSelectedInquiry] = useState<AdminInquiry | null>(null);
  const [deletingInquiry, setDeletingInquiry] = useState<AdminInquiry | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);

  // Toast State
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // Fetch Inquiries
  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminApi.getInquiries({
        search,
        type: typeFilter,
        status: statusFilter,
      });
      setInquiries(res.inquiries || []);
      if (res.stats) {
        setStats(res.stats);
        if (onNewCountChange) {
          onNewCountChange(res.stats.newCount);
        }
      }
    } catch (err) {
      showToast('error', err instanceof AdminApiError ? err.message : 'Failed to load inquiries.');
    } finally {
      setLoading(false);
    }
  }, [search, typeFilter, statusFilter, onNewCountChange]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  // Update Status
  const handleStatusChange = async (inquiryId: string, newStatus: InquiryStatus) => {
    setStatusUpdatingId(inquiryId);
    try {
      await adminApi.updateInquiryStatus(inquiryId, newStatus);
      setInquiries((prev) =>
        prev.map((inq) => (inq._id === inquiryId ? { ...inq, status: newStatus } : inq))
      );
      if (selectedInquiry?._id === inquiryId) {
        setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
      showToast('success', `Status updated to "${newStatus}".`);
      // Refresh stats
      const res = await adminApi.getInquiries({ search, type: typeFilter, status: statusFilter });
      if (res.stats) {
        setStats(res.stats);
        if (onNewCountChange) onNewCountChange(res.stats.newCount);
      }
    } catch {
      showToast('error', 'Failed to update status.');
    } finally {
      setStatusUpdatingId(null);
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async () => {
    if (!deletingInquiry) return;
    try {
      await adminApi.deleteInquiry(deletingInquiry._id);
      showToast('success', `Inquiry from ${deletingInquiry.name} deleted.`);
      setDeletingInquiry(null);
      if (selectedInquiry?._id === deletingInquiry._id) {
        setSelectedInquiry(null);
      }
      fetchInquiries();
    } catch {
      showToast('error', 'Failed to delete inquiry.');
    }
  };

  // Export CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      showToast('info', 'No inquiries to export.');
      return;
    }

    const headers = [
      'Inquiry ID',
      'Date',
      'Type',
      'Status',
      'Name',
      'Mobile',
      'Vehicle Type',
      'Pickup / Preferred Hub',
      'Drop Location',
      'Cargo Type / Notes',
      'Helper Needed',
      'Vehicle No',
    ];

    const rows = inquiries.map((inq) => [
      `"${inq._id}"`,
      `"${new Date(inq.createdAt).toLocaleString()}"`,
      `"${inq.type === 'customer' ? 'Customer Shipper' : 'Driver Partner'}"`,
      `"${inq.status}"`,
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.mobile}"`,
      `"${(inq.vehicleType || '').replace(/"/g, '""')}"`,
      `"${(inq.pickupLocation || inq.preferredHub || '').replace(/"/g, '""')}"`,
      `"${(inq.dropLocation || '').replace(/"/g, '""')}"`,
      `"${(inq.cargoType || inq.notes || '').replace(/"/g, '""')}"`,
      `"${inq.needHelper ? 'Yes' : 'No'}"`,
      `"${inq.vehicleNumber || ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shifter_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    showToast('success', 'Inquiries exported successfully!');
  };

  return (
    <section className="space-y-8">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-50 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold shadow-2xl backdrop-blur-md flex items-center gap-2.5 ${
              toast.type === 'success'
                ? 'bg-emerald-600 text-white'
                : toast.type === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-navy text-white'
            }`}
          >
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Inquiries */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Inquiries</p>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Layers size={18} />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{stats.total}</span>
            <span className="text-xs text-slate-400 font-medium">all time</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Shippers and Driver inquiries</div>
        </div>

        {/* Action Required / New */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 shadow-lg backdrop-blur-sm relative overflow-hidden">
          <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/10 blur-xl" />
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              Action Required
            </p>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <AlertCircle size={18} />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-300">{stats.newCount}</span>
            <span className="text-xs text-amber-200/80 font-bold">New Leads</span>
          </div>
          <div className="mt-2 text-[11px] text-amber-300/60">Awaiting callback or confirmation</div>
        </div>

        {/* Customer / Shifting */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Customer Bookings</p>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange border border-orange/20">
              <Package size={18} />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{stats.customerCount}</span>
            <span className="text-xs text-slate-400 font-medium">Goods Shippers</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Indore commercial &amp; shifting</div>
        </div>

        {/* Driver Partners */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Driver Partners</p>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Truck size={18} />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{stats.driverCount}</span>
            <span className="text-xs text-slate-400 font-medium">Vehicle Attach</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Tata Ace, Pickups &amp; 3W drivers</div>
        </div>
      </div>

      {/* Control Bar: Search, Filters & Export */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, mobile, vehicle, area..."
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-2xs"
            >
              <Download size={14} className="text-orange" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={() => fetchInquiries()}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-2xs disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin text-orange' : 'text-slate-400'} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Filter Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800 text-xs">
          {/* Type Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-bold mr-1 flex items-center gap-1">
              <Filter size={12} /> Type:
            </span>
            {(['all', 'customer', 'driver'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTypeFilter(t)}
                className={`rounded-lg px-3 py-1 font-extrabold capitalize transition-all ${
                  typeFilter === t
                    ? 'bg-orange text-white shadow-2xs'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {t === 'all' ? 'All Inquiries' : t === 'customer' ? '📦 Customers' : '🚚 Drivers'}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-bold mr-1">Status:</span>
            {(['all', 'New', 'Contacted', 'Closed'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={`rounded-lg px-3 py-1 font-extrabold transition-all ${
                  statusFilter === s
                    ? 'bg-royal text-white shadow-2xs'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {s === 'all' ? 'All Status' : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiries Table / Cards Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl backdrop-blur-sm">
        {loading ? (
          <div className="py-20 text-center">
            <RefreshCw size={32} className="mx-auto animate-spin text-orange" />
            <p className="mt-3 text-xs font-bold text-slate-400">Loading inquiries from server...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-800 text-slate-500">
              <Layers size={28} />
            </div>
            <h4 className="text-base font-bold text-white">No Inquiries Found</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No inquiries match your current filters. Try resetting search or check back when clients submit the Inquire Now modal.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-[11px] font-black uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Client / Driver</th>
                  <th className="py-3.5 px-4">Vehicle Requested</th>
                  <th className="py-3.5 px-4">Route / Preferred Hub</th>
                  <th className="py-3.5 px-4">Details</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 font-medium">
                {inquiries.map((inq) => {
                  const isCustomer = inq.type === 'customer';
                  const dateStr = new Date(inq.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  });

                  return (
                    <tr
                      key={inq._id}
                      className="hover:bg-slate-800/40 transition-colors group text-slate-300"
                    >
                      {/* Status Dropdown */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <select
                          value={inq.status}
                          disabled={statusUpdatingId === inq._id}
                          onChange={(e) => handleStatusChange(inq._id, e.target.value as InquiryStatus)}
                          className={`rounded-lg px-2.5 py-1 text-[11px] font-black uppercase tracking-wider border cursor-pointer focus:outline-none transition-all ${
                            inq.status === 'New'
                              ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                              : inq.status === 'Contacted'
                              ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                              : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          }`}
                        >
                          <option value="New" className="bg-slate-900 text-amber-400">New</option>
                          <option value="Contacted" className="bg-slate-900 text-blue-400">Contacted</option>
                          <option value="Closed" className="bg-slate-900 text-emerald-400">Closed</option>
                        </select>
                      </td>

                      {/* Type Pill */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider border ${
                            isCustomer
                              ? 'bg-orange/15 text-orange border-orange/25'
                              : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25'
                          }`}
                        >
                          {isCustomer ? <Package size={12} /> : <Truck size={12} />}
                          <span>{isCustomer ? 'Customer' : 'Driver Partner'}</span>
                        </span>
                      </td>

                      {/* Client / Driver Info & 1-tap Actions */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white text-sm">{inq.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-slate-400 font-semibold text-xs">+91 {inq.mobile}</span>
                          <a
                            href={`tel:${inq.mobile}`}
                            title="Call client"
                            className="grid h-6 w-6 place-items-center rounded-md bg-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
                          >
                            <Phone size={12} />
                          </a>
                          <a
                            href={`https://wa.me/91${inq.mobile}?text=${encodeURIComponent(
                              `Hello ${inq.name}! 🚚\nThis is Shifter Online Indore operations desk regarding your inquiry for ${inq.vehicleType || 'goods transport'}. How can we assist you today?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Message on WhatsApp"
                            className="grid h-6 w-6 place-items-center rounded-md bg-slate-800 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                          >
                            <MessageSquare size={12} />
                          </a>
                        </div>
                      </td>

                      {/* Vehicle Requested / Owned */}
                      <td className="py-3.5 px-4 font-bold text-slate-200">
                        <div>{inq.vehicleType || 'Any / Not specified'}</div>
                        {inq.vehicleNumber && (
                          <div className="text-[10px] text-slate-400 uppercase mt-0.5">
                            Reg: {inq.vehicleNumber}
                          </div>
                        )}
                      </td>

                      {/* Route or Preferred Hub */}
                      <td className="py-3.5 px-4">
                        {isCustomer ? (
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 text-slate-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                              <span className="truncate max-w-[160px]">{inq.pickupLocation || 'Indore'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                              <span className="truncate max-w-[160px]">{inq.dropLocation || 'Indore'}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="text-slate-300 font-medium">
                            <span className="text-slate-500 block text-[10px] uppercase font-bold">Preferred Hub</span>
                            <span>{inq.preferredHub || 'Anywhere in Indore'}</span>
                          </div>
                        )}
                      </td>

                      {/* Details / Cargo */}
                      <td className="py-3.5 px-4">
                        {isCustomer ? (
                          <div>
                            <span className="block text-slate-300 font-semibold">{inq.cargoType || 'General Cargo'}</span>
                            <span className="text-[10px] text-slate-400">
                              Helper: {inq.needHelper ? '✅ Required' : '❌ Not needed'}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <span className="block text-slate-300 font-semibold">
                              {inq.hasDocuments ? '✅ DL & RC Verified' : '⚠️ Pending Docs'}
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-400 font-medium text-[11px]">
                        {dateStr}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedInquiry(inq)}
                            title="View Full Details"
                            className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
                          >
                            <Eye size={14} />
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeletingInquiry(inq)}
                            title="Delete Inquiry"
                            className="grid h-8 w-8 place-items-center rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all border border-red-500/20"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ====================================================
          MODAL: VIEW FULL INQUIRY DETAILS
      ==================================================== */}
      <AnimatePresence>
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange/20 text-orange">
                    {selectedInquiry.type === 'customer' ? <Package size={18} /> : <Truck size={18} />}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Inquiry Details</h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      Received {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedInquiry(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Inquiry Details Content */}
              <div className="space-y-4 text-xs">
                {/* Client Box */}
                <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      {selectedInquiry.type === 'customer' ? 'Customer Name' : 'Driver Partner Name'}
                    </span>
                    <h4 className="text-lg font-black text-white">{selectedInquiry.name}</h4>
                    <p className="text-xs font-bold text-orange mt-0.5">+91 {selectedInquiry.mobile}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${selectedInquiry.mobile}`}
                      className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white shadow-soft hover:bg-emerald-500 transition-all"
                    >
                      <Phone size={13} />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/91${selectedInquiry.mobile}?text=${encodeURIComponent(
                        `Hello ${selectedInquiry.name}! 🚚 This is Shifter Online dispatch team regarding your inquiry.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-bold text-white shadow-soft hover:bg-[#1EBE5D] transition-all"
                    >
                      <MessageSquare size={13} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-950/70 p-3 border border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Vehicle</span>
                    <p className="text-sm font-bold text-slate-200 mt-1">{selectedInquiry.vehicleType || 'N/A'}</p>
                    {selectedInquiry.vehicleNumber && (
                      <p className="text-[11px] text-slate-400 mt-0.5">Reg: {selectedInquiry.vehicleNumber}</p>
                    )}
                  </div>

                  <div className="rounded-xl bg-slate-950/70 p-3 border border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Inquiry Type</span>
                    <p className="text-sm font-bold text-orange mt-1 capitalize">
                      {selectedInquiry.type === 'customer' ? 'Goods Shipper' : 'Driver Partner'}
                    </p>
                  </div>
                </div>

                {/* Location Box */}
                {selectedInquiry.type === 'customer' ? (
                  <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 mt-1 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">Pickup (Indore)</span>
                        <p className="text-xs font-bold text-slate-200">{selectedInquiry.pickupLocation || 'Indore'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange mt-1 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">Drop (Indore)</span>
                        <p className="text-xs font-bold text-slate-200">{selectedInquiry.dropLocation || 'Indore'}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Preferred Corridor</span>
                    <p className="text-xs font-bold text-slate-200 mt-1">{selectedInquiry.preferredHub}</p>
                  </div>
                )}

                {/* Extra Notes */}
                {selectedInquiry.notes && (
                  <div className="rounded-xl bg-slate-950/70 p-3 border border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Client Note</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedInquiry.notes}</p>
                  </div>
                )}

                {/* Status Update Quick Bar */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold">Change Status:</span>
                  <div className="flex items-center gap-1.5">
                    {(['New', 'Contacted', 'Closed'] as const).map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => handleStatusChange(selectedInquiry._id, st)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold border transition-all ${
                          selectedInquiry.status === st
                            ? 'bg-orange text-white border-orange shadow-soft'
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====================================================
          MODAL: DELETE INQUIRY CONFIRMATION
      ==================================================== */}
      <AnimatePresence>
        {deletingInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl text-center space-y-4"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
                <Trash2 size={22} />
              </div>

              <div>
                <h4 className="text-base font-black">Delete Inquiry?</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Are you sure you want to remove the inquiry from{' '}
                  <strong className="text-white font-bold">{deletingInquiry.name}</strong>? This action cannot be undone.
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setDeletingInquiry(null)}
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-800 py-2.5 text-xs font-bold text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDeleteInquiry}
                  className="flex-1 rounded-xl bg-red-600 py-2.5 text-xs font-bold text-white shadow-soft hover:bg-red-500"
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
