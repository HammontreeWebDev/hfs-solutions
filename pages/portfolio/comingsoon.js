import Head from "next/head";
import styles from '../../styles/Portfolio.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <>
            <Head>
                <title>Project Coming Soon</title>
                <meta name="description" content="This Project is currrently in progress and will be available shortly!" />
                <meta name="keywords" content="Portfolio, Web Development, Full-Stack Development, Kaileb Hammontree, pending, coming soon, in progress" />
                <link rel="canonical" href="https://www.kailebhammontree.com/portfolio/comingsoon" />
            </Head>

            <main>
                <h1
                    className={styles.soonTitle}
                >
                    This Project Is Under Construction
                </h1>

                <section className={styles.sectionContainer}>

                        <Link className={styles.link} href={'/portfolio'}>
                            Go Back
                        </Link>

                    <Image
                        src={'/img/portfolio-page/pw-reimagined.png'}
                        height={700}
                        width={1000}
                        alt="pokéwire re-imagined mockup"
                        className={styles.comingSoon}
                    />
                </section>

            </main>
        </>
    )
}