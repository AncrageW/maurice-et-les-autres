
import Link from 'next/link'
import Image from 'next/image'
import Landing from '../components/layouts/Landing'
import { getSinglePage, getSinglePost } from '../lib/posts'
import { Button } from '../components/ui'

export default function Compagnie ({page, presentation, membres, adhesions}) {
  return (
    <Landing page={page}>
      <div className='pt-6 lg:pt-32 pb-10 lg:pb-20'>
          <h1 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">La compagnie</h1>
          <div className='h-[10rem] lg:h-[30rem] relative mb-6 lg:mb-10'>
            <Image
            src={page.feature_image} 
            alt="La compagnie" 
            className='object-cover object-center min-h-full'
            layout="fill">
            </Image>
          </div>

          <section className='pb-10 lg:py-10'>
            <div className='max-w-3xl mx-auto '>
              <h2 className="text-cerulean-800 text-2xl lg:text-4xl mb-4">Maurice et les autres</h2>
              <div 
                dangerouslySetInnerHTML={{ __html: presentation.html }} 
                className='ghost-spectacle'
              />
            <div className='relative h-[10rem] lg:h-[30rem] my-6 lg:my-10'>
              <Image
                src={presentation.feature_image} 
                alt="La compagnie" 
                className="object-cover object-center min-h-full"
                layout="fill">
              </Image>
            </div>
            </div>
          </section>

          <section className='pb-10 lg:py-10'>
            <div className='max-w-3xl mx-auto '>
              <h2 className="text-cerulean-800 text-2xl lg:text-4xl mb-4">Adhésion</h2>
              <div dangerouslySetInnerHTML={{ __html: adhesions.html }} className='ghost-spectacle mb-4'/>
              <Link href="/contact/">
                <a>
                  <Button color="cerulean">Nous contacter</Button>
                </a>
              </Link>
            </div>
          </section>

          <section className='pb-10 lg:py-10'>
          <div className='max-w-3xl mx-auto '>

            <h2 className="text-cerulean-800 text-2xl lg:text-4xl mb-4">Membres</h2>
            <div 
              dangerouslySetInnerHTML={{ __html: membres.html }} 
              className='ghost-spectacle'/>
              </div>
          </section>
      </div>
    </Landing>
  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('compagnie')
  const presentation = await getSinglePost('presentation')
  const membres = await getSinglePost('membres')
  const adhesions = await getSinglePost('adhesions')

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      page: page,
      presentation,
      membres,
      adhesions: adhesions
    }
  }
}