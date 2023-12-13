interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    thumbnail: string;
  }
  number: string;
  cta: string;
  className?: string;
}

const ProjectCard = ({ project, number, cta, className }: ProjectCardProps) => {
  return (
    <a className={`${className}`} href={`/projects/${project.id}`}>
      <div className="w-full flex justify-between">
        <div className="uppercase text-base">
          <span className="pr-4">{number}.</span>{project.title}
        </div>
        <div className="uppercase text-base">
          [{cta}]
        </div>
      </div>
      <div className="mt-2 w-full aspect-[4/3] bg-black"></div>
    </a>
  );
};

export default ProjectCard;