'use client';

import { Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return <Button onClick={() => signOut()}>Sign Out</Button>;
  }
  return <Button onClick={() => signIn('auth0')}>Sign In</Button>;
}
