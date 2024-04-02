import { useEffect, useState } from "react";
import styles from "../styles/Certificate.module.css";
import Image from 'next/image';
import Skeleton from "@mui/material/Skeleton";


export default function Project({ imgSrc, imgHeight, imgWidth, reverseText, titleText, verifyHref, verifyLinkText, imgAlt, badgeSrc, badgeAlt, badgeKey }) {

    const [imageLoading, setImageLoading] = useState(true);
    const [badgeLoading, setBadgeLoading] = useState(true);

    return (

        <>
            {/* Mock Ups & Btn */}
            {/* // ! Skeleton for certificate images */}
            {/* // * only render if imgSrc prop is passed */}
            {
                imgSrc && (
                    <div className="column">
                        {
                            imageLoading ?

                                <Skeleton variant="rectangular">
                                    <Image
                                        className={styles.image}
                                        src={imgSrc}
                                        height={imgHeight}
                                        width={imgWidth}
                                        alt={imgAlt}
                                        onLoad={(setImageLoading(false))}
                                        onLoadedData={() => setImageLoading(false)}
                                    />
                                </Skeleton>

                                :

                                <Image
                                    className={styles.image}
                                    src={imgSrc}
                                    height={imgHeight}
                                    width={imgWidth}
                                    alt={imgAlt}
                                />
                        }
                        <div className={styles.linksRow}>

                            <a
                                className={styles.links}
                                href={verifyHref}
                            >
                                {verifyLinkText}
                            </a>

                        </div>
                    </div>
                )
            }

            {/* // ! Skeleton for badge images */}

            {
                badgeSrc && (
                    <div className="column">
                        {
                            badgeLoading ?

                                <Skeleton variant="circular">
                                    <img
                                        className={`${styles.badge}`}
                                        src={badgeSrc}
                                        alt={badgeAlt}
                                        onLoad={() => setBadgeLoading(false)}
                                        onLoadedData={() => setBadgeLoading(false)}
                                    />
                                </Skeleton>

                                :

                                <img
                                    className={`${styles.badge}`}
                                    src={badgeSrc}
                                    alt={badgeAlt}
                                />
                        }
                        <div className={styles.linksRow}>

                            <a
                                className={styles.links}
                                href={verifyHref}
                            >
                                {verifyLinkText}
                            </a>

                        </div>
                    </div>
                )
            }


            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.titleContainer} titleText ${reverseText}`}>
                    <h1>{titleText}</h1>
                </div>

            </div>
        </>


    )
}