/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

export default function FoodPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Bismillah-Chiness </title>
      </Helmet>

      <BlogView />
    </>
  );
}
