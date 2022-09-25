import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../component/layout';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

// Pre-rendering at request time, with params
export async function getServerSideProps (context) {
  return {
    props: {
      // props for your component
    },
  };
}

export default function FirstPost () {

  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Button size="sm" onClick={handleClick}>Click me {count} times</Button>
    </Layout>
  );
}