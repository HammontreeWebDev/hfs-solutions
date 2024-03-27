import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KailebHammontree.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is test text</p>
    </div>
  );
}
