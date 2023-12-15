interface ShwreelProps {
  title: string;
  thumbnail: string;
  type: string;
  className?: string;
}

const Showreel = ({ title, thumbnail, type, className }: ShwreelProps) => {
  return (
    <button className={`${className}`} cursor-focus='true'>
      <div className="w-full flex justify-between pointer-events-none">
        <div className="uppercase text-sm">
          <span className="pr-4">01.</span><span cursor-target='true'>{title}</span>
        </div>
        <div className="uppercase text-sm opacity-40">
          [{type}]
        </div>
      </div>
      <div className="mt-2 w-full aspect-[16/9] bg-black pointer-events-none"></div>
    </button>
  );
};

export default Showreel;