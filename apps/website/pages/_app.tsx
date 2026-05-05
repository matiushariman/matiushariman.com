import { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './styles.css';

import ThemeProvider, {
  ThemeContext,
} from '../Providers/ThemeProvider/ThemeProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>matiushariman.com</title>
      </Head>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className="app" data-theme={theme}>
              <Component {...pageProps} />
              <Analytics />
              <SpeedInsights />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
