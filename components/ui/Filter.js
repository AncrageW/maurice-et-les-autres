export default function Filter ({children, className, color, active}) {


  const renderColor= (color, active) => {
    switch(color) {
      case 'cerulean': 
        switch(active) {
          case true: return'text-white bg-cerulean-500 border-cerulean-500';break
          case false: return'text-cerulean-800 hover:bg-cerulean-300 border-cerulean-500 active:text-white hover:text-white';break
        }
    }
  }

  return (
    <button className={`transition duration-200 border-r py-1 px-2 inline-block ${renderColor(color, active)} ${className}`}>
      {children}
      </button>
  )
}