// components/ui/kpi-card.jsx
'use client';

import { TrendingUp, TrendingDown, Minus, DollarSign, Ticket, Building2, Percent } from 'lucide-react';

const iconMap = {
  "Total Tiket Terjual": Ticket,
  "Total Pendapatan": DollarSign,
  "Franchise Aktif": Building2,
  "Rata-rata Okupansi": Percent,
};

// Fungsi pembantu untuk menyingkat angka besar (Rupiah)
function formatLargeNumber(val, prefix) {
  if (typeof val !== 'number') return val;
  
  if (prefix === 'Rp ' && val >= 1000000) {
    const millions = val / 1000000;
    // Jika pas bulat misal 726 Jt, tampilkan tanpa desimal. Jika ada desimal, batasi 1 angka.
    return `${prefix}${millions % 1 === 0 ? millions : millions.toFixed(1)} Jt`;
  }
  
  return `${prefix}${val.toLocaleString('id-ID')}`;
}

export default function KpiCard({ title, value, percentageChange, isPositive, prefix = "" }) {
  const Icon = iconMap[title] || Building2;
  const displayValue = formatLargeNumber(value, prefix);

  return (
    <div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-xs font-medium text-neutral-500 truncate">{title}</p>
        <div className="bg-neutral-100 p-1.5 rounded-lg flex-shrink-0">
          <Icon className="w-4 h-4 text-neutral-500" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-2">
        {/* text-2xl diturunkan dari text-3xl agar muat satu baris */}
        <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
          {displayValue}
        </h3>
      </div>
      
      <div className={`flex items-center text-xs font-semibold gap-1 ${
        percentageChange === 0
          ? 'text-neutral-500'
          : isPositive 
            ? 'text-green-600' 
            : 'text-red-600'
      }`}>
        {percentageChange === 0 ? (
          <Minus className="w-3.5 h-3.5" />
        ) : isPositive ? (
          <TrendingUp className="w-3.5 h-3.5" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5" />
        )}
        <span>{percentageChange > 0 ? '+' : ''}{percentageChange}%</span>
        <span className="text-neutral-400 font-normal ml-0.5">vs periode lalu</span>
      </div>
    </div>
  );
}