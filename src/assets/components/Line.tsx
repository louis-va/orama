interface LineProps {
  className?: string;
}

const Line = ({ className }: LineProps) => {
  return (
    <div className={`${className} w-full px-4`}>
      <div className="w-full border-b border-black"></div>
    </div>
  );
};

export default Line;