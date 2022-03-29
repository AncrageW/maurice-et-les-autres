import { 
  MusicNoteIcon,  
 } from '@heroicons/react/outline'

export default function Footer () {
  return (
    <div className="lg:pl-60 pb-20 md:pb-0">
      <footer className='border-t border-slate-200 py-5 container px-4 text-slate-800 md:grid md:grid-cols-3 space-y-8 md:space-y-0'>
          <div className="flex text-slate-800 text-sm">
            <div className="mr-4">Facebook</div>
            <div className="mr-4">Instagram</div>
          </div>
          <div className='text-sm text-slate-800'>
            <audio
              className='max-w-full pointer-events-auto mb-4 md:hidden'
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