import React, { useState, useRef } from "react";
import "./QAPage.css";
import QAPageCard from "./QAPageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const QAPageMain = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);

  // Data for QAPageCards
  const data = [
    {
      id: "1",
      name: "John Doe",
      questions:
        "How do native speakers tell I’m foreign based on my English alone?",
      para: `I’m a 19-year-old student from Malaysia. I’ve been introduced to the 
             language at a very young age and I’m capable of conducting any type 
             of conversation. However, some of my English-speaking friends on the 
             internet didn’t take too long to figure I’m not a native speaker. Why is that?`,
    },
    {
      id: "2",
      name: "Jane Smith",
      questions: "Why is pronunciation important when learning English?",
      para: `As a language learner, I struggle with pronunciation despite understanding 
             grammar and vocabulary. I’d like to know how much of an impact 
             pronunciation has on fluency and being understood.`,
    },
    {
      id: "3",
      name: "Alice Johnson",
      questions:
        "What are some effective strategies for learning new vocabulary?",
      para: `I am constantly trying to expand my vocabulary, but I often forget 
              new words shortly after learning them. Can you recommend effective 
              techniques to retain and use new vocabulary in conversations?`,
    },
  ];

  // Create refs for scrolling
  const cardRefs = useRef(data.map(() => React.createRef()));

  const handleSearch = () => {
    // Find all cards that match the search input
    const matchingIndexes = data
      .map((item, index) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.questions.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.para.toLowerCase().includes(searchInput.toLowerCase())
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    if (matchingIndexes.length > 0) {
      setCurrentMatchIndex(0);
      scrollToMatch(matchingIndexes[0]);
    } else {
      alert("No matching content found!");
    }
  };

  const scrollToMatch = (index) => {
    cardRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleNextMatch = () => {
    const matchingIndexes = data
      .map((item, index) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.questions.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.para.toLowerCase().includes(searchInput.toLowerCase())
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    if (matchingIndexes.length > 0) {
      const nextIndex = (currentMatchIndex + 1) % matchingIndexes.length;
      setCurrentMatchIndex(nextIndex);
      scrollToMatch(matchingIndexes[nextIndex]);
    }
  };

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
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
            <button onClick={handleSearch} className="magBtn">
              {" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
              ></FontAwesomeIcon>
            </button>
            <button
              onClick={handleNextMatch}
              disabled={currentMatchIndex === -1}
              style={{
                cursor: currentMatchIndex === -1 ? "not-allowed" : "pointer",
              }}
              className="downArrowBtn"
            >
              <FontAwesomeIcon
                icon={faSortDown}
                className="searchIcon"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>

      {/* Display Cards */}
      <div className="QAPageMainContentWrapper">
        <div className="QAPageMainContent">
          {data.map((item, index) => (
            <div
              key={item.id}
              ref={cardRefs.current[index]}
              style={{ marginBottom: "20px" }}
            >
              <QAPageCard
                name={highlightText(item.name, searchInput)}
                questions={highlightText(item.questions, searchInput)}
                para={highlightText(item.para, searchInput)}
              />
            </div>
          ))}
        </div>
        <div className="QAPageMenuContent">
          <h3>Our Statistics</h3>
        </div>
      </div>
    </div>
  );
};

export default QAPageMain;
