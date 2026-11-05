import React from "react";
import "./Quiz.css";
import { useState } from "react";
import data from "../data/data";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);

  function checkans(e, ans) {
    if (questions.answer === ans) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }
  function handleNext() {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  }
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}.{data[index].question}
      </h2>
      <ul>
        {data[index].options.map((option, i) => (
          <li onClick={(e) => checkans(e, option)} key={i}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
      <div className="index">
        {index + 1} of {data.length} questions
      </div>
    </div>
  );
}
