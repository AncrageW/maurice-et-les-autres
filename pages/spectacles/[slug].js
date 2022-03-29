import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getSinglePost, getPosts } from '../../lib/posts';
import { Container, Button, Divider, Tag } from '../../components/ui'
import { CalendarIcon, ArrowSmRightIcon } from '@heroicons/react/outline';

export default function Spectacle ({post}) {
 const [dates, setDates] = useState(null)
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
 useEffect(() => {
   if (post.codeinjection_foot !== null) {
     setDates(JSON.parse(post.codeinjection_foot))
   }
  }, [post.codeinjection_foot])

  useEffect(() => {
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach(el => {
        el.setAttribute('height', '400')
        el.setAttribute('width', '700')
    });
  }, [])
  
  return (
    <div>
      <Container className="pt-8 md:pt-24 pb-10">
        <h1 className="text-4xl md:text-6xl text-slate-800 mb-6">{post.title}</h1>
        <h3 className="text-xl text-slate-800 mb-6">{post.excerpt}</h3>
        {post.tags.some(t => t.slug === 'en-tournee') && (
            <Tag color="cyan">En tournée</Tag>
        )}
        {post.tags.some(t => t.slug === 'en-creation') && (
            <Tag color="violet">En création</Tag>
        )}
      </Container>
      <div className='mb-20 md:grid md:grid-cols-2 md:gap-10'>
        <img src={post.feature_image} alt={post.title}/>
        <div>
          <div className='divide-y divide-slate-200'>
            {dates && (
              <h3 className='text-2xl'>Dates</h3>
            )}
            {dates && dates.map((date, i ) => (
                i < 4 && (
                <div key={i} className='py-4 md:grid md:grid-cols-3 group'>
                  <div>
                    <p className='text-sm'>
                      {date.date2 && <span>du </span>}
                      {new Date(date.date).toLocaleDateString('fr-FR', options)}
                    </p>
                    {date.date2 && ( 
                      <div className='text-sm flex items-center'>
                        <ArrowSmRightIcon className='w-4 mr-1'></ArrowSmRightIcon>
                        au {new Date(date.date2).toLocaleDateString('fr-FR', options)}
                      </div>
                    )}
                  </div>
                  <p className='text-sm'>{date.city}</p>
                  <Link href="/calendrier/">
                    <a>
                      <div className='group-hover:text-blue-700 text-sm flex items-center'>
                      <CalendarIcon className='w-4 mr-1.5'></CalendarIcon>
                      Plus d'informations
                      </div>
                    </a>
                  </Link>
                </div>) 
          
          ))}
          </div>
          {dates && dates.length > 4 && (
            <div className='mt-5'>
              <Link href="/calendrier/">
              <a>
                <Button color="blue">Plus de dates</Button>
             
              </a>
            </Link>
            </div>
          
          )}

        </div>

      </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} className='ghost-spectacle pb-20'/>
      
    </div>
  )
}


export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}
