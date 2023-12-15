import Cursor from "../components/Cursor"
import Container from "../components/Container"
import Background from "../components/Background"
import Header from "../components/Header"
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Line from '../components/Line';
import Icon from '../components/Icon';
import Button from '../components/Button';
import Showreel from '../components/Showreel';
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const projects = [
    { id: 'jumpers', title: 'Jumpers', thumbnail: '', type: 'Long métrage' },
    { id: 'street-photo', title: 'Street photo', thumbnail: '', type: 'Photos' },
    { id: 'interstellar', title: 'Interstellar', thumbnail: '', type: 'Musique' },
    { id: 'darkroom', title: 'Darkroom', thumbnail: '', type: 'Photos' },
    { id: 'forest', title: 'Forest', thumbnail: '', type: 'Court métrage' },
    { id: 'eclipse', title: 'Eclipse', thumbnail: '', type: 'Clip' }
  ];

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

          <div className='layout-grid pt-32'>
            <div className='flex items-end col-span-1'>
              <Icon name='l-shape' className='w-4 h-4' />
            </div>
            <div className="col-span-1 lg:col-span-4"></div>
            <div className='col-span-2 lg:col-span-1'>
              <Button className='mb-1' type='link' href='https://www.myspace.com' external={true}>MySpace</Button>
              <Button className='my-1' type='link' href='https://www.instagram.com' external={true}>Instagram</Button>
              <Button className='mt-1' type='link' href='mailto:contact@orama-prod.be' external={true}>Email</Button>
            </div>
          </div>
        </section>

        <section id='projects'>
          <Line className='mt-6' />
          <div className='layout-grid pt-12'>
            <Title heading='h2' className='col-span-4 md:col-span-6'>Projects</Title>
          </div>
          
          <div className='layout-grid pt-12'>
            <Showreel 
              className='col-span-4'
              title='Showreel'
              thumbnail=''
              type='Vidéo'
            />
          </div>

          <div className='layout-grid pt-12'>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                className='col-span-4 md:col-span-2'
                project={project}
                index={`0${index + 2}`}
              />
            ))}
          </div>
        </section>

      </Container>
    </>
  )
}

export default Home