import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { getSpectacles } from '../../lib/posts'
import { Container, Tag, Divider } from '../../components/ui'
import { DownloadIcon } from '@heroicons/react/outline'

  // Un objet = un spectacle
    // artistic	=> Dossier artistique 
    // technical	=> Fiche technique
    // distribution	=> Mention de distribution
    
export default function EspacePro ({spectacles}) {
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
        <div className='mb-1 flex items-center text-slate-900 hover:text-blue-700 transition duration-200'>
          <DownloadIcon className="w-5 mr-2"></DownloadIcon>
          {title}
        </div>
      </a>
    )
  }

  return(
    <div className='pb-20'>
      <Container className="py-8 md:pt-24 md:pb-20">
        <h1 className="text-4xl md:text-6xl text-slate-800 mb-6">Espace pro</h1>
      </Container>
      <Container>
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 md:space-y-10 lg:space-y-0'>
          {sortedSpectacles.map((item, i) => (
            <div key={i} className='mb-4'>
              {item.tags.some(t => t.slug === 'en-tournee') && <Tag color="cyan">En tournée</Tag>}
              {item.tags.some(t => t.slug === 'en-creation') && <Tag color="violet">En création</Tag>}
              <Divider className="text-slate-900 text-lg">
                <Link href={`/spectacles/${item.slug}`}>
                  <a>
                    <h3 className='text-2xl text-slate-900'>{item.title}</h3>
                  </a>
                </Link>
              </Divider>
              <p className='mb-2'>{item.excerpt}</p>
              {item.documents.artistic && (
                <>
                  {renderPressKit(item.documents.artistic, "Dossier artistique")}
                </>
              )}
               {item.documents.technical && (
                 <>
                  {renderPressKit(item.documents.technical, "Fiche technique")}
                </>
              )}
              {item.documents.distribution && (
                <>
                 {renderPressKit(item.documents.distribution, "Mention de distribution")}
               </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export async function getStaticProps(context) {
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
    props: { spectacles: results }
  }
}
