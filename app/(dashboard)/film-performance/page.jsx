// app/(dashboard)/film-performance/page.jsx
export default function FilmPerformancePage() {
  return (
    <div className="space-y-10">
      {/* 1. Header & Filter */}
      <div className="flex items-center justify-between gap-6 pb-4 border-b border-neutral-100">
        <div>
          <h1 className="text-3xl font-bold text-neutral-950">Film Performance</h1>
          <p className="text-neutral-600 mt-1">Pantau performa film berdasarkan tiket yang disiapkan.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-40 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">[ Filter Film ]</div>
        </div>
      </div>

      {/* 2. Top 4 Small KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Total Film Tayang ]</div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Film Terlaris ]</div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Total Tiket Terjual ]</div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-28 flex items-center justify-center text-neutral-400">[ KPI: Genre Terpopuler ]</div>
      </div>

      {/* 3. Baris Top Film & Kartu Film di Samping */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Grafik Batang Merah (Lebar 2/3) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[400px] flex items-center justify-center text-neutral-400">
          [ Horizontal Bar Chart: TOP FILM - TIKET TERJUAL ]
        </div>
        {/* List Kartu Film Mini (Lebar 1/3) */}
        <div className="space-y-4 h-[400px] overflow-y-auto">
          <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm h-[120px] flex items-center justify-center text-neutral-400">[ Film 1: Kung Fu Panda 4 ]</div>
          <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm h-[120px] flex items-center justify-center text-neutral-400">[ Film 2: Munkar ]</div>
          <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm h-[120px] flex items-center justify-center text-neutral-400">[ Film 3: Siksa Kubur ]</div>
        </div>
      </div>

      {/* 4. Baris Grafik Warna-Warni & Tabel */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
        <div className="h-[200px] flex items-center justify-center text-neutral-400 border-b border-neutral-100">
          [ Chart: Penjualan Per Film (Multi-color bar) ]
        </div>
        <div className="h-[250px] flex items-center justify-center text-neutral-400">
          [ Tabel Data Penjualan Lengkap ]
        </div>
      </div>

      {/* 5. Baris Grafik Oranye & Status Okupansi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-[350px] flex items-center justify-center text-neutral-400">
          [ Horizontal Bar Chart (Oranye): OKUPANSI PER FILM ]
        </div>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-[165px] flex items-center justify-center text-neutral-400">[ Okupansi Tertinggi ]</div>
          <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm h-[165px] flex items-center justify-center text-neutral-400">[ Perlu Perhatian ]</div>
        </div>
      </div>
    </div>
  );
}