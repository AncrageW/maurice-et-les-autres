
import { Container, Divider } from '../../components/ui'

export default function Contact () {
  return (
    <div>
        <Container className="pt-8 md:pt-24 pb-20">
        <h1 className="text-4xl md:text-6xl text-slate-800 mb-10">Contact</h1>
        <div className='mb-8'>
          <Divider className="text-xl">Siège Social</Divider>
          <p className='text-slate-900'>7, rue de la Borie</p>
          <p className='text-slate-900'>87100 Limoges</p>
        </div>
        <div className='mb-8'>
          <Divider className="text-xl">Adresse de correspondance</Divider>
          <p className='text-slate-900'>C/O ASTASE</p>
          <p className='text-slate-900'>35 rue Chanzy</p>
          <p className='text-slate-900'>75 011 Paris</p>
        </div>
        <div className='mb-8'>
          <Divider className="text-xl">Administration, production</Divider>
          <p className='text-slate-900'>Léonie Lenain</p>
          <a href="mailto:leonie@mauriceetlesautres.com">
            <p className='text-slate-900'>leonie@mauriceetlesautres.com</p>
            </a>
          <a href="tel:+33608735604">
            <p className='text-slate-900'>06 08 73 56 04</p>
          </a>
        </div>
        <div className='mb-8'>
          <Divider className="text-xl">Diffusion, développement</Divider>
          <p className='text-slate-900'>Véronique Atlan</p>
          <a href="mailto:veronique@mauriceetlesautres.com">
            <p className='text-slate-900'>veronique@mauriceetlesautres.com</p>
            </a>
          <a href="tel:+33681914497">
            <p className='text-slate-900'>06 81 91 44 97</p>
          </a>
        </div>
        <div>
          <Divider className="text-xl">Direction artistique</Divider>
          <p className='text-slate-900'>Jeanne Desoubeaux</p>
          <a href="mailto:jeanne@mauriceetlesautres.com">
            <p className='text-slate-900'>jeanne@mauriceetlesautres.com</p>
            </a>
          <a href="tel:+33786844323">
            <p className='text-slate-900'>07 86 84 43 23</p>
          </a>
        </div>
        </Container>
   
    </div>

  )
}

