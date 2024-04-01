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
                            imgSrc={'/img/portfolio-page/portfolioTitleImage.svg'}
                            imgHeight={590}
                            imgWidth={574}
                        />

                    }
                />

                {/* //! Row 2 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
                {/* //* Jesse Ryder Brown Foundation */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/jesseMockUp.svg'}
                            imgHeight={658}
                            imgWidth={876}
                            visitHref={'https://www.j-boocustoms.org/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/j-boo-customs-nextJS'}
                            repoLinkText={'Repository'}
                            titleText={'Jesse Ryder Brown Foundation, Inc.'}
                            disclaimerText={'Built With:'}
                            additionalText={'ReactJS | NextJS | Node.js | CSS | Figma'}
                        />
                    }
                />

                {/* //! Row 3 Project Component ROW REVERSE & reverseText(change to column reverse at smaller screens)*/}
                {/* //* BroFit Personal Training */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/brofitMockUp.svg'}
                            imgHeight={658}
                            imgWidth={876}
                            visitHref={'https://www.reesewilder.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/reese-wilder'}
                            repoLinkText={'Repository'}
                            titleText={'BroFit Personal Training'}
                            disclaimerText={'Built With:'}
                            additionalText={'HTML | BootStrap | CSS | JavaScript (repository is private due to client request)'}
                            reverseText={styles.reverseText}
                        />
                    }
                />


                {/* //! Row 4 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
                {/* //* Outta Touch */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/outtaTouchMockUp.svg'}
                            imgHeight={658}
                            imgWidth={876}
                            visitHref={'https://outta-touch.herokuapp.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/argounova/outta-touch'}
                            repoLinkText={'Repository'}
                            titleText={'Outta Touch'}
                            disclaimerText={'Built With:'}
                            additionalText={'MongoDB | Express.js | ReactJS | Node.js | Apollo Client | Apollo Server | Web-sockets | GraphQL | GraphQL Subscriptions'}
                        />
                    }
                />


                {/* //! Row 5 Project Component ROW REVERSE & reverseText (change to column reverse at smaller screens)*/}
                {/* //* MTG++ */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/mtgMockUp.svg'}
                            imgHeight={658}
                            imgWidth={875}
                            visitHref={'https://peaceful-escarpment-11973.herokuapp.com/'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/HammontreeWebDev/MTGpp'}
                            repoLinkText={'Repository'}
                            titleText={'MTG++'}
                            disclaimerText={'Built With:'}
                            additionalText={'Node.js | Express.js | mySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'}
                            reverseText={styles.reverseText}
                        />
                    }
                />


                {/* //! Row 6 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
                {/* //* PokéWire */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Project
                            imgSrc={'/img/portfolio-page/pokeMockUp.svg'}
                            imgHeight={658}
                            imgWidth={875}
                            visitHref={'https://luckysal.github.io/pokewire/index.html'}
                            visitLinkText={'Visit Site'}
                            repoHref={'https://github.com/LuckySal/pokewire'}
                            repoLinkText={'Repository'}
                            titleText={'PokéWire'}
                            disclaimerText={'Built With:'}
                            additionalText={'HTML | JavaScript | jQuery | Bulma | CSS | Third Party API'}
                        />
                    }
                />



            </main>

        </>
    )
}