import { Navbar, Footer } from '../components/layouts'

export default function Landing ({children}) {
  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <div className='flex'>
        <section className='h-screen overflow-auto flex-1 mx-auto'>
          <main className='flex-1'>
            {children}
            <Footer></Footer>
          </main>
        </section>
      </div>

    </div>
  )
}