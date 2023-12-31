import React, { ReactNode } from 'react';
import Icon from './Icon';

interface ButtonProps {
  type: 'button' | 'link';
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

const Button = ({ type, href, external, children, className }: ButtonProps) => {
  
  const props = {
    'cursor-focus': 'true',
    className: `${className} inline-block text-sm uppercase`
  };
  
  if (type==='button') {
    return (
      <div>
        <button {...props}>
          {children}
        </button>
      </div>
    );
  } 
  
  else if (type==='link') {
    let linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      ...props,
      href: href
    };

    if (external) {
      linkProps = {
        ...linkProps,
        target: '_blank',
        rel: 'noopener noreferrer'
      };
    }

    return (
      <div>
        <a {...linkProps}>
          {children}
          {external && <Icon name='chevron' className='pointer-events-none inline-block ml-2 mb-1 w-2 h-2' />}
        </a>
      </div>
    );
  }
};

export default Button;