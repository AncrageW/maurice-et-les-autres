import '../styles/globals.css'

import { Landing } from '../layouts'
import  {useRouter }  from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      document.getElementById('anchor').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    router.events.on('routeChangeComplete', handleRouteChange)
  }, [])
 


 
  return (
    <Landing>
      <div id="anchor" class="h-0">&nbsp;</div>
      <Component {...pageProps} />
    </Landing>
  )
}

export default MyApp
