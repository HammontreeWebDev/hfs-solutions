import styles from '../styles/TitleImageBtn.module.css';
import Image from 'next/image';

export default function TitleImageBtn({ titleText, disclaimerText, imgSrc, imgHeight, imgWidth, btnText, secondText, href}) {
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

                <Image
                    className={styles.image}
                    src={imgSrc}
                    height={imgHeight}
                    width={imgWidth}
                />

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