window.onload = function() {
  c = document.getElementById("canvas");
  gl = c.getContext("webgl");
  setInterval(update, 1000/30);
}

function update() {
  vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, 1, 0
  ];
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
}
