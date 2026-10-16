const targetDate = new Date("2027-02-03T23:59:59").getTime();

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

  document.querySelector("#days").textContent = String(days).padStart(2, "0");
  document.querySelector("#hours").textContent = String(hours).padStart(2, "0");
  document.querySelector("#minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.querySelector("#seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
