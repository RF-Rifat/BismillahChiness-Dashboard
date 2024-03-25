/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { FoodView } from 'src/sections/food/view';

export default function FoodPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Bismillah-Chiness </title>
      </Helmet>
      <FoodView />
    </>
  );
}
