export default function Filter ({children, className, color, active}) {


  const renderColor= (color, active) => {
    switch(color) {
      case 'blue': 
        switch(active) {
          case true: return'text-white  bg-blue-700';break
          case false: return'text-blue-600 ring-blue-300 hover:ring-blue-700 ring-offset-blue-50 hover:ring-offset-white hover:bg-blue-700 active:text-white hover:text-white';break
        }
    }
  }

  return (
    <button className={`transition duration-200 border border-slate-200 ring-1 ring-offset-1 py-1 px-2 text-sm inline-block ${renderColor(color, active)} ${className}`}>
      {children}
      </button>
  )
}