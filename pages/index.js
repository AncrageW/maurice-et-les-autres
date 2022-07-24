import Image from 'next/image'
import Link from 'next/link'
import Landing from '../components/layouts/Landing'
import { getSinglePage, getSpectacles } from '../lib/posts'
import SpectacleCard from '../components/content/Spectacle-card'
export default function Home({page, spectacles = []}) {

  return (
    <Landing page={page}>
      <header className="relative h-[calc(100vh-4rem)] lg:h-screen flex justify-center lg:items-center">
        <div className='relative w-[100%] h-full lg:border-0 border-y-8 border-white'>
          <Image 
            src={page.feature_image}
            layout="fill"
            className='object-cover object-center min-h-full'
            alt="Où je vais la nuit">
          </Image>
          <div className='absolute z-10'>
            <h1 className="text-4xl lg:text-8xl mb-6 px-4 pt-4 lg:pt-[6.5rem] text-cerulean-50">Maurice et<br></br> les autres</h1>
            <h2 className="text-xl lg:text-2xl mb-6 px-4 text-white">Compagnie de théâtre musical</h2>
          </div>
          <div className='absolute z-10 right-0 bottom-0'>
            <p className='text-white opacity-50 text-sm pb-2 pr-2'>{page.excerpt}</p>
          </div>
        </div>
      </header>

      <main className='py-10 lg:py-20'>
        <h2 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">
            Les spectacles de <span className='block'>Maurice et les autres</span>
        </h2>
        <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
          {spectacles.map((item, i) => (
            <SpectacleCard item={item} key={i}></SpectacleCard>
          ))}
        </div>
      </main>
    </Landing>
  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('accueil')
  const spectacles = await getSpectacles()

  if (!spectacles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      page: page,
      spectacles: spectacles
   }
  }
}
