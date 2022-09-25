import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../component/layout";
import { Button } from '@nextui-org/react';

export default class SecondPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    const { count } = this.state
    return (
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h5 className="title">
            <Link href="/">Back</Link>
          </h5>

          <Button size="sm" onClick={this.handleClick}>Click me {count} times</Button>
        </main >
      </Layout>
    )
  }
}