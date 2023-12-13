import { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={`${className} text-base leading-6`}>
      {children}
    </p>
  );
};

export default Paragraph;