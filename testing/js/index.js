import langBtnClick from "./language.js";
import updateTimer from "./timer.js";
import { initGauge } from "./gauge.js";
import { initPhoneMask } from "./phoneMask.js";

langBtnClick();
updateTimer();
initGauge();

initPhoneMask("#phone");
