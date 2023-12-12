interface IconProps {
  name: 'l-shape' | 'chevron';
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {

  const props = {
    className: `${className} flex-no-shrink fill-current`
  }
  
  switch(name) {
    case 'l-shape':
      return (
        <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 15.9999H18V17.9999H0V0L2 8.74224e-08V15.9999Z" fill="currentColor"/>
        </svg>
      );
    case 'chevron':
      return (
        <svg {...props} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.07107 7.60622L0 0.535156H7.07107V7.60622Z" fill="currentColor"/>
        </svg>
      );
  }
};

export default Icon;