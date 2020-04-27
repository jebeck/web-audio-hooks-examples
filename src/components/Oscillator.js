import React from 'react';
import bows from 'bows';

import { useAudioContext, useOscillator } from 'web-audio-hooks';

import PlayToggle from './PlayToggle';

const log = bows('Oscillator');

function Oscillator({ frequency }) {
  log(`[${frequency || 440}Hz] rendered`);
  const { getContext, isCurrentlyPlaying, pause, play } = useAudioContext();
  useOscillator({ audioCtx: getContext(), frequency });

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

export default Oscillator;
