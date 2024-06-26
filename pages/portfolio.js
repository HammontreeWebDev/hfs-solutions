import Head from "next/head";
import styles from '../styles/Portfolio.module.css';
import RowSectionContainer from "../components/RowSectionContainer";
import TitleImage from "../components/TitleImage";
import Project from "../components/Project";

// *Commented out boilerplate for adding new project components
// jsxContent={
//     <Project 
//     imgSrc={'/img/portfolio-page/'} 
//     imgHeight={} 
//     imgWidth={875} 
//     visitHref={}
//     visitLinkText={'Visit Site'}
//     repoHref={}
//     repoLinkText={'Repository'}
//     titleText={} 
//     disclaimerText={'Built With:'}
//     additionalText={}
//     reverseText={styles.reverseText} 
//     />
// }


export default function Portfolio() {

    return (
        <>

            <Head>
                <title>Portfolio | Kaileb Hammontree</title>
                <meta name="description" content="Explore Kaileb Hammontree's Project Portfolio. Discover what projects he has worked on and find out what Hammontree Full-Stack Solutions can do for you!" />
                <meta name="keywords" content="Portfolio, Web Development, Full-Stack Development, Kaileb Hammontree" />
                <link rel="canonical" href="https://www.kailebhammontree.com/portfolio" />
            </Head>

            <main>

                {/* //! Row 1 Title Image w/disclaimer text*/}
                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Welcome To My Portfolio'}
                            jsxContent={
                                <div className={styles.disclaimerContainer}>
                                    <p className={'disclaimerText'}>
                                        On this page you can preview the different projects I have completed!
                                    </p>
                                    <p className={'disclaimerText'}>
                                        Visit the application/website itself or navigate to the GitHub repository to check out the code base!
                                    </p>
                                </div>
                            }
                            imgSrc={'/img/portfolio-page/portfolioTitleImage.webp'}
                            imgHeight={590}
                            imgWidth={574}
                            imgAlt={'thumbprint title image'}
                            priority={true}
                        />

                    }
                />

                {/* //* PokéWire Re-Imagined */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/pw-reimagined.png'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'pokéwire re-imagined mockup'}
                            visitHref={'/portfolio/comingsoon'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/pokewire-reimagined'}
                            repoLinkText={'Repository'}
                            titleText={'PokéWire Re-Imagined'}
                            disclaimerText={'Built With:'}
                            additionalText={'NextJS | ReactJS | Tailwind CSS | Node.js | PostgreSQL | Prisma | IndexedDB | Local Storage'}
                        />
                    }
                />

                {/* //* Jesse Ryder Brown Foundation */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/jesseMockUp.webp'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'jesse ryder brown foundation website mockup'}
                            visitHref={'https://www.j-boocustoms.org/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/j-boo-customs-nextJS'}
                            repoLinkText={'Repository'}
                            titleText={'Jesse Ryder Brown Foundation, Inc.'}
                            disclaimerText={'Built With:'}
                            additionalText={'ReactJS | NextJS | Node.js | CSS | Figma'}
                            reverseText={styles.reverseText}
                        />
                    }
                />

                {/* //* BroFit Personal Training */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/brofitMockUp.webp'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'brofit website mockup'}
                            visitHref={'https://www.reesewilder.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/reese-wilder'}
                            repoLinkText={'Repository'}
                            titleText={'BroFit Personal Training'}
                            disclaimerText={'Built With:'}
                            additionalText={'HTML | BootStrap | CSS | JavaScript (repository is private due to client request)'}
                        />
                    }
                />

                {/* //* Outta Touch */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/outtaTouchMockUp.webp'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'outta touch application mockup'}
                            visitHref={'https://outta-touch.herokuapp.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/argounova/outta-touch'}
                            repoLinkText={'Repository'}
                            titleText={'Outta Touch'}
                            disclaimerText={'Built With:'}
                            additionalText={'MongoDB | Express.js | ReactJS | Node.js | Apollo Client | Apollo Server | Web-sockets | GraphQL | GraphQL Subscriptions'}
                            reverseText={styles.reverseText}
                        />
                    }
                />

                {/* //* MTG++ */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/mtgMockUp.webp'}
                            imgHeight={658}
                            imgWidth={875}
                            imgAlt={'mtg++ website mockup'}
                            visitHref={'https://peaceful-escarpment-11973.herokuapp.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/MTGpp'}
                            repoLinkText={'Repository'}
                            titleText={'MTG++'}
                            disclaimerText={'Built With:'}
                            additionalText={'Node.js | Express.js | mySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'}
                        />
                    }
                />

                {/* //* PokéWire */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/pokeMockUp.webp'}
                            imgHeight={658}
                            imgWidth={875}
                            imgAlt={'PokéWire website mockup'}
                            visitHref={'https://luckysal.github.io/pokewire/index.html'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/LuckySal/pokewire'}
                            repoLinkText={'Repository'}
                            titleText={'PokéWire'}
                            disclaimerText={'Built With:'}
                            additionalText={'HTML | JavaScript | jQuery | Bulma | CSS | Third Party API'}
                            reverseText={styles.reverseText}
                        />
                    }
                />



            </main>

        </>
    )
}