import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.container}>
              {/* background image */}

                <Image className={styles.vector} src={'../img/Footer/footer.svg'} width={1920} height={430} alt={'background image'} />
            <div className={styles.row}>

                <div className={styles.footerColumn1}>
                    <p className={styles.footerText}>
                        Website Designed & Developed By:
                        <br />
                        Hammontree Full-Stack Solutions LLC
                        <br />
                        <br />
                        Copyright © 2024. Hammontree Full-Stack Solutions LLC
                    </p>
                </div>

                <div className={styles.footerColumn2}>

                    <div className={styles.subRow}>

                        <Link href={'https://www.linkedin.com/in/kaileb-hammontree/'}>
                            <Image src={'../img/Footer/linkedin.svg'} width={281} height={70} alt="linked in logo" />
                        </Link>

                        <Link href={' https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile'}>
                            <Image src={'../img/Footer/stackoverflow.svg'} width={71} height={70} alt="stack overflow logo" />
                        </Link>

                        <Link href={'https://github.com/HammontreeWebDev'}>
                            <Image src={'../img/Footer/github.svg'} width={197} height={70} alt="git hub logo" />
                        </Link>

                        <Link href={'https://www.facebook.com/hammontreefullstacksolutions/'}>
                            <Image src={'../img/Footer/facebook.svg'} width={71} height={70} alt="facebook logo" />
                        </Link>

                    </div>

                    <div className={styles.subRow}>
                        <Link className={`${styles.navLink} subText`} href='/'>
                            Home
                        </Link>

                        <Link className={`${styles.navLink} subText`} href='/biography'>
                            Biography
                        </Link>
                        <Link className={`${styles.navLink} subText`} href='/contact'>
                            Contact
                        </Link>
                        <Link className={`${styles.navLink} subText`} href='/portfolio'>
                            Portfolio
                        </Link>
                        <Link className={`${styles.navLink} subText`} href='/certifications'>
                            Certifications
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    )
}