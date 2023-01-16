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
