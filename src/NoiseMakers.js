import React from 'react';
import bows from 'bows';

import AudioVisual from './components/AudioVisual';
import UserStream from './components/UserStream';
import Oscillator from './components/Oscillator';
import RandomCs from './components/RandomCs';

const log = bows('NoiseMakers');

function NoiseMakers() {
  log('rendered');

  return (
    <>
      <AudioVisual>
        <Oscillator />
      </AudioVisual>
      <RandomCs />
      <UserStream />
    </>
  );
}

export default NoiseMakers;
