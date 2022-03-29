import { getPosts } from '../../lib/posts';

export default function Test ({posts}) {
  return (
    <ul>
      {posts.map(post => (
        <li className='bg-red-500' key={post.id}>{post.title}</li>
      ))}
    </ul>  
  )
}

export async function getStaticProps(context) {
  const posts = await getPosts()
  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}
