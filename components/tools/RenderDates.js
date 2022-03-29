
import { ArrowSmRightIcon } from "@heroicons/react/outline"
export default function RenderDates ({item}) {
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <>
     {item && item.calendar && (
        <div className='mb-3 flex items-center'>
          <p>
            {item.calendar[1] && <span>du </span>}
            {new Date(item.calendar[0].date).toLocaleDateString('fr-FR', options)}
          </p>
          {item.calendar[1] && ( 
            <div className='flex items-center'>
              <ArrowSmRightIcon className='w-4 mx-1'></ArrowSmRightIcon>
              au {new Date(item.calendar[item.calendar.length-1].date).toLocaleDateString('fr-FR', options)}
            </div>)}
        </div>
      )}
    </>
  )
}