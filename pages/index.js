import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import utilStyles from '../styles/utils.module.css';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

// Pre-rendering at build time, without params
export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {

  const router = useRouter()

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Button onClick={() => router.push('/posts/first-post')}>
          Click here to read more
        </Button>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <Link href={"/posts/" + id}>{id}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
