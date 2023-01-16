import { AppProps } from 'next/app';
import Head from 'next/head';
import clsx from 'clsx';
import './styles.css';

import ThemeProvider, {
  ThemeContext,
} from '../Providers/ThemeProvider/ThemeProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matius Hariman</title>
        <meta name="theme-color" content="#007a33" />
        <meta
          name="description"
          content="A seasoned frontend engineer, and an avid Boston Celtics fan based in sunny Singapore."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ mode }) => (
            <main className={clsx('app', mode === 'dark' && 'dark')}>
              <Component {...pageProps} />
            </main>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
