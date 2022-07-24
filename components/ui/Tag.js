export default function Tag ({children, color, className}) {

  const renderColor = (color) => {
    switch (color) {
      case 'cerulean': return 'bg-cerulean-50 text-cerulean-500'; break
      case 'turquoiseGreen': return 'bg-turquoiseGreen-50 text-turquoiseGreen-500'; break
    }
  }

  return (
    <div className={`py-1 px-3 text-sm inline-block ${renderColor(color)} ${className}`}>
      {children}
    </div>
  )
} 