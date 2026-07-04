import { getPendingDays, getStays, tripDays } from "./data.js";

const monthNames = new Intl.DateTimeFormat("es-ES", { month: "short" });
const dayMonth = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
});

export function formatDate(date) {
  return dayMonth
    .format(new Date(`${date}T12:00:00`))
    .replace(".", "")
    .toLowerCase();
}

export function formatDateRange(startDate, endDate) {
  if (startDate === endDate) {
    return formatDate(startDate);
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

export function renderItinerary(days) {
  return days.map(renderDayCard).join("");
}

export function renderPending(days) {
  if (days.length === 0) {
    return `<p class="empty">No quedan dias pendientes.</p>`;
  }

  return days
    .map(
      (day) => `
        <article class="pending-card theme-${day.theme}">
          <div>
            <p class="eyebrow">${day.weekday} ${formatDate(day.date)}</p>
            <h3>${escapeHtml(day.place)}</h3>
            <p>${escapeHtml(day.detail)}</p>
          </div>
          <span class="status-pill status-review">Revisar</span>
        </article>
      `,
    )
    .join("");
}

export function renderStays(stays) {
  return stays
    .map(
      (stay) => `
        <article class="stay-card theme-${stay.theme}">
          <p class="eyebrow">${formatDateRange(stay.startDate, stay.endDate)}</p>
          <h3>${escapeHtml(stay.place)}</h3>
          <p>${escapeHtml(stay.detail)}</p>
          <strong>${stay.nights} ${stay.nights === 1 ? "noche" : "noches"}</strong>
        </article>
      `,
    )
    .join("");
}

function renderDayCard(day) {
  const checkIn = day.checkIn
    ? `<p class="meta"><span>Entrada</span>${escapeHtml(day.checkIn)}</p>`
    : "";
  const transfer = day.transfer
    ? `
      <div class="transfer">
        <span>Traslado</span>
        <strong>${escapeHtml(day.transfer.from)} -> ${escapeHtml(day.transfer.to)}</strong>
        <p>${escapeHtml(day.transfer.duration)} aprox.</p>
        ${day.transfer.note ? `<small>${escapeHtml(day.transfer.note)}</small>` : ""}
      </div>
    `
    : "";
  const activity = day.activity
    ? `
      <div class="activity">
        <span>Actividad</span>
        <strong>${escapeHtml(day.activity.title)}</strong>
        ${day.activity.note ? `<p>${escapeHtml(day.activity.note)}</p>` : ""}
      </div>
    `
    : "";

  return `
    <article class="day-card theme-${day.theme}">
      <header>
        <div>
          <p class="eyebrow">${day.weekday}</p>
          <h3>${formatDate(day.date)}</h3>
        </div>
        <span class="status-pill status-${day.status}">${statusLabel(day.status)}</span>
      </header>
      <div class="day-card-body">
        <h2>${escapeHtml(day.place)}</h2>
        <p>${escapeHtml(day.detail)}</p>
        ${checkIn}
        ${transfer}
        ${activity}
      </div>
    </article>
  `;
}

function statusLabel(status) {
  const labels = {
    confirmed: "Confirmado",
    review: "Revisar",
    end: "Fin",
  };

  return labels[status] ?? status;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getNextRelevantDay(days) {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  return days.find((day) => day.date >= todayKey) ?? days.at(-1);
}

function setActiveTab(tabName) {
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== tabName;
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function bootstrap() {
  const itinerary = document.querySelector("[data-itinerary]");
  const pending = document.querySelector("[data-pending]");
  const stays = document.querySelector("[data-stays]");
  const next = document.querySelector("[data-next-day]");

  if (!itinerary || !pending || !stays || !next) {
    return;
  }

  const pendingDays = getPendingDays();
  const staySummaries = getStays();
  const nextDay = getNextRelevantDay(tripDays);

  itinerary.innerHTML = renderItinerary(tripDays);
  pending.innerHTML = renderPending(pendingDays);
  stays.innerHTML = renderStays(staySummaries);
  next.innerHTML = renderDayCard(nextDay);

  document.querySelector("[data-day-count]").textContent = `${tripDays.length} dias`;
  document.querySelector("[data-pending-count]").textContent = `${pendingDays.length} pendientes`;

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });
  setActiveTab("itinerary");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
  }
}

if (typeof document !== "undefined") {
  bootstrap();
}
