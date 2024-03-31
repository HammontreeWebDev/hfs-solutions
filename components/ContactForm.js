import styles from "../styles/ContactForm.module.css";
import { useState } from "react";

export default function ContactForm({titleText, disclaimerText, additionalText}) {

    const [ formValues, setFormValues ] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;

        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(
            formValues.name !== "" &&
            formValues.email !== "" &&
            formValues.email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/) &&
            formValues.message !== ""
        ) {
            try {
                const response = await (fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                })
                );

                if (response.ok) {
                    alert('Email Sent')
                    console.log('Email Sent!')
                } else {
                    alert('Failed To Send Email')
                    console.error('Failed To Send Email')
                }
            } catch (error) {
                console.error('Failed to send email', error);
            }

            setFormValues({
                name: "",
                email: "",
                message: ""
            });
        } else {
            alert('Please Fill Out All Required Fields')
        }
    };

    return (
        <>
            {/* Contact form */}

            <div className={`column`}>
                <div className={styles.formContainer}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.inputContainer}>
                                <label
                                className={styles.inputLabel}
                                htmlFor="name"
                                >
                                    Name:
                                </label>
                                <input 
                                className={styles.formInput}
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                placeholder="First Name Last Name"
                                />
                            </div>

                            <div className={styles.inputContainer}>
                                <label
                                className={styles.inputLabel}
                                htmlFor="email"
                                >
                                    Email:
                                </label>
                                <input 
                                className={styles.formInput}
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                placeholder="MyEmail@address.com"
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.messageContainer}>
                                <label 
                                className={styles.inputLabel}
                                htmlFor="message"
                                >
                                    Message:
                                </label>
                                <textarea
                                className={styles.messageInput}
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                                placeholder="Hello, I am interested in. . ."
                                />
                            </div>
                        </div>

                        <button
                        className={styles.btn}
                        type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Title and sub-text */}
            <div className={`column`}>
                <div className={`${styles.topContainer} titleText`}>
                    <h1>{titleText}</h1>
                </div>
                <div className={`${styles.bottomContainer} disclaimerText`}>
                    <p>{disclaimerText}</p>
                    <p>{additionalText}</p>
                </div>

            </div>
        </>
    )
}