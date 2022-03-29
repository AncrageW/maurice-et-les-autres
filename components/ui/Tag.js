export default function Tag ({children, color}) {

  const renderColor = (color) => {
    switch (color) {
      case 'cyan': return 'bg-cyan-50 text-cyan-700'; break
      case 'violet': return 'bg-violet-100 text-violet-700'; break
      case 'blue': return 'bg-blue-100 text-blue-700'; break
    }
  }

  return (
    <div className={`py-1 px-3 text-sm inline-block mb-2 ${renderColor(color)}`}>{children}</div>
  )
} 