import React from 'react';

import { useAudioContext, useAudioStream } from 'web-audio-hooks';

import PlayToggle from './PlayToggle';

function UserStream() {
  const { getContext, isCurrentlyPlaying, pause, play } = useAudioContext();
  useAudioStream({ audioCtx: getContext() });

  return (
    <div>
      <h1>
        user/computer mic&nbsp;
        <small>(beware of feedback!)</small>
      </h1>
      <PlayToggle
        isCurrentlyPlaying={isCurrentlyPlaying}
        pause={pause}
        play={play}
      />
    </div>
  );
}

export default UserStream;
