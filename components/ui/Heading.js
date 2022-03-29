export default function Heading ({children, id, className}) {
  return (
    <h2 id={id} className={`relative text-3xl md:text-4xl text-slate-800 mb-6 after:content[''] after:absolute after:h-[1px] after:top-12 after:bg-slate-200 after:left-0 after:w-full ${className}`}>{children}</h2>
  )
}