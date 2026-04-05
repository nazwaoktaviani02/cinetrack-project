// app/(dashboard)/dashboard/page.jsx
'use client';

import { useState, useEffect } from 'react';
import KpiCard from '../../../components/ui/kpi-card';
import dynamic from 'next/dynamic';
import GrafikOkupansi from '../../../components/dashboard/grafik-okupansi';

const MapInteraktif = dynamic(
  () => import('@/components/MapInteraktif'),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 animate-pulse flex items-center justify-center rounded-xl mt-4">
        <span className="text-gray-400 font-medium">Memuat Peta...</span>
      </div>
    ) 
  }
);

export default function DashboardPage() {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data dari backend
    async function fetchDashboardData() {
      try {
        // Ganti URL ini dengan URL backend aslimu (misal: http://localhost:3000)
        const response = await fetch('https://capstone-project-api-cinetrack.vercel.app/stats/summary?compare=true');
        const result = await response.json();
        setSummaryData(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data dashboard:", error);
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-neutral-500">
        Memuat data dashboard...
      </div>
    );
  }

  // Jika gagal ambil data atau data kosong, kita pakai data fallback (cadangan) agar tidak error blank
  const data = summaryData || {
    total_tickets: 0,
    revenue: 0,
    cinema_aktif: 0,
    occupancy: 0,
    growth: { tickets: 0, revenue: 0, occupancy: 0 }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* --- BARIS 1: HEADER & FILTER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Ringkasan Operasional Bioskop</h1>
          <p className="text-sm text-gray-500">Pantau seluruh performa operasional bioskop Anda.</p>
        </div>
        {/* Tempat komponen filter (Tanggal, Kota, Cabang) */}
        <div className="flex gap-2">
          <div className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-500">[ Filter Periode ]</div>
          <div className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-500">[ Filter Kota ]</div>
          <div className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-500">[ Filter Cabang ]</div>
        </div>
      </div>

      {/* --- BARIS 2: 4 KARTU KPI --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Tiket Terjual" value="24,891" percentageChange={12.5} isPositive={true} />
        <KpiCard title="Total Pendapatan" value="Rp 1.24 M" percentageChange={8.3} isPositive={true} />
        <KpiCard title="Franchise Aktif" value="12/15" percentageChange={0} isPositive={true} />
        <KpiCard title="Rata-rata Okupansi" value="73.2" suffix="%" percentageChange={-2.4} isPositive={false} />
      </div>

      {/* --- BARIS 3: WAWASAN & NOTIFIKASI (AI GENERATED) --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

        {/* Header Seksi */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-800">Wawasan Kecerdasan Operasional</h2>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-md">AI Generated</span>
            </div>
            {/* Teks Penjelas untuk Manajer */}
            <p className="text-sm text-gray-500 mt-1">
              Menampilkan <span className="font-semibold text-gray-700">3 dari 15 kota</span> dengan prioritas tindakan tertinggi (Periode 22 Feb - 7 Mar 2026).
            </p>
          </div>
          <button className="text-sm text-blue-600 font-medium hover:underline">Lihat Semua</button>
        </div>

        {/* Konten Grid 3 Kolom untuk 3 Kota */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          {/* KOTA 1: KRITIS */}
          <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col justify-between">
            <div className="space-y-4 text-xs text-gray-700">
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="font-bold text-gray-800 text-sm">Semarang Central</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded whitespace-nowrap">Performa Kritis</span>
              </div>

              {/* Masalah (Bullet Point Emot) */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">🔴</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">MASALAH:</span> Okupansi studio di jam 12:00 - 15:00 cuma menyentuh <span className="font-bold text-red-600">18%</span>. Ini tidak menutup biaya operasional listrik dan AC studio.
                </p>
              </div>

              {/* Rekomendasi (Bullet Point Emot) */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">💡</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">REKOMENDASI (Harga & Promosi):</span> Buat promo "Matinee" diskon 15% khusus show siang untuk mendongkrak okupansi ke angka aman minimal 40%.
                </p>
              </div>
            </div>
          </div>

          {/* KOTA 2: KRITIS */}
          <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col justify-between">
            <div className="space-y-4 text-xs text-gray-700">
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="font-bold text-gray-800 text-sm">Makassar Mall</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded whitespace-nowrap">Performa Kritis</span>
              </div>

              {/* Masalah */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">🔴</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">MASALAH:</span> Terjadi <span className="font-bold text-red-600">3 pembatalan jadwal</span> mendadak dalam 2 hari terakhir akibat kendala teknis proyektor di Studio 2.
                </p>
              </div>

              {/* Rekomendasi */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">💡</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">REKOMENDASI (Operasional):</span> Jadwalkan maintenance darurat untuk Studio 2 Makassar dan alihkan pemesanan tiket ke studio reguler lainnya.
                </p>
              </div>
            </div>
          </div>

          {/* KOTA 3: TERBAIK */}
          <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col justify-between">
            <div className="space-y-4 text-xs text-gray-700">
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="font-bold text-gray-800 text-sm">Jakarta Barat</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs font-semibold rounded whitespace-nowrap">Peluang Tinggi</span>
              </div>

              {/* Fakta */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">🟢</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">FAKTA:</span> Film "Dune: Bagian Tiga" selalu menyentuh okupansi <span className="font-bold text-green-600">92%</span> di akhir pekan, menyebabkan banyak calon penonton kehabisan tiket.
                </p>
              </div>

              {/* Rekomendasi */}
              <div className="flex items-start gap-2">
                <span className="text-sm leading-none mt-0.5">💡</span>
                <p className="leading-relaxed text-justify">
                  <span className="font-bold text-gray-900 tracking-wide">REKOMENDASI (Jadwal & Studio):</span> Tambah 2 jadwal tayang (show) ekstra dengan mengorbankan 1 studio film indie yang okupansinya di bawah 20%.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* --- BARIS 4: PETA FRANCHISE --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="w-full text-left mb-4">
          <h2 className="text-lg font-bold text-gray-800">Peta Franchise - Indonesia</h2>
          <p className="text-sm text-gray-500">Arahkan kursor atau klik sebuah kota untuk melihat detail.</p>
        </div>
        <MapInteraktif />
      </div>

      {/* --- BARIS 5: KONTEN DETAIL (GRID 2 KOLOM) --- */}
      {/* --- BARIS BARU: GRID TABEL FILM & KOLOM KANAN (Rasio Diperbarui 7:5) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">

        {/* 1. Kiri: Top 5 Film Terlaris (Sekarang Mengambil 7 dari 12 Kolom) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Top 5 Film Terlaris</h2>
                <p className="text-sm text-gray-500">Berdasarkan jumlah tiket dan tingkat keterisian studio.</p>
              </div>
            </div>

            {/* Container Tabel */}
            <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="text-gray-500 border-b border-gray-100 uppercase tracking-wider sticky top-0 bg-white">
                  <tr>
                    <th className="py-3 px-2 text-center w-10">#</th>
                    <th className="py-3 px-2">Judul Film</th>
                    <th className="py-3 px-2">Genre</th>
                    <th className="py-3 px-2 text-right">Tiket</th>
                    <th className="py-3 px-2 text-center">Okupansi</th>
                    <th className="py-3 px-2 text-right">Pendapatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-gray-700">
                  {/* Film 1 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3 px-2 text-center font-bold text-gray-800">1</td>
                    <td className="py-3 px-2 font-semibold text-gray-800">Dune: Bagian Tiga</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">Sci-Fi</span></td>
                    <td className="py-3 px-2 text-right font-medium">4,820</td>
                    <td className="py-3 px-2 text-center font-medium text-green-600">88.4%</td>
                    <td className="py-3 px-2 text-right font-bold text-gray-800">Rp 241 Jt</td>
                  </tr>
                  {/* Film 2 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3 px-2 text-center font-bold text-gray-800">2</td>
                    <td className="py-3 px-2 font-semibold text-gray-800">Nusantara Chronicles</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs font-medium">Laga</span></td>
                    <td className="py-3 px-2 text-right font-medium">3,910</td>
                    <td className="py-3 px-2 text-center font-medium text-green-600">75.1%</td>
                    <td className="py-3 px-2 text-right font-bold text-gray-800">Rp 190 Jt</td>
                  </tr>
                  {/* Film 3 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3 px-2 text-center font-bold text-gray-800">3</td>
                    <td className="py-3 px-2 font-semibold text-gray-800">Avatar 3</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">Sci-Fi</span></td>
                    <td className="py-3 px-2 text-right font-medium">3,240</td>
                    <td className="py-3 px-2 text-center font-medium text-yellow-600">62.0%</td>
                    <td className="py-3 px-2 text-right font-bold text-gray-800">Rp 182 Jt</td>
                  </tr>
                  {/* Film 4 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3 px-2 text-center font-bold text-gray-800">4</td>
                    <td className="py-3 px-2 font-semibold text-gray-800">Kuntilanak Merah</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs font-medium">Horor</span></td>
                    <td className="py-3 px-2 text-right font-medium">2,810</td>
                    <td className="py-3 px-2 text-center font-medium text-green-600">91.5%</td>
                    <td className="py-3 px-2 text-right font-bold text-gray-800">Rp 126 Jt</td>
                  </tr>
                  {/* Film 5 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3 px-2 text-center font-bold text-gray-800">5</td>
                    <td className="py-3 px-2 font-semibold text-gray-800">Romansa di Batavia</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 bg-pink-50 text-pink-600 rounded text-xs font-medium">Drama</span></td>
                    <td className="py-3 px-2 text-right font-medium">1,450</td>
                    <td className="py-3 px-2 text-center font-medium text-red-600">32.4%</td>
                    <td className="py-3 px-2 text-right font-bold text-gray-800">Rp 65 Jt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2. Kanan: Gabungan Grafik + Status (Sekarang Mengambil 5 dari 12 Kolom) */}
        <div className="lg:col-span-5 flex flex-col gap-4">

          {/* Atas: Grafik Okupansi */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Okupansi Studio</h2>
              <p className="text-sm text-gray-500 mb-4">Tren rata-rata per jam tayang.</p>

              <div className="h-[150px] w-full flex flex-col justify-center items-center border border-dashed border-gray-200 rounded-lg bg-gray-50/50">
                <GrafikOkupansi />
              </div>
            </div>
          </div>

          {/* Bawah: Status Sistem */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-3">Status Sistem</h2>

            <div className="space-y-3 text-xs text-gray-600">
              {/* Status Server */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>⚡ Status Api:</span>
                </div>
                <span className="px-2 py-0.5 bg-green-100 text-green-600 font-bold rounded-md text-[10px]">AKTIF</span>
              </div>

              {/* Total Transaksi */}
              <div className="flex justify-between items-center border-t border-gray-50 pt-2">
                <span>📄 Transaksi 1 Jam Terakhir:</span>
                <span className="font-bold text-gray-800">1,204</span>
              </div>

              {/* Update Terakhir */}
              <div className="flex justify-between items-center border-t border-gray-50 pt-2">
                <span>🔄 Pembaruan Terakhir:</span>
                <span className="text-gray-500 italic">Berapa detik lalu</span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}