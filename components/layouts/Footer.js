import { 
  MusicNoteIcon,  
 } from '@heroicons/react/outline'

export default function Footer () {
  return (
    <div className='pb-[4rem] lg:pb-0'>
      <footer className='border-t border-slate-200 py-5 px-4 text-slate-700 grid lg:grid-cols-3 gap-6 lg:gap-10'>
          <div className="flex text-slate-800 text-sm">
            
            <div className="mr-4">
              <a href="https://www.facebook.com/mauriceetlesautres/" target="_blank">
                Facebook
              </a>
            </div>
            <div className="mr-4">
              <a href="https://www.instagram.com/mauriceetlesautres/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
          <div className='text-sm text-slate-800'>
            <audio
              className='max-w-full pointer-events-auto mb-4'
              controls
              src="https://storage.googleapis.com/mauriceetlesautres/audio/music-for-a-while.mp3">
                  <MusicNoteIcon className='w-5'></MusicNoteIcon>
              </audio>
            <MusicNoteIcon className='w-5 text-slate-800'></MusicNoteIcon>
             Music for a while - Purcell <br></br> Martial Pauliat & Jérémie Arcache
          </div>
          <div className='text-slate-800 text-sm'>
            Maurice et les autres <br></br>
            Association Loi 1901 <br></br>
            Siège social : 7 rue de la Borie, 87 100 Limoges <br></br>
            N°SIRET : 827 853 201 000 24 <br></br>
            Code APE : 9001Z
          </div>
      </footer>
    </div>
  )
}