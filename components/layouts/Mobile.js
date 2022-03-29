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
    <div className='md:hidden w-full h-16'>
      <div className={`${isActiveMenu ? '-translate-y-full' : 'translate-y-full' } bg-white border-t-2 border-slate-200 duration-200 transform transition w-full`}>
          {links.map((el, i) => (
            el.icon === undefined && (
              <Link href={el.link} key={i}>
                <a>
                  <div className='py-2 px-3'>{el.name}</div>
                </a>
              </Link>
            )
          ))}
           
      </div>
      <div className='grid grid-cols-4 h-full z-20 bg-white absolute bottom-0 inset-x-0'>
        {mobiles.map((mobile, i ) => (
          <div key={i} className={`flex items-center justify-center text-xs text-slate-900 border-t-2 
          ${path === `${mobile.link}` ? 'border-slate-900' : 'border-slate-200'}`}>
            <Link href={mobile.link}>
              <a className='flex flex-col items-center justify-center'>
                <mobile.icon className='w-6'></mobile.icon>
                {mobile.name}
              </a>
            </Link>
          </div>
        ))}
        <div 
          onClick={() => handleClick()}
          className={`h-full cursor-pointer flex flex-col items-center justify-center text-xs text-slate-900 border-t-2 
          ${path === `menu` ? 'border-slate-900' : 'border-slate-200'}
          ${isActiveMenu && 'text-blue-700'}`}>
            <MenuIcon className='w-6'></MenuIcon>
            Menu
        </div>
      </div>
    </div> 
  )
}