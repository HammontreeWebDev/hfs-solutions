import styles from "../styles/TypeWriter.module.css";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter(props) {



    return (

        <article className={styles.articleContainer}>

            <h3 className={styles.articleTitle}>
                My Story
            </h3>

            <p className={styles.articleText}>
                First of all, I want to thank you for taking the time out of your day to visit my website. I hope that you enjoy yourself while you are here, and that you find what you are looking for.
                <br />
                <br />
                My journey began in 2021 when I graduated from The University Of Central Florida&#8217;s Cyber Defense Professional Certificate Program. We had just spent the last 10 months learning concepts like computer networking, network security, system administration, and ethical hacking. I enjoyed my education, however, I realized that cybersecurity was not where my true passion lies. One of the courses in this program was for Python, a back-end programming language. It opened my eyes to all of the cool things that programming had to offer, and so I began building silly text-based games that only worked in the command-line-interface and unashamedly showed them to all my friends and family.
                <br />
                <br />
                In 2022, I decided to join the Full-Stack Web Development Boot Camp with The University Of Central Florida. I graduated with an A+ (GPA 3.93) in December 2022.
                <br />
                <br />
                In June 2023, I founded Hammontree Full-Stack Solutions LLC, so that I could share my passion with you.
                <br />
                <br />
                I&#8217;m looking forward to hearing from you!
                <br />
                <br />
                Sincerely,
                <br />
                Kaileb Hammontree
            </p>

        </article>
    )
}