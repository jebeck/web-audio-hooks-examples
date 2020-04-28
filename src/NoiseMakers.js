import React from 'react';
import bows from 'bows';

import UserStream from './components/UserStream';
import Oscillator from './components/Oscillator';
import RandomCs from './components/RandomCs';

const log = bows('NoiseMakers');

function NoiseMakers() {
  log('rendered');

  return (
    <>
      <Oscillator />
      <RandomCs />
      <UserStream />
    </>
  );
}

export default NoiseMakers;
