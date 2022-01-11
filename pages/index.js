import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>America Foundation</title>
        <meta name='description' content='America Foundation plants trees' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href='https://america.foundation'>America Foundation!</a>
        </h1>

        <p className={styles.description}>Please enter an amount </p>
        <input
          className={styles.card}
          type={'text'}
          placeholder='Enter amount'
        />

        <div className={styles.card} style={{ textAlign: 'center' }}>
          <h2>Pay</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://redxam.com' target='_blank' rel='noopener noreferrer'>
          Powered by <span className={styles.logo}>redxam</span>
        </a>
      </footer>
    </div>
  );
}
