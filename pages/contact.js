
import { getSinglePage } from "../lib/posts"
import Landing from "../components/layouts/Landing"

export default function Contact ({page}) {
  return (
    <Landing page={page}>
      <div className='pt-10 lg:py-20'>
        <h1 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">Contact</h1>
        <div dangerouslySetInnerHTML={{__html: page.html}} className="ghost-spectacle"></div>
      </div>
    </Landing>

  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('contact')
 
  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      page: page
    }
  }
}
