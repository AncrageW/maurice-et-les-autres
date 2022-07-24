import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Landing from '../components/layouts/Landing'
import { getSinglePage, getSpectacles } from '../lib/posts';
import { Tag } from '../components/ui';
import { DownloadIcon } from '@heroicons/react/outline'

// tableau d'objet avec title et content    
export default function EspacePro ({page, spectacles}) {
  const [sortedSpectacles, setSortedSpectacles] = useState(spectacles)

  useEffect (() => {
    const onTours = spectacles.filter(el => el.tags.some(t => t.slug === 'en-tournee'))
    const onCreations = spectacles.filter(el => el.tags.some(t => t.slug === 'en-creation'))
    const oldOnes = spectacles.filter(el => el.tags.length === 1)
    setSortedSpectacles([...onTours, ...onCreations, ...oldOnes])
 }, [spectacles])

  const renderPressKit = (document, title) => {
    return (
      <a href={document} target="_blank" rel="noreferrer">
        <div className='mb-1 flex items-center text-slate-900 hover:text-cerulean-400 transition duration-200'>
          <DownloadIcon className="w-4 mr-2"></DownloadIcon>
          {title}
        </div>
      </a>
    )
  }

  return(
    <Landing page={page}>
      <div className='pt-6 lg:pt-32 pb-10 lg:pb-20'>
        <h1 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">Espace pro</h1>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-20'>
          {sortedSpectacles.map((item, i) => (
            <div key={i}>
              {item.tags.some(t => t.slug === 'en-tournee') && <Tag color="cerulean" className="mb-2">En tournée</Tag>}
              {item.tags.some(t => t.slug === 'en-creation') && <Tag color="turquoiseGreen" className="mb-2">En création</Tag>}
                <Link href={`/spectacles/${item.slug}/`}>
                  <a>
                    <h3 className='text-xl lg:text-2xl text-cerulean-800 mb-1'>{item.title}</h3>
                  </a>
                </Link>
              <p className='mb-4'>{item.excerpt}</p>
              {item.documents.length && item.documents?.map((doc, i) => (
                <div key={i}>
                {renderPressKit(doc.content, doc.title)}
                </div>
              ))}
            
            </div>
          ))}
        </div>
      </div>
    </Landing>
  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('espace-pro')
  const spectacles = await getSpectacles()
  const filtered = spectacles.filter(item => item.codeinjection_head !== null)
  const results = filtered.map(item => (
     {
      title: item.title, 
      excerpt: item.excerpt,
      documents: JSON.parse(item.codeinjection_head),
      tags: item.tags,
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
