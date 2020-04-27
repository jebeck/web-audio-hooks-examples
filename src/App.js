import React from 'react';
import bows from 'bows';

import NoiseMakers from './NoiseMakers';

const log = bows('App');

function App() {
  log('rendered');

  return <NoiseMakers />;
}

export default App;
