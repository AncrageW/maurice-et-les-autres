import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Mobile } from '.'
import { CalendarIcon, HomeIcon, SpeakerphoneIcon } from '@heroicons/react/outline'
export default function Navbar () {
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
      <div className='absolute inset-x-0 bottom-0 md:bottom-auto h-16'>
        <div className={`md:px-5 sticky h-full top-0 z-50 md:border-t-0 md:border-b border-slate-200 md:h-16 flex items-center w-full text-slate-800 justify-between `}>
        <div className='z-[-1] absolute inset-0 bg-white md:opacity-80'></div>

      
          {/* menu tablet & desktop */}
            <div className="w-10 h-10 relative hidden md:block">
              <Link href="/">
                <a className='h-full flex items-center'>
                  <Image
                  alt="Maurice Logo"
                  layout="fill"
                  src="https://storage.googleapis.com/mauriceetlesautres/logo/maurice.ico" ></Image>
                  
                </a>
              </Link>

            </div>
            
              <div className="hidden md:flex items-center justify-between h-full">
                {navLinks.map((link, i) => (
                  <Link href={link.link} key={i}>
                      <a className="h-full flex items-center md:text-sm lg:text-base">
                        <div className={`px-6 text-slate-900`}>
                          {link.name}
                        </div>
                      </a>
                  </Link>

                ))}
                
              </div>

          {/* menu mobile */}
          <Mobile links={navLinks} mobiles={mobileLinks}></Mobile>
        
          
        </div>
      </div>
    </>
  )
}