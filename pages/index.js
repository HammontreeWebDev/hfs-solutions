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

      {/* // !Row 1 - TitleImage Component // */}
        <RowSectionContainer jsxContent={

          <TitleImage
            titleText={`Transforming Visions Into Digital Reality`}
            imageSrc={`../img/home-page/home-page-mock-up.svg`}
          />

        } />

          {/* // !Row 2 TitleCarousel Component (normal) // */}
        <RowSectionContainer jsxContent={
          <></>
        } />

          {/* // !Row 3 TitleCarousel Component (row-reverse) // */}
        <RowSectionContainer jsxContent={
          <></>
        } />

          {/* // !Row 4 Title Carousel Component (normal) // */}
        <RowSectionContainer jsxContent={
          <></>
        } />

      </main>
    </>
  );
}
