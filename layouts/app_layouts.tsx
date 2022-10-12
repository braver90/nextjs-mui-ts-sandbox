import { Card } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './app.module.css';
import backgroudPic from '../public/background.png';

const AppLayout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Mortgage Template</title>
        <meta name="description" content="A template to evaluate mortgage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        role={'main'}
        maxWidth={false}
        className={styles.mainContainer}
        sx={{
          backgroundColor: 'primary.main',
          backgroundImage: `url(${backgroudPic.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Card elevation={24} className={styles.appContainer}>
          {children}
        </Card>
      </Container>
    </>
  );
};

export default AppLayout;
