import React from "react";
import QAPageCard from "../QAPageCard";
import QuestionAnswerCard from "./QuestionAnswerCard";

const QuestionAnswer1 = () => {
  return (
    <div className="questionAnswer-container">
      <QAPageCard
        name="John Doe"
        questions="How do native speakers tell I’m foreign based on my English alone?"
        para="I’m a 19-year-old student from Malaysia. I’ve been introduced to the 
             language at a very young age and I’m capable of conducting any type 
             of conversation. However, some of my English-speaking friends on the 
             internet didn’t take too long to figure I’m not a native speaker. Why is that?"
      />{" "}
      <div>
        <h2>Reply</h2>
      </div>
      <div className="questionAnswer-container">
        <QuestionAnswerCard
          date="2 day ago"
          name="Olivia"
          answer="Native speakers often detect non-native accents through slight differences in pronunciation, intonation, or rhythm. Even subtle errors in grammar, vocabulary usage, or idiomatic expressions can stand out, as native speakers are accustomed to hearing specific patterns."
        />{" "}
      </div>
    </div>
  );
};

export default QuestionAnswer1;
