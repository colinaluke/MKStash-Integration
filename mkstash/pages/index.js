import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>MKStash</title>
        <meta name="description" content="MKStash project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Login and registration page
        </h1>
        <h1 className={styles.title}>
           <Link href='/dashboardD2'> to admin dashboard </Link>
        </h1>   
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    <Footer/>
    </div>
  )
}
