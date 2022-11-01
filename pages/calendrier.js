import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getSpectacles, getSinglePage } from '../lib/posts'
import {  Button, Filter } from '../components/ui'
import { ArrowSmRightIcon, TicketIcon } from '@heroicons/react/outline'
import Landing from '../components/layouts/Landing'

export default function Calendrier ({page, spectacles}) {
  const [datas, setDatas] = useState([])
  const [current, setCurrent] = useState(null)
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date()
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
      <div className='lg:grid lg:grid-cols-9 py-3 gap-8 w-full'>
        <div className='md:col-span-2'>
          <Link href={`/spectacles/${item.slug}`}>
            <a>
              <h3 className='text-slate-900 group-hover:text-cerulean-400 '>
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
        className='text-slate-900 group-hover:text-cerulean-400 lg:col-span-3 md:col-span-2'>
          <div className='text-sm flex items-start'>
            <TicketIcon className="w-4 min-w-[1.25rem] mr-1"></TicketIcon>
            {item.place && item.place.name && item.place.name}
          </div>
        </a>
        <p className='text-sm lg:text-right'>{item.schedule}</p> 
      </div>
    </div> 
  )

  return (
    <Landing page={page}>
      <div className='pt-6 lg:pt-32 pb-10 lg:pb-20'>
          <h1 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">Calendrier</h1>
        <div>
          <div className='flex flex-wrap items-center lg:mb-4 lg:bg-white'>
            <div 
            className='cursor-pointer mb-2 mr-2'
            onClick={() => setCurrent(null)}> 
              <Button 
              color="cerulean"
              active={current === null}
              >Tous les spectacles</Button>
            </div>
            {spectacles.map((spectacle, i) => (
              <div 
              key={spectacle.slug} 
              className={`cursor-pointer mb-2 mr-2`}
              onClick={() => setCurrent(spectacle.title)}
              > 
              <Button 
                color="cerulean" 
                active={current === spectacle.title}
              >
                  {spectacle.title}
                </Button>
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
    </Landing>
  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('calendrier')
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
    props: { 
      page: page,
      spectacles: results
    }
  }
}
