import React from "react";
import "./QAPage.css";
import QAPageHeader from "./QAPageHeader";
import QAPageMain from "./QAPageMain";
import QAStatistics from "./QAStatistics";
const QAPage = () => {
  return (
    <div className="QAPageContainer">
      {/* <QAPageHeader /> */}
      <div className="QAPageWrapper">
        {" "}
        <QAPageMain />
        {/* <QAStatistics /> */}
      </div>
    </div>
  );
};

export default QAPage;
