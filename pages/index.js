import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Brian. I'm a former performer/ringmaster/marketing and PR trainer turned software engineer and leader. I love gardening, cooking, and making cool stuff with computers.</p>
        <p>
          This is my portfolio site.  Here you'll find samles of my work, my blog, and other cool stuff I've tied together. Enjoy!
        </p>
      </section>
      <section className = {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className = {utilStyles.headingLg}>
          Blog
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className = {utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <p>
          (This website is powered by Next.js. Learn how to build your own with the <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </footer>
    </Layout>
  )
}
