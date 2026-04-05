import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const dataOkupansi = [
  { jam: '12:00', okupansi: 15 },
  { jam: '14:00', okupansi: 25 },
  { jam: '16:00', okupansi: 45 },
  { jam: '18:00', okupansi: 75 },
  { jam: '20:00', okupansi: 90 }, // Titik Puncak
  { jam: '22:00', okupansi: 60 },
  { jam: '24:00', okupansi: 30 },
];

export default function GrafikOkupansi() {
  return (
    <div className="w-full h-[180px] text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dataOkupansi} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
          <XAxis dataKey="jam" stroke="#9CA3AF" tickLine={false} />
          <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} domain={[0, 100]} />
          
          {/* Tooltip Kustom saat dihover */}
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border border-gray-100 shadow-sm rounded-lg">
                    <p className="font-bold text-gray-800">{`${payload[0].value}% Kursi`}</p>
                  </div>
                );
              }
              return null;
            }}
          />

          {/* Garis Batas Aman 40% */}
          <ReferenceLine y={40} stroke="#EF4444" strokeDasharray="4 4" label={{ value: 'Batas Aman', position: 'insideBottomLeft', fill: '#EF4444', fontSize: 10 }} />

          {/* Grafik Utama */}
          <Area type="monotone" dataKey="okupansi" stroke="#2563EB" strokeWidth={2} fill="url(#colorOkupansi)" fillOpacity={0.1} />
          
          <defs>
            <linearGradient id="colorOkupansi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}