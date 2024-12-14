import React, { useContext } from "react";
import { SearchContext } from "./SearchContext"; // Ensure you have created and exported this context
import QAPageCard from "./QAPageCard";

const Questions = () => {
  const { searchInput } = useContext(SearchContext); // Access the search input from context

  const data = [
    {
      id: "1",
      name: "John Doe",
      link: "/q-and-a/question1",
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
      link: "/q-and-a/question1",
      questions: "Why is pronunciation important when learning English?",
      para: `As a language learner, I struggle with pronunciation despite understanding 
             grammar and vocabulary. I’d like to know how much of an impact 
             pronunciation has on fluency and being understood.`,
    },
    {
      id: "3",
      name: "Alice Johnson",
      link: "/q-and-a/question1",
      questions:
        "What are some effective strategies for learning new vocabulary?",
      para: `I am constantly trying to expand my vocabulary, but I often forget 
              new words shortly after learning them. Can you recommend effective 
              techniques to retain and use new vocabulary in conversations?`,
    },
  ];

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.questions.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.para.toLowerCase().includes(searchInput.toLowerCase())
  );
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
    <>
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <QAPageCard
              name={item.name}
              link={item.link}
              questions={highlightText(item.questions, searchInput)}
              para={highlightText(item.para, searchInput)}
            />
          </div>
        ))
      ) : (
        <p>No results found for "{searchInput}".</p>
      )}
    </>
  );
};

export default Questions;
