import { ProjectCard } from "./ProjectCard";

export const Results = ({ projects }) => {
  return (
    <div className="max-w-5xl w-full px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center my-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.databaseId}
          title={project.title}
          destination={project.uri}
          image={project.featuredImage?.node?.sourceUrl}
          category={project.projectFeatures?.category}
          location={project.projectFeatures?.location}
          date={project.projectFeatures?.date}
        />
      ))}
    </div>
  );
};
