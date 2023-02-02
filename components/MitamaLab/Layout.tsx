import Box, { BoxProps } from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

import * as React from 'react';

export const Root = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        bgcolor: 'background.appBody',
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
          md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
        },
        gridTemplateRows: '64px 1fr',
        minWidth: '100vw',
        minHeight: '100vh',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const Header = (props: BoxProps) => (
  <Box
    component="header"
    className="Header"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        opacity: 0.95,
        zIndex: 1100,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SideNav = (props: BoxProps) => (
  <Box
    component="nav"
    className="Navigation"
    {...props}
    sx={[
      {
        p: 2,
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: {
          xs: 'none',
          sm: 'initial',
        },
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SidePane = (props: BoxProps) => (
  <Box
    className="Inbox"
    {...props}
    sx={[
      {
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
        width: '20vw',
        display: {
          xs: 'none',
          md: 'initial',
        },
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const Main = (props: BoxProps) => (
  <Box
    component="main"
    className="Main"
    width="80vw"
    {...props}
    sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
  />
);

export const SideDrawer = ({
  onClose,
  ...props
}: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }) => (
  <Box
    {...props}
    sx={[
      { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  >
    <Box
      role="button"
      onClick={onClose}
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: (theme) =>
          `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
      }}
    />
    <Sheet
      sx={{
        minWidth: 256,
        width: 'max-content',
        height: '100%',
        p: 2,
        boxShadow: 'lg',
        bgcolor: 'background.componentBg',
      }}
    >
      {props.children}
    </Sheet>
  </Box>
);
