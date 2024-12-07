// import Auth0 from 'next-auth/providers/auth0';
import GitHub from 'next-auth/providers/github';

import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
});
