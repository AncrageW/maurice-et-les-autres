import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getSpectacles } from '../../lib/posts'
import { Container, Button, Filter } from '../../components/ui'
import { ArrowSmRightIcon, TicketIcon } from '@heroicons/react/outline'

export default function Calendrier ({spectacles}) {
  const [datas, setDatas] = useState([])
  const [current, setCurrent] = useState(null)
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    // 1. ajouter titre et slug à chaque date 
     const results = spectacles.map(item => (
      item.calendar.map(date => (
        {
          ...date,
          title: item.title,
          slug: item.slug
        }
      ))
    ))
    // 2. mettre toutes les dates dans meme tableau
    const arr = []
    results.map(item => arr.push(...item))
    // 3. trier par dates
    arr.sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });
  
    setDatas(arr)

  }, [spectacles])

  const renderList = (item, i) => (
    <div className='group min-h-[4rem] flex items-center '>
      <div className='lg:grid lg:grid-cols-9 py-3 gap-8'>
        <div className='md:col-span-2'>
          <Link href={`/spectacles/${item.slug}`}>
            <a>
              <h3 className='text-slate-900 group-hover:text-blue-700 '>
                {item.title}
              </h3>
            </a>
          </Link>

        </div>
        <div className='lg:col-span-2'>
          <p className='text-sm'>
            {item.date2 && <span>du </span>}
            {new Date(item.date).toLocaleDateString('fr-FR', options)}
            </p>
          {item.date2 && ( 
            <div className='text-sm flex items-center'>
              <ArrowSmRightIcon className='w-4 mr-1'></ArrowSmRightIcon>
              au {new Date(item.date2).toLocaleDateString('fr-FR', options)}
            </div>
          )}

        </div>
        <p className='text-sm'>{item.city}</p>
        <a 
        href={(item.place && item.place.link) ? item.place.link : '#'} 
        target="_blank" 
        rel="noreferrer" 
        className='text-slate-900 group-hover:text-blue-700 lg:col-span-3 md:col-span-2'>
          <div className='text-sm flex items-start'>
            <TicketIcon className="w-5 min-w-[1.25rem] mr-1"></TicketIcon>
            {item.place && item.place.name && item.place.name}
          </div>
        </a>
        <p className='text-sm lg:text-right'>{item.schedule}</p> 
      </div>
    </div> 
  )

  return (
    <div className="pb-10 md:pb-20">
       <Container className="pt-8 md:pt-24 pb-10 lg:pb-20">
        <h1 className="text-4xl md:text-6xl text-slate-800 mb-6">Calendrier</h1>
      </Container>
      <div className='pl-4 md:pl-64 pr-4 mx-auto lg:pt-0 z-20 relative'>
        <div className='flex flex-wrap items-center md:mb-8 md:bg-white'>
          <div 
          className='mr-6 cursor-pointer mb-4'
          onClick={() => setCurrent(null)}> 
            <Filter 
            color="blue"
            active={current === null}
            >Tous les spectacles</Filter>
          </div>
          {spectacles.map((spectacle, i) => (
            <div 
            key={spectacle.slug} 
            className={`mr-6 cursor-pointer mb-4`}
            onClick={() => setCurrent(spectacle.title)}
            > 
             <Filter 
              color="blue" 
              active={current === spectacle.title}
             >
                {spectacle.title}
              </Filter>
            </div>
          ))}

        </div>
        <div className='divide-y divide-slate-200'>
        {datas.map((item, i) => (
          current === null ? (
            <div key={i}>
             {renderList(item)}
            </div>
          ) : (
            current === item.title && (
            <div key={i}>
              {renderList(item)}
            </div>
            )
          )
        ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const spectacles = await getSpectacles()
  const filtered = spectacles.filter(item => item.codeinjection_foot !== null)
  const results = filtered.map(item => (
     {
      title: item.title, 
      calendar: JSON.parse(item.codeinjection_foot),
      slug: item.slug
      } 
  ))
  if (!spectacles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { spectacles: results }
  }
}
