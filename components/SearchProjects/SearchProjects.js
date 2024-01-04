"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Results } from "./Results";

export const SearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const search = async () => {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
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
