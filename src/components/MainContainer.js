import React, { useState } from "react";
import Header from "./Header";
import Overview from "./Overview";
import "../styles/overview.scss";
import Assesments from "./Assesments";
import AddAssessment from "./AddAssessment";

let initialAssesments = [
  {
    title: "Math Assessment",
    date: `20 April 2023`,
    duration: "00",
    questions: "00",
    user: ["LP"],
  },
  {
    title: "Math Assessment",
    date: `20 April 2023`,
    duration: "00",
    questions: "00",
    user: ["LP", "LP", "LP"],
  },
];

const MainContainer = () => {
  const [assesments, setAssesments] = useState(initialAssesments);

  const [addAssessments, setAddAssessments] = useState(false);

  function toggleAddAssessments() {
    return addAssessments ? setAddAssessments(false) : setAddAssessments(true);
  }

  return (
    <section className="main-container">
      <Header />

      {addAssessments ? (
        <AddAssessment toggleAddAssessments={toggleAddAssessments} />
      ) : (
        ""
      )}

      <main className="main grid">
        <Overview />
        <Assesments
          toggleAddAssessments={toggleAddAssessments}
          assesments={assesments}
          setAssesments={setAssesments}
        />
      </main>
    </section>
  );
};

export default MainContainer;
