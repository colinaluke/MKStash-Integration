import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, peopleApi } from '../lib/posts';


export async function getStaticProps() {

    /* const allPostsData = getSortedPostsData();*/
    getSortedPostsData();
    const allPostsData = await peopleApi();
    return {
        props: {
            allPostsData,
        },
    };
}

/*export async function getServerSideProps() { *//*tested and works*//*

    *//*const allPostsData = getSortedPostsData();*//*
getSortedPostsData();
const allPostsData = await peopleApi();
return {
    props: {
        allPostsData,
    },
};
}*/
export default function Home({ allPostsData }) {

    return (

        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <Script
                    src="https://cat-bounce.com/"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, cats are now falling `)
                    }
                /> // won't be added
            </Head>

            <Script
                src="https://cat-bounce.com/"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, cats are now falling `)
                }
            />


            <Layout home> {/*home is the prop*/}
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className={utilStyles.headingMd}>
                    <p> Trader - Blockchain Enthusiast - Investor - Organizer - Challenger </p>
                    <h1 className={utilStyles.headingMd}>
                        Read <Link href="/posts/first-post"> this my first-post here!</Link>
                    </h1>
                </section>

                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, name, eye_color, hair_color }) => {
                            return (
                                <li className={utilStyles.listItem} key={id}>
                                    <h4> ID: {id} </h4>
                                    <h4> Name: {name} </h4>
                                    <h4> Eye Color: {eye_color} </h4>
                                    <h4> Hair Color: {hair_color} </h4>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </Layout>

        </div>
    )
}
