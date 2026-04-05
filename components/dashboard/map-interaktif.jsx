"use client";
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Plugin Cluster
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

// Logika mendaftarkan ulang ikon bawaan Leaflet yang bersih
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Data bioskop (Sudah ditambah menjadi 9 titik biar ramai)
const cinemaData = [
  { id: 1, name: "Pontianak Mall", city: "Pontianak", lat: -0.0263, lng: 109.3425, tickets: 4000, revenue: 140000000, occupancy: 72 },
  
  // Klaster Semarang (Ada 1 yang kritis 18%)
  { id: 2, name: "Semarang Central", city: "Semarang", lat: -6.9666, lng: 110.4166, tickets: 2500, revenue: 85000000, occupancy: 18 },
  { id: 3, name: "Semarang Paragon", city: "Semarang", lat: -6.9801, lng: 110.4101, tickets: 3000, revenue: 90000000, occupancy: 60 },
  { id: 4, name: "Semarang Town Square", city: "Semarang", lat: -6.9950, lng: 110.4300, tickets: 1500, revenue: 50000000, occupancy: 45 },
  
  // Tambahan titik baru agar peta ramai
  { id: 5, name: "Palembang Icon", city: "Palembang", lat: -2.9760, lng: 104.7754, tickets: 3200, revenue: 110000000, occupancy: 65 },
  { id: 6, name: "Makassar Mall", city: "Makassar", lat: -5.1476, lng: 119.4327, tickets: 2100, revenue: 75000000, occupancy: 55 },
  { id: 7, name: "Grand Indonesia", city: "Jakarta", lat: -6.1950, lng: 106.8230, tickets: 5000, revenue: 180000000, occupancy: 85 },
  { id: 8, name: "Surabaya Plaza", city: "Surabaya", lat: -7.2654, lng: 112.7483, tickets: 2800, revenue: 95000000, occupancy: 50 },
  { id: 9, name: "Denpasar Arcade", city: "Bali", lat: -8.6705, lng: 115.2126, tickets: 1900, revenue: 65000000, occupancy: 40 },
];

function MarkerClusterCustom({ markers }) {
  const map = useMap();

  useEffect(() => {
    // Inisialisasi cluster dengan aturan warna dinamis
    const clusterGroup = L.markerClusterGroup({
      chunkedLoading: true,
      showCoverageOnHover: false,
      
      // LOGIKA KOTAK SOLUSI TENGAH KITA:
      iconCreateFunction: function (cluster) {
        const childMarkers = cluster.getAllChildMarkers();
        let hasCritical = false;

        // Mengecek apakah ada salah satu anak marker yang kritis
        childMarkers.forEach(m => {
          if (m.options.occupancy < 20) {
            hasCritical = true;
          }
        });

        const count = cluster.getChildCount();
        
        // Kalau ada yang kritis, kasih warna merah. Kalau aman, biarkan hijau/biru bawaan.
        const c = hasCritical ? 'bg-red-500 border-4 border-red-200' : 'bg-green-500 border-4 border-green-200';

        return L.divIcon({
          html: `<div class="flex items-center justify-center text-white font-bold text-sm w-10 h-10 rounded-full ${c}"><span>${count}</span></div>`,
          className: 'custom-cluster-icon',
          iconSize: L.point(40, 40)
        });
      }
    });

    // Menambahkan Marker & Tooltip
    markers.forEach(data => {
      // Kita selipkan properti occupancy ke marker options agar bisa dibaca fungsi cluster
      const marker = L.marker([data.lat, data.lng], { occupancy: data.occupancy });
      
      // Format Tooltip Hover yang rapi
      marker.bindTooltip(`
        <div class="p-2 min-w-[200px]">
          <h3 class="font-bold text-red-500 text-lg mb-2">${data.name}</h3>
          <div class="space-y-1 text-sm text-gray-700">
            <div class="flex justify-between"><span>Kota</span><span class="font-semibold">${data.city}</span></div>
            <div class="flex justify-between"><span>Tiket Terjual</span><span class="font-semibold">${data.tickets.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between"><span>Revenue</span><span class="font-semibold">Rp ${data.revenue.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between items-center gap-2">
              <span>Okupansi</span>
              <div class="flex items-center gap-1">
                <span class="font-semibold">${data.occupancy}%</span>
                <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-red-500" style="width: ${data.occupancy}%"></div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2 italic">*Klik untuk detail</p>
        </div>
      `, { direction: 'top', offset: [0, -10], opacity: 1 });

      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [map, markers]);

  return null;
}

export default function InteractiveMap() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-4 relative z-10">
      <MapContainer 
        center={[-2.5, 118.0]} 
        zoom={5}               
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        />
        <MarkerClusterCustom markers={cinemaData} />
      </MapContainer>
    </div>
  );
}