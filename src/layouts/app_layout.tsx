import { Card } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './app_layout.module.css';
import backgroudPic from '../public/background.png';
import BgImage from '../components/bgImage/bgImage';
import Header from '../components/header/header';

const AppLayout = (props: { config: any; children: ReactNode }) => {
  const { children, config } = props;
  return (
    <>
      <Head>
        <title>Mortgage Template</title>
        <meta name="description" content="A template to evaluate mortgage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...config.header}></Header>
      <Container
        role={'main'}
        maxWidth={false}
        className={styles.mainContainer}
      >
        <Card
          elevation={24}
          className={styles.appContainer}
          sx={{ backgroundColor: 'primary.main' }}
        >
          {children}
        </Card>
      </Container>
      <BgImage />
    </>
  );
};

export default AppLayout;
