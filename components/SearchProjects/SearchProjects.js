import { useEffect, useState } from "react";
import { Results } from "./Results";

export const SearchProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const search = async () => {
      const response = await fetch("/api/search");
      const data = await response.json();
      console.log("SEARCH DATA: ", data);
      setProjects(data.projects);
    };
    search();
  }, []);
  return (
    <div>
      <Results projects={projects} />
    </div>
  );
};
