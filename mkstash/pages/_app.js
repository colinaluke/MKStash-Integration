import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Script from 'next/script'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/js/bootstrap.bundle.min.js"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
