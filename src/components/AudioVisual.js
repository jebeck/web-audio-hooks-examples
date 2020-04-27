import React, { cloneElement, useRef } from 'react';

export default function AudioVisual({ children }) {
  const canvasRef = useRef();
  return (
    <>
      <canvas ref={canvasRef} />
      {cloneElement(children, { canvasRef })}
    </>
  );
}
