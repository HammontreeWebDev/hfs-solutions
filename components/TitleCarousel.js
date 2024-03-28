import { useState } from 'react';
import styles from '../styles/TitleCarousel.module.css';

export default function TitleCarousel({ titleText, images, disclaimerText }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <>

            {/* Carousel */}
            <div className={`column`}>
                <div className={styles.carousel}>
                    <button onClick={prevSlide}>Previous</button>
                    <img
                        className={styles.image}
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                    />
                    <button onClick={nextSlide}>Next</button>
                </div>
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