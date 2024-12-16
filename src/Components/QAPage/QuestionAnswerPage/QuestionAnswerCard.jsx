import React from "react";
import { Link } from "react-router-dom";
import "./QuestionAnswerPage.css";
const QuestionAnswerCard = (props) => {
  return (
    <div className="questionAnswerCard-container">
      <div className="questionAnswerCard-cover">
        <div className="questionAnswerCard-coverContent1">
          <div className="questionAnswerCard-coverItem1">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1732629278~exp=1732632878~hmac=73e18bf7372e803e1b038e1bc286fa6101888f1beb6c59494f9d1038f72d228e&w=740"
              alt=""
            />
          </div>
          <div className="questionAnswerCard-coverItem2">
            <div className="questionAnswerCard-coverInnerItem1">
              <div className="questionAnswerCard-coverBlock2">Answered By</div>

              <div className="questionAnswerCard-coverBlock3">
                <span>Answered </span>: {props.date}
              </div>
            </div>
            <div className="questionAnswerCard-coverInnerItem2">
              <h2>
                <Link to={props.link}> {props.name}</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="questionAnswerCard-coverContent2">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
