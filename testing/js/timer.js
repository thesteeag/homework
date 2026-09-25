// Укажите целевую дату окончания таймера
const targetDate = new Date("2026-09-31T23:59:59").getTime();

export default function updateTimer() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector(".timer").innerHTML = "<span>Акция завершена</span>";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
