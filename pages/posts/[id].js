import Date from '../../component/date';
import Layout from '../../component/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post ({ postData }) {
  return (<Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    <Date dateString={postData.date}></Date>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>);
}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}