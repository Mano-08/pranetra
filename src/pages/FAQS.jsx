import React from "react";
import Footer from "../components/Footer";
import data from "../data";
import downArrow from "../images/icons/downArrow.svg";

function FAQS() {
  function QuestionBlock(props) {
    return (
      <div className="faq" key={props.key}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="question">{props.ques}</div>
          <img className="faqArrowscdd" src={downArrow} alt="arrow_down" />
        </div>
        <div className="answer">
          <p>{props.ans}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      {data.questions.map((ele, index) => {
        return <QuestionBlock key={index} ques={ele.ques} ans={ele.ans} />;
      })}
      <Footer />
    </>
  );
}
export default FAQS;
