import styles from '../styles/Project.module.css';
import Image from 'next/image';

export default function Project({ imgSrc, imgHeight, imgWidth, reverseText, titleText, disclaimerText, additionalText, visitHref, visitLinkText, repoHref, repoLinkText, imgAlt }) {
    return (

        <>
            {/* Mock Ups & Btn */}

            <div className={`column`}>
                <Image
                    className={styles.image}
                    src={imgSrc}
                    height={imgHeight}
                    width={imgWidth}
                    alt={imgAlt}
                />

                <div className={styles.linksRow}>

                    <a
                        className={styles.links}
                        href={visitHref}
                    >
                        {visitLinkText}
                    </a>

                    <a
                        className={styles.links}
                        href={repoHref}
                    >
                        {repoLinkText}
                    </a>

                </div>
            </div>

            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.topContainer} titleText ${reverseText}`}>
                    <h1>{titleText}</h1>
                </div>

                <div className={`${styles.bottomContainer} disclaimerText ${reverseText}`}>
                    <p>

                        {disclaimerText}

                        <br />

                        <span className={styles.spanText}>

                            {additionalText}

                        </span>

                    </p>
                </div>

            </div>
        </>


    )
}