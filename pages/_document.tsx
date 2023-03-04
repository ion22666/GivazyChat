import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="w-full h-full overflow-hidden">
            <Head>
                <style>{`
                    #__next{
                        height:100%;
                        width:100%;
                        overflow:hidden;
                    }
                `}</style>
                <script src="scripts/request-helper.js"></script>
                <meta name="client_id" content={process.env.client_id} />
                <meta name="domain" content={process.env.domain} />
            </Head>
            <body className="w-full h-full overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
