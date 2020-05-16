window.onload = function() {
  c = document.getElementById("canvas");
  cc = c.getContext("2d");
  setInterval(update, 1000/30);
}

function update() {
  cc.fillStyle = "#fff";
}
