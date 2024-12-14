import React from "react";
import "./QAPage.css";
import { Link } from "react-router-dom";

const QAPageCard = (props) => {
  return (
    <div className="QAPageCard">
      <div className="QAPageCardLine" id={props.colorId}></div>
      <div className="QAPageCardCover">
        <div className="QAPageCardCover-content1">
          <div className="QAPageCardCover-item1">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1732629278~exp=1732632878~hmac=73e18bf7372e803e1b038e1bc286fa6101888f1beb6c59494f9d1038f72d228e&w=740"
              alt=""
            />
          </div>
          <div className="QAPageCardCover-item2">
            <div className="QAPageCardCover-innerItem1">
              <div className="QAPageCardCover-block1">
                <h3>{props.name}</h3>
              </div>
              <div className="QAPageCardCover-block2">Enlightened</div>
              <div className="QAPageCardCover-block3">
                <span>Asked</span>: April 19, 2024
              </div>
            </div>
            <div className="QAPageCardCover-innerItem2">
              <h2>
                <Link to={props.link}> {props.questions}</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="QAPageCardCover-content2">
          <p>{props.para}</p>
        </div>
        {/* <div className="QAPageCardCover-content3"></div> */}
      </div>
    </div>
  );
};

export default QAPageCard;
