import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
    return <>
        <Script src="/js/bootstrap.bundle.min.js" />
        <Component {...pageProps} />
    </>
}

export default MyApp
