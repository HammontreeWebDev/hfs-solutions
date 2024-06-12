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
    "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA?identity__email=kaileb47%40outlook.com",
    "image": {
        "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA/image"
    },
    "key": "ewkha2NyQ8"
}];

const cyberBadgeData = [
    {
        "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A?identity__email=kaileb47%40outlook.com",
        "image": {
            "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A/image"
        },
        "key": "Rxyg7wKwTgWLC07"

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

               {/* //! PROFESSIONAL EXPERIENCE */}

                <section className={styles.experienceContainer}>
                    <h2 className={styles.centerTitle}>
                        Professional Experience
                    </h2>
                </section>

                {/* // * Software Engineering Lead Analyst */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <>
                            <Certificate
                                badgeSrc={'/img/certifications-page/software-engineer.png'}
                                badgeAlt={'software engineering'}
                                verifyHref={'https://www.linkedin.com/in/kaileb-hammontree/'}
                                verifyLinkText={'Learn More'}
                                titleText={'Software Engineering Lead Analyst'}
                                disclaimerText={'April 2024 - Present'}
                                additionalText={'Evernorth Health Services (Contract Position)'}
                            />
                        </>
                    }
                />

                {/* // * Developer | Owner */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <>

                            <Certificate
                                badgeSrc={'/img/certifications-page/hfs-icon.png'}
                                badgeAlt={'developer - owner'}
                                verifyHref={'/portfolio'}
                                verifyLinkText={'Learn More'}
                                titleText={'Owner | Developer'}
                                reverseText={styles.reverseText}
                                disclaimerText={'June 2023 - Present'}
                                additionalText={'Hammontree Full-Stack Solutions LLC'}
                            />

                        </>
                    }
                />

                {/* //! PROFESSIONAL EDUCATION */}

                <section className={styles.experienceContainer}>
                    <h2 className={styles.centerTitle}>
                        Professional Education
                    </h2>
                </section>

                {/* // * UCF Boot Camp */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={
                        <>
                            <Certificate
                                badgeSrc={bootCampBadgeData[0].image.id}
                                badgeAlt={'coding boot camp certificate'}
                                verifyHref={bootCampBadgeData[0].id}
                                verifyLinkText={'Learn More'}
                                titleText={'Coding Boot Camp'}
                                disclaimerText={'September 2022 - December 2022'}
                                additionalText={'University Of Central Florida'}

                            />
                        </>
                    }
                />

                {/* // * UCF CYBER */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                    jsxContent={
                        <>

                            <Certificate
                                badgeSrc={cyberBadgeData[0].image.id}
                                badgeAlt={'cyber defense certificate'}
                                verifyHref={cyberBadgeData[0].id}
                                verifyLinkText={'Learn More'}
                                titleText={'Cyber Defense Professional'}
                                reverseText={styles.reverseText}
                                disclaimerText={'February 2021 - December 2021'}
                                additionalText={'University Of Central Florida'}
                            />

                        </>
                    }
                />
            </main>

        </>
    )
}