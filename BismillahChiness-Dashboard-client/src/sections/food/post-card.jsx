/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { fDate } from 'src/utils/format-time';

export default function PostCard({ post, index }) {
  const { cover: imgSrc, title, createdAt } = post;

  const latestPostLarge = index === 0;

  const latestPost = index === 1 || index === 2;

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestPostLarge && { typography: 'h5', height: 60 }),
        ...((latestPostLarge || latestPost) && {
          color: 'common.white',
        }),
      }}
    >
      {title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      <Stack
        direction="row"
        sx={{
          ...((latestPostLarge || latestPost) && {
            color: 'common.white',
          }),
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="small" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" size="small" startIcon={<BorderColorIcon />}>
            Update
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={imgSrc}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
        ...((latestPostLarge || latestPost) && {
          color: 'common.white',
        }),
      }}
    >
      {fDate(createdAt)}
    </Typography>
  );

  return (
    <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            ...((latestPostLarge || latestPost) && {
              width: 1,
              bottom: 0,
              position: 'absolute',
            }),
          }}
        >
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
