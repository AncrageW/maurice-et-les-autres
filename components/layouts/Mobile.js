import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from "next/link"
import { MenuIcon } from "@heroicons/react/outline"

export default function Mobile ({mobiles, links}) {
  const [ isActiveMenu, setIsActiveMenu ] = useState(false)
  const router = useRouter()
  const path = router.pathname
  const handleClick = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  return (
    <div className={`md:hidden w-full absolute bottom-0 z-50 overflow-hidden`}>
        {/* tiroir mobile */}
        <div className={`${isActiveMenu ? ' h-auto max-h-[10rem]' : 'max-h-0' } bg-slate-50 overflow-hidden border-t border-cerulean-400 duration-300 transform transition-max-height w-full z-0`}>
            {links.map((el, i) => (
              el.icon === undefined && (
                <div className={`${path === el.link && 'bg-cerulean-100'}`}>
                <Link href={el.link} key={i}>
                  <a>
                    <div className='py-2 px-3 text-sm'>{el.name}</div>
                  </a>
                </Link>
                </div>
              )
            ))}
            
        </div>
        {/* mobile menu visible */}
        <div className={`grid grid-cols-4 bg-slate-50 inset-x-0 h-16 `}>
          {mobiles.map((mobile, i ) => (
            <div 
              key={i} 
              className={`flex items-center justify-center text-xs text-slate-900 
                ${path === mobile.link && 'bg-cerulean-100'}`}
              onClick={() => setIsActiveMenu(false)}
            >
              <Link href={mobile.link}>
                <a className='flex flex-col items-center justify-center'>
                  <mobile.icon className='w-5'></mobile.icon>
                  {mobile.name}
                </a>
              </Link>
            </div>
          ))}
          <div 
            onClick={() => handleClick()}
            className={`h-full cursor-pointer flex flex-col items-center justify-center text-xs text-slate-900  
            ${path === `menu` && 'bg-cerulean-100'}
            ${isActiveMenu && 'text-cerulean-700'}`}>
              <MenuIcon className='w-5'></MenuIcon>
              Menu
          </div>
        </div>
    </div> 
  )
}