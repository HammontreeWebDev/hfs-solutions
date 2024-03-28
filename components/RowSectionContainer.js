import styles from '../styles/RowSectionContainer.module.css';

export default function RowSectionContainer(props) {
    return(
        <section className={styles.container}>
            {props.jsxContent}
        </section>
    )
}