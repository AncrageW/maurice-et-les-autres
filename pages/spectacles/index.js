import React, { useState, useEffect } from 'react'; 
import Landing from '../../components/layouts/Landing';
import { getSpectacles, getSinglePage } from '../../lib/posts'
import SpectacleCard from '../../components/content/Spectacle-card'

export default function Spectacles ({page, spectacles}) {
  return (
    <Landing page={page}>
      <div className='py-6 lg:py-20'>
          <h1 className="text-cerulean-800 text-3xl lg:text-5xl font-light mb-6 lg:mb-10">Spectacles</h1>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
            {spectacles.map((item, i) => (
              <span  key={i}>
                <SpectacleCard item={item} tag></SpectacleCard>
              </span>
            ))}
          </div>
      </div>
    </Landing>
  )
}

export async function getStaticProps(context) {
  const page = await getSinglePage('spectacles')
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
