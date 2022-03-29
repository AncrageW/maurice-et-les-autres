export default function Divider ({children, className}) {
  return (
    <div className="flex items-center mb-2 text-slate-900 after:content-[''] after:border-b after:border-slate-200 after:flex-1">
      <span className={`pr-2 ${className}`}>{children}</span>
      </div>
  )
}