/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        ...sx,
      }}
      {...other}
    >
      <img src="/favicon/logo.png" alt="logo" />
      <Typography
        variant="h4"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
        Bismillah
      </Typography>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
