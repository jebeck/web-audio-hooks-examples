import React, { useReducer, useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { Keyboard } from 'web-audio-hooks/dist/lib/index';

import { initialState, synthReducer } from '../synthReducer';
import Layout from '../components/Layout';
import PlayToggle from '../components/PlayToggle';
import Voice from '../components/synth/Voice';

export default function MiniSynthesizer({ headerBounds }) {
  const [isPlaying, setPlaying] = useState(false);
  const [synthState, dispatch] = useReducer(synthReducer, initialState);
  const { voices } = synthState;

  return (
    <Layout headerBounds={headerBounds}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        margin="0 auto"
        position="relative"
        width="75%"
      >
        <Typography
          color="secondary"
          variant="h2"
          style={{ alignSelf: 'flex-start' }}
        >
          sculpt a sound
        </Typography>
        <div style={{ alignSelf: 'flex-start' }}>
          <PlayToggle
            isCurrentlyPlaying={isPlaying}
            pause={() => setPlaying(false)}
            play={() => setPlaying(true)}
          />
        </div>
        <Keyboard style={{ alignSelf: 'flex-end' }} />
        {voices
          ? voices.map((props, idx) => (
              <Voice
                dispatch={dispatch}
                idx={idx}
                isPlaying={isPlaying}
                key={props.id}
                playing={isPlaying}
                {...props}
              />
            ))
          : null}
      </Box>
    </Layout>
  );
}
