import type { AppProps } from 'next/app';
import { ThemeProvider, Typography } from '@material-tailwind/react';
import 'styles/globals.css';
import NavigationBar from 'components/feature/Navbar';
import Layout from 'components/feature/Layout';
import TeamSelector from 'components/feature/TeamSelector';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavigationBar />
      <Layout>
        <main>
          <Typography
            className='text-center font-bold text-primary text-3xl sm:text-4xl my-4'
            textGradient
          >
            겨울엔 역시 스토브리그
          </Typography>

          <TeamSelector />

          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
