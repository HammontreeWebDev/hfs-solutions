import Head from "next/head";
import styles from "../styles/Certifications.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import TitleImage from "../components/TitleImage";
import Certificate from "../components/Certificate";

// jsxContent={
//     <Certificate 
//     imgSrc={'/img/certifications-page/'} 
//     imgHeight={} 
//     imgWidth={875} 
//     verifyHref={} 
//     verifyLinkText={'Verify'}
//     titleText={} 
//     reverseText={styles.reverseText} 
//     />
// }


export default function Certifications() {

    return (
        <>

            <Head>
                <title>Certifications | Kaileb Hammontree</title>
            </Head>

            <main>

                {/* //! Row 1 Title Image w/disclaimer text*/}
                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Knowledge & Experience'}
                            jsxContent={
                                <div className={styles.disclaimerContainer}>
                                    {/* //TODO: possibly add typewriter effect here to cycle through [' certifications ', ' education ',  ' experience '] */}
                                    <p className={'disclaimerText'}>
                                        Interested in learning more about my certifications, education, and experience?
                                    </p>
                                    <p className={'disclaimerText'}>
                                        You are in the right place!
                                    </p>
                                </div>
                            }
                            imgSrc={'/img/portfolio-page/portfolioTitleImage.svg'}
                            imgHeight={590}
                            imgWidth={574}
                        />

                    }
                />

                {/* //! Row 2 Certificate Component NORMAL & COLUMN REVERSE(smaller screens) */}
                {/* // * UCF Boot Camp */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Certificate 
                        imgSrc={'/img/certifications-page/bootCamp.svg'} 
                        imgHeight={658} 
                        imgWidth={876} 
                        verifyHref={'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA'} 
                        verifyLinkText={'Verify'}
                        titleText={'UCF Coding Boot Camp'} 
                        />
                    }

                />
                {/* //! Row 3 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}
                {/* // * UCF CYBER */}

                <RowSectionContainer
                    changeClass={styles.rowReverse}

                />

                {/* //! Row 4 Certificate Component NORMAL & COLUMN REVERSE(smaller screens) */}
                {/* // * HackerRank CSS */}

                <RowSectionContainer
                    changeClass={styles.columnReverse}

                />

                {/* //! Row 5 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}
                {/* // * HackerRank Front End (ReactJS) */}

                <RowSectionContainer
                    changeClass={styles.rowReverse}

                />

            </main>

        </>
    )
}