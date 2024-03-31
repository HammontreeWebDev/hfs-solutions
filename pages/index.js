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
            imgSrc={`../img/home-page/home-page-mock-up.svg`}
            imgHeight={703.125}
            imgWidth={875}
          />

        } />

        {/* // !Row 2 TitleCarousel Component (normal) // */}
        <RowSectionContainer changeClass={styles.columnReverse} jsxContent={
          <TitleCarousel
            images={[
              '../img/home-page/MongoDB.svg',
              '../img/home-page/ExpressJS.svg',
              '../img/home-page/ReactJS.svg',
              '../img/home-page/NodeJS.svg',
              '../img/home-page/Apollo.svg',
              '../img/home-page/GraphQL.svg'
            ]}
            links={[
              'https://www.mongodb.com/what-is-mongodb',
              'https://expressjs.com/',
              'https://legacy.reactjs.org/',
              'https://nodejs.org/en/about',
              'https://www.apollographql.com/docs/apollo-server/',
              'https://graphql.org/'
            ]}
            titleText={`Full-Stack Web Development`}
            disclaimerText={`For websites and applications that require dynamic and flexible data retrieval`}
          />
        } />

        {/* // !Row 3 TitleCarousel Component (row-reverse) // */}
        <RowSectionContainer changeClass={`${styles.rowReverse}`} jsxContent={
          <TitleCarousel reverseText={styles.reverseText}
            images={[
              '../img/home-page/html5.svg',
              '../img/home-page/css3.svg',
              '../img/home-page/ReactJS.svg',
              '../img/home-page/javascript.svg',
              '../img/home-page/jQuery.svg'
            ]}
            links={[
              'https://blog.hubspot.com/blog/tabid/6307/bid/5847/a-marketer-s-guide-to-html5.aspx',
              'https://www.geeksforgeeks.org/difference-between-css-and-css3/',
              'https://legacy.reactjs.org/',
              'https://www.w3schools.com/whatis/whatis_js.asp',
              'https://jquery.com/'
            ]}
            titleText={`Front-End Web Development`}
            disclaimerText={`For landing pages, portfolios, and other websites that do not require a back-end server`}
          />
        } />

        {/* // !Row 4 Title Carousel Component (normal) // */}
        <RowSectionContainer changeClass={styles.columnReverse} jsxContent={
          <TitleCarousel
            images={[
              '../img/home-page/mySQL.svg',
              '../img/home-page/sql.svg',
              '../img/home-page/figma.svg',
              '../img/home-page/vercel.svg',
              '../img/home-page/ghPages.svg'
            ]}
            links={[
              'https://dev.mysql.com/doc/refman/8.3/en/what-is-mysql.html',
              'https://aws.amazon.com/what-is/sql/',
              'https://www.figma.com/',
              'https://vercel.com/blog/what-is-vercel',
              'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages'
            ]}
            titleText={`Additional Tools`}
            disclaimerText={`Additional technology to suit your needs`}
          />
        } />

      </main>
    </>
  );
}
