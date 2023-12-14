interface ProjectCardProps {
  title: string;
  thumbnail: string;
  cta: string;
  className?: string;
}

const Showreel = ({ title, thumbnail, cta, className }: ProjectCardProps) => {
  return (
    <button className={`${className}`}>
      <div className="w-full flex justify-between">
        <div className="uppercase text-sm">
          <span className="pr-4">01.</span>{title}
        </div>
        <div className="uppercase text-sm opacity-40">
          [{cta}]
        </div>
      </div>
      <div className="mt-2 w-full aspect-[16/9] bg-black"></div>
    </button>
  );
};

export default Showreel;