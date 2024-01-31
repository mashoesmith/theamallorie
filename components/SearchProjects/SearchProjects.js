"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import queryString from "query-string";
import { Filters } from "./Filters/Filters";

export const SearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const router = useRouter();
  const pageSize = 6;
  const pathName = usePathname();

  const search = async () => {
    const { page, illustration, painting, dollsHouse, stationery } =
      queryString.parse(window.location.search);
    const filters = {};
    if (illustration === "true") {
      filters.illustration = true;
    }
    if (painting === "true") {
      filters.painting = true;
    }
    if (dollsHouse === "true") {
      filters.dollsHouse = true;
    }
    if (stationery === "true") {
      filters.stationery = true;
    }
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
      // headers: {
      //   "content-type": "application/json",
      // },
    });
    const data = await response.json();
    setProjects(data.projects);
    setTotalResults(data.total);
    console.log("SEARCH DATA: ", data);
  };

  const handlePageClick = async (pageNumber) => {
    const { illustration, painting, dollsHouse, stationery } =
      queryString.parse(window.location.search);
    router.push(
      `${pathName}?page=${pageNumber}&illustration=${
        illustration === "true"
      }&painting=${painting === "true"}&dollsHouse=${
        dollsHouse === "true"
      }&stationery=${stationery === "true"}`
    );
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = async ({
    illustration,
    painting,
    dollsHouse,
    stationery,
  }) => {
    console.log("FILTERS ", illustration, painting, dollsHouse, stationery);

    router.push(
      `${pathName}?page=1&illustration=${!!illustration}&painting=${!!painting}&dollsHouse=${!!dollsHouse}&stationery=${!!stationery}`
    );
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results projects={projects} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};
