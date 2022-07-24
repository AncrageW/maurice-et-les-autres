import Link from "next/link"
import Image from "next/image"
import { Tag } from "../ui"
export default function Card ({item, tag = false, key}) {

  const renderTagName = (tags) => {
    const filtered = tags.filter(el => {
      if (el.slug !== "spectacles") {
        return el.name
      }
    })
    console.log(filtered[0]?.name)
    return filtered[0]?.name
  }
  return (
    <Link href={`/spectacles/${item.slug}`} key={key}>
      <a className='h-full group'>
        <article className='h-full flex flex-col justify-between'>
          <main className='mb-4 relative'>
            {tag && renderTagName(item.tags) && (
              <Tag 
                color={renderTagName(item.tags) === "En tournée" ? "cerulean" : "turquoiseGreen"} 
                className="absolute right-0 z-10 mb-1">
                  {renderTagName(item.tags)}
              </Tag>
              )
            }
            <div className='relative h-[10rem] lg:h-[16rem] w-full overflow-hidden mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-100'>
              <Image 
                src={item.feature_image} 
                alt={item.title} 
                layout="fill"
                className='object-cover object-center min-w-full'>
              </Image> 
            </div>
            <h3 className='text-cerulean-800 text-xl lg:text-2xl mb-3'>{item.title}</h3>
            <p className='text-gray-600'>{item.excerpt}</p>
          </main>
          <div className='max-w-0 transition-max-width duration-400 group-hover:max-w-full h-0.5  bg-gradient-to-r from-cerulean-400 via-turquoiseGreen-300 to-cerulean-400'></div>
        </article>

      </a>
    </Link>
  )
}