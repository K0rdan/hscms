import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';

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
