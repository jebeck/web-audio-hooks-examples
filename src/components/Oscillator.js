import React, { useState, useEffect } from 'react';
import bows from 'bows';

import {
  useAnalyser,
  useAudioContext,
  useGain,
  useOscillator,
  useTimeDomainData,
} from 'web-audio-hooks';

import { OscilloscopeWorker } from 'web-audio-hooks/dist/workers';

import PlayToggle from './PlayToggle';

const log = bows('Oscillator');

const workerOptions = { bg: 'PapayaWhip', stroke: 'DeepPink' };

export default function Oscillator({ canvasRef, frequency }) {
  log(`[${frequency || 440}Hz] rendered`);
  const [gain, setGain] = useState(Math.random());

  useEffect(() => {
    setInterval(() => setGain(Math.random()), 1000);
  }, []);

  const { getContext, isCurrentlyPlaying, pause, play } = useAudioContext();
  const { getAnalyser } = useAnalyser({ audioCtx: getContext() });
  useTimeDomainData({
    analyser: getAnalyser(),
    canvasRef,
    Worker: OscilloscopeWorker,
    workerOptions,
  });
  const { getGain } = useGain({
    audioCtx: getContext(),
    destination: getAnalyser(),
    gain,
  });
  useOscillator({
    audioCtx: getContext(),
    destination: getGain(),
    frequency,
  });

  return (
    <div>
      <h1>{`oscillator @ ${frequency || 440}Hz`}</h1>
      <PlayToggle
        isCurrentlyPlaying={isCurrentlyPlaying}
        pause={pause}
        play={play}
      />
    </div>
  );
}
