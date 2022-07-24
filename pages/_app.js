import '../styles/globals.css'

import { Landing } from '../layouts'
import  Router  from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });

  }, [])
 
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  )
}

export default MyApp
