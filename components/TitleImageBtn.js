import styles from '../styles/TitleImageBtn.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from "@mui/material/Skeleton";

export default function TitleImageBtn({ titleText, disclaimerText, imgSrc, imgHeight, imgWidth, btnText, secondText, href, imgAlt }) {

    const [loading, setLoading] = useState(true);

    return (

        <>

            {/* Left Side: Title Text */}
            <div className={`column`}>

                <div className={`${styles.topContainer} titleText`}>
                    <h1>{titleText}</h1>
                </div>

                <div className={`${styles.bottomContainer} disclaimerText`}>
                    <p>{disclaimerText}</p>
                    <p>{secondText}</p>
                </div>

            </div>

            {/* Right Side: Image */}
            <div className={`column`}>

                {/* //! Skeleton for image */}

                {
                    loading ?

                        <Skeleton variant="rectangular">
                            <Image
                                className={styles.image}
                                src={imgSrc}
                                height={imgHeight}
                                width={imgWidth}
                                alt={imgAlt}
                                onLoad={() => setLoading(false)}
                                onLoadedData={() => setLoading(false)}
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

                {/* // * add button Here: */}

                <a
                    className={styles.btn}
                    href={href}
                >
                    {btnText}
                </a>

            </div>

        </>
    )
}