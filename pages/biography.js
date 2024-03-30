import Head from "next/head";
import RowSectionContainer from "../components/RowSectionContainer";
import TitleImage from "../components/TitleImage";


export default function Biography() {

    return (
        <>

            <Head>
                <title>Bio | Kaileb Hammontree</title>
            </Head>

            <main>
                {/* // !Row 1 - TitleImage Component // */}
                <RowSectionContainer 
                jsxContent = {

                    <TitleImage 
                    titleText={'Kaileb Hammontree'}
                    imgSrc={`../img/biography-page/avatar.svg`}
                    imgHeight={590}
                    imgWidth={574}
                    />
                }
                
                
                />

                {/* // !Row2 - Image Component */}

                {/* // !Row3 - Image Component */}

            </main>

        </>
    )
}