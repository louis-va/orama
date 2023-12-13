import { ReactNode } from 'react';

interface TitleProps {
  heading: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

const Title = ({ heading, children, className }: TitleProps) => {
  const Heading = heading

  return (
    <Heading className={`${className} text-sm font-bold uppercase`}>
      {children}
    </Heading>
  );
};

export default Title;