import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Heading, Button, Tag } from '../components/ui'
import { getPostsOnTour } from '../lib/posts'
import { RenderDates } from '../components/tools'

export default function Home({onTours}) {
  const renderSpectacle = (item) => (
      <article className='my-10 md:my-20'>
        <Container>      
          <Tag color="cyan">En tournée</Tag>
          <div className='mb-6'>
            <RenderDates item={item}></RenderDates>
            <p className='mb-3'>{item.excerpt}</p>
            <h3 className='text-2xl mb-4'>{item.title}</h3>
            <Link href={`/spectacles/${item.slug}/`}>
              <a>
                <Button color="blue">En savoir plus</Button>
              </a>
            </Link>
          </div>
        </Container>

        <div className='relative h-[35rem] w-full lg:w-4/5 overflow-hidden flex items-center'>
          <Image 
            src={item.feature_image} 
            alt={item.title} 
            layout="fill"
            className='object-cover object-center min-w-full'>
          </Image> 
        
        </div>
      </article>
  )

  return (
    <div>
      <Head>
        <title>Maurice et les autres</title>
        <meta name="description" content="Compagnie de théâtre musical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="relative h-[calc(100vh-4rem)] md:h-screen bg-cover bg-center flex flex-col justify-between">
          <Image 
            src="http://mauriceetlesautres.com/content/images/2022/02/Ou-Je-VaisLa-Nuit--HD2----Thierry-Laporte39-1.jpg" layout="fill"
            className='object-cover object-center min-h-full'
            alt="Où je vais la nuit">
          </Image>
          {/* <div className='z-0 absolute inset-0 from-black via-transparent bg-gradient-to-b'></div> */}
          <div className='z-10'>
            <h1 className="text-5xl md:text-8xl mb-6 pl-4 md:pl-64 pt-8 md:pt-[6.5rem] text-white neon">Maurice et<br></br> les autres</h1>
            <h2 className="text-2xl mb-6 pl-4 md:pl-64 text-white neon">Compagnie de théâtre musical</h2>
          </div>
          <div className='text-right'>
            <p className='text-white text-sm neon neon-hover pr-4 pb-4'>Nom du photographe</p>
          </div>
       
        </div>

        <Heading id="en-tournee" className="md:pl-64 pl-4 pr-4 mt-10 md:mt-20">Spectacles en tournée</Heading>
        {onTours.map((post, i) => (
          <div key={i}>
            {renderSpectacle(post)}
          </div>
        ))}


    </div>
  )
}

export async function getStaticProps(context) {
  const onTours = await getPostsOnTour()
  const getDates = onTours.map(item => (
    {
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      feature_image: item.feature_image,
      calendar: JSON.parse(item.codeinjection_foot)
    }
  ))

  if (!onTours) {
    return {
      notFound: true,
    }
  }

  return {
    props: { onTours: getDates }
  }
}
