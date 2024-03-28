import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
    return(
        // classname for dimension specifications
        <header className={styles.container}>

            <Image className={styles.leftImage} src='../img/Header/hfs-header-left.svg' width={578} height={430} />
            <Image className={styles.vector} src='../img/Header/header-vector.svg' width={1376} height={130} />
            {/* <p>This is header text test</p> */}
        </header>
    )
}