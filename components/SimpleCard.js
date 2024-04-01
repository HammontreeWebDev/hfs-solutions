import styles from "../styles/SimpleCard.module.css";
import Link from "next/link";

export default function SimpleCard(props) {



    return (

        <article className={styles.articleContainer}>

            <h3 className={styles.articleTitle}>
                {props.titleText}
            </h3>

            <p className={styles.articleText}>
                {props.p1}
                <br />
                <br />
                {props.p2}
                <br />
                <br />
                {props.p3}
                <br />
                <br />
                {props.p4}
                <br />
                <br />
                {props.p5}
                <br />
                <br />
                {props.p6}
                <br />
                {props.p7}
            </p>

            <Link className={styles.link} href={'/portfolio'}>
            Visit Portfolio
            </Link>
        </article>
    )
}