import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Create a simple theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#8fa4ef',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#764ba2',
      light: '#9a6bb8',
      dark: '#5a3a7a',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-sans">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
