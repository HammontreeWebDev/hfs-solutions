import Head from "next/head";
import "../styles/global.css";
import { Architects_Daughter } from 'next/font/google';

const architectsDaughter = Architects_Daughter({
    subsets: ['latin'],
    preload: true,
    weight: ['400'],
});

const App = ({ Component, pageProps }) => {
    return (
        <>
        <style jsx global>
            {
                `
                :root {
                    --main-text: ${architectsDaughter.style.fontFamily};
                }
                `
            }
        </style>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
};

export default App;