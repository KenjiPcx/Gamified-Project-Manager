import React from "react";

interface ListHeaderProps {
  pageTitle: string;
  types: string[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

function ListHeader({ pageTitle, types, setSearch, setType }: ListHeaderProps) {

  return (
    <div className="header">
      <div className="label">{pageTitle}</div>
      <form className="searchbar">
          <input
            type="text"
            placeholder="Search"
            className="search-text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="search-type"
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((type, key) => {
              return <option key={key}>{type}</option>;
            })}
          </select>
      </form>
    </div>
  );
}

export default ListHeader;
