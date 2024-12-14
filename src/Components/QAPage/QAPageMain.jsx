import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./QAPage.css";
import { SearchContext } from "./SearchContext"; // Import the context

const QAPageMain = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);

  // Pass search input and functions via context
  const searchContextValue = {
    searchInput,
    setSearchInput,
    currentMatchIndex,
    setCurrentMatchIndex,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      <div className="QAPageMain">
        {/* Search Input */}
        <div className="QAPageMainSearch">
          <div className="QAPageMainSearchCover">
            <div className="QAPageMainSearchWrapper">
              <input
                type="text"
                placeholder="Search for name, questions, or content..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="magBtn">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
              </button>
              <button
                disabled={currentMatchIndex === -1}
                style={{
                  cursor: currentMatchIndex === -1 ? "not-allowed" : "pointer",
                }}
                className="downArrowBtn"
              >
                <FontAwesomeIcon icon={faSortDown} className="searchIcon" />
              </button>
            </div>
          </div>
        </div>

        {/* Display Content */}
        <div className="QAPageMainContentWrapper">
          <div className="QAPageMainContent">
            <Outlet />
          </div>
          <div className="QAPageMenuContent">
            <h3>Our Statistics</h3>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default QAPageMain;
