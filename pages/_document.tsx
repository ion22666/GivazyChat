import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="h-full w-full overflow-hidden">
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
                <meta httpEquiv="Content-Security-Policy" content="img-src 'self' https://lh3.googleusercontent.com https://picsum.photos https://fastly.picsum.photos https://cdn.discordapp.com"></meta>
            </Head>
            <body className="h-full w-full overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
