import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.row}>

                {/* insert image here */}

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

                        <Image src={'../img/Footer/linkedin.svg'} width={281} height={70} />

                        <Image src={'../img/Footer/stackoverflow.svg'} width={71} height={70} />

                        <Image src={'../img/Footer/github.svg'} width={197} height={70} />

                        <Image src={'../img/Footer/facebook.svg'} width={71} height={70} />

                    </div>

                    <div clasName={styles.subRow}>

                    </div>

                </div>

            </div>
        </footer>
    )
}