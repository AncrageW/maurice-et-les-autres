export default function Button ({children, className, color, active}) {


  const renderColor= (color, active) => {
    switch(color) {
      case 'blue': 
       return ' text-blue-600 ring-blue-300 ring-offset-blue-50 hover:ring-offset-white hover:bg-blue-700 hover:text-white hover:ring-blue-700' ;break
      case 'cyan':  
        return'text-cyan-600 ring-cyan-300 ring-offset-cyan-50 hover:ring-offset-white hover:bg-cyan-700 hover:text-white hover:ring-cyan-700';break

    }
  }

  return (
    <button className={`transition duration-200 border border-slate-200 ring-1 ring-offset-1 py-1 px-2 text-sm inline-block ${renderColor(color, active)} ${className}`}>
      {children}
      </button>
  )
}