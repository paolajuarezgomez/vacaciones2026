export const tripDays = [
  {
    date: "2026-07-10",
    weekday: "Vie",
    place: "Camping Granada",
    detail: "Dormir en Granada",
    cost: {
      label: "44,00 €",
      note: "Coste indicado manualmente",
    },
    photo: {
      src: "./assets/day-photos/camping-granada.png",
      alt: "Piscina del Camping Granada",
    },
    status: "confirmed",
    theme: "granada",
  },
  {
    date: "2026-07-11",
    weekday: "Sab",
    place: "La Marina Resort",
    detail: "Parcela 379",
    checkIn: "desde 12:00",
    cost: {
      label: "692,36 €",
      note: "Importe de la reserva",
    },
    photo: {
      src: "./assets/day-photos/la-marina-dia-1.png",
      alt: "Piscina de La Marina Resort",
    },
    transfer: {
      from: "Camping Granada",
      to: "La Marina Resort",
      duration: "3 h 20 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-12",
    weekday: "Dom",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-dia-2.png",
      alt: "Toboganes de La Marina Resort",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-13",
    weekday: "Lun",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-13-julio.png",
      alt: "Toboganes de La Marina Resort",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-14",
    weekday: "Mar",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-14-julio.png",
      alt: "Piscina y pasarelas de La Marina Resort",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-15",
    weekday: "Mie",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-15-julio.png",
      alt: "Piscinas de La Marina Resort vistas desde arriba",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-16",
    weekday: "Jue",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-16-julio.png",
      alt: "Toboganes grandes de La Marina Resort",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-17",
    weekday: "Vie",
    place: "La Marina Resort",
    detail: "Parcela 379",
    photo: {
      src: "./assets/day-photos/la-marina-17-julio.png",
      alt: "Playa cercana a La Marina Resort",
    },
    status: "confirmed",
    theme: "marina",
  },
  {
    date: "2026-07-18",
    weekday: "Sab",
    place: "Bravoplaya Resort",
    detail: "Parcela PLATA 072",
    checkIn: "13:00-22:00",
    cost: {
      label: "196,00 €",
      note: "Importe total de la estancia",
    },
    photo: {
      src: "./assets/day-photos/bravoplaya-18-julio.png",
      alt: "Piscina infantil de Bravoplaya Resort",
    },
    transfer: {
      from: "La Marina Resort",
      to: "Bravoplaya Resort",
      duration: "3 h 20 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
    status: "confirmed",
    theme: "bravo",
  },
  {
    date: "2026-07-19",
    weekday: "Dom",
    place: "Bravoplaya Resort",
    detail: "Parcela PLATA 072",
    photo: {
      src: "./assets/day-photos/bravoplaya-19-julio.png",
      alt: "Playa junto a Bravoplaya Resort",
    },
    status: "confirmed",
    theme: "bravo",
  },
  {
    date: "2026-07-20",
    weekday: "Lun",
    place: "Camping Riberamar",
    detail: "Parcela Estandar + Fregadero Sur",
    checkIn: "desde 12:00",
    cost: {
      label: "90,00 €",
      note: "22,50 € pagado + 67,50 € restante",
    },
    photo: {
      src: "./assets/day-photos/riberamar-20-julio.png",
      alt: "Piscina cubierta de Camping Riberamar",
    },
    transfer: {
      from: "Bravoplaya Resort",
      to: "Camping Riberamar",
      duration: "20 min",
      note: "Estimacion corta dentro de la zona Cabanes/Oropesa.",
    },
    status: "confirmed",
    theme: "ribera",
  },
  {
    date: "2026-07-21",
    weekday: "Mar",
    place: "Camping Riberamar",
    detail: "Parcela Estandar + Fregadero Sur",
    activity: {
      title: "DAY PASS HOTEL CON PARQUE ACUATICO SPORTS",
      note: "11:00-18:00",
    },
    status: "confirmed",
    theme: "ribera",
  },
  {
    date: "2026-07-22",
    weekday: "Mie",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    checkIn: "desde 12:00",
    cost: {
      label: "739,90 €",
      note: "Total reserva con city tax",
    },
    photo: {
      src: "./assets/day-photos/la-siesta-22-julio.png",
      alt: "Piscinas de La Siesta Salou",
    },
    transfer: {
      from: "Camping Riberamar",
      to: "La Siesta Salou",
      duration: "1 h 45 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-23",
    weekday: "Jue",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    photo: {
      src: "./assets/day-photos/portaventura-23-julio.png",
      alt: "Mapa de PortAventura World",
    },
    activity: {
      title: "PortAventura",
      note: "Fun Pass: Street Mission + Tutuki Splash + Silver River Flume + Grand Canyon Rapids + Stampida",
      image: {
        src: "./assets/day-photos/portaventura-plan-23-julio.jpg",
        alt: "Planificacion de atracciones de PortAventura",
      },
      items: [
        "10:30 Far West - Uncharted (no entra en Fun Pass, 88-93 min si cola lo permite)",
        "11:30 Far West - Stampida",
        "12:00 Far West - Tomahawk",
        "12:30 Far West - Silver River Flume",
        "13:15 Far West - Grand Canyon Rapids",
        "15:15 SesamoAventura - Street Mission",
        "16:00 Polinesia - Tutuki Splash",
        "17:00 Mexico - El Diablo, tren de la mina",
        "18:00 Mexico - Templo del Fuego",
        "19:00 China - Angkor",
        "20:00 China - Cobra Imperial",
        "20:30-21:30 China / SesamoAventura - Tea Cups, Waikiki o Canoes",
        "21:00-22:30 Far West - Reintento Uncharted si no la hiciste",
      ],
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-24",
    weekday: "Vie",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    photo: {
      src: "./assets/day-photos/ferrari-land-24-julio.png",
      alt: "Atraccion de Ferrari Land",
    },
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
    photo: {
      src: "./assets/day-photos/la-siesta-25-julio.png",
      alt: "Piscina tropical de La Siesta Salou",
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-26",
    weekday: "Dom",
    place: "La Siesta Salou",
    detail: "Premium Plus",
    photo: {
      src: "./assets/day-photos/la-siesta-26-julio.png",
      alt: "Juegos hinchables en la piscina de La Siesta Salou",
    },
    status: "confirmed",
    theme: "siesta",
  },
  {
    date: "2026-07-27",
    weekday: "Lun",
    place: "Zaragoza Camping",
    detail: "Parcela",
    checkIn: "desde 12:00",
    cost: {
      label: "84,50 €",
      note: "Estancia total",
    },
    photo: {
      src: "./assets/day-photos/zaragoza-27-julio.png",
      alt: "Piscina de Zaragoza Camping",
    },
    transfer: {
      from: "La Siesta Salou",
      to: "Zaragoza Camping",
      duration: "2 h 50 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
    status: "confirmed",
    theme: "zaragoza",
  },
  {
    date: "2026-07-28",
    weekday: "Mar",
    place: "Zaragoza Camping",
    detail: "Parcela",
    activity: {
      title: "Ideas para visitar Zaragoza",
      items: [
        "Parque del Agua Luis Bunuel",
        "Palacio de la Aljaferia",
        "Museo del Foro",
        "Plaza Salamero: cortina de agua y chorros",
        "Puerto Venecia: tobogan gigante y fuente de chorros",
        "Acuario de Zaragoza",
        "Climbat Torre Outlet: escalada indoor",
        "Kids City Plaza: parque de bolas",
      ],
      links: [
        {
          label: "Museo del Foro",
          url: "https://museos-cultura.zaragoza.es/info-museo-del-foro/",
        },
        {
          label: "Entradas Acuario",
          url: "https://www.taquilla.com/entradas/acuario-de-zaragoza?t10id=1037",
        },
      ],
    },
    status: "confirmed",
    theme: "zaragoza",
  },
  {
    date: "2026-07-29",
    weekday: "Mie",
    place: "Camping Osuna, Madrid",
    detail: "Entrada: 12:00-23:30",
    cost: {
      label: "52,00 €",
      note: "Coste indicado manualmente",
    },
    photo: {
      src: "./assets/day-photos/madrid-experiencia-amarilla.png",
      alt: "Experiencia Amarilla en Madrid",
    },
    transfer: {
      from: "Zaragoza Camping",
      to: "Camping Osuna, Madrid",
      duration: "3 h 15 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
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
    cost: {
      label: "No encontrado en correos",
      note: "No aparece reserva con importe en el export local",
    },
    photo: {
      src: "./assets/day-photos/caceres-30-julio.png",
      alt: "Piscina del Camping de Caceres",
    },
    transfer: {
      from: "Camping Osuna, Madrid",
      to: "Camping de Caceres",
      duration: "3 h 35 min",
      note: "Estimacion por carretera sin trafico en vivo.",
    },
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
        cost: day.cost ?? {
          label: "No encontrado en correos",
          note: "Sin importe localizado",
        },
        mapsUrl: googleMapsSearchUrl(day.place),
      });

      return stays;
    }, []);
}

function googleMapsSearchUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}
