/* eslint-disable import/no-unresolved */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';


export default function FoodView() {
  console.log(posts)
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Food</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button>
      </Stack>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
