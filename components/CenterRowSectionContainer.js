import styles from '../styles/CenterRowSectionContainer.module.css';

export default function CenterRowSectionContainer(props) {
    return(
        <section className={`${styles.container} ${props.changeClass}`}>
            {props.jsxContent}
        </section>
    )
}