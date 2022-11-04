import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from "next/link"
import { MenuIcon } from "@heroicons/react/outline"
import { useEffect } from 'react'
import Image from 'next/image'

export default function Mobile ({links}) {
  const [ isActiveMenu, setIsActiveMenu ] = useState(false)

  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsActiveMenu(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
  }, [])

  const handleClick = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  return (
    <div className="overflow-hidden block lg:hidden">
      <div className={`w-full absolute h-12 top-0 inset-0 bg-white z-50  `}>
        <div className='h-full bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between relative z-20'>
          <div className='relative w-12 h-12'>
            <Link href="/">
              <a className='h-full flex items-center'>
                <Image
                alt="Maurice Logo"
                layout="fill"
                src="https://storage.googleapis.com/mauriceetlesautres/logo/maurice.ico"></Image>
              </a>
            </Link>
          </div>
          <div onClick={() => handleClick()}>
            <MenuIcon className={`${isActiveMenu ? `-rotate-90` : '  rotate-0' }
          w-6 cursor-pointer transform transition-all duration-200`}></MenuIcon>
          </div>
        </div>
          {/* tiroir mobile */}
        <div 
          className={`${isActiveMenu ? `translate-x-0` : '-translate-y-full' }
          bg-white bottom-0 duration-300 transform transition-all w-full relative z-10 bg-white divide-y divide-slate-200`}>
            {links.map((el, i) => (
                <div 
                  key={i}
                  className={`${path === el.link && 'bg-gradient-to-r to-cerulean-100 from-turquoiseGreen-100'}`}
                >
                  <Link href={el.link}>
                    <a>
                      <div className='py-3 px-3 text-sm'>{el.name}</div>
                    </a>
                  </Link>
                </div>
            ))}
          <div className='max-w-full h-1 bg-gradient-to-r from-cerulean-400 via-turquoiseGreen-300 to-cerulean-400'></div>
        </div>
    
      </div> 
    </div>
  )
}