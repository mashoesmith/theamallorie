import { ProjectCard } from "./ProjectCard";

export const Results = ({ projects }) => {
  return (
    <div className="max-w-5xl w-auto mx-auto grid grid-cols-2 gap-5 justify-items-center my-6 h-100">
      {projects.map((project) => (
        <ProjectCard
          key={project.databaseId}
          title={project.title}
          destination={project.uri}
          image={project.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
