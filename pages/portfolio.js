import Head from "next/head";
import styles from '../styles/Portfolio.module.css';
import RowSectionContainer from "../components/RowSectionContainer";
import TitleImage from "../components/TitleImage";


export default function Portfolio() {

    return (
        <>

            <Head>
                <title>Portfolio | Kaileb Hammontree</title>
            </Head>

            <main>

                {/* //! Row 1 Title Image w/disclaimer text*/}
                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Welcome To My Portfolio'}
                            jsxContent={
                                <>
                                    <p className={'disclaimerText'}>
                                        On this page you can preview the different projects I have completed!
                                    </p>
                                    <p className={'disclaimerText'}>
                                        Visit the application/website itself or navigate to the GitHub repository to check out the code base!
                                    </p>
                                </>
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
                />

                {/* //! Row 3 Project Component ROW REVERSE (change to column reverse at smaller screens)*/}
                {/* //* BroFit Personal Training */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                />


                {/* //! Row 4 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
                {/* //* Outta Touch */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                />


                {/* //! Row 5 Project Component ROW REVERSE (change to column reverse at smaller screens)*/}
                {/* //* MTG++ */}
                <RowSectionContainer
                    changeClass={styles.rowReverse}
                />


                {/* //! Row 6 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
                {/* //* PokéWire */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                />



            </main>

        </>
    )
}