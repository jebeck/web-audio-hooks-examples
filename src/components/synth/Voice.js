import React, { useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAudioContext } from 'web-audio-hooks';

import { actions } from '../../synthReducer';
import Oscillator from './Oscillator';

export default function Voice({
  dispatch,
  frequency,
  id,
  idx,
  isPlaying,
  oscillators,
}) {
  const { getContext, isCurrentlyPlaying, pause, play } = useAudioContext();

  useEffect(() => {
    if (isPlaying && !isCurrentlyPlaying) {
      play();
    } else if (!isPlaying && isCurrentlyPlaying) {
      pause();
    }
  }, [isCurrentlyPlaying, isPlaying, pause, play]);

  return (
    <Box boxShadow={1} mt={2} p={4}>
      <Typography
        color="primary"
        style={{ fontSize: '1.5rem', fontStyle: 'italic' }}
      >{`voice #${idx + 1}`}</Typography>
      <Box
        alignItems="baseline"
        display="flex"
        flexWrap="wrap"
        maxWidth="1200px"
      >
        {oscillators.map(({ frequency, gain, id, waveform }, j) => (
          <Oscillator
            audioCtx={getContext()}
            dispatch={dispatch}
            frequency={frequency}
            gain={gain}
            idx={j}
            key={id}
            voiceIdx={idx}
            waveform={waveform}
          />
        ))}
        <div>
          <Button
            color="secondary"
            onClick={() => dispatch(actions.addOscillator(idx))}
            startIcon={<AddIcon />}
            variant="outlined"
          >
            oscillator
          </Button>
        </div>
      </Box>
    </Box>
  );
}
