// app/(dashboard)/sales-analytics/page.jsx
export default function SalesAnalyticsPage() {
  return (
    <div className="space-y-10">
      {/* 1. Header & Filter */}
      <div className="flex items-center justify-between gap-6 pb-4 border-b border-neutral-100">
        <div>
          <h1 className="text-3xl font-bold text-neutral-950">Sales Analytics</h1>
          <p className="text-neutral-600 mt-1">Memonitor data berdasarkan filter yang ditentukan.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-40 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">[ Filter Periode ]</div>
          <div className="h-10 w-40 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">[ Filter Kota ]</div>
          <div className="h-10 w-40 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">[ Filter Cabang ]</div>
        </div>
      </div>

      {/* 2. Top 3 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Total Tiket ]</div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Total Revenue ]</div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Rata-rata per Hari ]</div>
      </div>

      {/* 3. Grafik Garis Tren Tiket Harian */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[300px] flex items-center justify-center text-neutral-400">
        [ Line Chart: Tren Penjualan Tiket Harian ]
      </div>

      {/* 4. Grafik Batang Revenue Tahunan */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[300px] flex flex-col gap-4">
        <h3 className="font-semibold text-neutral-950">Revenue Tahunan</h3>
        <div className="flex-1 flex items-center justify-center text-neutral-400">[ Bar Chart: Revenue Bulanan ]</div>
      </div>

      {/* 5. Baris Revenue per Film & Okupansi per Bioskop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[350px] flex flex-col gap-4">
          <h3 className="font-semibold text-neutral-950">Revenue per Film</h3>
          <div className="flex-1 flex items-center justify-center text-neutral-400">[ Horizontal Bar Chart: Revenue ]</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[350px] flex flex-col gap-4">
          <h3 className="font-semibold text-neutral-950">Okupansi per Bioskop</h3>
          <div className="flex-1 flex items-center justify-center text-neutral-400">[ List Bioskop & Progress Bar Okupansi ]</div>
        </div>
      </div>

      {/* 6. Jam Puncak (Peak Hours) */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[300px] flex flex-col gap-4">
        <h3 className="font-semibold text-neutral-950">Jam Puncak (Peak Hours)</h3>
        <div className="flex-1 flex items-center justify-center text-neutral-400">[ Vertical Bar Chart: Tiket Terjual per Jam ]</div>
      </div>

      {/* 7. Jadwal Bermasalah */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[400px] flex flex-col gap-4">
        <h3 className="font-semibold text-neutral-950">Daftar Jadwal Bermasalah</h3>
        <div className="flex-1 flex items-center justify-center text-neutral-400">[ Tabel Jadwal Bermasalah ]</div>
      </div>
    </div>
  );
}