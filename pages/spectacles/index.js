import React, { useState, useEffect } from 'react'; 
import Image from 'next/image'
import Link from 'next/link'
import { Container, Divider, Tag, Button } from '../../components/ui'
import { getSpectacles } from '../../lib/posts'
import { RenderDates } from '../../components/tools';

export default function Spectacles ({spectacles}) {
  const [sortedSpectacles, setSortedSpectacles] = useState(spectacles)

 useEffect (() => {
    const onTours = spectacles.filter(el => el.tags.some(t => t.slug === 'en-tournee'))
    const onToursWithDates = onTours.map(item => (
      {
        ...item,
        calendar: JSON.parse(item.codeinjection_foot)
      }
    ))
    const onCreations = spectacles.filter(el => el.tags.some(t => t.slug === 'en-creation'))
    const oldOnes = spectacles.filter(el => el.tags.length === 1)
    setSortedSpectacles([...onToursWithDates, ...onCreations, ...oldOnes])
 }, [spectacles])

  return (
      <div>
      
        <Container className="pt-8 md:pt-24 pb-10">
          <h1 className="text-4xl md:text-6xl text-slate-800 mb-6">Spectacles</h1>
        </Container>

          <div className='lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20 space-y-20 lg:space-y-0 mb-10 md:mb-20'>
            {sortedSpectacles.map((spectacle, i) => (
              <div key={i} className='flex flex-col justify-between'>
                <Container>
                  {spectacle.tags.some(t => t.slug === 'en-tournee') && (
                    <Divider>
                      <Tag color="cyan">En tournée</Tag>
                    </Divider>
                  )}
                  {spectacle.tags.some(t => t.slug === 'en-creation') && (
                    <Divider>
                      <Tag color="violet">En création</Tag>
                    </Divider>
                  )}
                  <RenderDates item={spectacle}></RenderDates>
                  <div className='mb-6'>
                    <Link href={`/spectacles/${spectacle.slug}/`}>
                      <a>
                        <h3 className='text-2xl mb-3'>{spectacle.title}</h3>
                        <p className='mb-3'>{spectacle.excerpt}</p>
                        <Button color="blue">En savoir plus</Button>
                      </a>
                    </Link>
                  </div>        
                </Container>
                <div className='h-[25rem] w-full overflow-hidden flex items-center relative'>
                  <Image 
                    src={spectacle.feature_image} 
                    alt={spectacle.title} 
                    className='object-cover object-center min-h-full'
                    layout="fill">
                  </Image>
                
                  </div>
              </div>
            ))}

          </div>

      </div>
  )
}

export async function getStaticProps(context) {
  const spectacles = await getSpectacles()
  if (!spectacles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { spectacles }
  }
}
