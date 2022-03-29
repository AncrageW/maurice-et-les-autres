export default function Container ({children, className}) {
  return (
    <div className='md:pl-60'>
      <section className={` mx-auto px-4 ${className}`}>
        {children}
      </section>
    </div>
  )
}