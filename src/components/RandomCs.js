import React, { useState, useEffect } from 'react';
import bows from 'bows';

import Oscillator from './Oscillator';

const Cs = [130.81, 261.63, 523.25, 1046.5];

function getAC() {
  return Cs[Math.floor(Math.random() * Cs.length)];
}

const log = bows('RandomCs');

function RandomCs() {
  log('rendered');

  const [frequency, setFrequency] = useState(getAC());

  useEffect(() => {
    setInterval(() => {
      setFrequency(getAC());
    }, 2500);
  }, []);

  return <Oscillator frequency={frequency} />;
}

export default RandomCs;
