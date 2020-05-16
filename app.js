window.onload = function() {
  c = document.getElementById("canvas");
  gl = c.getContext("webgl");
  setInterval(update, 1000/30);
}

function update() {
  vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0,
  ];
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

  vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, `
  attribute vec3 position;
  void main() {
    gl_Position = vec4(position, 1);
  }
  `);
  gl.compileShader(vertexShader);

  fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, `
  void main() {
    gl_FragColor = vec4(1, 0, 0, 1);
  }
  `);
  gl.compileShader(fragmentShader);

  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  positionLocation = gl.getAttribLocation(program, `position`);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
