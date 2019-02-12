const seconds = document.querySelector(".seconds").querySelector(".time");
const minutes = document.querySelector(".minutes").querySelector(".time");
const hour = document.querySelector(".hour").querySelector(".time");
const humanTime = document.querySelector("#human-time");
const clockHeight = window.getComputedStyle(
  document.querySelector("#bar-clock").querySelector(".hour")
).height;

const getTime = function() {
  const dateTime = new Date();

  return {
    hour: ("0" + dateTime.getHours()).slice(-2),
    minutes: ("0" + dateTime.getMinutes()).slice(-2),
    seconds: ("0" + dateTime.getSeconds()).slice(-2)
  };
};

const renderTime = function(element, time, duration) {
  const percentage = (parseInt(clockHeight) * time) / duration;
  const saturation = percentage / 3 + 40;
  const lightness = 80 - percentage / 6;
  element.style.height = `${percentage}px`;
  element.style.backgroundColor = `hsl(205, ${saturation}%, ${lightness}%)`;
};

const updateTime = function(time) {
  renderTime(seconds, time.seconds, 59);
  renderTime(minutes, time.minutes, 59);
  renderTime(hour, time.hour, 23);

  const separator = " ";

  // Readable time for puny human beings
  humanTime.innerText =
    time.hour + separator + time.minutes + separator + time.seconds;
};

const t = setInterval(() => updateTime(getTime()), 1000);
