export default function Button ({children, className, color}) {

  const renderColor = (color) => {
    switch (color) {
      case 'cerulean': return 'text-white bg-cerulean-400 hover:bg-cerulean-600 focus:ring focus:ring-cerulean-200'; break
      case 'turquoiseGreen': return 'text-white bg-turquoiseGreen-500 hover:bg-turquoiseGreen-600 focus:ring focus:ring-turquoiseGreen-200'; break
    }
  }


  return (
    <button className={`${renderColor(color)} flex items-center justify-center px-2.5 py-1.5 rounded-sm ${className}`}>
      {children}
    </button>
  )
}