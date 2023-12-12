import Title from '../system/Title';
import Paragraph from '../system/Paragraph';
import Icon from '../system/Icon';
import Button from '../system/Button';

const Intro = () => {
  return (
    <section>
      <div className='layout-grid pt-12'>
        <Title heading='h1' className='col-span-4 md:col-span-1'>Intro</Title>
        <Paragraph className='col-span-4 sm:col-span-3'>
          Nous sommes <em className='font-bold italic'>Orama</em>, 
          un studio de production multi-disciplinaire spécialisé dans la création d'histoires visuelles captivantes.
        </Paragraph>
      </div>

      <div className='layout-grid pt-16'>
        <div className='flex items-end col-span-2 lg:col-span-4'>
          <Icon name='l-shape' className='w-4 h-4' />
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <Button className='mb-1' type='link' href='https://www.myspace.com' external={true}>MySpace</Button>
          <Button className='my-1' type='link' href='https://www.instagram.com' external={true}>Instagram</Button>
          <Button className='mt-1' type='link' href='https://www.vimeo.com' external={true}>Vimeo</Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;