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
            </Head>
            <body className="w-full h-full overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
