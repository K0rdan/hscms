// import theme from '@/lib/theme';
import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          {children}
          {/* </ThemeProvider> */}
        </SessionProvider>
      </body>
    </html>
  );
}
