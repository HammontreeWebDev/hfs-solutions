import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

// Badge data
const bootCampBadgeData = [{
    "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA",
    "image": {
        "id": "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA/image"
    }
}];

const cyberBadgeData = [
    {
        "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A",
        "image": {
            "id": "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A/image"
        }

    }
]

export default function Footer() {
    return (
        <footer className={styles.container}>
            {/* background image */}

            <Image 
            className={styles.vector} 
            src={'/img/Footer/footer.svg'} 
            width={1920} 
            height={430} 
            alt={'background image'} />
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
                    <div className={styles.badgeRow}>
                        {bootCampBadgeData.map((badge, index) => (
                            <div className={styles.badgeColumn} key={index}>
                                <a href={`${badge.id}`}>
                                    <img
                                        className={styles.badge}
                                        src={badge.image.id}
                                        alt="Badge Image"
                                    />
                                </a>
                            </div>
                        ))}

                        {cyberBadgeData.map((badge, index) => (
                            <div className={styles.badgeColumn} key={index}>
                                <a href={`${badge.id}`}>
                                    <img
                                        className={styles.badge}
                                        src={badge.image.id}
                                        alt="Badge Image"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.footerColumn2}>

                    <div className={styles.subRow}>

                        <a href={'https://www.linkedin.com/in/kaileb-hammontree/'}>
                            <Image className={styles.logo} src={'../img/Footer/linkedin.svg'} width={281} height={70} alt="linked in logo" />
                        </a>

                        <a href={' https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile'}>
                            <Image className={styles.logo} src={'../img/Footer/stackoverflow.svg'} width={71} height={70} alt="stack overflow logo" />
                        </a>

                        <a href={'https://github.com/HammontreeWebDev'}>
                            <Image className={styles.logo} src={'../img/Footer/github.svg'} width={197} height={70} alt="git hub logo" />
                        </a>

                        <a href={'https://www.facebook.com/hammontreefullstacksolutions/'}>
                            <Image className={styles.logo} src={'../img/Footer/facebook.svg'} width={71} height={70} alt="facebook logo" />
                        </a>

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