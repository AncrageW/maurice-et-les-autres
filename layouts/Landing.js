import { Navbar, Panel, Footer } from '../components/layouts'

export default function Landing ({children}) {
  return (
    <div>
        <Navbar></Navbar>
      <div className='flex'>
        <Panel></Panel>
        <section className='h-screen overflow-auto flex-1'>
          <main className='flex-1'>
            {children}
            <Footer></Footer>
          </main>
        </section>
      </div>

    </div>
  )
}