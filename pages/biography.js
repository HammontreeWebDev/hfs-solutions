import Head from "next/head";
import styles from "../styles/Biography.module.css";
import RowSectionContainer from "../components/RowSectionContainer";
import CenterRowSectionContainer from "../components/CenterRowSectionContainer";
import TitleImage from "../components/TitleImage";
import { Typewriter } from "react-simple-typewriter";
import SimpleCard from "../components/SimpleCard";


export default function Biography() {

    return (
        <>

            <Head>
                <title>Bio | Kaileb Hammontree</title>
            </Head>

            <main>
                {/* // !Row 1 - TitleImage Component // */}

                <RowSectionContainer
                    jsxContent={

                        <TitleImage
                            titleText={'Kaileb Hammontree'}
                            imgSrc={`../img/biography-page/avatar.svg`}
                            imgHeight={590}
                            imgWidth={574}
                            jsxContent={
                                <h6 className={styles.heading}>
                                    <span className={styles.adjectiveContainer}>
                                        <span className={styles.adjective}>
                                            <Typewriter
                                                words={['Owner ', 'Developer ', 'Consultant ', 'Strategist ', 'Student ']}
                                                loop={true}
                                                typeSpeed={100}
                                                deleteSpeed={80}
                                            />
                                        </span>
                                    </span>
                                    Hammontree Full-Stack Solutions
                                </h6>
                            }
                        />
                    }
                />

                {/* // !Row3 - Image Component */}

                <CenterRowSectionContainer
                    jsxContent={
                        <SimpleCard
                            titleText={'My Story'}
                            p1={'First of all, I want to thank you for taking the time out of your day to visit my website. I hope that you enjoy yourself while you are here, and that you find what you are looking for.'}
                            p2={`My journey began in 2021 when I graduated from The University Of Central Florida's Cyber Defense Professional Certificate Program. We had just spent the last 10 months learning concepts like computer networking, network security, system administration, and ethical hacking. I enjoyed my education, however, I realized that cybersecurity was not where my true passion lies. One of the courses in this program was for Python, a back-end programming language. It opened my eyes to all of the cool things that programming had to offer, and so I began building silly text-based games that only worked in the command-line-interface and unashamedly showed them to all my friends and family.`}
                            p3={`In 2022, I decided to join the Full-Stack Web Development Boot Camp with The University Of Central Florida. I graduated with an A+ (GPA 3.93) in December 2022.`}
                            p4={`In June 2023, I founded Hammontree Full-Stack Solutions LLC, so that I could share my passion with you.`}
                            p5={`I'm looking forward to hearing from you!`}
                            p6={`Sincerely,`}
                            p7={`Kaileb Hammontree`}
                        />
                    }
                />

            </main>

        </>
    )
}