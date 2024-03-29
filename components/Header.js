import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { LineMdCloseToMenuTransition } from './Icons/Menu';

export default function Header() {

    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1235) {
                setIsMobileDevice(true);
            }
            else {
                setIsMobileDevice(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

    }, []);

    return (
        // classname for dimension specifications
        <header className={styles.container}>
            <Image className={styles.leftImage} src='../img/Header/hfs-header-left.svg' width={578} height={430} />
            <Image className={styles.vector} src='../img/Header/header-vector.svg' width={1376} height={130} />
            {
                isMobileDevice ?
                    <div className={styles.mobileRow}>

                        <button className={styles.mobileMenuToggle}>
                            <LineMdCloseToMenuTransition />
                        </button>

                    </div>

                    :

                    <div className={styles.navRow}>
                        <Link className={`${styles.navLink} subText`} href='/'>Home</Link>
                        <Link className={`${styles.navLink} subText`} href='/biography'>Biography</Link>
                        <Link className={`${styles.navLink} subText`} href='/contact'>Contact</Link>
                        <Link className={`${styles.navLink} subText`} href='/portfolio'>Portfolio</Link>
                        <Link className={`${styles.navLink} subText`} href='/certifications'>Certifications</Link>
                    </div>
            }
        </header>
    )
}