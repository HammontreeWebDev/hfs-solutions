import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        // classname for dimension specifications
        <header className={styles.container}>
            <Image className={styles.leftImage} src='../img/Header/hfs-header-left.svg' width={578} height={430} />
            <Image className={styles.vector} src='../img/Header/header-vector.svg' width={1376} height={130} />
            <div className={styles.navRow}>
                <Link className={`${styles.navLink} subText`} href='/'>Home</Link>
                <Link className={`${styles.navLink} subText`} href='/biography'>Biography</Link>
                <Link className={`${styles.navLink} subText`} href='/contact'>Contact</Link>
                <Link className={`${styles.navLink} subText`} href='/portfolio'>Portfolio</Link>
                <Link className={`${styles.navLink} subText`} href='/certifications'>Certifications</Link>
            </div>
        </header>
    )
}