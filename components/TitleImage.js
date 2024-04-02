import styles from '../styles/TitleImage.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from "@mui/material/Skeleton";

export default function TitleImage(props) {

    const [loading, setLoading] = useState(true);

    return (

        <>

            {/* Left Side: Title Text */}
            <div className={`column titleText`}>
                <h1> {props.titleText} </h1>
                {props.jsxContent}
            </div>

            {/* Right Side: Image */}
            <div className={`column`}>
                {
                    loading ?

                        <Skeleton variant= "rectangular">
                            <Image
                                className={styles.image}
                                src={props.imgSrc}
                                height={props.imgHeight}
                                width={props.imgWidth}
                                alt={props.imgAlt}
                                priority={props.priority}
                                onLoad={() => setLoading(false)}
                                onLoadedData={() => setLoading(false)}
                            />
                        </Skeleton>

                        :

                        <Image
                            className={styles.image}
                            src={props.imgSrc}
                            height={props.imgHeight}
                            width={props.imgWidth}
                            alt={props.imgAlt}
                            priority={props.priority}
                        />
                }
            </div>

        </>
    )
}