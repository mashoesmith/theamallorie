import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [stationery, setStationery] = useState(false);
  const [miniature, setMiniature] = useState(false);
  const [illustration, setIllustration] = useState(false);

  const handleSearch = () => {
    onSearch({
      stationery,
      miniature,
      illustration,
    });
  };

  useEffect(() => {
    const {
      illustration: illustrationInitial,
      miniature: miniatureInitial,
      stationery: stationeryInitial,
    } = queryString.parse(window.location.search);

    setIllustration(illustrationInitial === "true");
    setMiniature(miniatureInitial === "true");
    setStationery(stationeryInitial === "true");
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 p-5">
      <div>
        <div className="flex-1">
          <div>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={miniature}
                onChange={() => setMiniature((value) => !value)}
              />
              <span className="pl-2">Miniatures</span>
            </label>
          </div>
          <div>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={stationery}
                onChange={() => setStationery((value) => !value)}
              />
              <span className="pl-2">Stationery</span>
            </label>
          </div>
          <div>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={illustration}
                onChange={() => setIllustration((value) => !value)}
              />
              <span className="pl-2">Illustrations</span>
            </label>
          </div>
          <div className="btn button" onClick={handleSearch}>
            Search
          </div>
        </div>
      </div>
    </div>
  );
};
