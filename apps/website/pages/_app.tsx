import { AppProps } from 'next/app';
import Head from 'next/head';
import cc from 'classcat';
import { Analytics } from '@vercel/analytics/react';
import './styles.css';

import ThemeProvider, {
  ThemeContext,
} from '../Providers/ThemeProvider/ThemeProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matius Hariman</title>
      </Head>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ mode }) => (
            <main className={cc(['app', { dark: mode === 'dark' }])}>
              <Component {...pageProps} />
              <Analytics />
            </main>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
