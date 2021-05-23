import React from 'react';
import Shader from './Shader';

const shader = `\
precision lowp float;
uniform float iTime;
uniform vec2 iResolution;

#define hue(v)  ( .6 + .6 * cos( 6.3*(v)  + vec4(0,23,21,0)  ) )

void main()
{
    vec2 uv =  floor(gl_FragCoord.xy/iResolution.x * 12.)/12.;
    gl_FragColor = vec4(hue(uv.x + uv.y/3. + iTime*0.5).rgb, 1.);
}
`;

export default (): JSX.Element => {
  return (
    <div className="content">
      <Shader shader={shader} width={800} height={600} />
    </div>
  );
};
