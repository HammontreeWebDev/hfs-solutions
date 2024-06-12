import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { LineMdCloseToMenuTransition } from './Icons/Menu';
import { LineMdMenuToCloseTransition } from './Icons/CloseMenu';
import Skeleton from "@mui/material/Skeleton";

export default function Header() {

    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [leftImageLoading, setLeftImageLoading] = useState(true);
    const [mobileHeaderLoading, setMobileHeaderLoading] = useState(true);

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

            {/* // ! Left Image Skeleton */}
            {
                leftImageLoading ?

                    <Skeleton variant="rectangular" width={"30%"} height={"100%"}>
                        <Image
                            className={styles.leftImage}
                            src='/img/Header/hfs-header-left.svg'
                            width={578}
                            height={430}
                            alt='header image'
                            priority={true}
                            onLoad={() => setLeftImageLoading(false)}
                            onLoadedData={() => setLeftImageLoading(false)}
                        />
                    </Skeleton>

                    :


                    <Image
                        className={styles.leftImage}
                        src='/img/Header/hfs-header-left.svg'
                        width={578}
                        height={430}
                        alt='header image'
                        priority={true}
                    />

            }
            <Image
                className={styles.vector}
                src='/img/Header/header-vector.svg'
                width={1376}
                height={130}
                alt='background vector image'
            />

            <div className={styles.mobileTitleContainer}>
                {/* // ! mobile header skeleton */}
                {
                    mobileHeaderLoading ?

                        <Skeleton variant="rectangular" width={"100%"}>

                            <Image
                                className={styles.mobileHeaderImage}
                                src='/img/Header/mobileHeaderImage.webp'
                                width={768}
                                height={576}
                                alt='mobile header image'
                                priority={true}
                                onLoad={() => setMobileHeaderLoading(false)}
                                onLoadedData={() => setMobileHeaderLoading(false)}
                            />

                        </Skeleton>

                        :

                        <Image
                            className={styles.mobileHeaderImage}
                            src='/img/Header/mobileHeaderImage.webp'
                            width={768}
                            height={576}
                            alt='mobile header image'
                            priority={true}
                        />
                }
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
                        <Link className={`${styles.navLink} ${styles.hoverLink} subText`} href='/'>Home</Link>
                        <Link className={`${styles.navLink} ${styles.hoverLink} subText`} href='/biography'>Biography</Link>
                        <Link className={`${styles.navLink} ${styles.hoverLink} subText`} href='/contact'>Contact</Link>
                        <Link className={`${styles.navLink} ${styles.hoverLink} subText`} href='/portfolio'>Portfolio</Link>
                        <Link className={`${styles.navLink} ${styles.hoverLink} subText`} href='/certifications'>Experience</Link>
                    </div>
            }
        </header>
    )
}