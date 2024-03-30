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
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pageSize = 6;
  const pathName = usePathname();

  useEffect(() => {
    const currentPageFromUrl = new URLSearchParams(window.location.search).get(
      "page"
    );
    setCurrentPage(parseInt(currentPageFromUrl) || 1);
  }, []);

  const search = async () => {
    const { page, illustration, miniature, stationery } = queryString.parse(
      window.location.search
    );
    const filters = {};
    if (illustration === "true") {
      filters.illustration = true;
    }
    if (miniature === "true") {
      filters.miniature = true;
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
    setCurrentPage(pageNumber);
    const { illustration, miniature, stationery } = queryString.parse(
      window.location.search
    );
    router.push(
      `${pathName}?page=${pageNumber}&illustrations=${
        illustration === "true"
      }&miniatures=${miniature === "true"}&stationery=${stationery === "true"}`
    );
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = async ({ illustration, miniature, stationery }) => {
    // console.log("FILTERS ", illustration, painting, miniatures, stationery);

    router.push(
      `${pathName}?page=1&illustrations=${!!illustration}&miniatures=${!!miniature}&stationery=${!!stationery}`
    );
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results projects={projects} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
        activePage={currentPage}
      />
    </div>
  );
};
