import Head from "next/head";
import styles from "../styles/Biography.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import CenterRowSectionContainer from "../components/CenterRowSectionContainer";
import TitleImage from "../components/TitleImage";
import ImageComponent from "../components/ImageComponent";


export default function Biography() {

    return (
        <>

            <Head>
                <title>Bio | Kaileb Hammontree</title>
            </Head>

            <main>
                {/* // !Row 1 - TitleImage Component // */}

                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Kaileb Hammontree'}
                            imgSrc={`../img/biography-page/avatar.svg`}
                            imgHeight={590}
                            imgWidth={574}
                        />
                    }
                />

                {/* // !Row2 - Image Component */}

                <CenterRowSectionContainer
                    jsxContent={
                        <ImageComponent
                            imgSrc={`../img/biography-page/bioTitle.svg`}
                            imgHeight={1000}
                            imgWidth={1501}
                        />
                    }
                />

                {/* // !Row3 - Image Component */}

                <CenterRowSectionContainer
                    jsxContent={
                        <ImageComponent
                            imgSrc={`../img/biography-page/bioContent.svg`}
                            imgHeight={1000}
                            imgWidth={1501}
                            addClass={styles.smallScreenHide}
                        />
                    }
                />

            </main>

        </>
    )
}