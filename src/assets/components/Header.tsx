import { useState, useEffect } from 'react';

import Line from "./Line";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',  
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <div className='layout-grid py-3 mb-16'>
          <div className='col-span-1 text-sm uppercase'>Bruxelles</div>
          <div className='col-span-1 text-sm uppercase'>{currentTime}</div>
          <div className='col-span-2'></div>
          <div className='col-span-1 flex items-center'>
            <Button type='button' href='#'>Dark mode</Button>
          </div>
          <div className='col-span-1 flex items-center'>
            <Button type='link' href='/en'>English</Button>
          </div>
        </div>
        <nav className='layout-grid py-3'>
          <div className='col-span-3'>
            <a className='inline-block' href='#intro'>
              <Logo />
            </a>
          </div>
          <div className='col-span-1 flex items-center'>
            <Button type='link' href='#projects'>Projects</Button>
          </div>
          <div className='col-span-1 flex items-center'>
            <Button type='link' href='#infos'>Infos</Button>
          </div>
          <div className='col-span-1 flex items-center'>
            <Button type='link' href='#contact'>Contact</Button>
          </div>
        </nav>
      </div>
      {/* /Desktop */}

      {/* Mobile */}
      <nav className='layout-grid py-3 lg:hidden'>
        <div className='col-span-1'>
          <a className='inline-block' href='#intro'>
            <Logo />
          </a>
        </div>
        <div className='col-span-3 flex items-center justify-end'>
          <Button className='flex items-center gap-1' type='button'>
            <span className='text-xs opacity-40 pointer-events-none'>[+]</span> Menu
          </Button>
        </div>
      </nav>
      {/* /Mobile */}

      <Line />
    </header>
  );
};

export default Header;