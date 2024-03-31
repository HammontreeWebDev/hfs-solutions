import Head from "next/head";
import styles from '../styles/Portfolio.module.css';
import RowSectionContainer from "../components/RowSectionContainer";


export default function Portfolio() {

    return (
        <>

            <Head>
                <title>Portfolio | Kaileb Hammontree</title>
            </Head>

            <main>

            {/* //! Row 1 Title Image w/disclaimer text*/}
            <RowSectionContainer 
            
            />

            {/* //! Row 2 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
            {/* //* Jesse Ryder Brown Foundation */}
            <RowSectionContainer 
            changeClass={styles.columnReverse}
            />

            {/* //! Row 3 Project Component ROW REVERSE (change to column reverse at smaller screens)*/}
            {/* //* BroFit Personal Training */}
            <RowSectionContainer 
            changeClass={styles.rowReverse}
            />


            {/* //! Row 4 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
            {/* //* Outta Touch */}
            <RowSectionContainer 
            changeClass={styles.columnReverse}
            />


            {/* //! Row 5 Project Component ROW REVERSE (change to column reverse at smaller screens)*/}
            {/* //* MTG++ */}
            <RowSectionContainer 
            changeClass={styles.rowReverse}
            />


            {/* //! Row 6 Project Component NORMAL & COLUMN REVERSE(smaller screens)*/}
            {/* //* PokéWire */}
            <RowSectionContainer 
            changeClass={styles.columnReverse}
            />



            </main>
            
        </>
    )
}