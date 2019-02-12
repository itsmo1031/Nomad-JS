const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
