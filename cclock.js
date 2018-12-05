var clock = document.getElementById("clock");
function renderTime() {
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();

  if (h < 10){
    h = "0" + h;
  }

  if (m < 10){
    m = "0" + m;
  }

  if (s < 10){
    s = "0" + s;
  }

  clock.textContent = h + ":" + m + ":" + s;
  clock.innerText = h + ":" + m + ":" + s;

  setTimeout(renderTime, 1000);
}

renderTime();
