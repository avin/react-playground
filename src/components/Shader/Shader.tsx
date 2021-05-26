import React, { useEffect, useRef } from 'react';

const vertexShaderSrc = `\
attribute vec2 position;
void main(void)
{
    gl_Position = vec4(position,0.0,1.0);
}
`;

interface Props {
  shader: string;
  width: number;
  height: number;
}

const Shader = ({ shader: pixelShaderSrc, width, height }: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const gl = canvasRef.current?.getContext('webgl');
    if (!gl) {
      return;
    }

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  }, [width, height]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const gl = canvasRef.current.getContext('webgl');

    if (!gl) {
      return;
    }

    const vertices = [-1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1];
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      return;
    }
    gl.shaderSource(vertexShader, vertexShaderSrc);
    gl.compileShader(vertexShader);

    const pixelShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!pixelShader) {
      return;
    }
    gl.shaderSource(pixelShader, pixelShaderSrc);
    gl.compileShader(pixelShader);

    const program = gl.createProgram();
    if (!program) {
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, pixelShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const coordinates = gl.getAttribLocation(program, 'position');
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    const initTime = +new Date();

    (function loop() {
      window.requestAnimationFrame(loop);
      const time = (+new Date() - initTime) * 0.001;
      gl.uniform1f(gl.getUniformLocation(program, 'iTime'), time);
      gl.uniform2f(gl.getUniformLocation(program, 'iResolution'), width, height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Shader;
