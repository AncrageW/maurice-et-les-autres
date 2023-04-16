import Link from "next/link"
import { useState, useEffect } from 'react'

export default function Card ({item, tag = false, key}) {
  const [src, setSource] = useState(item.feature_image)
  useEffect(() => {
   secureHttpImages(src, setSource)
   }, [])

   function secureHttpImages (element, setter) {
    if (element.includes('http://')) {
      setter(element.replaceAll('http://', 'https://'))
     }
   }
   
  return (
    <Link href={`/spectacles/${item.slug}`}>
      <a className='h-full group'>
        <article className='h-full flex flex-col justify-between'>
          <main className='mb-4 relative'>
            <div className='relative aspect-square overflow-hidden mb-3' >
              <img 
                src={src} 
                alt={item.title} 
                className='object-cover object-center min-w-full min-h-full scale-100 transition duration-500 group-hover:scale-105'/>
            </div>
            <h3 className='text-cerulean-800 text-xl lg:text-2xl mb-3'>{item.title}</h3>
            <p className='text-gray-600'>{item.excerpt}</p>
          </main>
          <div className='max-w-0 transition-max-width duration-400 group-hover:max-w-full h-0.5  bg-gradient-to-r from-cerulean-400 via-turquoiseGreen-300 to-cerulean-400'></div>
        </article>

      </a>
    </Link>
  )
}