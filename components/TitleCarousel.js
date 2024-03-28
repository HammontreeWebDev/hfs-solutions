import { useState } from 'react';
import styles from '../styles/TitleCarousel.module.css';

export default function TitleCarousel({props, images }){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () =>  {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    return(
        <>
       <div className={styles.carousel}>
        <button onClick={prevSlide}>Previous</button>
        <img 
        className={styles.image}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        />
        <button onClick={nextSlide}>Next</button>
       </div>
        </>
    )
}