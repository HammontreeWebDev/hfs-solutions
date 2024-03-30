import Head from "next/head";
import styles from "../styles/Biography.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import CenterRowSectionContainer from "../components/CenterRowSectionContainer";
import TitleImage from "../components/TitleImage";
import TypeWriter from "../components/TypeWriter";


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

                {/* // !Row3 - Image Component */}

                <CenterRowSectionContainer
                    jsxContent={
                        <TypeWriter />
                    }
                />

            </main>

        </>
    )
}