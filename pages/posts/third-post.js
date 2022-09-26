import { useRouter } from "next/router";
import Layout from "../../component/layout";
import { useUser } from "../../lib/DataFetching";

export default function thirdPost () {
  const router = useRouter()
  const { id } = router.query
  const { user, isLoading, isError } = useUser(id)

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <Layout>
      <div>
        {isError ? <div>failed to load</div> : user}
        {isLoading ? <div>loading...</div> : ''}
      </div>
    </Layout>
  )
}