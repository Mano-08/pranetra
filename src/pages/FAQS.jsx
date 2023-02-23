import React from "react";
import Footer from "../components/Footer";
import data from "../data";
import downArrow from "../images/icons/downArrow.svg";
import header from "../images/faqHeader.png";

function FAQS() {
  function handleClick(event) {
    const parent = event.target.parentNode.parentNode;
    console.log(parent);
    parent.classList.toggle("activeQ");
  }
  function FAQ(props) {
    return (
      <div className="faq">
        <div className="question">
          <span style={{ display: "flex", flexDirection: "row" }}>
            <h3
              style={{
                marginRight: "1vw",
              }}
            >
              Q.{" "}
            </h3>
            <h3>{props.ques}</h3>
          </span>

          <img alt="" src={downArrow} onClick={handleClick} />
        </div>
        <div className="answer">
          <p
            style={{
              marginRight: "1vw",
            }}
          >
            A.{" "}
          </p>
          <p>{props.ans}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section id="faqHeader">
        <img src={header} alt="" />
        <p>Frequently Asked Questions</p>
      </section>
      <div id="faqs">
        {data.questions.map((element, index) => {
          return <FAQ key={index} ques={element.ques} ans={element.ans} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default FAQS;
