import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="relative w-full max-w-screen-xl m-auto">
      {children}
    </div>
  );
};

export default Container;