/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/user/view';

export default function OrderPage() {
  return (
    <>
      <Helmet>
        <title> Order | Bismillah-Chiness </title>
      </Helmet>

      <UserView />
    </>
  );
}
