
import Link from 'next/link'
import Image from 'next/image'
import Landing from '../components/layouts/Landing'
import { getSinglePage, getSinglePost } from '../lib/posts'
import { Button } from '../components/ui'

export default function Compagnie ({page, presentation, membres, adhesions}) {
  return (
    <Landing page={page} container={false}>
         <header className="relative">
        <div className="relative h-[35rem] bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${page.feature_image})`}}>
          <div class="absolute bg-black opacity-30 inset-0 z-10"></div>
          <div className='relative z-20 h-full flex flex-col justify-center items-center'>
            <h1 className="text-4xl lg:text-8xl mb-6 px-4 pt-4 lg:pt-[6.5rem] text-white text-center">{page.title}</h1>
            <h2 className="text-xl lg:text-2xl mb-6 px-4 text-white text-center">{page.excerpt}</h2>
          </div>
          {/* <div className='absolute z-10 right-0 bottom-0'>
            <p className='text-white opacity-50 text-sm pb-2 pr-2'>credit image</p>
          </div> */}
        </div>
      </header>
      <div className='py-10 lg:py-20 px-3 max-w-6xl mx-auto'>

          <section>
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