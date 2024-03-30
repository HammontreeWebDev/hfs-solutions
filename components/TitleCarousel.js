import { useState, useEffect } from 'react';
import styles from '../styles/TitleCarousel.module.css';
import { CarbonNextFilled } from './Icons/CarbonNextFilled';
import { CarbonPreviousFilled } from './Icons/CarbonPreviousFilled';

// TODO: Figure out why there is layout shifts when carousel transitions
// ! check heights etc. . . 

export default function TitleCarousel({ titleText, images, links, disclaimerText, reverseText }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
    const [triggerAnimation, setTriggerAnimation] = useState('');
    const [btnAnimation, setBtnAnimation] = useState('');
    const [nextState, setNextState] = useState(false);

    // use this state to track whether the next and prev buttons are hovered so that you can pause the auto transitions
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isHovered) {
                setNextState(true);

                setTimeout(() => {
                    setNextState(false);
                    setTriggerAnimation('animate__animated animate__fadeOutLeft');
                    setBtnAnimation('animate__animated animate__fadeOut');
                }, 1);

                setTimeout(() => {
                    setNextState(true);
                }, 1000);

                setTimeout(() => {
                    setNextState(false);
                    const newIndex = (currentImageIndex + 1 + images.length) % images.length;
                    const newLink = (currentLinkIndex + 1 + links.length) % links.length;
                    setTriggerAnimation('animate__animated animate__fadeInRight');
                    setBtnAnimation('animate__animated animate__fadeIn');
                    setCurrentImageIndex(newIndex);
                    setCurrentLinkIndex(newLink);
                }, 1001);
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex, currentLinkIndex, images, links, isHovered]);

    const handleHover = (hovered) => {
        setIsHovered(hovered);
    }

    const nextSlide = () => {
        setNextState(true);

        setTimeout(() => {
            setNextState(false);
            setTriggerAnimation('animate__animated animate__fadeOutLeft');
            setBtnAnimation('animate__animated animate__fadeOut');
        }, 1);

        setTimeout(() => {
            setNextState(true);
        }, 1000);

        setTimeout(() => {
            setNextState(false);
            const newIndex = (currentImageIndex + 1 + images.length) % images.length;
            const newLink = (currentLinkIndex + 1 + links.length) % links.length;
            setTriggerAnimation('animate__animated animate__fadeInRight');
            setBtnAnimation('animate__animated animate__fadeIn');
            setCurrentImageIndex(newIndex);
            setCurrentLinkIndex(newLink);
        }, 1001);
    };

    const prevSlide = () => {
        setNextState(true);

        setTimeout(() => {
            setNextState(false);
            setTriggerAnimation('animate__animated animate__fadeOutRight');
            setBtnAnimation('animate__animated animate__fadeOut');
        }, 1);

        setTimeout(() => {
            setNextState(true);
        }, 1000);

        setTimeout(() => {
            setNextState(false);
            const newIndex = (currentImageIndex - 1 + images.length) % images.length;
            const newLink = (currentLinkIndex - 1 + links.length) % links.length;
            setTriggerAnimation('animate__animated animate__fadeInLeft');
            setBtnAnimation('animate__animated animate__fadeIn')
            setCurrentImageIndex(newIndex);
            setCurrentLinkIndex(newLink);
        }, 1001);
    };

    return (
        <>

            {/* Carousel */}
            <div className={`column`}>
                <div className={styles.carousel}>

                    {
                        nextState ?
                            <>
                                <button
                                    className={styles.hidden}
                                    onClick={prevSlide}
                                    onMouseEnter={() => handleHover(true)}
                                    onMouseLeave={() => handleHover(false)}
                                >
                                    <CarbonPreviousFilled />
                                </button>

                                <img
                                    className={styles.hidden}
                                    src={images[currentImageIndex]}
                                    alt={`Image ${currentImageIndex + 1}`}
                                />

                                <button
                                    className={styles.hidden}
                                    onClick={nextSlide}
                                    onMouseEnter={() => handleHover(true)}
                                    onMouseLeave={() => handleHover(false)}
                                >
                                    <CarbonNextFilled />
                                </button>
                            </>

                            :
                            <>
                                <button
                                    className={`${styles.btn} ${btnAnimation}`}
                                    onClick={prevSlide}
                                    onMouseEnter={() => handleHover(true)}
                                    onMouseLeave={() => handleHover(false)}
                                >
                                    <CarbonPreviousFilled />
                                </button>

                                <a 
                                href={links[currentLinkIndex]
                                
                                }>
                                    <img
                                        className={`${styles.image} ${triggerAnimation}`}
                                        src={images[currentImageIndex]}
                                        alt={`Image ${currentImageIndex + 1}`}
                                    />
                                </a>

                                <button
                                    className={`${styles.btn} ${btnAnimation}`}
                                    onClick={nextSlide}
                                    onMouseEnter={() => handleHover(true)}
                                    onMouseLeave={() => handleHover(false)}
                                >
                                    <CarbonNextFilled />
                                </button>
                            </>
                    }
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