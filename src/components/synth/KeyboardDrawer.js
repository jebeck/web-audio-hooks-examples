import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import OpenInBrowserTwoToneIcon from '@material-ui/icons/OpenInBrowserTwoTone';

import { Keyboard } from 'web-audio-hooks/dist/lib/index';

import PlayToggle from '../PlayToggle';

export default function KeyboardDrawer({ ...playControls }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box bottom={0} boxShadow={1} position="fixed" width="100%">
      <Button
        onClick={() => setDrawerOpen(!drawerOpen)}
        startIcon={<OpenInBrowserTwoToneIcon />}
      >
        open keyboard
      </Button>
      <Drawer
        anchor="bottom"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Box display="flex" p={2} width="100%">
          <PlayToggle {...playControls} />
        </Box>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Keyboard />
        </Box>
      </Drawer>
    </Box>
  );
}
