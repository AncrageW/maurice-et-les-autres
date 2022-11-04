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
    },
    {
      name: "Spectacles",
      link: "/spectacles",
    },
    {
      name: "Compagnie",
      link: "/compagnie"
    },
    {
      name: "Calendrier",
      link: "/calendrier",
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

  return (
    <>
      <div className='hidden lg:block absolute inset-x-0 top-0 h-14'>
        <div className={`sticky bg-white h-full z-50 lg:border-t-0 lg:border-b border-slate-200 lg:h-full hidden lg:block w-full text-slate-800 `}>
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
            
              <div className="lg:flex items-center justify-between h-full">
                {navLinks.map((link, i) => (
                  <div className="h-full group" key={i}>
                    <Link href={`${link.link}`}>
                        <a className={`relative h-full flex items-center md:text-sm lg:text-base cursor-pointer after:content-[''] after:absolute after:h-[2px] after:inset-x-0 after:-bottom-[1px] after:bg-gradient-to-r after:from-cerulean-300 after:via-turquoiseGreen-200 after:to-cerulean-300 after:max-w-0 group-hover:after:max-w-[10rem] after:transition-max-width after:duration-500`}>
                          {router.pathname.includes(link.name.toLowerCase()) && (
                            <div className='absolute h-[2px] inset-x-0 -bottom-[1px] bg-gradient-to-r from-cerulean-300 via-turquoiseGreen-200 to-cerulean-300'></div>
                          )}
                          <div className={`px-6 text-cerulean-800`}>
                            {link.name}
                          </div>
                        </a>
                    </Link>
                  </div>
                ))}
              </div>

          </div>
        </div>
      </div>
        {/* menu mobile */}
        <Mobile links={navLinks}></Mobile>
    </>
  )
}