import styles from '../styles/ImageComponent.module.css';
import Image from 'next/image';

export default function ImageComponent(props) {
    return (

        <Image

            className={`${styles.image} ${props.addClass}`}
            src={props.imgSrc}
            height={props.imgHeight}
            width={props.imgWidth}

        />

    );
};