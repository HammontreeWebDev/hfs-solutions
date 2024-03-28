import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import RowSectionContainer from '../components/RowSectionContainer';
import TitleImage from '../components/TitleImage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Kaileb Hammontree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <RowSectionContainer jsxContent={

          <TitleImage />
          
        } />
      </main>
    </>
  );
}
