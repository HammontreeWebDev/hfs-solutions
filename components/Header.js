import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { LineMdCloseToMenuTransition } from './Icons/Menu';
import { LineMdMenuToCloseTransition } from './Icons/CloseMenu';

export default function Header() {

    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

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


    const mobileMenuOn = () => {
        setMobileMenu(true);
    };

    const mobileMenuOff = () => {
        setMobileMenu(false);
    };


    return (
        // classname for dimension specifications
        <header className={styles.container}>
            <Image className={styles.leftImage} src='../img/Header/hfs-header-left.svg' width={578} height={430} />
            <Image className={styles.vector} src='../img/Header/header-vector.svg' width={1376} height={130} />

            <div className={styles.mobileTitleContainer}>
                <h1 className={styles.mobileTitle}>
                    Hammontree 
                    <br/>
                    Full-Stack Solutions 
                    <br/>
                    LLC
                    </h1>
            </div>
            {
                isMobileDevice ?

                    <>
                        <div className={styles.mobileRow}>

                            <button
                                className={styles.mobileMenuToggle}
                                onClick={() => mobileMenuOn()}
                            >
                                <LineMdCloseToMenuTransition />
                            </button>

                        </div>

                        {mobileMenu ?
                            <div className={styles.mobileMenu}>

                                <div className={styles.mobileRow}>

                                    <button
                                        className={styles.mobileMenuToggle}
                                        onClick={() => mobileMenuOff()}
                                    >
                                        <LineMdMenuToCloseTransition />
                                    </button>

                                </div>

                                <Link
                                    className={`${styles.navLink} subText`}
                                    href='/'
                                    onClick={mobileMenuOff}
                                >
                                    Home
                                </Link>

                                <Link
                                    className={`${styles.navLink} subText`}
                                    href='/biography'
                                    onClick={mobileMenuOff}
                                >
                                    Biography
                                </Link>

                                <Link
                                    className={`${styles.navLink} subText`}
                                    href='/contact'
                                    onClick={mobileMenuOff}
                                >
                                    Contact
                                </Link>

                                <Link
                                    className={`${styles.navLink} subText`}
                                    href='/portfolio'
                                    onClick={mobileMenuOff}
                                >
                                    Portfolio
                                </Link>

                                <Link
                                    className={`${styles.navLink} subText`}
                                    href='/certifications'
                                    onClick={mobileMenuOff}
                                >
                                    Certifications
                                </Link>

                            </div>

                            :

                            ''
                        }

                    </>

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