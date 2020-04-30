import React from 'react';
import { Link as ReachLink } from '@reach/router';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import MiniSynthesizer from './MiniSynthesizer';
import UserAudioStream from './UserAudioStream';
import { Typography } from '@material-ui/core';

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
    title: 'the browser shows you your audio',
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
          <ReachLink key={path} to={path}>
            <Box p={4}>
              <Link>
                <Typography variant="h2">{title}</Typography>
              </Link>
              <Typography color="secondary" variant="h3">
                {subtitle}
              </Typography>
            </Box>
          </ReachLink>
        ))}
      </div>
    </div>
  );
}
