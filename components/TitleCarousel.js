import { useState, useEffect } from 'react';
import styles from '../styles/TitleCarousel.module.css';

export default function TitleCarousel({ titleText, images, disclaimerText, reverseText }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [triggerAnimation, setTriggerAnimation] = useState('');
    const [nextState, setNextState] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNextState(true);

            setTimeout(() => {
                setNextState(false);
                setTriggerAnimation('animate__animated animate__fadeOutLeft');
            }, 1);

            setTimeout(() => {
                setNextState(true);
            }, 1000);

            setTimeout(() => {
                setNextState(false);
                const newIndex = (currentImageIndex - 1 + images.length) % images.length;
                setTriggerAnimation('animate__animated animate__fadeInRight');
                setCurrentImageIndex(newIndex);
            }, 1001);
        }, 15000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex, images]);

    const nextSlide = () => {
        setNextState(true);

        setTimeout(() => {
            setNextState(false);
            setTriggerAnimation('animate__animated animate__fadeOutLeft');
        }, 1);

        setTimeout(() => {
            setNextState(true);
        }, 1000);

        setTimeout(() => {
            setNextState(false);
            const newIndex = (currentImageIndex - 1 + images.length) % images.length;
            setTriggerAnimation('animate__animated animate__fadeInRight');
            setCurrentImageIndex(newIndex);
        }, 1001);
    };

    const prevSlide = () => {
        setNextState(true);

        setTimeout(() => {
            setNextState(false);
            setTriggerAnimation('animate__animated animate__fadeOutRight');
        }, 1);

        setTimeout(() => {
            setNextState(true);
        }, 1000);

        setTimeout(() => {
            setNextState(false);
            const newIndex = (currentImageIndex - 1 + images.length) % images.length;
            setTriggerAnimation('animate__animated animate__fadeInLeft');
            setCurrentImageIndex(newIndex);
        }, 1001);
    };

    return (
        <>

            {/* Carousel */}
            <div className={`column`}>
                <div className={styles.carousel}>
                    <button className={styles.btn} onClick={prevSlide}>Previous</button>
                    {
                        nextState ?

                            <img
                                className={styles.hidden}
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                            />

                            :

                            <img
                                className={`${styles.image} ${triggerAnimation}`}
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                    }
                    <button className={styles.btn}
                        onClick={nextSlide}>Next</button>
                </div>
            </div>

            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.topContainer} titleText ${reverseText}`}>
                    <h1>{titleText}</h1>
                </div>
                <div className={`${styles.bottomContainer} disclaimerText ${reverseText}`}>
                    <p>{disclaimerText}</p>
                </div>

            </div>

        </>
    )
}