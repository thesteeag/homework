export function initGauge() {
  const slider = document.getElementById("gaugeSlider");
  const fillPath = document.getElementById("gaugeFill");
  const valueText = document.getElementById("gaugeValue");
  const badge = document.getElementById("gaugeBadge");

  if (!slider || !fillPath || !valueText || !badge) return;

  const pathLength = fillPath.getTotalLength();

  fillPath.style.strokeDasharray = pathLength;

  const RISKS = {
    LOW: {
      max: 10,
      text: "Низкий риск",
      class: "gauge__badge--low",
      color: "#4cd97b",
    },
    MEDIUM: {
      max: 20,
      text: "Средний риск",
      class: "gauge__badge--medium",
      color: "#ffb800",
    },
    HIGH: {
      max: Infinity,
      text: "Высокий риск",
      class: "gauge__badge--high",
      color: "#ff453a",
    },
  };

  function updateGauge() {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const val = Number(slider.value);

    const progressRatio = (val - min) / (max - min);
    const progressPercent = progressRatio * 100;

    const offset = pathLength - pathLength * progressRatio;
    fillPath.style.strokeDashoffset = offset;

    valueText.textContent = `до ${val}%`;

    let currentRisk = RISKS.LOW;
    if (val > RISKS.MEDIUM.max) {
      currentRisk = RISKS.HIGH;
    } else if (val > RISKS.LOW.max) {
      currentRisk = RISKS.MEDIUM;
    }

    slider.style.setProperty("--slider-color", currentRisk.color);
    slider.style.setProperty("--progress-percent", `${progressPercent}%`);

    badge.textContent = currentRisk.text;
    badge.className = `gauge__badge ${currentRisk.class}`;

    fillPath.style.stroke = currentRisk.color;
    fillPath.style.filter = `drop-shadow(0px 0px 12px ${currentRisk.color}66)`;
    slider.style.accentColor = currentRisk.color;
  }

  slider.addEventListener("input", updateGauge);

  updateGauge();
}
