import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [stationery, setStationery] = useState(false);
  const [painting, setPainting] = useState(false);
  const [dollsHouse, setDollsHouse] = useState(false);
  const [illustration, setIllustration] = useState(false);

  // console.log(
  //   "FILTERS ",
  //   "illustration: ",
  //   illustration,
  //   "painting: ",
  //   painting,
  //   "dollshouse: ",
  //   dollsHouse,
  //   "stationery: ",
  //   stationery
  // );

  const handleSearch = () => {
    onSearch({
      stationery,
      painting,
      dollsHouse,
      illustration,
    });
  };

  useEffect(() => {
    const {
      illustration: illustrationInitial,
      painting: paintingInitial,
      dollsHouse: dollsHouseInitial,
      stationery: stationeryInitial,
    } = queryString.parse(window.location.search);

    setIllustration(illustrationInitial === "true");
    setPainting(paintingInitial === "true");
    setDollsHouse(dollsHouseInitial === "true");
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
                checked={painting}
                onChange={() => setPainting((value) => !value)}
              />
              <span className="pl-2">Paintings</span>
            </label>
          </div>
          <div>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={dollsHouse}
                onChange={() => setDollsHouse((value) => !value)}
              />
              <span className="pl-2">Dolls Houses</span>
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
