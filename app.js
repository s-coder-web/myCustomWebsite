window.onload = function() {
  c = document.getElementById("canvas");
  gl = c.getContext("webgl");
  setInterval(update, 1000/30);
}

function update() {
  gl.clearColor(0, 1, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
