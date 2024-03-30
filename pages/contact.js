import Head from "next/head";
import styles from "../styles/Contact.module.css";
import TitleCarousel from "../components/TitleCarousel";
import RowSectionContainer from "../components/RowSectionContainer";


export default function Contact() {

    return (
        <>

            <Head>
                <title>Contact | Kaileb Hammontree</title>
            </Head>

            <main>
{/* //!Row 1 Title Carousel REVERSE */}
                <RowSectionContainer
                changeClass={`${styles.rowReverse} ${styles.columnReverse}`}
                jsxContent={

                    <TitleCarousel
                    reverseText={styles.reverseText}
                    titleText={`Stay Connected`}
                    disclaimerText={`Check out the list of socials and click on the icon to visit!`}
                    images={['../img/contact-page/linkedInCarousel.svg', '../img/contact-page/stackoverflowcarousel.svg', '../img/contact-page/githubcarousel.svg', '../img/contact-page/facebookcarousel.svg']}
                    links={['https://www.linkedin.com/in/kaileb-hammontree/', 'https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile','https://github.com/HammontreeWebDev','https://www.facebook.com/hammontreefullstacksolutions/']}
                    />

                }
                />

            </main>
            
        </>
    )
}