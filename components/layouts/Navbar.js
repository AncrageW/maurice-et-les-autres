import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Mobile } from '.'
import { CalendarIcon, HomeIcon, SpeakerphoneIcon } from '@heroicons/react/outline'

export default function Navbar () {
  const router = useRouter()
  const navLinks = [
    {
      name: "Accueil",
      link: "/",
      icon: HomeIcon
    },
    {
      name: "Spectacles",
      link: "/spectacles",
      icon: SpeakerphoneIcon
    },
    {
      name: "Compagnie",
      link: "/compagnie"
    },
    {
      name: "Calendrier",
      link: "/calendrier",
      icon: CalendarIcon
    },
    {
      name: "Espace pro",
      link: "/espace-pro"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
  const [mobileLinks, setMobileLinks] = useState([])

  useEffect(() => {
    setMobileLinks(navLinks.filter(el => el.icon))
  }, [])

  return (
    <>
      <div className='hidden lg:block absolute inset-x-0 bottom-0 lg:bottom-auto h-14'>
        <div className={`sticky h-full top-0 z-50 lg:border-t-0 lg:border-b border-slate-200 lg:h-16 hidden lg:block w-full text-slate-800 `}>
        <div className='z-[-1] absolute inset-0 bg-white'></div>
          {/* menu tablet & desktop */}
          <div className='max-w-6xl mx-auto flex items-center justify-between h-full'>
            <div className="lg:flex items-center hidden">
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
            </div>
            
              <div className="hidden md:flex items-center justify-between h-full">
                {navLinks.map((link, i) => (
                  <Link href={`${link.link}`} key={i}>
                      <a className={`relative h-full flex items-center md:text-sm lg:text-base cursor-pointer`}>
                        {router.pathname.includes(link.name.toLowerCase()) && (
                          <div className='absolute h-[2px] inset-x-0 -bottom-[1px] bg-gradient-to-r from-cerulean-400 via-turquoiseGreen-400 to-cerulean-400'></div>
                        )}
                        <div className={`px-6 text-cerulean-800`}>
                          {link.name}
                        </div>
                      </a>
                  </Link>

                ))}
                
              </div>

          </div>
        </div>
      </div>
        {/* menu mobile */}
        <Mobile links={navLinks} mobiles={mobileLinks}></Mobile>
    </>
  )
}