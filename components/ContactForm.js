import styles from "../styles/ContactForm.module.css";

export default function ContactForm({titleText, disclaimerText}) {

    return (
        <>
            {/* Contact form */}

            <div className={`column`}>


            </div>

            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.topContainer} titleText`}>
                    <h1>{titleText}</h1>
                </div>
                <div className={`${styles.bottomContainer} disclaimerText`}>
                    <p>{disclaimerText}</p>
                </div>

            </div>
        </>
    )
}