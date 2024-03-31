import Head from "next/head";
import styles from "../styles/Certifications.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import TitleImage from "../components/TitleImage";
import Certificate from "../components/Certificate";


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
                
                {/* //! Row 3 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}

                {/* //! Row 4 Certificate Component NORMAL & COLUMN REVERSE(smaller screens) */}

                {/* //! Row 5 Certificate Component ROW REVERSE & reverseText(change to column reverse at smaller screens) */}

            </main>

        </>
    )
}