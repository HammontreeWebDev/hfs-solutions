import Head from "next/head";
import styles from "../styles/Contact.module.css";
import TitleCarousel from "../components/TitleCarousel";
import RowSectionContainer from "../components/RowSectionContainer";
import ContactForm from "../components/ContactForm";
import TitleImageBtn from "../components/TitleImageBtn";

// TODO: Custom Modal / Alerts - (Within ContactForm.js)

export default function Contact() {

    return (
        <>

            <Head>
                <title>Contact | Kaileb Hammontree</title>
            </Head>

            <main>
                {/* //!Row 1 Title Carousel REVERSE */}
                <RowSectionContainer
                    changeClass={`${styles.rowReverse}`}
                    jsxContent={

                        <TitleCarousel
                            reverseText={styles.reverseText}
                            titleText={`Stay Connected`}
                            disclaimerText={`Check out the list of socials and click on the icon to visit!`}
                            images={['../img/contact-page/linkedInCarousel.svg', '../img/contact-page/stackoverflowcarousel.svg', '../img/contact-page/githubcarousel.svg', '../img/contact-page/facebookcarousel.svg']}
                            links={['https://www.linkedin.com/in/kaileb-hammontree/', 'https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile', 'https://github.com/HammontreeWebDev', 'https://www.facebook.com/hammontreefullstacksolutions/']}
                        />

                    }
                />

                {/* //! Row2 ContactForm - column reverse for smaller screens */}
                <RowSectionContainer
                    changeClass={styles.columnReverse}
                    jsxContent={

                        <ContactForm
                            titleText={`General Inquiry Form`}
                            disclaimerText={`If you have general questions for me, feel free to use this form to send me an email`}
                            additionalText={`Please allow 24-72 business hours while waiting for a response`}
                        />

                    }
                />

                {/* //! Row3 StartProject */}
                <RowSectionContainer
                    jsxContent={
                        <TitleImageBtn
                            titleText={'Start Your Project'}
                            disclaimerText={'Are you ready to start your project?'}
                            secondText={'Let me know more about your vision by filling out a brief questionnaire'}
                            imgSrc={'/img/contact-page/phStart.svg'}
                            imgHeight={584}
                            imgWidth={875}
                            btnText={'I Am Ready To Start My Project'}
                            href={'https://app.hellobonsai.com/f/a14a29cd17402aa'}
                        />
                    }
                />

            </main>

        </>
    )
}