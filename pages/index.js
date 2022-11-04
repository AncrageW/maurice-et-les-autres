import Landing from '../components/layouts/Landing'
import { getSinglePage, getSpectacles } from '../lib/posts'
import SpectacleCard from '../components/content/Spectacle-card'
export default function Home({page, spectacles = []}) {

  return (
    <Landing page={page} container={false}>
      <header className="relative">
        <div className="relative h-[35rem] bg-center " style={{backgroundImage: `url(${page.feature_image})`}}>
          <div className=''>
            <h1 className="text-4xl lg:text-8xl mb-6 px-4 pt-4 lg:pt-[6.5rem] text-white">Maurice et<br></br> les autres</h1>
            <h2 className="text-xl lg:text-2xl mb-6 px-4 text-white">Compagnie de théâtre musical</h2>
          </div>
          <div className='absolute z-10 right-0 bottom-0'>
            <p className='text-white opacity-50 text-sm pb-2 pr-2'>{page.excerpt}</p>
          </div>
        </div>
      </header>
    
      <main className='py-10 lg:py-20 px-3 max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
          {spectacles.map((item, i) => (
            <span  key={i}>
              <SpectacleCard item={item}></SpectacleCard>
            </span>
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
