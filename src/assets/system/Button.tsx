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
    className: `${className} block text-base uppercase`
  };
  
  if (type==='button') {
    return (
      <button {...props}>
        {children}
      </button>
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
      <a {...linkProps}>
        {children}
        {external && <Icon name='chevron' className='inline-block ml-2 mb-1 w-2 h-2' />}
      </a>
    );
  }
};

export default Button;