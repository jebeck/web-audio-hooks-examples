import React from 'react';
import { Link } from '@reach/router';

import Box from '@material-ui/core/Box';

import MiniSynthesizer from './MiniSynthesizer';
import UserAudioStream from './UserAudioStream';

export const PAGES = [
  {
    Component: MiniSynthesizer,
    path: '/synth',
    title: 'mini Web Audio synth',
    subtitle: 'virtual knobs for cool cats',
  },
  {
    Component: UserAudioStream,
    path: '/user',
    title: 'the browser plays your audio back to you',
    subtitle: 'beware the feedback monster',
  },
];

export default function () {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '65vw',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridGap: '1rem',
        }}
      >
        {PAGES.map(({ path, subtitle, title }) => (
          <Link key={path} to={path}>
            <Box p={4}>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
            </Box>
          </Link>
        ))}
      </div>
    </div>
  );
}
