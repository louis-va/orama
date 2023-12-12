import { useParams } from 'react-router-dom';

const Project = () => {
  const { project_name } = useParams();

  return (
    <>
      <p className="text-2xl">Project: {project_name}</p>
    </>
  )
}

export default Project