import Head from "next/head";
import styles from "../styles/Biography.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import CenterRowSectionContainer from "../components/CenterRowSectionContainer";
import TitleImage from "../components/TitleImage";
import TypeWriterComponent from "../components/TypeWriterComponent";
import { Typewriter } from "react-simple-typewriter";


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
                            jsxContent={
                                <h6>
                                    <span className={styles.adjective}>
                                        <Typewriter
                                            words={['Owner ', 'Developer ', 'Consultant ', 'Strategist ', 'Student ']}
                                            loop={true}
                                        />
                                    </span>
                                    | Hammontree Full-Stack Solutions
                                </h6>
                            }
                        />
                    }
                />

                {/* // !Row3 - Image Component */}

                <CenterRowSectionContainer
                    jsxContent={
                        <TypeWriterComponent />
                    }
                />

            </main>

        </>
    )
}