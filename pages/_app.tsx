import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import App from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
// import themes from '../config/theme_provider';
import createEmotionCache from '../config/emotion_cache';
import AppLayout from '../src/layouts/app_layout';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import ThemeProvider from '../src/providers/theme_provider/theme_provider';
import Typography from '@mui/material/Typography';
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  config: any;
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    config,
  } = props;

  console.log('APP', props);
  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <AppLayout config={config}>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    config: {
      header: {
        appTitle: 'EN-Next',
        pages: ['about', 'contact'],
      },
    },
  };
};

export default MyApp;
