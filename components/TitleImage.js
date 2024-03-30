import styles from '../styles/TitleImage.module.css';
import Image from 'next/image';

export default function TitleImage(props) {
    return (

        <>

            {/* Left Side: Title Text */}
            <div className={`column titleText`}>
                <h1> {props.titleText} </h1>
                {props.jsxContent}
            </div>

            {/* Right Side: Image */}
            <div className={`column`}>
                <Image
                    className={styles.image}
                    src={props.imgSrc}
                    height={props.imgHeight}
                    width={props.imgWidth}
                />
            </div>

        </>
    )
}