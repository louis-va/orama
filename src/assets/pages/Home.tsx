import Cursor from "../components/Cursor"
import Container from "../components/Container"
import Background from "../components/Background"
import Header from "../components/Header"
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Line from '../components/Line';
import Icon from '../components/Icon';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <>
      <Cursor />
      <Container>
        <Background />
        <Header />

        <section id='intro'>
          <div className='layout-grid pt-12'>
            <Title heading='h2' className='col-span-4 md:col-span-1'>Intro</Title>
            <Paragraph className='col-span-4 sm:col-span-3'>
              Nous sommes <em className='font-bold italic underline decoration-dotted' cursor-focus='true'>Orama</em>, 
              un studio de production multi-disciplinaire spécialisé dans la création d'histoires visuelles captivantes.
            </Paragraph>
          </div>

          <div className='layout-grid pt-40'>
            <div className='flex items-end col-span-2 lg:col-span-4'>
              <Icon name='l-shape' className='w-4 h-4' />
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <Button className='mb-1' type='link' href='https://www.myspace.com' external={true}>MySpace</Button>
              <Button className='my-1' type='link' href='https://www.instagram.com' external={true}>Instagram</Button>
              <Button className='mt-1' type='link' href='mailto:contact@orama-prod.be' external={true}>Contact</Button>
            </div>
          </div>
        </section>

        <section id='projects'>
          <Line className='mt-6' />
          <div className='layout-grid pt-12'>
            <Title heading='h2' className='col-span-4 md:col-span-6'>Projects</Title>
          </div>
          
          <div className='layout-grid pt-12'>
            <ProjectCard 
              className='col-span-6 md:col-span-4'
              project={{'id': 'jumpers', 'title': 'Jumpers', 'thumbnail': ''}} 
              number='01' 
              cta='lire'
            />
          </div>
        </section>

      </Container>
    </>
  )
}

export default Home