
import Head from 'next/head'

export const siteTitle = 'MKStash - Admin Product Dashboard'

export default function Header() {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Admin Product Dashboard"
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
    )
}