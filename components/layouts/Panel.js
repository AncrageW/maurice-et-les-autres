import { 
  MusicNoteIcon,  
 } from '@heroicons/react/outline'


export default function Panel () {
  return (
    <div className='panel hidden md:block'>
      <div className='absolute z-20 w-60 border-r border-slate-200 h-screen pointer-events-none'>
        <div className='relative h-full'>
          <div className='absolute inset-0 lg:bg-white lg:opacity-30'></div>
          <div className='sticky top-[4rem] pt-10 pb-20 text-slate-800'>
            <div className='mb-10 px-4'>
              <audio
                  className='max-w-full pointer-events-auto'
                  controls
                  src="https://storage.googleapis.com/mauriceetlesautres/audio/music-for-a-while.mp3">
                      <MusicNoteIcon className='w-5'></MusicNoteIcon>
              </audio>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}