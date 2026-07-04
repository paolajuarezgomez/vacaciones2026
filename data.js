export const tripDays = [
  {
    date: "2026-07-10",
    weekday: "Vie",
    place: "Sin reserva encontrada",
    detail: "Revisar",
    status: "review",
    theme: "review",
  },
  {
    date: "2026-07-11",
    weekday: "Sab",
    place: "La Marina Resort",
    detail: "Parcela 379",
    checkIn: "desde 12:00",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-12",
    weekday: "Dom",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-13",
    weekday: "Lun",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-14",
    weekday: "Mar",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-15",
    weekday: "Mie",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-16",
    weekday: "Jue",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-17",
    weekday: "Vie",
    place: "La Marina Resort",
    detail: "Parcela 379",
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-18",
    weekday: "Sab",
    place: "Bravoplaya Resort",
    detail: "Parcela PLATA 072",
    checkIn: "13:00-22:00",
    status: "confirmed",
    theme: "bravo",
  },
  {
    date: "2026-07-19",
    weekday: "Dom",
    place: "Bravoplaya Resort",
    detail: "Parcela PLATA 072",
    status: "confirmed",
    theme: "bravo",
  },
  {
    date: "2026-07-20",
    weekday: "Lun",
    place: "Camping Riberamar",
    detail: "Parcela Estandar + Fregadero Sur",
    checkIn: "desde 12:00",
    status: "confirmed",
    theme: "ribera",
  },
  {
    date: "2026-07-21",
    weekday: "Mar",
    place: "Camping Riberamar",
    detail: "Parcela Estandar + Fregadero Sur",
    status: "confirmed",
    theme: "ribera",
  },
  {
    date: "2026-07-22",
    weekday: "Mie",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    checkIn: "desde 12:00",
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-23",
    weekday: "Jue",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    activity: {
      title: "PortAventura",
      note: "Fun Pass: Street Mission + Tutuki Splash + Silver River Flume + Grand Canyon Rapids + Stampida",
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-24",
    weekday: "Vie",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    activity: {
      title: "Ferrari Land",
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-25",
    weekday: "Sab",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-26",
    weekday: "Dom",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-27",
    weekday: "Lun",
    place: "Zaragoza Camping",
    detail: "Parcela",
    checkIn: "desde 12:00",
    status: "confirmed",
    theme: "zaragoza",
  },
  {
    date: "2026-07-28",
    weekday: "Mar",
    place: "Zaragoza Camping",
    detail: "Parcela",
    status: "confirmed",
    theme: "zaragoza",
  },
  {
    date: "2026-07-29",
    weekday: "Mie",
    place: "Camping Osuna, Madrid",
    detail: "Entrada: 12:00-23:30",
    activity: {
      title: "19:00 - Escape room Experiencia Amarilla",
      note: "Plaza de Francisco Morano, 3",
    },
    status: "confirmed",
    theme: "osuna",
  },
  {
    date: "2026-07-30",
    weekday: "Jue",
    place: "Camping de Caceres",
    detail: "Pendiente de detalle",
    status: "confirmed",
    theme: "caceres",
  },
  {
    date: "2026-07-31",
    weekday: "Vie",
    place: "Sin reserva encontrada",
    detail: "Revisar",
    status: "review",
    theme: "review",
  },
  {
    date: "2026-08-01",
    weekday: "Sab",
    place: "Sin reserva encontrada",
    detail: "Revisar",
    status: "review",
    theme: "review",
  },
  {
    date: "2026-08-02",
    weekday: "Dom",
    place: "Fin de vacaciones",
    detail: "Vuelta",
    status: "end",
    theme: "end",
  },
];

export function getPendingDays(days = tripDays) {
  return days.filter((day) => day.status === "review");
}

export function getStays(days = tripDays) {
  return days
    .filter((day) => day.status !== "review" && day.status !== "end")
    .reduce((stays, day) => {
      const current = stays.at(-1);

      if (current && current.place === day.place && current.detail === day.detail) {
        current.endDate = day.date;
        current.nights += 1;
        return stays;
      }

      stays.push({
        place: day.place,
        detail: day.detail,
        startDate: day.date,
        endDate: day.date,
        nights: 1,
        status: day.status,
        theme: day.theme,
      });

      return stays;
    }, []);
}
