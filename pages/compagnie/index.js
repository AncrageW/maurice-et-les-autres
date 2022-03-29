
import Link from 'next/link'
import Image from 'next/image'
import { getCompagnie } from '../../lib/posts'
import { Container, Heading, Button } from '../../components/ui'

export default function Compagnie ({companies}) {
  const presentation = companies.filter(el => el.slug === 'presentation')
  const members = companies.filter(el => el.slug === 'membres')
  const adhesion = companies.filter(el => el.slug === 'adhesions')
  return (
    <div className="pb-20">
         <Container className="pt-6 md:pt-24">
          <h1 className="text-4xl md:text-6xl text-slate-800 mb-6">La compagnie</h1>
        </Container>
        <div className='h-[30rem] relative mb-10'>
          <Image
          src="https://storage.googleapis.com/mauriceetlesautres/compagnie/salut_compagnie.png" 
          alt="La compagnie" 
          className='object-cover object-center min-h-full'
          layout="fill">

          </Image>
     

        </div>

        <Heading className="container-main">Maurice et les autres</Heading>
        <div dangerouslySetInnerHTML={{ __html: presentation[0].html }} className='ghost-spectacle'/>
        <div className='lg:ml-60 relative h-[30rem] my-10'>
          <Image
            src="https://mauriceetlesautres.com/content/images/2021/07/compagnie_bar.jpeg" 
            alt="La compagnie" 
            className="object-cover object-center min-h-full"
            layout="fill">

          </Image>

        </div>
        <div className='mb-20'>
          <Heading className="container-main">Adhésion</Heading>
          <div dangerouslySetInnerHTML={{ __html: adhesion[0].html }} className='ghost-spectacle'/>
          <div className='container-main mt-4'>
            <Link href="/contact/">
              <a>
                <Button color="blue">Nous contacter</Button>
              </a>
            </Link>
          </div>
        </div>
        <Heading className="container-main">Membres</Heading>
        <div dangerouslySetInnerHTML={{ __html: members[0].html }} className='ghost-spectacle'/>
    </div>
  )
}

export async function getStaticProps(context) {
  const companies = await getCompagnie()

  if (!companies) {
    return {
      notFound: true,
    }
  }

  return {
    props: { companies }
  }
}