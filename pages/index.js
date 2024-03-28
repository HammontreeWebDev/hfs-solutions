import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RowSectionContainer from '../components/RowSectionContainer';
import TitleImage from '../components/TitleImage';
import TitleCarousel from '../components/TitleCarousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Kaileb Hammontree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <TitleCarousel
            images={['../img/home-page/MongoDB.svg', '../img/home-page/ExpressJS.svg', '../img/home-page/ReactJS.svg', '../img/home-page/NodeJS.svg', '../img/home-page/Apollo.svg', '../img/home-page/GraphQL.svg']}
            titleText={`Full-Stack Web Development`}
            disclaimerText={`For websites and applications that require dynamic and flexible data retrieval`}
          />
        } />

        {/* // !Row 3 TitleCarousel Component (row-reverse) // */}
        <RowSectionContainer changeClass={styles.rowReverse} jsxContent={
          <TitleCarousel reverseText={styles.reverseText}
            images={['../img/home-page/MongoDB.svg', '../img/home-page/ExpressJS.svg', '../img/home-page/ReactJS.svg', '../img/home-page/NodeJS.svg', '../img/home-page/Apollo.svg', '../img/home-page/GraphQL.svg']}
            titleText={`Front-End Web Development`}
            disclaimerText={`For landing pages, portfolios, and other websites that do not require a back-end server`}
          />
        } />

        {/* // !Row 4 Title Carousel Component (normal) // */}
        <RowSectionContainer jsxContent={
          <TitleCarousel
            images={['../img/home-page/MongoDB.svg', '../img/home-page/ExpressJS.svg', '../img/home-page/ReactJS.svg', '../img/home-page/NodeJS.svg', '../img/home-page/Apollo.svg', '../img/home-page/GraphQL.svg']}
            titleText={`Additional Tools`}
            disclaimerText={`Additional technology to suit your needs`}
          />
        } />

      </main>
    </>
  );
}
