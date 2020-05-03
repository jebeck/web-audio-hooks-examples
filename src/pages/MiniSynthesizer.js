import React, { useReducer, useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { actions, initialState, synthReducer } from '../synthReducer';
import KeyboardDrawer from '../components/synth/KeyboardDrawer';
import Layout from '../components/Layout';
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
        justifyContent="center"
        margin="0 auto"
        minHeight="inherit"
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
        <Box alignSelf="flex-end" p={4}>
          <Button
            color="primary"
            onClick={() => {
              dispatch(actions.addVoice());
            }}
            size="large"
            startIcon={<AddIcon />}
            variant="contained"
          >
            voice
          </Button>
        </Box>
        <KeyboardDrawer
          isCurrentlyPlaying={isPlaying}
          pause={() => setPlaying(false)}
          play={() => setPlaying(true)}
        />
      </Box>
    </Layout>
  );
}
