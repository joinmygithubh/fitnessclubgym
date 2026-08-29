import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { createGalleryItemAdminApi, deleteGalleryItemAdminApi } from '../services/galleryService';
import { updateContactStatusAdminApi } from '../services/contactService';
import { updateMembershipStatusAdminApi } from '../services/membershipService';
import { Shield, Users, CreditCard, Image as ImageIcon, Mail, Trash2, Plus, RefreshCw } from 'lucide-react';

const Admin = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';

  const [statsData, setStatsData] = useState(null);
  const [memberships, setMemberships] = useState([]);
  const [users, setUsers] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);

  // Gallery form state
  const [newGallery, setNewGallery] = useState({ title: '', imageUrl: '', category: 'Gym Facilities' });

  const fetchData = async () => {
    setLoading(true);
    try {
      if (currentTab === 'overview') {
        const res = await api.get('/admin/stats');
        if (res.success) setStatsData(res.data);
      } else if (currentTab === 'memberships') {
        const res = await api.get('/admin/memberships');
        if (res.success) setMemberships(res.data);
      } else if (currentTab === 'users') {
        const res = await api.get('/admin/users');
        if (res.success) setUsers(res.data);
      } else if (currentTab === 'gallery') {
        const res = await api.get('/gallery');
        if (res.success) setGalleryItems(res.data);
      } else if (currentTab === 'contact') {
        const res = await api.get('/contact');
        if (res.success) setContacts(res.data);
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'Failed to load admin data' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentTab]);

  const handleUpdateMembership = async (id, status, paymentStatus) => {
    try {
      const res = await updateMembershipStatusAdminApi(id, { status, paymentStatus });
      if (res.success) {
        setMsg({ type: 'success', text: 'Membership updated successfully' });
        fetchData();
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const handleUpdateContactStatus = async (id, status) => {
    try {
      const res = await updateContactStatusAdminApi(id, { status });
      if (res.success) {
        setMsg({ type: 'success', text: 'Inquiry status updated' });
        fetchData();
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const handleAddGallery = async (e) => {
    e.preventDefault();
    try {
      const res = await createGalleryItemAdminApi(newGallery);
      if (res.success) {
        setMsg({ type: 'success', text: 'Gallery item added' });
        setNewGallery({ title: '', imageUrl: '', category: 'Gym Facilities' });
        fetchData();
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const handleDeleteGallery = async (id) => {
    if (!window.confirm('Delete this gallery image?')) return;
    try {
      const res = await deleteGalleryItemAdminApi(id);
      if (res.success) {
        setMsg({ type: 'success', text: 'Gallery item deleted' });
        fetchData();
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="editorial-tag text-amber-500 text-xs block mb-1">CONTROL PANEL</span>
          <h1 className="text-3xl font-display font-extrabold text-white tracking-tight uppercase">
            FITNESS CLUB <span className="gold-gradient-text">DASHBOARD</span>
          </h1>
        </div>

        <button
          onClick={fetchData}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#11141c] hover:bg-white/10 border border-white/10 text-slate-200 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-colors shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" /> REFRESH DATA
        </button>
      </div>

      {msg && (
        <div
          className={`p-4 rounded-2xl text-xs font-semibold flex items-center justify-between ${
            msg.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'
          }`}
        >
          <span>{msg.text}</span>
          <button onClick={() => setMsg(null)} className="text-xs underline font-bold">Dismiss</button>
        </div>
      )}

      {/* Tab Content */}
      {loading ? (
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* TAB 1: OVERVIEW */}
          {currentTab === 'overview' && statsData && (
            <div className="space-y-8">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-3xl bg-[#11141c] border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="editorial-tag text-[10px] text-slate-400">REGISTERED MEMBERS</span>
                    <Users className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-display font-extrabold text-3xl text-white">{statsData.stats.totalUsers}</span>
                </div>

                <div className="p-6 rounded-3xl bg-[#11141c] border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="editorial-tag text-[10px] text-slate-400">ACTIVE MEMBERSHIPS</span>
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-display font-extrabold text-3xl text-white">{statsData.stats.activeMemberships}</span>
                </div>

                <div className="p-6 rounded-3xl bg-[#11141c] border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="editorial-tag text-[10px] text-slate-400">UNREAD INQUIRIES</span>
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-display font-extrabold text-3xl text-white">{statsData.stats.unreadInquiries}</span>
                </div>

                <div className="p-6 rounded-3xl bg-[#11141c] border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="editorial-tag text-[10px] text-slate-400">GALLERY ITEMS</span>
                    <ImageIcon className="w-5 h-5 text-sky-400" />
                  </div>
                  <span className="font-display font-extrabold text-3xl text-white">{statsData.stats.totalGalleryItems}</span>
                </div>
              </div>

              {/* Recent Memberships */}
              <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
                <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">Recent Membership Requests</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-[#08090c] text-slate-400 text-xs uppercase font-display">
                      <tr>
                        <th className="p-3">User</th>
                        <th className="p-3">Plan</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Payment</th>
                        <th className="p-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {statsData.recentMemberships.map((m) => (
                        <tr key={m._id}>
                          <td className="p-3 font-semibold text-white">{m.user?.name || 'Unknown'}</td>
                          <td className="p-3 text-slate-300">{m.plan}</td>
                          <td className="p-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${m.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                              {m.status}
                            </span>
                          </td>
                          <td className="p-3 text-xs">{m.paymentStatus}</td>
                          <td className="p-3 text-xs text-slate-500">{new Date(m.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEMBERSHIPS */}
          {currentTab === 'memberships' && (
            <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">All Membership Records</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-[#08090c] text-slate-400 text-xs uppercase font-display">
                    <tr>
                      <th className="p-3">User</th>
                      <th className="p-3">Contact</th>
                      <th className="p-3">Plan</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Payment</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {memberships.map((m) => (
                      <tr key={m._id}>
                        <td className="p-3 font-semibold text-white">{m.user?.name || 'User'}</td>
                        <td className="p-3 text-xs text-slate-400">{m.user?.phone || m.user?.email}</td>
                        <td className="p-3 text-slate-300">{m.plan}</td>
                        <td className="p-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${m.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                            {m.status}
                          </span>
                        </td>
                        <td className="p-3 text-xs">{m.paymentStatus}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUpdateMembership(m._id, 'active', 'paid')}
                              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full"
                            >
                              Approve Active
                            </button>
                            <button
                              onClick={() => handleUpdateMembership(m._id, 'cancelled', 'failed')}
                              className="px-3 py-1 bg-white/5 hover:bg-red-600 text-slate-300 hover:text-white font-bold text-xs rounded-full border border-white/10"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: USERS */}
          {currentTab === 'users' && (
            <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">Registered System Users</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-[#08090c] text-slate-400 text-xs uppercase font-display">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Role</th>
                      <th className="p-3">Joined Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {users.map((u) => (
                      <tr key={u._id}>
                        <td className="p-3 font-semibold text-white">{u.name}</td>
                        <td className="p-3 text-slate-300">{u.email}</td>
                        <td className="p-3 text-slate-400">{u.phone || 'N/A'}</td>
                        <td className="p-3">
                          <span className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${u.role === 'admin' ? 'bg-amber-500 text-black' : 'bg-white/10 text-slate-300'}`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {currentTab === 'gallery' && (
            <div className="space-y-8">
              {/* Add New Form */}
              <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
                <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider flex items-center gap-2">
                  <Plus className="w-5 h-5 text-amber-500" /> Add New Gallery Item
                </h3>
                <form onSubmit={handleAddGallery} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Image Title"
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                    className="bg-[#08090c] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:border-amber-500 font-sans"
                  />
                  <input
                    type="url"
                    required
                    placeholder="Image URL (Unsplash or Cloudinary)"
                    value={newGallery.imageUrl}
                    onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })}
                    className="bg-[#08090c] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:border-amber-500 font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full py-3 transition-all shadow-md"
                  >
                    ADD IMAGE
                  </button>
                </form>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div key={item._id} className="p-5 rounded-3xl bg-[#11141c] border border-white/10 space-y-3">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-44 object-cover rounded-2xl bg-black" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-extrabold text-white text-sm uppercase">{item.title}</h4>
                        <span className="editorial-tag text-[9px] text-amber-500 block">{item.category}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteGallery(item._id)}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT */}
          {currentTab === 'contact' && (
            <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">Contact Form Inquiries</h3>
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c._id} className="p-6 rounded-2xl bg-[#08090c] border border-white/10 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white text-base">{c.name}</span>
                        <span className="text-xs text-slate-400 ml-2">({c.email} | {c.phone})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${c.status === 'unread' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                          {c.status}
                        </span>
                        <button
                          onClick={() => handleUpdateContactStatus(c._id, 'read')}
                          className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-full text-slate-300 border border-white/10"
                        >
                          Mark Read
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 bg-[#11141c] p-4 rounded-xl border border-white/10 font-sans">
                      "{c.message}"
                    </p>
                    <span className="text-[10px] text-slate-500 block">Received: {new Date(c.createdAt).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default Admin;
