import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link
                    rel="preload"
                    href="/fonts/MortendLight.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/MortendRegular.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/MortendBold.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/MortendExtrabold.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}