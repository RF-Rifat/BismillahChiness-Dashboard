/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Bismillah-Chiness </title>
      </Helmet>

      <LoginView />
    </>
  );
}
