import '../styles/globals.css'

import { Landing } from '../layouts'
import  Router  from 'next/router'

function MyApp({ Component, pageProps }) {

  // Router.onRouteChangeComplete = () => {
  //   console.log(window, "go up")
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //   });
  // };
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  )
}

export default MyApp
