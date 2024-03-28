import styles from '../styles/TitleImage.module.css';

export default function TitleImage(props) {
    return (

        <>

            {/* Left Side: Title Text */}
            <div className={`column titleText`}>
                <h1> {props.titleText} </h1>
            </div>

            {/* Right Side: Image */}
            <div className={`column`}>

            </div>

        </>
    )
}