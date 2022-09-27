import { useEffect, useState } from "react";
import { baseURL, CONTEXT_PATH, CONTEXT_ROOT } from "../../component/CommonConst";
import Layout from "../../component/layout";
import { initHeader } from "../../component/PublicUtils";
import { getUser } from "../../lib/DataFetching";

export async function getStaticProps ({ params }) {

  return {
    props: { user: params },
  };
}

export default function fourthPost ({ user }) {
  const res = getUser(user.id)
  return (
    <Layout>
      <h1>{res}</h1>
    </Layout>
  )
}