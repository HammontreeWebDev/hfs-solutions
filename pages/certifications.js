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

// Badge data
const bootCampBadgeData = [{
    "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA",
    "image": {
        "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA/image"
    }
}];

const cyberBadgeData = [
    {
        "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A",
        "image": {
            "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A/image"
        }

    }
]


export default function Certifications() {

    return (
        <>

            <Head>
                <title>Certifications | Kaileb Hammontree</title>
                <meta name="description" content="Learn about what qualifies Kaileb Hammontree to tackle your next project." />
                <meta name="keywords" content="certifications, education, Kaileb Hammontree, University Of Central Florida, Web Developer, react, front-end, full-stack, back-end" />
                <link rel="canonical" href="https://www.kailebhammontree.com/certifications" />
            </Head>

            <main>

                {/* //! Row 1 Title Image w/disclaimer text*/}
                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Knowledge & Experience'}
                            jsxContent={
                                <div className={styles.disclaimerContainer}>
                                    <p className={'disclaimerText'}>
                                        Interested in learning more about my certifications, education, and experience?
                                    </p>
                                    <p className={'disclaimerText'}>
                                        You are in the right place!
                                    </p>
                                </div>
                            }
                            imgSrc={'/img/certifications-page/certTitleImage.webp'}
                            imgHeight={590}
                            imgWidth={574}
                            imgAlt={'light bulb title image'}
                            priority={true}
                        />

                    }
                />

                {/* //! Row 2 Certificate Component NORMAL & COLUMN REVERSE(smaller screens) */}
                {/* // * UCF Boot Camp */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <>
                            {bootCampBadgeData.map((badge) => (

                                <Certificate
                                    badgeSrc={badge.image.id}
                                    badgeAlt={'coding boot camp certificate'}
                                    verifyHref={badge.id}
                                    verifyLinkText={'Verify'}
                                    titleText={'UCF Coding Boot Camp'}
                                />

                            ))}
                        </>
                    }
                />

                {/* //! Row 3 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}
                {/* // * UCF CYBER */}

                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <>
                            {cyberBadgeData.map((badge) => (

                                <Certificate
                                    badgeSrc={badge.image.id}
                                    badgeAlt={'cyber defense certificate'}
                                    verifyHref={badge.id}
                                    verifyLinkText={'Verify'}
                                    titleText={'UCF Cyber Defense Professional'}
                                    reverseText={styles.reverseText}
                                />

                            ))}
                        </>
                    }

                />

                {/* //! Row 4 Certificate Component NORMAL & COLUMN REVERSE(smaller screens) */}
                {/* // * HackerRank CSS */}

                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <Certificate
                            imgSrc={'/img/certifications-page/css.svg'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'css certificate'}
                            verifyHref={'https://www.hackerrank.com/certificates/c7a702eeeac3'}
                            verifyLinkText={'Verify'}
                            titleText={'CSS Skill Certification'}
                        />
                    }

                />

                {/* //! Row 5 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}
                {/* // * HackerRank Front End (ReactJS) */}

                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <Certificate
                            imgSrc={'/img/certifications-page/frontEnd.svg'}
                            imgHeight={658}
                            imgWidth={876}
                            imgAlt={'front end developer, reactJS certificate'}
                            verifyHref={'https://www.hackerrank.com/certificates/4d0e4bd62b7c'}
                            verifyLinkText={'Verify'}
                            titleText={'Front-End Developer (ReactJS) Certification'}
                            reverseText={styles.reverseText}
                        />
                    }

                />

            </main>

        </>
    )
}