// TODO: Use Material UI's Skeleton Component and wrap various things as a loading div

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";


import "../styles/global.css";
import "animate.css";

// import fonts from next/font/google to avoid making requests from google
import { Architects_Daughter } from 'next/font/google';
import { Josefin_Sans } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next"

// store fonts in a variable and specify parameters
const architectsDaughter = Architects_Daughter({
    subsets: ['latin'],
    preload: true,
    weight: ['400'],
});

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    preload: true,
    weight: ['400'],
})

const App = ({ Component, pageProps }) => {
    return (
        <>

            {/* add fonts to global application to be stored as variables that can be called in any css file */}
            <style jsx global>
                {
                    `
                :root {
                    --main-text: ${architectsDaughter.style.fontFamily};
                    --sub-text: ${josefinSans.style.fontFamily};
                }
                `
                }
            </style>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/img/favicon.ico" />
            </Head>


            <AppRouterCacheProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AppRouterCacheProvider>



            <SpeedInsights />
        </>
    )
};

export default App;