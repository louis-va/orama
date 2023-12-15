interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    thumbnail: string;
    type: string;
  }
  index: string;
  className?: string;
}

const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  return (
    <a className={`${className} py-0.5`} href={`/projects/${project.id}`} cursor-focus='true'>
      <div className="w-full flex justify-between pointer-events-none">
        <div className="uppercase text-sm">
          <span className="pr-4">{index}.</span><span cursor-target='true'>{project.title}</span>
        </div>
        <div className="uppercase text-sm opacity-40">
          [{project.type}]
        </div>
      </div>
      <div className="mt-2 w-full aspect-[4/3] bg-black pointer-events-none"></div>
    </a>
  );
};

export default ProjectCard;