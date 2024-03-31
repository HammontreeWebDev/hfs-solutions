import styles from "../styles/Certificate.module.css";

import Image from 'next/image';

export default function Project({ imgSrc, imgHeight, imgWidth, reverseText, titleText, verifyHref, verifyLinkText }) {
    return (

        <>
            {/* Mock Ups & Btn */}

            <div className={`column`}>
                <Image
                    className={styles.image}
                    src={imgSrc}
                    height={imgHeight}
                    width={imgWidth}
                />

                <div className={styles.linksRow}>

                    <a
                        className={styles.links}
                        href={verifyHref}
                    >
                        {verifyLinkText}
                    </a>

                </div>
            </div>

            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.titleContainer} titleText ${reverseText}`}>
                    <h1>{titleText}</h1>
                </div>

            </div>
        </>


    )
}