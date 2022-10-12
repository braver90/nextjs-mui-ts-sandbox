import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { CacheProvider, EmotionCache } from '@emotion/react';
// import themes from '../config/theme_provider';
import createEmotionCache from '../src/createEmotionCache';
import AppLayout from '../layouts/app_layout';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import ThemeProvider from '../providers/theme_provider/theme_provider';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    theme,
  } = props;

  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
}
