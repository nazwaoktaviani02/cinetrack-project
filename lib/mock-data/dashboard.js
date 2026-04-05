// lib/mock-data/dashboard.js

// Mock data reflecting 12 cinemas across 5 cities
export const kpiData = {
  totalTickets: {
    value: 14520,
    prevValue: 12400,
    percentageChange: 17.1,
    isPositive: true,
  },
  totalRevenue: {
    value: 726000000, // Rp 726.000.000
    prevValue: 650000000,
    percentageChange: 11.7,
    isPositive: true,
  },
  activeFranchises: {
    value: 12,
    prevValue: 12,
    percentageChange: 0,
    isPositive: true,
  },
  avgOccupancy: {
    value: 68.5,
    prevValue: 62.0,
    percentageChange: 6.5,
    isPositive: true,
  },
};

export const topFilms = [
  { id: 1, title: "Avatar: The Way of Water", tickets: 4200, revenue: 210000000 },
  { id: 2, title: "Kandahar", tickets: 3100, revenue: 155000000 },
  { id: 3, title: "Sewu Dino", tickets: 2800, revenue: 140000000 },
  { id: 4, title: "The Super Mario Bros. Movie", tickets: 2500, revenue: 125000000 },
  { id: 5, title: "Suzume", tickets: 1920, revenue: 96000000 },
];

export const occupancyByHour = {
  labels: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
  datasets: [
    {
      label: "Occupancy Rate (%)",
      data: [15, 30, 45, 55, 85, 90, 70, 40],
      borderColor: "rgb(59, 130, 246)", // Tailwind blue-500
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export const notificationsAndAlerts = [
  {
    id: 1,
    type: "warning",
    message: "Okupansi CGV Grand Indonesia di bawah 30% untuk penayangan jam 14:00.",
    cinemaId: "cgv-gi",
    timestamp: "10 mins ago",
  },
  {
    id: 2,
    type: "info",
    message: "Film 'Sewu Dino' mencapai target penjualan mingguan di semua cabang Bandung.",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "error",
    message: "Proyektor di Audi 3 XXI Mall Kelapa Gading mengalami gangguan teknis. Jadwal jam 16:00 tertunda.",
    cinemaId: "xxi-mkg",
    timestamp: "2 hours ago",
  },
];

export const franchiseLocations = [
  { id: "cgv-gi", name: "CGV Grand Indonesia", city: "Jakarta", lat: -6.1953, lng: 106.8231, status: "active", volume: 4200 },
  { id: "xxi-mkg", name: "XXI Mall Kelapa Gading", city: "Jakarta", lat: -6.1584, lng: 106.9089, status: "warning", volume: 3800 },
  { id: "cgv-pvj", name: "CGV Paris Van Java", city: "Bandung", lat: -6.8892, lng: 107.5959, status: "active", volume: 3100 },
  { id: "xxi-tps", name: "XXI Tunjungan Plaza", city: "Surabaya", lat: -7.2625, lng: 112.7383, status: "active", volume: 2900 },
  // We can add more to reach the 12 cinema count later!
];